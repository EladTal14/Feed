const initialState = {
  currTemplate: null,
  templates: [],
}

export function templateReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_TEMPLATES':
      return { ...state, templates: action.templates }
    case 'SET_TEMPLATE':
      return { ...state, currTEMPLATE: { ...action.template } }
    case 'UPDATE_TEMPLATE':
      return { ...state, currTEMPLATE: action.template }
    case 'CLEAN_TEMPLATE':
      return { ...state, currTEMPLATE: null }
    case 'ADD_TEMPLATE':
      return {
        ...state, templates: [...state.templates, action.template],
        currTEMPLATE: { ...action.template }
      }
    case 'SAVE_TEMPLATE':
      return {
        ...state, templates: state.templates.map(template => {
          if (template._id === action.template._id) return action.template
          else return template
        })
      }
    default:
      return state
  }
}
