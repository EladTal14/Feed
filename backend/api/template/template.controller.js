const templateService = require('./template.service')
const logger = require('../../services/logger.service')

async function getTemplate(req, res) {
    try {
        const template = await templateService.getById(req.params.id)
        res.send(template)
    } catch (err) {
        logger.error('Failed to get template', err)
        res.status(500).send({ err: 'Failed to get template' })
    }
}

async function getTemplates(req, res) {
    try {
        // const filterBy = {
        //     txt: req.query?.txt || '',
        // }
        const templates = await templateService.query()
        res.send(templates)
    } catch (err) {
        logger.error('Failed to get templates', err)
        res.status(500).send({ err: 'Failed to get templates' })
    }
}

async function deleteTemplate(req, res) {
    try {
        await templateService.remove(req.params.id)
        res.send({ msg: 'Deleted successfully' })
    } catch (err) {
        logger.error('Failed to delete template', err)
        res.status(500).send({ err: 'Failed to delete template' })
    }
}

async function updateTemplate(req, res) {
    try {
        const template = req.body
        const savedTemplate = await templateService.update(template)
        res.send(savedTemplate)
    } catch (err) {
        logger.error('Failed to update template', err)
        res.status(500).send({ err: 'Failed to update template' })
    }
}

module.exports = {
    getTemplate,
    getTemplates,
    deleteTemplate,
    updateTemplate
}