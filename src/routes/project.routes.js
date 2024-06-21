import { Router } from 'express'
import { projectGet, projectPost } from '../controllers/project.controllers.js'
import { fieldValidation } from '../middlewares/field-validation.js'

export const projectRt = Router()

projectRt.get('/projects', projectGet)
projectRt.post('/newProject', [fieldValidation], projectPost)
