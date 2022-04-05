import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { Snack } from "./Models/Snack.js"
import { snacksService } from "./Services/SnacksService.js"
class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []

  
   moneys = 0

  snacks = [ new Snack({id:1, name: 'kitkat', price: 1.00, img: "https://images.heb.com/is/image/HEBGrocery/000112564?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0" }), new Snack({id:2, name: "snicker", price: 1.00, img: "https://www.snickers.com/cdn-cgi/image/width=472,height=472,f=auto,quality=90/sites/g/files/fnmzdf616/files/migrate-product-files/dryeqrv2efldaaoyceat.png"}), new Snack({id:3, name: "gatorade", price: 2.00, img: "https://m.media-amazon.com/images/I/71hmnkwthJL._SL1500_.jpg"})]
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