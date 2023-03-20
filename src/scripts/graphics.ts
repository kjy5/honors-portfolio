import {
  AmbientLight,
  BufferAttribute,
  BufferGeometry,
  Camera,
  DirectionalLight,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  Scene,
  WebGLRenderer,
  WebGLRendererParameters,
} from 'three'
import WebGL from 'three/examples/jsm/capabilities/WebGL.js'

/**
 * Manage 3D graphics.
 */
export default class Graphics {
  readonly #canvas: HTMLCanvasElement;
  readonly #renderer: WebGLRenderer;
  readonly #scene: Scene;
  readonly #camera: Camera;

  /**
   * Create and initialize 3D graphics
   * @param canvas {HTMLCanvasElement} Element to put graphics into
   */
  constructor(canvas: HTMLCanvasElement) {
    // Get canvas element
    this.#canvas = canvas;

    // Create the renderer
    this.#renderer = new WebGLRenderer({
      canvas: this.#canvas,
      antialias: true,
      alpha: true,
      physicallyCorrectLights: true,
    } as WebGLRendererParameters);

    // Initialize the scene and camera objects
    this.#scene = new Scene();
    this.#camera = new PerspectiveCamera(
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
  }

  /**
   * Start the render process after checking for WebGL
   */
  render() {
    // Start animation if WebGL is available
    if (WebGL.isWebGLAvailable()) {
      this.#render();
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
    const ambientLight = new AmbientLight(0xffffff, 0.5);
    const directionalLight = new DirectionalLight(0xffffff, 0.5);
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

    const particlesGeometry = new BufferGeometry();
    particlesGeometry.setAttribute(
      "position",
      new BufferAttribute(positions, 3)
    );

    const particlesMaterial = new PointsMaterial({
      color: "#ffeded",
      sizeAttenuation: true,
      size: 0.03,
    });

    const particles = new Points(particlesGeometry, particlesMaterial);
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

  /**
   * Actual render caller
   * @private
   */
  #render() {
    this.#renderer.render(this.#scene, this.#camera);
    requestAnimationFrame(this.#render.bind(this));
  }
}
