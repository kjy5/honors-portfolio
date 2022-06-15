import * as THREE from 'three'
import CoolveticaFont from '../assets/fonts/Coolvetica Rg_Regular.json?url'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import WebGL from 'three/examples/jsm/capabilities/WebGL.js'

// Setup Three
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, 2, 0.1, 1000)
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#canvas'),
  alpha: true
})
let needToRender = true
/**
 * @description Creates a ThreeJS scene and runs the render loop
 */
export default function Graphics () {
  // Setup Camera
  const cameraGroup = new THREE.Group()
  camera.position.z = 5
  cameraGroup.add(camera)
  scene.add(cameraGroup)

  // Setup scrolling
  let scroll = window.scrollY
  window.addEventListener('scroll', () => {
    const url = window.location.href
    if (url.substring(url.length - 17) === 'honors-portfolio/') {
      scroll = window.scrollY
    }
  })

  // Setup parallax
  const cursor = { x: 0, y: 0 }
  window.addEventListener('mousemove', (e) => {
    cursor.x = e.clientX / window.innerWidth - 0.5
    cursor.y = e.clientY / window.innerHeight - 0.5
  })

  // Add a light
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
  directionalLight.position.set(3, 3, 10)
  scene.add(ambientLight)
  scene.add(directionalLight)

  // Add particles
  const particlesCount = 150
  const positions = new Float32Array(particlesCount * 3)
  for (let i = 0; i < particlesCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10
    positions[i * 3 + 1] = 7.5 * 0.5 - Math.random() * 7.5 * 3
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10
  }

  const particlesGeometry = new THREE.BufferGeometry()
  particlesGeometry.setAttribute(
    'position',
    new THREE.BufferAttribute(positions, 3)
  )

  const particlesMaterial = new THREE.PointsMaterial({
    color: '#ffeded',
    sizeAttenuation: true,
    size: 0.03
  })

  const particles = new THREE.Points(particlesGeometry, particlesMaterial)
  scene.add(particles)

  // Setup render loop
  const clock = new THREE.Clock()

  /**
   * @description Render Loop
   */
  function animate () {
    const delta = clock.getDelta()

    // Resize renderer to fit window
    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement
      camera.aspect = canvas.clientWidth / canvas.clientHeight
      camera.updateProjectionMatrix()
    }

    // Set camera position to scroll
    camera.position.y = (-scroll / window.innerHeight) * 7.9

    // Apply parallax
    cameraGroup.position.x +=
      (cursor.x * 0.2 - cameraGroup.position.x) * 5 * delta
    cameraGroup.position.y +=
      (-cursor.y * 0.2 - cameraGroup.position.y) * 5 * delta

    renderer.render(scene, camera)

    requestAnimationFrame(animate)
  }

  // Run loop if WebGL is available
  if (WebGL.isWebGLAvailable()) {
    requestAnimationFrame(animate)
  } else {
    document.body.appendChild(WebGL.getWebGLErrorMessage())
  }
}

/**
 * Responsive resizing of ThreeJS render output (canvas)
 * @param {THREE.WebGLRenderer} renderer The renderer to resize
 * @returns {boolean} If the renderer needed to be resized
 */
function resizeRendererToDisplaySize (renderer) {
  // noinspection JSUnresolvedVariable
  const canvas = renderer.domElement
  const pixelRatio = window.devicePixelRatio
  const width = (canvas.clientWidth * pixelRatio) | 0
  const height = (canvas.clientHeight * pixelRatio) | 0
  const needResize = canvas.width !== width || canvas.height !== height
  if (needResize) {
    // noinspection JSUnresolvedFunction
    renderer.setSize(width, height, false)
  }
  return needResize
}

export function insertText (text, size, locationX, locationY) {
  const fontLoader = new FontLoader()
  fontLoader.load(CoolveticaFont, (font) => {
    const textGeometry = new TextGeometry(text, {
      font,
      size: size || 1,
      height: 0.075,
      curveSegments: 8,
      bevelEnabled: false,
      bevelThickness: 0.05,
      bevelSize: 0.005,
      bevelSegments: 1
    })
    const textMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff })
    const textMesh = new THREE.Mesh(textGeometry, textMaterial)
    textMesh.geometry.computeBoundingBox()

    // Place based on 2D screen coordinates
    const vec = new THREE.Vector3(
      (locationX / window.innerWidth) * 2 - 1,
      -((locationY / window.innerHeight) * 2 - 1),
      0.5
    )
      .unproject(camera)
      .sub(camera.position)
      .normalize()
    const distance = -camera.position.z / vec.z
    const titleOffset = camera.position
      .clone()
      .add(vec.multiplyScalar(distance))

    textMesh.position.x = -textMesh.geometry.boundingBox.max.x / 2
    textMesh.position.y = titleOffset.y
    textMesh.position.z = titleOffset.z

    // Add to scene
    scene.add(textMesh)
  })
}

export const getNeedToRender = () => needToRender
export const setNeedToRender = (value) => (needToRender = value)
