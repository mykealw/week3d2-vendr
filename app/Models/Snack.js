import { generateId } from "../Utils/generateId.js"

export class Snack {
constructor(data){
this.id = data.id    
this.name = data.name
this.price = data.price
this.img = data.img




}

get Template() {
    return /*html*/ `
    <div class="col-4">
        <h4>${this.name}</h4>
        <img src="${this.img}" alt="">
        <h4>$ ${this.price}</h4>
        <button class="btn btn-success" onclick="app.snackController.buySnacks('${this.name}')">Buy Snack</button>
    </div>
    `





}


}