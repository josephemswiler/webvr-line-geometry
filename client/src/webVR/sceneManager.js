import * as THREE from 'three'
import * as TWEEN from '@tweenjs/tween.js'
import webVRScene from './sceneSubjects/scene'
import EventBus from 'eventing-bus'
import events from './constants/eventConstants'

export default canvas => {
  const clock = new THREE.Clock()

  const screenDimensions = {
    width: canvas.width,
    height: canvas.height
  }

  const mousePosition = {
    x: 0,
    y: 0
  }

  const scene = buildScene()
  const renderer = buildRender(screenDimensions)
  const camera = buildCamera(screenDimensions)
  const sceneSubjects = createSceneSubjects(scene)
  const initCameraTarget = {
    x: 0,
    y: 0,
    z: 0 + 5
  }

  moveCameraToTarget(initCameraTarget, 1.5)

  function buildScene () {
    const scene = new THREE.Scene()
    scene.background = new THREE.Color('#111111')

    return scene
  }

  function buildRender ({ width, height }) {
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true
    })
    const DPR = window.devicePixelRatio ? window.devicePixelRatio : 1
    renderer.setPixelRatio(DPR)
    renderer.setSize(width, height)

    renderer.gammaInput = true
    renderer.gammaOutput = true

    return renderer
  }

  function buildCamera ({ width, height }) {
    const aspectRatio = width / height
    const fieldOfView = 60
    const nearPlane = 0.1
    const farPlane = 1000
    const camera = new THREE.PerspectiveCamera(
      fieldOfView,
      aspectRatio,
      nearPlane,
      farPlane
    )

    camera.position.z = 40

    return camera
  }

  function createSceneSubjects (scene) {
    const sceneSubjects = [new webVRScene(scene)]

    return sceneSubjects
  }

  function update () {
    const elapsedTime = clock.getElapsedTime()

    for (let i = 0; i < sceneSubjects.length; i++) {
      sceneSubjects[i].update(elapsedTime)
    }

    renderer.render(scene, camera)
    TWEEN.update()
  }

  function onWindowResize () {
    const { width, height } = canvas

    screenDimensions.width = width
    screenDimensions.height = height

    camera.aspect = width / height
    camera.updateProjectionMatrix()

    renderer.setSize(width, height)
  }

  function onMouseMove (x, y) {
    mousePosition.x = x
    mousePosition.y = y
  }

  function onPlanetSelected (planetName) {
    const target = {
      x: 0,
      y: 0,
      z: 0 + 5
    }

    moveCameraToTarget(target)
  }

  function onPlanetChosen (planetName) {
    const target = {
      x: 0 + 0.9,
      y: 0 - 0.8,
      z: 0 + 1
    }

    moveCameraToTarget(target)
  }

  function moveCameraToTarget (target, delayInSeconds = 0) {
    delayInSeconds *= 1000
    setTimeout(() => {
      const origin = {
        x: camera.position.x,
        y: camera.position.y,
        z: camera.position.z
      }

      const tween = new TWEEN.Tween(origin).to(target)

      tween.onUpdate(() => {
        camera.position.x = origin.x
        camera.position.y = origin.y
        camera.position.z = origin.z
      })
      tween.easing(TWEEN.Easing.Quartic.InOut)
      tween.start()
    }, delayInSeconds)
  }

  EventBus.on(events.selectPlanet, onPlanetSelected)
  EventBus.on(events.choosePlanet, onPlanetChosen)

  return {
    update,
    onWindowResize,
    onMouseMove
  }
}
