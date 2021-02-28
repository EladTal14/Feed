const express = require('express')
const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
const { getTemplate, getTemplates, deleteTemplate, updateTemplate } = require('./template.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', getTemplates)
router.get('/:id', getTemplate)
router.put('/:id', updateTemplate)

// router.put('/:id',  requireAuth, updateTemplate)
router.delete('/:id', requireAuth, requireAdmin, deleteTemplate)

module.exports = router