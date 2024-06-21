import { response, request } from 'express'
import { Project } from '../models/project.models.js'
import { Setting } from '../models/setting.models.js'
import { Vector } from '../models/vector.models.js'
export const projectPost = async (req = request, res = response) => {
  const { project_name, user_id } = req.body
  if (!project_name || !user_id)
    return res
      .status(400)
      .json({ msg: 'No se proporcionó el nombre del proyecto o el usuario' })

  const project = {
    project_name: project_name,
    user_id: user_id
  }
  const addProject = Project.build(project)
  await addProject.save()
  res.status(201).json({ msg: 'project created correctly' })
}
export const projectGet = async (req = request, res = response) => {
  const project = await Project.findAll({
    include: [
      {
        model: Setting,
        attributes: ['unit', 'leakage', 'value_leakage', 'period']
      },
      { model: Vector, attributes: ['vector'] }
    ],
    attributes: {
      exclude: ['user_id']
    }
  })
  if (project.length !== 0) {
    res.status(200).json(project)
  } else {
    res.status(404).json({
      msg: 'no data in DB'
    })
  }
}
