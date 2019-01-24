export const state = () => ({
  message: []
})

export const mutations = {
  setMessage (state, data) {
    console.log('set socketMessage from main store')
    state.message.push(data)
  }
}
export const getters = {
  getMessage (state, getters, rootState) {
    return state.message
  }
}
