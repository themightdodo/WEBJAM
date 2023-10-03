import GameManager from "../GameManager.js";

export default class scene1{
    constructor(){
        this.gameManager = new GameManager();
        this.calcul = this.gameManager.CalculPourcentages;
        this.Affiches = this.gameManager.Affiches;

    }

    setupScene(){
        var combinaison = this.calcul.Get_combinaisons();
        console.log(combinaison);
    }
}