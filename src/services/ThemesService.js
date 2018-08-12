import Api from './Api'

export default {
  fetchThemes () {
    return Api().get('themes')
  }
}
