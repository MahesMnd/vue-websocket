<template>
  <v-layout>
    <v-flex>
      <v-text-field type="text" label="get the text back from socket" v-model="message"></v-text-field>
      <v-btn @click="sendEcho">Send Message</v-btn>
      </v-flex>
      <v-btn
        @click.prevent="playSound('http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3')"
      >Play</v-btn>
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
        },
        playSound (sound) {
          if(sound) {
            let audio = new Audio(sound);
            audio.play()
          }
        }
      },
      computed: {
        ...mapGetters({getMessage: 'socketMessage/getMessage'})
      }
    }
</script>
