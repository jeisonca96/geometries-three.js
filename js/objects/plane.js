// plane object
const geometryPlane = new THREE.PlaneGeometry(1, 1);
const materialPlane = new THREE.MeshBasicMaterial({
  color: 0xffff00,
  side: THREE.DoubleSide,
});
const plane = new THREE.Mesh(geometryPlane, materialPlane);
