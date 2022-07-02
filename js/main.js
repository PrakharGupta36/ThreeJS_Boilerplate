import "../css/style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// init

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshNormalMaterial();

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const sizes = { width: window.innerWidth, height: window.innerHeight };

let { width, height } = sizes;
const aspectRatio = width / height;

const camera = new THREE.PerspectiveCamera(45, aspectRatio, 1, 1000);
camera.position.z = 5;

const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animation);

window.addEventListener("resize", () => {
  width = window.innerWidth;
  height = window.innerHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 3));
});

// controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// animation

function animation(time) {
  controls.update();

  renderer.render(scene, camera);
}
