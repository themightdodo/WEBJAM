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
        this.Affiches = AfficheAssets;
        this.menu = document.getElementById('menu');
        this.scene1 = document.getElementById('scene1');
        this.scene2 = document.getElementById('scene2');
        this.CalculPourcentages = new CalculPourcentages();
        this.scene1_ = new Scene1();
        
        this.changementScene = new changementScene();
        

        this.type = {
            vert : "Vert",
            rouge : "Rouge",
            bleu : "Bleu",
        }
    }
    onClickAffiche(type){
        if(type == this.type.rouge){
            this.CalculPourcentages.Add_Rouge();
            if(this.CalculPourcentages.CheckBuffer()){
                
            } 
            else{this.CalculPourcentages.Calcul_Rouge();}
            
        }
        if(type == this.type.vert){
            this.CalculPourcentages.Add_Vert();
            if(this.CalculPourcentages.CheckBuffer()){

            } 
            else{this.CalculPourcentages.Calcul_Vert();}
        }
        if(type == this.type.bleu){
            this.CalculPourcentages.Add_Bleu();
            if(this.CalculPourcentages.CheckBuffer()){

            } 
            else{this.CalculPourcentages.Calcul_Bleu();
            }
        }

        this.changementScene.Scene1Scene2();
    }
}
