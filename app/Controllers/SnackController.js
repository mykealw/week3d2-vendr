import { Pop } from "../Utils/Pop.js";
import { ProxyState } from "../AppState.js";
import { snacksService } from "../Services/SnacksService.js";

function _drawSnacks(){
let template = ''
ProxyState.snacks.forEach(s => template += s.Template)
document.getElementById('snacks').innerHTML = template

}

function _drawMoney(){
document.getElementById('moneys').innerText = ProxyState.moneys.toString()

}

export class SnacksController {
    constructor(){
        // console.log("hello from controller");
        ProxyState.on('snacks', _drawSnacks)
        ProxyState.on('moneys', _drawMoney)
        
        _drawMoney()
        _drawSnacks()
        
        
        
    }
    
    getMoney(){
        snacksService.getMoney()
    }
    // ProxyState.moneys += 10
    // console.log("lovely money");
    // _drawMoney()
    // }

    buySnacks(name){
        snacksService.buySnacks(name)
        // console.log("hehehe");
        // _drawSnacks()
    }
}