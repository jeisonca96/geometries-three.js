// cone object
const geometryCone = new THREE.ConeGeometry(0.8, 2.0, 5);
const materialCone = new THREE.MeshBasicMaterial({ color: "#03B3FA" });
const cone = new THREE.Mesh(geometryCone, materialCone);
