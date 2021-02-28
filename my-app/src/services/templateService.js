import { httpService } from './httpService.js'

export const templateService = {
    query,
    remove,
    save,
    getTemplateById,

}

function query() {
    return httpService.get(`template`)
}

function remove(templateId) {
    return httpService.delete(`template/${templateId}`)
}

function save(template) {
    if (template._id) {
        return httpService.put(`template/${template._id}`, template)
    } else {
        return httpService.post('template', template)
    }
}

function getTemplateById(templateId) {
    return httpService.get(`template/${templateId}`)
}

