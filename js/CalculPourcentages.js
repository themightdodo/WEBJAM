import GameManager from "./GameManager.js";

export default class CalculPourcentages{

    constructor(){
        this.gameManager = new GameManager(); 
        this.changementScene = this.gameManager.previousChangementScene;
        this.type = this.gameManager.type;
        this.jaugeBleu = 0;
        this.jaugeRouge = 0;
        this.jaugeVert = 0;
        this.combo = false;
        this.comboBuffer = [];

        this.combos = {
            1 : 
            {
                suite : ["Rouge","Rouge","Rouge","Rouge"],
                combinaison : 5,
            },   
            2 :
            {   
                suite : ["vert","vert","vert"],
                combinaison : 5,
            },
            3 : 
            {
                suite : ["Rouge","Rouge","Rouge"],
                combinaison : 2,
            },  
            4 : 
            {
                suite : ["Bleu","Bleu","Bleu"],
                combinaison : 2,
            } 
            
        }

        this.combinaisons = {
            1 : {
                    suite : ["Mid1", "Ecolo1", "Fascho1"],
                    pourcentage : 0,
                },
            2 : { 
                    suite : ["Fascho1" , "Fascho1" , "Mid1"],
                    pourcentage : 0,
                },   
            3 : {
                    suite : ["Mid1" ,"Mid1" , "Ecolo1"],
                    pourcentage : 0,
                },   
            4 : {
                    suite : ["Ecolo1","Ecolo1", "Mid1"],
                    pourcentage : 0,
                },
            5 : {
                    suite : ["Fascho1","Fascho1", "Fascho1"],
                    pourcentage : 0, 
                }
                
        }

    }

    Add_to_buffer(type){
        this.comboBuffer.push(type);
    }

    CheckBuffer(){
        for (let i = 1; i <= 4; i++) {
            this.comboBuffer.forEach(element => {
                if(this.combos[i] === element){
                    this.combo = true;
                    return this.combinaisons[this.combos[i].combinaison];
                }
            });
        }
        this.combo = false;
        return null;
    }

    initCombinaison(){
        this.combinaisons[1].pourcentage = 100;
        this.combinaisons[2].pourcentage = 0;
        this.combinaisons[3].pourcentage = 0;
        this.combinaisons[4].pourcentage = 0;
        this.combinaisons[5].pourcentage = 0;
        this.gameManager.scene1.style.display = 'none';
        this.gameManager.scene2.style.display = 'block'
    }

    Add_Vert(){
        this.jaugeVert += 1;
    }
    Add_Rouge(){
        this.jaugeRouge += 1;
    }    
    Add_Bleu(){
        this.jaugeBleu += 1;
    }


    Calcul_Vert(){
        this.combinaisons[2].pourcentage += 20;
        this.combinaisons[3].pourcentage += 10;
        this.combinaisons[4].pourcentage += 5;
        this.combinaisons[5].pourcentage += 5;
        
        var sum = this.combinaisons[2].pourcentage + this.combinaisons[3].pourcentage + this.combinaisons[4].pourcentage + this.combinaisons[5].pourcentage;

        if( sum >= 100){
            this.combinaisons[1].pourcentage = 5;
        }

        if( sum < 100){
            this.combinaisons[1].pourcentage = 100 - sum;
        }

        var sumTotal = sum + this.combinaisons[1].pourcentage;
        if(sumTotal > 100){
            for (let i = 1; i <= 5; i++) {
                this.combinaisons[i].pourcentage = (this.combinaisons[i].pourcentage*100)/sum;
                console.log(this.combinaisons[i].pourcentage);
            }
        }
        if (sumTotal < 100){
            console.log('alerte, changez dans combinaisons');
        }

        for (let i = 1; i <= 5; i++) {
            console.log(this.combinaisons[i].pourcentage);
        }
    }

