import GameManager from "./GameManager.js";


export default class Tampon{
    constructor(){
        this.gameManager = new GameManager();
        this.objets = this.gameManager.objets;
        this.mainUrl = "./Assets/Affiches/Main.gif";
        this.sceauUrl = "./Assets/Affiches/sceau.png";
        this.tamponed = false;
    }
    
    tampon(event){
        if(this.tamponed){
            return;
        }
        let x = event.clientX;
        let y = event.clientY;
        let _position = `X: ${x}<br>Y: ${y}`;
    
        var main = document.createElement("img");
        main.style.position = "absolute";
        main.style.width = "33%";
        main.src = this.mainUrl;
        this.objets.append(main);
        main.style.top = (y-main.offsetWidth/2) + "px";
        main.style.left = (x-main.offsetWidth/2) + "px";
        
        setTimeout(() => {
           main.remove(); 
           var sceau = document.createElement("img");
           sceau.style.position = "absolute";
           sceau.style.width = "10%";
           sceau.src = this.sceauUrl;
           this.objets.append(sceau);
           sceau.style.top = (y-sceau.offsetWidth/2) + "px";
           sceau.style.left = (x-sceau.offsetWidth/2) + "px";

        }, 750);
        this.tamponed = true;
        
       
    }
}