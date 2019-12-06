import Vuex from 'vuex'
import defaultState from './state/state.js'
import mutations from "./mutations/mutations.js";
import getters from "./getters/getters.js";
import actions from './actions/actions.js'

export default () => {
  return  new Vuex.Store({
    state: defaultState,
    mutations,
    getters,
    actions
  })
}
