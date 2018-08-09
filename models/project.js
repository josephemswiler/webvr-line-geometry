const mongoose = require('mongoose')
const Schema = mongoose.Schema

const projectSchema = new Schema({
  title: { type: String, required: true },
  contributors: { type: String, required: true },
  link: { type: String, required: true },
  repo: { type: String, required: true },
  description: String,
  date: { type: Date, default: Date.now }
})

const Project = mongoose.model('Project', projectSchema)

module.exports = Project
