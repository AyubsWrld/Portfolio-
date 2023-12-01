import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Set up camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Set up scene
const scene = new THREE.Scene();

// Create a rectangle
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Make the background object
const backgroundMaterial = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0 });
const background = new THREE.Mesh(geometry, backgroundMaterial);
scene.add(background);

// Create a colored rectangle
const material = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 1 });
const rectangle = new THREE.Mesh(geometry, material);
scene.add(rectangle);

// Set up renderer with alpha
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Set up orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.125;

// Set up window resize listener
window.addEventListener('resize', onWindowResize);
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// Set up animation loop
function animate() {
  requestAnimationFrame(animate);
  // Rotate the rectangle
  rectangle.rotation.x += 0.01;
  rectangle.rotation.y += 0.01;
  controls.update();
  renderer.render(scene, camera);
}

// Start the animation loop
animate();




