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
    actions,
    modules: {
      a: {
        namespaced: true,
        state: {
          text: 1
        },
        mutations: {
          updateText (state,text){
            state.text = text
          }
        },
        getters: {
          textPlus (state, getters, rootState) {
            return state.text + rootState.count
          }
        },
        actions: {
          add({state, commit, rootState}) {
            commit('updateCount',{num: '5678'},{root: true})
          }
        }
      },
      b: {
        state: {
          text: 2
        },
        actions: {
          testAction({commit}){
            commit('a/updateText','test test',{root: true})
          }
        }
      }
    }
  })
}
