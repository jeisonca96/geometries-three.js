// cylinder object
const geometryCylinder = new THREE.CylinderGeometry(0.5, 0.5, 1.0, 5);
const materialCylinder = new THREE.MeshBasicMaterial({ color: "#73FA03" });
const cylinder = new THREE.Mesh(geometryCylinder, materialCylinder);
