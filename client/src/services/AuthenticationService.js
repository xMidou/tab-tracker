import Api from '@/services/Api'

export default {
  register (credentails) {
    return Api().post('register', credentails)
  }
}
