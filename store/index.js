import Vue from 'vue'

export const state = () => ({
  socket: {
    isConnected: false,
    message: '',
    reconnectError: false,
  }
})

export const mutations = {
  SOCKET_ONOPEN (state, event)  {
    console.log('socket onopen')
    Vue.prototype.$socket = event.currentTarget
    state.socket.isConnected = true
  },
  SOCKET_ONCLOSE (state, event)  {
    console.log('socket onclose')
    state.socket.isConnected = false
  },
  SOCKET_ONERROR (state, event)  {
    console.log('socket onerror')
    console.error(state, event)
  },
  // default handler called for all methods
  SOCKET_ONMESSAGE (state, message)  {
    console.log('socket onmessage: ', message.data)
    state.socket.message = message.data
    if (message.data) this.commit('socketMessage/setMessage', message.data)
  },
  // mutations for reconnect methods
  SOCKET_RECONNECT(state, count) {
    console.log('socket reconnect: ')
    console.info(state, count)
  },
  SOCKET_RECONNECT_ERROR(state) {
    console.error('socket reconnect error')
    state.socket.reconnectError = true;
  }
}

export const getters = {

}

export const actions = {
  sendMessage: function(context, message) {
    Vue.prototype.$socket.send(message)
  }
}