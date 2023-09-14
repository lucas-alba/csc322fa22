import * as THREE from 'three';

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

const scene = new THREE.Scene();

const material = new THREE.LineBasicMaterial({ color: 0x9370DB });

const points = [];
points.push(new THREE.Vector3(0, 10, 0));
points.push(new THREE.Vector3(-10, -10, 0));
points.push(new THREE.Vector3(10, -10, 0));
points.push(new THREE.Vector3(0, 10, 0));

const geometry = new THREE.BufferGeometry().setFromPoints(points);

const line = new THREE.Line(geometry, material);

scene.add(line);
renderer.render(scene, camera);

function animate() {
  requestAnimationFrame(animate);

  line.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();
