import StarField from './starField'
import Light from './light'

export default scene => {
  const subjectsToUpdate = []

  // Setup star field
  subjectsToUpdate.push(new StarField(scene))
  subjectsToUpdate.push(new Light(scene))

  function update (time) {
    subjectsToUpdate.forEach(subject => {
      subject.update(time)
    })
  }

  return {
    update
  }
}
