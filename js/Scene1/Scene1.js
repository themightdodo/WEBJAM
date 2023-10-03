import GameManager from "../GameManager.js";

export default class scene1{
    constructor(){
        this.gameManager = new GameManager();
        this.calcul = this.gameManager.CalculPourcentages;
        this.Affiches = this.gameManager.Affiches;
        this.Scene1 = this.gameManager.scene1;
        this.test = this.Scene1.querySelector('#test');
    }

    setupScene(){
        var combinaison = this.calcul.Get_combinaisons();
        console.log('combinaison : ' + combinaison);

        this.test.addEventListener('click', function(){
            this.calcul.initCombinaison();
        }.bind(this));
    }
}