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

    instanciate(element) {
        console.log(element);
        var affiche = document.createElement("div");
        affiche.id = element.name;
        var img = document.createElement("img");
        var type = "";
        img.src = element.declinaison1;
        type = element.type;
        this.gameManager.objets.append(affiche);
        affiche.append(img);
        affiche.addEventListener("click", function () {
            this.gameManager.onClickAffiche(element.type)
        }.bind(this));
    }

    setupScene(tour) {
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
                        this.instanciate(element);
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