import * as THREE from 'three'

export default scene => {
  const light = new THREE.DirectionalLight(0xffffff, 1)

  light.position.set(5, 3, 5)

  scene.add(light)
  scene.add(new THREE.AmbientLight(0x333333))

  function update (time) {}

  return {
    update
  }
}
