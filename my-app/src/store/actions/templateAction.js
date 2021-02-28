import { templateService } from '../../services/templateService.js'
// import { socketService } from '../../services/socketService.js';

export function loadTemplates() {
  return async (dispatch) => {
    try {
      const templates = await templateService.query()
      dispatch({ type: 'SET_TEMPLATES', templates })
    } catch (err) {
      console.log('err templateAction LOAD TEMPLATES', err);
    }
  }
}

export function loadTemplate(templateId) {
  return async (dispatch) => {
    try {
      const template = await templateService.getTemplateyId(templateId)
      dispatch({ type: 'SET_TEMPLATE', template })
    } catch (err) {
      console.log('err templateAction LOAD TEMPLATE', err);
    }
  }
}

export function saveTemplate(template, isRenderSocket = false) {
  return async (dispatch) => {
    try {
      const savedTemplate = await templateService.save(template)
      // if (!isRenderSocket) {
      //   socketService.emit('render', template)
      // }
      dispatch({ type: (template._id) ? 'UPDATE_TEMPLATE' : 'ADD_TEMPLATE', template: savedTemplate })
    } catch (err) {
      console.log('err templateAction SAVE TEMPLATE', err);
    }
  }
}

export function cleanTEMPLATE() {
  return (dispatch) => {
    try {
      dispatch({ type: 'CLEAN_TEMPLATE' })
    } catch (err) {
      console.log('err templateAction CLEAN TEMPLATE', err);
    }
  }
}


