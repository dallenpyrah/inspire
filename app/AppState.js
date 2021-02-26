import Image from "./Models/Image.js"
import Quote from "./Models/Quote.js"
import Weather from "./Models/Weather.js"
import ToDo from "./Models/ToDo.js"
import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []

  /**@type {Image[]} */
  images = []

  /**@type {Quote[]} */
  quotes = []

  /**@type {Weather[]} */
  weather = []

  /**@type {ToDo[]} */
  toDos = []

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
