
const dbService = require('../../services/db.service')
// const logger = require('../../services/logger.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    getById,
    getByTemplate,
    remove,
    update,
    add
}

async function query(filterBy = {}) {
    const criteria = _buildCriteria(filterBy)
    try {
        const collection = await dbService.getCollection('template')
        var templates = await collection.find(criteria).toArray()
        templates = templates.map(template => {
            // delete template.password

            template.createdAt = ObjectId(template._id).getTimestamp()
            // Returning fake fresh data
            // template.createdAt = Date.now() - (1000 * 60 * 60 * 24 * 3) // 3 days ago
            return template
        })
        return templates
    } catch (err) {
        logger.error('cannot find templates', err)
        throw err
    }
}

async function getById(templateId) {
    try {
        const collection = await dbService.getCollection('template')
        const template = await collection.findOne({ '_id': ObjectId(templateId) })
        delete template.password

        return template
    } catch (err) {
        logger.error(`while finding template ${templateId}`, err)
        throw err
    }
}
async function getByTemplate(template) {
    try {
        const collection = await dbService.getCollection('template')
        const template = await collection.findOne({ template })
        return template
    } catch (err) {
        logger.error(`while finding template ${templatename}`, err)
        throw err
    }
}

async function remove(templateId) {
    try {
        const collection = await dbService.getCollection('template')
        await collection.deleteOne({ '_id': ObjectId(templateId) })
    } catch (err) {
        logger.error(`cannot remove template ${templateId}`, err)
        throw err
    }
}

async function update(template) {
    try {
        // peek only updatable fields!
        const templateToSave = {
            _id: ObjectId(template._id),
            templatename: template.templatename,
            fullname: template.fullname,

        }
        const collection = await dbService.getCollection('template')
        await collection.updateOne({ '_id': templateToSave._id }, { $set: templateToSave })
        return templateToSave;
    } catch (err) {
        logger.error(`cannot update template ${template._id}`, err)
        throw err
    }
}

async function add(template) {
    try {
        // peek only updatable fields!
        const templateToAdd = {
            templatename: template.templatename,
            password: template.password,
            fullname: template.fullname,

        }
        const collection = await dbService.getCollection('template')
        await collection.insertOne(templateToAdd)
        return templateToAdd
    } catch (err) {
        logger.error('cannot insert template', err)
        throw err
    }
}

function _buildCriteria(filterBy) {
    const criteria = {}
    if (filterBy.txt) {
        const txtCriteria = { $regex: filterBy.txt, $options: 'i' }
        criteria.$or = [
            {
                templatename: txtCriteria
            },
            {
                fullname: txtCriteria
            }
        ]
    }
    if (filterBy.minBalance) {
        criteria.balance = { $gte: filterBy.minBalance }
    }
    return criteria
}


