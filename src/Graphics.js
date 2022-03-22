import * as THREE from "three";
import {FontLoader} from "three/examples/jsm/loaders/FontLoader";
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

    // Add Title
    const fontLoader = new FontLoader()
    fontLoader.load('node_modules/three/examples/fonts/helvetiker_regular.typeface.json', function (font) {
        const textGeometry = new TextGeometry('Hello World', {
            font: font,
            size: 1,
            height: 0.1,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 0.1,
            bevelSize: 0.1,
            bevelSegments: 5
        })
        const textMaterial = new THREE.MeshBasicMaterial({color: 0xffffff})
        const textMesh = new THREE.Mesh(textGeometry, textMaterial)
        textMesh.position.x = -2
        textMesh.position.y = 2
        scene.add(textMesh)
    })

    // Render
    function animate() {
        requestAnimationFrame(animate);

        renderer.render(scene, camera);
    }

    if (WebGL.isWebGLAvailable()) {
        animate()
    } else {
        document.body.appendChild(WebGL.getWebGLErrorMessage())
    }
}