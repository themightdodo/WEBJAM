import AfficheAssets from "./AfficheData.js";

export default class GameManager{
    static instance
    constructor(){
        if(GameManager.instance){
            return GameManager.instance
        }
        this.menu = document.querySelector(".menu");
        this.scene1 = document.querySelector(".scene1");
        this.scene2 = document.querySelector(".scene2");
        this.Affiches = AfficheAssets;
        
        this.type = {
            vert,
            rouge,
            bleu,
        }
    }
}