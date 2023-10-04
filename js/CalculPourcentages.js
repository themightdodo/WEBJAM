import GameManager from "./GameManager.js";

export default class CalculPourcentages{

    constructor(){
        this.gameManager = new GameManager(); 
        this.type = this.gameManager.type;
        this.jaugeBleu = 0;
        this.jaugeRouge = 0;
        this.jaugeVert = 0;

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
                if(combos[i] === element){
                    return this.combinaisons[combos[i].combinaison];
                }
            });
        }
        return null;
    }

    initCombinaison(){
        this.combinaisons[1].pourcentage = 100;
        console.log(this.combinaisons[1].pourcentage);
    }


    Calcul_Vert(){
        this.jaugeVert += 1;

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
        this.jaugeRouge += 1;

        this.combinaisons[2].pourcentage += 30;
        this.combinaisons[3].pourcentage += 15;
        this.combinaisons[4].pourcentage += 5;
        this.combinaisons[5].pourcentage += 10;
        
        var sum = this.combinaisons[2].pourcentage + this.combinaisons[3].pourcentage + this.combinaisons[4].pourcentage + this.combinaisons[5].pourcentage;

        if( sum > 100){
            this.combinaisons[1].pourcentage = 5;
        }
        else{
            this.combinaisons[1].pourcentage = 100 - sum;
        }
        this.combinaisons.forEach(element => {
            element.pourcentage = (element.pourcentage*100)/sum;
            console.log(element.pourcentage);
        });
    }

    Calcul_Bleu(){
        this.jaugeBleu += 1;

        this.combinaisons[2].pourcentage += 20;
        this.combinaisons[3].pourcentage += 20;
        this.combinaisons[4].pourcentage += 5;
        this.combinaisons[5].pourcentage += 5;
        
        var sum = this.combinaisons[2].pourcentage + this.combinaisons[3].pourcentage + this.combinaisons[4].pourcentage + this.combinaisons[5].pourcentage;

        if( sum > 100){
            this.combinaisons[1].pourcentage = 5;
        }
        else{
            this.combinaisons[1].pourcentage = 100 - sum;
        }
        this.combinaisons.forEach(element => {
            element.pourcentage = (element.pourcentage*100)/sum;
            console.log(element.pourcentage);
        });
    }

    Get_combinaisons(){
        // var randomInt = Math.random() * 100;
        var randomInt = 0;
        var interval0 = 0;
        var interval1 = 20;
        var interval2 = this.combinaisons[1].pourcentage + this.combinaisons[2].pourcentage;
        var interval3 = this.combinaisons[1].pourcentage + this.combinaisons[2].pourcentage + this.combinaisons[3].pourcentage;
        var interval4 = this.combinaisons[1].pourcentage + this.combinaisons[2].pourcentage + this.combinaisons[3].pourcentage + this.combinaisons[4].pourcentage;
        var interval5 = this.combinaisons[1].pourcentage + this.combinaisons[2].pourcentage + this.combinaisons[3].pourcentage + this.combinaisons[4].pourcentage + this.combinaisons[5].pourcentage;

        if(interval0 <= randomInt < interval1){
            return this.combinaisons[1].suite;
        }
        if(interval1 <= randomInt < interval2){
            return this.combinaisons[2].suite;
        }
        if(interval2 <= randomInt < interval3){
            return this.combinaisons[3].suite;
        }
        if(interval3 <= randomInt < interval4){
            return this.combinaisons[4].suite;
        }
        if(interval4 <= randomInt < interval5){
            return this.combinaisons[5].suite;
        }
        if(randomInt == 100){
            return this.combinaisons[5].suite;
        }
    }

}