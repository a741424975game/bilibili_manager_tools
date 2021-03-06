import qs from 'querystring'
import {get, post} from '../utils/request.js'

import RoomApi from './room/index.js'
import UserApi from './user/index.js'

class Api {
  constructor(config = {}) {
    // this.protocol = config.useHttps ? 'https://' : 'http://'
    this.protocol = ''
    // this.protocol = 'http://'

    this.cookie = config.cookie || ''
    this.roomId = config.roomId || '23058'
  }

  useHttps(use) {
    // this.protocol = use ? 'https://' : 'http://'
    // this.protocol = 'http://'
    this.protocol = ''
  }

  setCookie(cookie) {
    this.cookie = cookie
  }

  setRoomId(roomId) {
    this.roomId = roomId
  }

  get (options) {
    let url = this.protocol + (options.url ? options.url : + options.uri)
    let headers = {
      'Set-Cookie': this.cookie
    }
    let config = {}
    if (!options.html) config.headers = Object.assign(headers, options.headers)
    if (options.params) config.params = options.params
    return get(url, config)
  }

  post(options) {
    let url = this.protocol + (options.url ? options.url : options.uri)
    let headers = {
      'Set-Cookie': this.cookie
    }
    if (!options.isJson) headers['Content-Type'] = 'application/x-www-form-urlencoded'
    let config = {}
    config.headers = Object.assign(headers, options.headers)
    if (options.body) config.body = options.isJson ? options.body : qs.stringify(options.body)
    return post(url, config)
  }

}

Object.assign(Api.prototype, RoomApi, UserApi)

export default Api
