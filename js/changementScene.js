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

class changementScene{
    constructor(){
        this.menu = document.getElementById('menu');
        this.scene1 = document.getElementById('scene1');
        this.scene2 = document.getElementById('scene2');
        this.button1 = this.menu.querySelector('button');
        this.button2 = this.scene1.querySelector('button');
        this.button3 = this.scene2.querySelector('button');

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
    menuScene1(){
        this.menu.style.display = 'none';
        this.scene1.style.display = 'block'
    }
    Scene1Scene2(){
        this.scene1.style.display = 'none';
        this.scene2.style.display = 'block'
    }
    Scene2Scene1(){
        this.scene2.style.display = 'none';
        this.scene1.style.display = 'block'
    }
}

let test = new changementScene();