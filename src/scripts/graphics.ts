import * as THREE from 'three'
import { WebGLRendererParameters } from 'three'
// eslint-disable-next-line sort-imports
import WebGL from 'three/examples/jsm/capabilities/WebGL.js'

/**
 * Manage 3D graphics.
 */
export default class Graphics {
  static renderer: THREE.WebGLRenderer;
  static sceneInfos: Set<[THREE.Scene, THREE.PerspectiveCamera, HTMLElement]> =
    new Set();
  readonly #canvas: HTMLCanvasElement;

  constructor(canvas: HTMLCanvasElement) {
    this.#canvas = canvas;

    // Create the renderer
    Graphics.renderer = new THREE.WebGLRenderer({
      canvas: this.#canvas,
      antialias: true,
      alpha: true,
      physicallyCorrectLights: true,
    } as WebGLRendererParameters);

    // Create background
    this.#createBackground();

    // Bind renderer resize
    this.#resizeRendererToDisplaySize();
    window.addEventListener(
      "resize",
      this.#resizeRendererToDisplaySize.bind(this)
    );

    // Start animation if WebGL is available
    if (WebGL.isWebGLAvailable()) {
      requestAnimationFrame(this.#render.bind(this));
    }
  }

  static makeScene(element: HTMLElement) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      10
    );
    camera.position.z = 5;

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(-1, 2, 4);
    scene.add(light);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshPhongMaterial({ color: "magenta" });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    Graphics.sceneInfos.add([scene, camera, element]);
  }

  /**
   * Create the background graphic
   * @private
   */
  #createBackground() {
    // Create scene and camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Setup scrolling
    window.addEventListener("scroll", () => {
      const url = window.location.href;
      if (url.substring(url.length - 17) === "honors-portfolio/") {
        camera.position.y = (-window.scrollY / window.innerHeight) * 7.7;
      }
    });

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(3, 3, 10);
    scene.add(ambientLight);
    scene.add(directionalLight);

    // Add particles
    const particlesCount = 150;
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = 7.5 * 0.5 - Math.random() * 7.5 * 3;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      color: "#ffeded",
      sizeAttenuation: true,
      size: 0.03,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Register this scene and camera
    Graphics.sceneInfos.add([scene, camera, this.#canvas]);
  }

  /**
   * Resize the renderer and any cameras on window size change
   * @private
   */
  #resizeRendererToDisplaySize() {
    const width = (this.#canvas.clientWidth * window.devicePixelRatio) | 0;
    const height = (this.#canvas.clientHeight * window.devicePixelRatio) | 0;
    if (this.#canvas.width !== width || this.#canvas.height !== height) {
      Graphics.renderer.setSize(width, height, false);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      Graphics.sceneInfos.forEach(([_scene, camera, _element]) => {
        camera.aspect = this.#canvas.clientWidth / this.#canvas.clientHeight;
        camera.updateProjectionMatrix();
      });
    }
  }

  #render() {
    // Reset scissors
    Graphics.renderer.setScissorTest(false);
    Graphics.renderer.clear(true, true);
    Graphics.renderer.setScissorTest(true);

    // Render each scene
    Graphics.sceneInfos.forEach(([scene, camera, element]) => {
      const { left, right, top, bottom, width, height } =
        element.getBoundingClientRect();

      const isOffscreen =
        bottom < 0 ||
        top > this.#canvas.clientHeight ||
        right < 0 ||
        left > this.#canvas.clientWidth;

      if (!isOffscreen) {
        const positiveYUpBottom = this.#canvas.clientHeight - bottom;
        Graphics.renderer.setScissor(left, positiveYUpBottom, width, height);
        Graphics.renderer.setViewport(left, positiveYUpBottom, width, height);
        Graphics.renderer.render(scene, camera);
      }
    });

    requestAnimationFrame(this.#render.bind(this));
  }
}
