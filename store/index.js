import firebase from 'firebase'

export const state = () => ({
  counter: 0,
  authenticated: false,
  loggedInUser: {},
})

export const mutations = {
  increment(state) {
    state.counter++
  },
  setUserData(state, payload) {
    state.loggedInUser = payload
  },
  makeUserAuthenticated(state) {
    state.authenticated = true
  },
  makeUserNotAuthenticated(state) {
    state.authenticated = false
  },
  cleanUserData(state) {
    state.loggedInUser = {}
  },
}

export const actions = {
  addUserProfileData({ commit }, payload) {
    commit('setUserData', payload)
  },
  AuthenticateUser({ commit }) {
    commit('makeUserAuthenticated')
  },
  DeAuthenticateUser({ commit }) {
    commit('makeUserNotAuthenticated')
  },
  destroyProfile({ commit }) {
    commit('cleanUserData')
  },
}

export const getters = {
  getUserStatus: (state) => {
    return state.authenticated
  },
  getUserProfile: (state) => {
    return state.loggedInUser
  },
}
