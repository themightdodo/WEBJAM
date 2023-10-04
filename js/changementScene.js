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
        this.button2 = this.scene1.querySelector('button');
        this.button3 = this.scene2.querySelector('button');
        this.tour = 0;

        this.button1.addEventListener('click', this.menuScene1.bind(this));
        this.button2.addEventListener('click', this.Scene1Scene2.bind(this));
        this.button3.addEventListener('click', this.Scene2Scene1.bind(this));
        this.init();
    }
    init(){
        this.menu.style.display = 'block';
        this.scene1.style.display = 'none';
        this.scene2.style.display = 'none';
    }
    initScene1(){
        this.tour += 1;
        console.log(this.tour);
        if(this.tour > 1){
            this.gameManager.objets.querySelectorAll('*').forEach(element => {
                element.remove();
            }); 
        }
        this.Scene1.setupScene(this.tour);
    }
    menuScene1(){
        this.menu.style.display = 'none';
        this.scene1.style.display = 'block'
        this.initScene1();
    }
    Scene1Scene2(){
        if(this.tour >= 8){
            console.log("fin");
        }
        if(this.gameManager.mort){
            console.log("JBZDMOIFNAZMOZD JAZPE%LVFQZOEPJFQMOEZKNZK?");
        }
        this.scene1.style.display = 'none';
        this.scene2.style.display = 'block'
    }
    Scene2Scene1(){
        this.scene2.style.display = 'none';
        this.scene1.style.display = 'block';
        this.initScene1();
    }

}

