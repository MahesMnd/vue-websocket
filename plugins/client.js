import { setClient } from '../api/client'

export default function ({ $axios }) {
  setClient($axios)
}
