import * as THREE from 'three'
import CoolveticaFont from '../assets/fonts/Coolvetica Rg_Regular.json?url'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import WebGL from 'three/examples/jsm/capabilities/WebGL.js'

/**
 * Responsive resizing of ThreeJS render output (canvas)
 * @param {THREE.WebGLRenderer} renderer The renderer to resize
 * @returns {boolean} If the renderer needed to be resized
 */
function resizeRendererToDisplaySize (renderer) {
  // noinspection JSUnresolvedVariable
  const canvas = renderer.domElement
  const pixelRatio = window.devicePixelRatio
  const width = (canvas.clientWidth * pixelRatio) | 0;
  const height = (canvas.clientHeight * pixelRatio) | 0;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}

/**
 * @description Creates a ThreeJS scene and runs the render loop
 */
export default function Graphics() {
  // Setup Three
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 2, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#canvas'),
    alpha: true,
  });

  // Setup Camera
  camera.position.z = 5;

  // Add OrbitControls
  // const controls = new OrbitControls(camera, renderer.domElement)

  // Add a light
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  directionalLight.position.set(3, 3, 10);
  scene.add(ambientLight);
  scene.add(directionalLight);

  // Add title
  const fontLoader = new FontLoader()
  let titleOffset
  fontLoader.load(CoolveticaFont, (font) => {
    const textGeometry = new TextGeometry("Kenneth's Honors Portfolio", {
      font,
      size: window.innerWidth / 1920,
      height: 0.075,
      curveSegments: 8,
      bevelEnabled: false,
      bevelThickness: 0.05,
      bevelSize: 0.005,
      bevelSegments: 1,
    });
    const textMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const textMesh = new THREE.Mesh(textGeometry, textMaterial);
    textMesh.geometry.computeBoundingBox();

    // Place based on 2D screen coordinates
    const vec = new THREE.Vector3()
    vec.set(0, 0.7, 0.5)
    vec.unproject(camera)
    vec.sub(camera.position).normalize()
    const distance = -camera.position.z / vec.z
    titleOffset = camera.position.clone().add(vec.multiplyScalar(distance))

    textMesh.position.x = -textMesh.geometry.boundingBox.max.x / 2
    textMesh.position.y = titleOffset.y
    textMesh.position.z = titleOffset.z

    // Add to scene
    scene.add(textMesh)

    // Visualization helpers
    // const boxHelper = new THREE.BoxHelper(textMesh, 0xffff00)
    // const gridHelper = new THREE.GridHelper(10, 10)
    // scene.add(boxHelper)
    // scene.add(gridHelper)
  });

  // Setup scrolling
  let scroll = window.scrollY
  window.addEventListener('scroll', () => {
    scroll = window.scrollY
  })

  /**
   * @description Render Loop
   */
  function animate () {
    // Resize renderer to fit window
    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement
      camera.aspect = canvas.clientWidth / canvas.clientHeight
      camera.updateProjectionMatrix()
    }

    // Set camera position to scroll
    camera.position.y = -scroll / window.innerHeight * 7.5

    // controls.update()

    renderer.render(scene, camera)

    requestAnimationFrame(animate)
  }

  // Run loop if WebGL is available
  if (WebGL.isWebGLAvailable()) {
    requestAnimationFrame(animate);
  } else {
    document.body.appendChild(WebGL.getWebGLErrorMessage());
  }
}
