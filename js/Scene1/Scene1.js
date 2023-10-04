import GameManager from "../GameManager.js";

export default class scene1 {
    constructor() {
        this.gameManager = new GameManager();
        this.scene1 = this.gameManager.scene1;
        this.calcul = this.gameManager.CalculPourcentages;
        this.Affiches = this.gameManager.Affiches;
        this.test = this.scene1.querySelector('#test');
        this.first = true;
    }

    instanciate(element,tour) {
        console.log(element);
        var affiche = document.createElement("div");
        
       
        var img = document.createElement("img");
        img.id = element.name;
        var type = "";
        type = element.type;
        this.declinaison(tour,element,img);
        this.gameManager.objets.append(img);
        img.style.width = "50%";
        img.style.height = "fit-content";
        img.style.cursor = "pointer";
        img.addEventListener("click", (e) => {
            this.gameManager.onClickAffiche(element.type,e);
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
        img.addEventListener("mouseover", function(){
            img.animate(
                [
                    {transform:"translateY(0px)"},
                    {transform:"translateY(-40px)"},
                ],
                {
                    duration:400,
                    easing:"ease-out",
                }
            )
            img.style.transform = "translateY(-40px)";
        });
        img.addEventListener("mouseleave", function(){
            img.animate(
                [
                    {transform:"translateY(-40px)"},
                    {transform:"translateY(0px)"},
                    
                ],
                {
                    duration:400,
                    easing:"ease-out",
                }
            )
            img.style.transform = "translateY(0px)";
        });
        img.animate(
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

    declinaison(tour,element,img){
        if(tour >= 4){
                img.src = element.declinaison2;
        }
        else if(tour >= 6){
            img.src = element.declinaison3;
        }
        else{
            img.src = element.declinaison1;
        }
    }

    setupScene(tour) {
        this.gameManager.tampon.tamponed = false;
        var combinaison = this.calcul.CheckBuffer();
        if(this.calcul.combo){
            console.log(combinaison);
        }
        if(!this.calcul.combo){
            console.log("MARFCHE");
            combinaison = this.calcul.Get_combinaisons();
        }
        if (tour > 1) {
            
            combinaison.forEach(combi_elem => {
                this.Affiches.forEach(element => {
                    if (combi_elem === element.name) {
                        this.instanciate(element,tour);
                    }
                });
            });
        } else {
            this.test.addEventListener('click', function () {
                this.calcul.initCombinaison();
            }.bind(this));
        }
    }
}