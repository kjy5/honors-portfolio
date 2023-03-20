import * as THREE from 'three'
import { WebGLRendererParameters } from 'three'
// eslint-disable-next-line sort-imports
import WebGL from 'three/examples/jsm/capabilities/WebGL.js'

/**
 * Manage 3D graphics.
 */
export default class Graphics {
  readonly #canvas: HTMLCanvasElement;
  readonly #renderer: THREE.WebGLRenderer;
  readonly #scene: THREE.Scene;
  readonly #camera: THREE.Camera;

  constructor(canvas: HTMLCanvasElement) {
    // Get canvas element
    this.#canvas = canvas;

    // Create the renderer
    this.#renderer = new THREE.WebGLRenderer({
      canvas: this.#canvas,
      antialias: true,
      alpha: true,
      physicallyCorrectLights: true,
    } as WebGLRendererParameters);

    // Initialize the scene and camera objects
    this.#scene = new THREE.Scene();
    this.#camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.#camera.position.z = 5;

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

  /**
   * Create the background graphic
   * @private
   */
  #createBackground() {
    // Setup scrolling
    window.addEventListener("scroll", () => {
      const url = window.location.href;
      if (url.substring(url.length - 17) === "honors-portfolio/") {
        this.#camera.position.y = (-window.scrollY / window.innerHeight) * 7.7;
      }
    });

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(3, 3, 10);
    this.#scene.add(ambientLight);
    this.#scene.add(directionalLight);

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
    this.#scene.add(particles);
  }

  /**
   * Resize the renderer and any cameras on window size change
   * @private
   */
  #resizeRendererToDisplaySize() {
    const width = (this.#canvas.clientWidth * window.devicePixelRatio) | 0;
    const height = (this.#canvas.clientHeight * window.devicePixelRatio) | 0;
    if (this.#canvas.width !== width || this.#canvas.height !== height) {
      this.#renderer.setSize(width, height, false);
    }
  }

  #render() {
    this.#renderer.render(this.#scene, this.#camera);
    requestAnimationFrame(this.#render.bind(this));
  }
}
