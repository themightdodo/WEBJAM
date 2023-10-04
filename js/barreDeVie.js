import GameManager from "./GameManager.js";
export default class barreDeVie{
    constructor(){
    this.gameManager = new GameManager();
    this.pv = 12;
    this.poison = false;
    this.degatsPoison = 0;

    }

    calculBarreDeVie(type){
        if(this.pv <= 0){
            this.gameManager.mort = true;
        }
        if(type == "Rouge"){
            this.poison = true;
            this.degatsPoison += 2;
            this.pv -= this.degatsPoison;
        }
        if(type == "Bleu"){
            if(!this.poison){
                this.pv -= 1;
            }
            if(this.poison){
                this.pv -= this.degatsPoison;
            }
        }
        if(type == "Vert"){
            if(this.poison){
                this.pv -= this.degatsPoison;
                this.poison = false;
            }
        }
    }
}