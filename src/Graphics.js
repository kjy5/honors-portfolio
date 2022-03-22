import * as THREE from "three";
import {FontLoader} from "three/examples/jsm/loaders/FontLoader";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {TextGeometry} from "three/examples/jsm/geometries/TextGeometry";
import WebGL from "three/examples/jsm/capabilities/WebGL.js";

export default function Graphics() {
    // Setup Three
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({canvas: document.getElementById('canvas')})

    // Setup Camera and renderer
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.position.z = 5

    // Add OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement)

    // Add a light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
    directionalLight.position.set(3, 3, 10)
    scene.add(ambientLight)
    scene.add(directionalLight)

    // Add Title
    const fontLoader = new FontLoader()
    fontLoader.load('src/assets/fonts/Coolvetica Rg_Regular.json', function (font) {
        const textGeometry = new TextGeometry("Kenneth's Honors Portfolio", {
            font: font,
            size: .75,
            height: 0.075,
            curveSegments: 8,
            bevelEnabled: false,
            bevelThickness: 0.05,
            bevelSize: 0.005,
            bevelSegments: 1
        })
        const textMaterial = new THREE.MeshPhongMaterial({color: 0xffffff})
        const textMesh = new THREE.Mesh(textGeometry, textMaterial)
        textMesh.geometry.computeBoundingBox()

        const vec = new THREE.Vector3()
        vec.set(0, .6, 0.5)
        vec.unproject(camera)
        vec.sub(camera.position).normalize()
        const distance = -camera.position.z / vec.z
        const pos = camera.position.clone().add(vec.multiplyScalar(distance))

        textMesh.position.x = -textMesh.geometry.boundingBox.max.x / 2
        textMesh.position.y = pos.y
        textMesh.position.z = pos.z

        const boxHelper = new THREE.BoxHelper(textMesh, 0xffff00)
        const gridHelper = new THREE.GridHelper(10, 10)
        scene.add(textMesh)
        scene.add(boxHelper)
        scene.add(gridHelper)
    })


    // Render
    function animate() {
        requestAnimationFrame(animate);

        controls.update()

        renderer.render(scene, camera);
    }

    if (WebGL.isWebGLAvailable()) {
        animate()
    } else {
        document.body.appendChild(WebGL.getWebGLErrorMessage())
    }
}