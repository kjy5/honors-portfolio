import * as THREE from 'three'
import { WebGLRendererParameters } from 'three'
// eslint-disable-next-line sort-imports
import WebGL from 'three/examples/jsm/capabilities/WebGL.js'

/**
 * Manage 3D graphics.
 */
export default class Graphics {
  static renderer: THREE.WebGLRenderer;
  static scenes: Map<THREE.Scene, THREE.PerspectiveCamera> = new Map();
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
    this.#resizeRendererToDisplaySize();

    // Start animation if WebGL is available
    if (WebGL.isWebGLAvailable()) {
      requestAnimationFrame(this.#animate.bind(this));
    }
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
    Graphics.scenes.set(scene, camera);
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
      Graphics.scenes.forEach((camera: THREE.PerspectiveCamera) => {
        camera.aspect = this.#canvas.clientWidth / this.#canvas.clientHeight;
        camera.updateProjectionMatrix();
      });
    }
  }

  #animate() {
    Graphics.scenes.forEach(
      (camera: THREE.PerspectiveCamera, scene: THREE.Scene) => {
        Graphics.renderer.render(scene, camera);
        requestAnimationFrame(this.#animate.bind(this));
      }
    );
  }
}
