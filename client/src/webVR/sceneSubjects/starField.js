import * as THREE from 'three'

export default scene => {
  const starsGeometry1 = new THREE.Geometry()
  const starsGeometry2 = new THREE.Geometry()

  for (var i = 0; i < 100; i++) {
    var star = new THREE.Vector3()
    star.x = THREE.Math.randFloatSpread(2000)
    star.y = THREE.Math.randFloatSpread(2000)
    star.z = THREE.Math.randFloatSpread(2000)

    if (i % 2 === 0) {
      starsGeometry1.vertices.push(star)
    } else {
      starsGeometry2.vertices.push(star)
    }
  }

  const starsMaterial1 = new THREE.PointsMaterial({ color: 0x888888 })
  const starsMaterial2 = new THREE.PointsMaterial({ color: 0xCCCCCC })

  const starField1 = new THREE.Line(starsGeometry1, starsMaterial1)
  const starField2 = new THREE.Line(starsGeometry2, starsMaterial2)

  scene.add(starField1)
  scene.add(starField2)

  function update (time) {
    // do something
  }

  return {
    update
  }
}
