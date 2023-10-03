import GameManager from "../GameManager.js";

export default class scene1{
    constructor(){
        this.gameManager = new GameManager();
        this.scene1 = this.gameManager.scene1;
        this.calcul = this.gameManager.CalculPourcentages;
        this.Affiches = this.gameManager.Affiches;

    }

    instanciate(id){
        var affiche = document.createElement("div");
        affiche.id = id;
        var img = document.createElement("img");
        this.Affiches.forEach(element => {
            if(id ===this.Affiches.indexOf(element.name)){
                img.src = element.declinaison1;
            }
        });
        this.scene1.append(affiche);
        affiche.append(img);
       
    }

    setupScene(){
        var combinaison = this.calcul.Get_combinaisons();
        combinaison.forEach(combi_elem => {
            this.Affiches.forEach(element => {
                if(combi_elem == element.name){
                    this.instanciate(this.Affiches.indexOf(element.name));
                }
            });
        });
    }
}