// scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// cube object
scene.add(cube);
// cone object
scene.add(cone);
// plane object
scene.add(plane);
// cylinder object
scene.add(cylinder);
// sphere object
scene.add(sphere);

camera.position.z = 5;

const animate = function () {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  cone.rotation.x += 0.01;
  cone.rotation.y += 0.01;
  cone.position.x = 2;
  cone.position.y = 2;

  plane.rotation.x += 0.01;
  plane.rotation.y += 0.01;
  plane.position.x = 2;
  plane.position.y = -2;

  cylinder.rotation.x += 0.01;
  cylinder.rotation.y += 0.01;
  cylinder.position.x = -2;
  cylinder.position.y = -2;

  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;
  sphere.position.x = -2;
  sphere.position.y = 2;

  renderer.render(scene, camera);
};

animate();
