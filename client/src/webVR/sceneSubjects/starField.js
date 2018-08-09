import * as THREE from 'three'

export default scene => {
  const linesGeometryOne = new THREE.Geometry()
  const linesGeometryTwo = new THREE.Geometry()

  for (var i = 0; i < 10000; i++) {
    var line = new THREE.Vector3()
    line.x = THREE.Math.randFloatSpread(2000)
    line.y = THREE.Math.randFloatSpread(2000)
    line.z = THREE.Math.randFloatSpread(2000)

    if (i % 2 === 0) {
        linesGeometryOne.vertices.push(line)
    } else {
        linesGeometryTwo.vertices.push(line)
    }
  }

  const linesMaterialOne = new THREE.LineBasicMaterial({ color: 0x888888 })

  const lineGroupOne = new THREE.LineSegments(linesGeometryOne, linesMaterialOne)

  lineGroupOne.rotation.y = Math.random() * Math.PI
  lineGroupOne.updateMatrix()

  scene.add(lineGroupOne)

  function update (time) {
    // do something
  }

  return {
    update
  }
}
