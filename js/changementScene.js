// let menu = document.getElementById('menu');
// let scene1 = document.getElementById('scene1');
// let scene2 = document.getElementById('scene2');

// let button1 = menu.querySelector('button');
// let button2 = scene1.querySelector('button');
// let button3 = scene2.querySelector('button');

// export default class changementScene {
//     constructor(){

//     }
// }

import GameManager from "./GameManager.js";

export default class changementScene{
    constructor(){
        this.gameManager = new GameManager(); 
        this.Scene1 = this.gameManager.scene1_;
        this.menu = this.gameManager.menu;
        this.scene1 = this.gameManager.scene1;
        this.scene2 = this.gameManager.scene2;
        this.button1 = this.menu.querySelector('button');
        this.button3 = this.scene2.querySelector('button');
        this.restart = this.scene2.querySelector("#mort");
        this.baseAffiche = document.querySelector("#test");
        this.tour = 0;

        this.button1.addEventListener('click', this.menuScene1.bind(this));
        this.button3.addEventListener('click', this.Scene2Scene1.bind(this));
        this.changescene = false;
        this.initfirst = false;
        this.scene2BG == null;
        this.init();
        this.update();
    }
    update(){
        console.log(this.tour);
        if(this.tour === 1&&this.initfirst === false&&this.scene2.style.display === "block"){
            console.log("oui");
            var time3 = setTimeout(function(){
                this.Scene2Scene1();
                
            }.bind(this),8000);
            this.initfirst = true;
        }
        if(this.tour === 2){
            this.scene2.querySelector(".fond").style.backgroundImage = "url(../Assets/Affiches/pain.png)";
        }
        window.requestAnimationFrame(() => this.update());

    }
    Reload(){
        
    }
    init(){
        this.tour = 0;
        this.gameManager.barreDeVie.pv = this.gameManager.barreDeVie.maxPV;
        this.gameManager.barreDeVie.poison = false;
        this.gameManager.barreDeVie.degatsPoison = 0;
        this.menu.style.display = 'flex';
        this.scene1.style.display = 'none';
        this.scene2.style.display = 'none';
    }
    initScene1(){
        this.tour += 1;
        console.log(this.tour);
        this.gameManager.objets.querySelectorAll('*').forEach(element => {
            element.remove();
        }); 
        if(this.tour === 1){
            this.gameManager.objets.append(this.baseAffiche);
        }
        this.Scene1.setupScene(this.tour);
    }
    menuScene1(){
        this.menu.style.display = 'none';
        this.scene1.style.display = 'block';
        this.initScene1();
    }
    Scene2Scene1(){
        this.changescene = false;
        this.scene2.style.display = 'none';
        this.scene1.style.display = 'block';

        this.initScene1();
    }
    Scene1Scene2(){
        if(this.scene2BG != null){
            this.scene2.querySelector(".fond").style.backgroundImage = this.scene2BG;
        }
        if(this.changescene){
            return;
        }
        if(this.tour >= 8){
            this.restart.style.display = "block";
            this.restart.addEventListener("click", function(){
                location.reload();
            }.bind(this))
            console.log("fin");
        }
        if(this.gameManager.mort){
            console.log("JBZDMOIFNAZMOZD JAZPE%LVFQZOEPJFQMOEZKNZK?");
        }
        this.scene2.querySelector(".fond").style.backgroundSize = "cover";
        this.scene2.querySelector(".fond").style.width= "100%";
        this.scene2.querySelector(".fond").style.height = "100%";
        if(this.gameManager.barreDeVie.pv >= this.gameManager.barreDeVie.maxPV - (this.gameManager.barreDeVie.maxPV/3)){

            this.scene2BG = "url('../Assets/Affiches/5827_breadstare (1).png')";
        }
        else if(this.gameManager.barreDeVie.pv >= this.gameManager.barreDeVie.maxPV - ((this.gameManager.barreDeVie.maxPV/3)*2)){

            this.scene2BG = "url('../Assets/Affiches/cringe.jpg')";
        }
        else{
            this.scene2BG = "url('../Assets/Affiches/hehe.jpg')";
        }
        
        if(this.gameManager.barreDeVie.pv <= 0){
            this.scene2.querySelector(".fond").style.backgroundImage = "url('../Assets/Affiches/chill.png')";
            this.restart.style.display = "block";
            this.restart.addEventListener("click", function(){
                location.reload();
            }.bind(this))
            setTimeout(function() {
                this.scene1.style.display = 'none';
                this.scene2.style.display = 'block';
            },3000);
        }
        else{
            var time1 = setTimeout(function() {
                this.scene1.style.display = 'none';
                this.scene2.style.display = 'block';
            },3000);
            if(this.tour < 8){
                var time2 = setTimeout(function(){
                    this.Scene2Scene1();
                }.bind(this),8000);
            }
        }
        this.changescene = true;
    }
}

