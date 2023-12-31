import AfficheAssets from "./AfficheData.js";
import CalculPourcentages from "./CalculPourcentages.js";
import changementScene from "./changementScene.js";
import Scene1 from "./Scene1/Scene1.js";
import barreDeVie from "./barreDeVie.js";
import Tampon from "./Tampon.js";

export default class GameManager{
    static instance
    constructor(){
        if(GameManager.instance){
            return GameManager.instance
        }
        GameManager.instance = this;
        this.Affiches = AfficheAssets;
        this.barreDeVie = new barreDeVie();
        this.menu = document.getElementById('menu');
        this.scene1 = document.getElementById('scene1');
        this.scene2 = document.getElementById('scene2');
        this.objets = this.scene1.querySelector('.objets');
        this.tampon = new Tampon();
        this.CalculPourcentages = new CalculPourcentages();
        this.scene1_ = new Scene1();
        this.mort = false;
        
        this.changementScene = new changementScene();
        

        this.type = {
            vert : "Vert",
            rouge : "Rouge",
            bleu : "Bleu",
        };

        this.affichedebut = document.querySelector("#affiche1");
        this.setAffiche1();
    }

    setAffiche1(){   
        this.affichedebut.style.width = "50%";
        this.affichedebut.style.height = "fit-content";
        this.affichedebut.style.cursor = "pointer";
        let element = null;
        let e = null;
        this.affichedebut.addEventListener("click", (e) => {
            
            this.tampon.tampon(e);
            setTimeout(() => {
                this.scene1.animate(
                    [
                        {transform : "translateX(-10px)"},
                        {transform : "translateX(10px)"},
                        {transform : "translateX(-5px)"},
                        {transform : "translateX(5px)"},
                        {transform : "translateX(0px)"},
                    ],
                    {
                        duration : 400,
                        easing: "ease-out",
                    },
                )
            }, 300);
        });
        this.affichedebut.addEventListener("mouseover", function(){
            this.affichedebut.animate(
                [
                    {transform:"translateY(0px)"},
                    {transform:"translateY(-40px)"},
                ],
                {
                    duration:400,
                    easing:"ease-out",
                }
            )
            this.affichedebut.style.transform = "translateY(-40px)";
        }.bind(this));
        this.affichedebut.addEventListener("mouseleave", function(){
            this.affichedebut.animate(
                [
                    {transform:"translateY(-40px)"},
                    {transform:"translateY(0px)"},
                    
                ],
                {
                    duration:400,
                    easing:"ease-out",
                }
            )
            this.affichedebut.style.transform = "translateY(0px)";
        }.bind(this));
        this.affichedebut.animate(
            [
                {transform : "translateY(-400px)"},
                {transform : "translateY(0px)"},
            ],
            {
                duration:600,
                easing:"ease-out",
            }
        )
    }


    onClickAffiche(type,event){
        if(this.tampon.tamponed){
            return;
        }
        
        this.barreDeVie.calculBarreDeVie(type);
        this.CalculPourcentages.Add_to_buffer(type);
        if(type == this.type.rouge){
            this.CalculPourcentages.Add_Rouge();
            if(!this.CalculPourcentages.combo){
                this.CalculPourcentages.Calcul_Rouge();
            } 
        }
        if(type == this.type.vert){
            this.CalculPourcentages.Add_Vert();
            if(!this.CalculPourcentages.combo){
                this.CalculPourcentages.Calcul_Vert();
            } 
        }
        if(type == this.type.bleu){
            this.CalculPourcentages.Add_Bleu();
            if(!this.CalculPourcentages.combo){
                this.CalculPourcentages.Calcul_Bleu();
            }
        }
        this.tampon.tampon(event);
        this.changementScene.Scene1Scene2();
    }
}
