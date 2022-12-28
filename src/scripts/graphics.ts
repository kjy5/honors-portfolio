import * as THREE from 'three'
import { WebGLRendererParameters } from 'three'
// eslint-disable-next-line sort-imports
import WebGL from 'three/examples/jsm/capabilities/WebGL.js'

// Base scene items
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("canvas") as HTMLCanvasElement,
  alpha: true,
  antialias: true,
  physicallyCorrectLights: true,
} as WebGLRendererParameters);

const canvas = renderer.domElement;
const pixelRatio = window.devicePixelRatio;

/**
 * Resize the canvas to match the window size
 */
function resizeRendererToDisplaySize() {
  const width = (canvas.clientWidth * pixelRatio) | 0;
  const height = (canvas.clientHeight * pixelRatio) | 0;
  if (canvas.width !== width || canvas.height !== height) {
    renderer.setSize(width, height, false);
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }
}

/**
 * Render 3D graphics
 * @constructor
 */
export default function Graphics() {
  // Setup scrolling
  let scroll = window.scrollY;
  window.addEventListener("scroll", () => {
    const url = window.location.href;
    if (url.substring(url.length - 17) === "honors-portfolio/") {
      scroll = window.scrollY;
    }
  });

  // Setup resize
  resizeRendererToDisplaySize();
  window.addEventListener("resize", () => {
    resizeRendererToDisplaySize();
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

  // Animate
  function animate() {
    // Set camera position to scroll
    camera.position.y = (-scroll / window.innerHeight) * 7.7;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  // Run loop if WebGL is available
  if (WebGL.isWebGLAvailable()) {
    requestAnimationFrame(animate);
  }
}