    Calcul_Rouge(){
        this.combinaisons[2].pourcentage += 30;
        this.combinaisons[3].pourcentage += 15;
        this.combinaisons[4].pourcentage += 5;
        this.combinaisons[5].pourcentage += 10;
        
        var sum = this.combinaisons[2].pourcentage + this.combinaisons[3].pourcentage + this.combinaisons[4].pourcentage + this.combinaisons[5].pourcentage;

        if( sum >= 100){
            this.combinaisons[1].pourcentage = 5;
        }
        if( sum < 100){
            this.combinaisons[1].pourcentage = 100 - sum;
        }

        var sumTotal = sum + this.combinaisons[1].pourcentage;
        if(sumTotal > 100){
            for (let i = 1; i <= 5; i++) {
                this.combinaisons[i].pourcentage = (this.combinaisons[i].pourcentage*100)/sum;
                console.log(this.combinaisons[i].pourcentage);
            }
        }
        if (sumTotal < 100){
            console.log('alerte, changez dans combinaisons');
        }

        for (let i = 1; i <= 5; i++) {
            console.log(this.combinaisons[i].pourcentage);
        }
    }

    Calcul_Bleu(){
        this.combinaisons[2].pourcentage += 20;
        this.combinaisons[3].pourcentage += 20;
        this.combinaisons[4].pourcentage += 5;
        this.combinaisons[5].pourcentage += 5;
        
        var sum = this.combinaisons[2].pourcentage + this.combinaisons[3].pourcentage + this.combinaisons[4].pourcentage + this.combinaisons[5].pourcentage;

        if( sum >= 100){
            this.combinaisons[1].pourcentage = 5;
        }
        if( sum < 100){
            this.combinaisons[1].pourcentage = 100 - sum;
        }

        var sumTotal = sum + this.combinaisons[1].pourcentage;
        if(sumTotal > 100){
            for (let i = 1; i <= 5; i++) {
                this.combinaisons[i].pourcentage = (this.combinaisons[i].pourcentage*100)/sum;
                console.log(this.combinaisons[i].pourcentage);
            }
        }
        if (sumTotal < 100){
            console.log('alerte, changez dans combinaisons');
        }

        for (let i = 1; i <= 5; i++) {
            console.log(this.combinaisons[i].pourcentage);
        }
    }

    Get_combinaisons(){
        var randomInt = Math.random() * 100;
        // var randomInt = 0;
        var interval0 = 0;
        var interval1 = this.combinaisons[1].pourcentage;
        var interval2 = this.combinaisons[1].pourcentage + this.combinaisons[2].pourcentage;
        var interval3 = this.combinaisons[1].pourcentage + this.combinaisons[2].pourcentage + this.combinaisons[3].pourcentage;
        var interval4 = this.combinaisons[1].pourcentage + this.combinaisons[2].pourcentage + this.combinaisons[3].pourcentage + this.combinaisons[4].pourcentage;
        var interval5 = this.combinaisons[1].pourcentage + this.combinaisons[2].pourcentage + this.combinaisons[3].pourcentage + this.combinaisons[4].pourcentage + this.combinaisons[5].pourcentage;
    
        console.log('random' + randomInt);

        if(interval0 <= randomInt && randomInt < interval1){
            console.log('interval 1 ' + interval1);
            return this.combinaisons[1].suite;
        }
        if(interval1 <= randomInt && randomInt < interval2){
            console.log("interval 2");
            return this.combinaisons[2].suite;
        }
        if(interval2 <= randomInt && randomInt < interval3){
            console.log("interval 3");
            return this.combinaisons[3].suite;
        }
        if(interval3 <= randomInt && randomInt < interval4){
            console.log("interval 4");
            return this.combinaisons[4].suite;
        }
        if(interval4 <= randomInt && randomInt < interval5){
            console.log("interval 5");
            return this.combinaisons[5].suite;
        }
        if(randomInt == 100){
            return this.combinaisons[5].suite;
        }

    }

}