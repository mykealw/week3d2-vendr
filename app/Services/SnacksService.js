import { ProxyState } from "../AppState.js";
import {Snack} from "../Models/Snack.js"

class SnacksService{

buySnacks(name){
 let snackFound = ProxyState.snacks.find( s => s.name == name)
 if( snackFound.price <= ProxyState.moneys){
     ProxyState.moneys -= snackFound.price
    //  console.log("you bought", snackFound, "and it cost", snackFound.price);
     snackFound.price += .5
 }
// console.log('you found', snackFound);
ProxyState.snacks = ProxyState.snacks
}
getMoney(){
    ProxyState.moneys += 10
    console.log("lovely money");
    }

}

export const snacksService = new SnacksService(); 