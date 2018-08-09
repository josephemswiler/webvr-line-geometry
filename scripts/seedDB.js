const mongoose = require('mongoose')
const db = require('../models')
mongoose.Promise = global.Promise

// This file empties projects collection and inserts the projects below

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/reactreadinglist',
  {
    useMongoClient: true
  }
)

const projectSeed = [
  {
    title: 'Jello',
    contributors: 'Individual',
    link: 'http://jello-jfe.herokuapp.com/',
    repo: 'https://github.com/josephemswiler/jello',
    description: 'A clone of a popular web-based project management application (hint: rhymes with jello).',
    date: new Date(2018, 6)
  }
]

db.Project
  .remove({})
  .then(() => db.Project.collection.insertMany(projectSeed))
  .then(data => {
    console.log(data.insertedIds.length + ' records inserted!')
    process.exit(0)
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
