import AfficheAssets from "./AfficheData.js";
import CalculPourcentages from "./CalculPourcentages.js";
import changementScene from "./changementScene.js";
import Scene1 from "./Scene1/Scene1.js";

export default class GameManager{
    static instance
    constructor(){
        if(GameManager.instance){
            return GameManager.instance
        }
        GameManager.instance = this;
        this.menu = document.getElementById('menu');
        this.scene1 = document.getElementById('scene1');
        this.scene2 = document.getElementById('scene2');
        this.CalculPourcentages = new CalculPourcentages();
        this.scene1_ = new Scene1();
        this.Affiches = AfficheAssets;
        
        this.changementScene = new changementScene();
        

        this.type = {
            vert : "Vert",
            rouge : "Rouge",
            bleu : "Bleu",
        }
    }
}
