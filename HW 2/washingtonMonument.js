// import three.js 105

import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js';

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0, 100, 140);
camera.lookAt(0, 50, 0);

const scene = new THREE.Scene();

// Parameterized
let width = 6;
let height = 55;
let twidth = width - 3;
let peak = height + 6;

const geometry = new THREE.Geometry();

// Defining the outline 
const vectors = [
  new THREE.Vector3(width, 0, width),
  new THREE.Vector3(width, 0, -width),
  new THREE.Vector3(-width, 0, -width),
  new THREE.Vector3(-width, 0, width),
  new THREE.Vector3(twidth, height, twidth),
  new THREE.Vector3(twidth, height, -twidth),
  new THREE.Vector3(-twidth, height, -twidth),
  new THREE.Vector3(-twidth, height, twidth),
  new THREE.Vector3(0, peak, 0),
];

geometry.vertices = vectors;


// Creating Mesh
const mesh = [
  new THREE.MeshBasicMaterial({
    color: new THREE.Color('red'), //RED
    side: THREE.FrontSide
  }),
  new THREE.MeshBasicMaterial({
    color: new THREE.Color(0, 255, 0), //GREEN
    side: THREE.FrontSide
  }),
  new THREE.MeshBasicMaterial({
    color: new THREE.Color(0, 0, 255), //BLUE
    side: THREE.FrontSide
  }), 
  new THREE.MeshBasicMaterial({
    color: new THREE.Color(255, 255, 0), //YELLOW
    side: THREE.FrontSide
  }), 
  new THREE.MeshBasicMaterial({
    color: new THREE.Color('purple'), //PURPLE
    side: THREE.FrontSide
  }),
  new THREE.MeshBasicMaterial({
    color: 0x00FFFF, //SKY BLUE
    side: THREE.FrontSide
  }), 
  new THREE.MeshBasicMaterial({
    color: 0xFFA500, //ORANGE
    side: THREE.FrontSide
  }),
  new THREE.MeshBasicMaterial({
    color: 0xFFC0CB, //PINK
    side: THREE.Frontside
  })
];

// Defining the faces ensuring they are counterclock wise
geometry.faces.push(new THREE.Face3(0, 1, 4));
geometry.faces.push(new THREE.Face3(4, 1, 5));

geometry.faces.push(new THREE.Face3(1, 2, 5));
geometry.faces.push(new THREE.Face3(5, 2, 6));

geometry.faces.push(new THREE.Face3(2, 3, 7));
geometry.faces.push(new THREE.Face3(7, 6, 2));

geometry.faces.push(new THREE.Face3(3, 0, 4));
geometry.faces.push(new THREE.Face3(4, 7, 3));

geometry.faces.push(new THREE.Face3(5, 8, 4));
geometry.faces.push(new THREE.Face3(6, 8, 5));
geometry.faces.push(new THREE.Face3(7, 8, 6));
geometry.faces.push(new THREE.Face3(4, 8, 7));

// Defining the Material to Faces
geometry.faces[0].materialIndex = 0;
geometry.faces[1].materialIndex = 0;

geometry.faces[2].materialIndex = 1;
geometry.faces[3].materialIndex = 1;

geometry.faces[4].materialIndex = 2;
geometry.faces[5].materialIndex = 2;

geometry.faces[6].materialIndex = 3;
geometry.faces[7].materialIndex = 3;

geometry.faces[8].materialIndex = 4;
geometry.faces[9].materialIndex = 5;
geometry.faces[10].materialIndex = 6;
geometry.faces[11].materialIndex = 7;

const washingtonMonument = new THREE.Mesh(geometry, mesh);

scene.add(washingtonMonument);
renderer.render(scene, camera);

const animate = () => {
  requestAnimationFrame(animate);

  washingtonMonument.rotation.y -= 0.01;

  renderer.render(scene, camera);
};

var controls = new OrbitControls(camera, renderer.domElement);

animate();