import GameManager from "./GameManager.js";

export default class CalculPourcentages{

    constructor(){
        this.gameManager = new GameManager(); 
        this.type = this.gameManager.type;
        this.jaugeBleu = 0;
        this.jaugeRouge = 0;
        this.jaugeVert = 0;



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
    initCombinaison(){
        this.combinaisons[1].pourcentage = 100;
        console.log(this.combinaisons[1].pourcentage);
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

    Calcul_Bleu(){
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

    Get_combinaisons(){
        var randomInt = Math.random() * 100;
        var interval0 = 0;
        var interval1 = this.combinaisons[1].pourcentage;
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