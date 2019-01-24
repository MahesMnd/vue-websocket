<template>
  <v-layout>
    <v-flex>
      <v-text-field type="text" label="get the text back from socket" v-model="message"></v-text-field>
      <v-btn @click="sendEcho">Send Message</v-btn>
      </v-flex>
    <v-flex>
      <ul>
        <li v-for="(msg, index) in getMessage">
        {{ msg }} - {{ index }}
        </li>
      </ul>
    </v-flex>
  </v-layout>
</template>

<script>
    import {mapActions, mapGetters} from 'Vuex'
    export default {
      data () {
        return {
          message: ''
        }
      },
      methods: {
        ...mapActions(['sendMessage']),
        sendEcho () {
          this.sendMessage(this.message || 'I am awesome')
          this.message = ''
        }
      },
      computed: {
        ...mapGetters({getMessage: 'socketMessage/getMessage'})
      }
    }
</script>
