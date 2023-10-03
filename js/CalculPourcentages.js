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
        this.suite = 
        [["Rouge","Rouge","Rouge","Rouge"],
        ["Vert","Vert","Vert"],
        ["Rouge","Rouge","Rouge"],
        ["Bleu","Bleu","Bleu"],];
        this.combos = {
            1 : 
            {
                pourcentages : [25,30,15,5,25],
                combinaison : 5,
            },   
            2 :
            {   
                pourcentages : [25,30,15,5,25],
                combinaison : 5,
            },
            3 : 
            {
                pourcentages : [10,30,20,10,30],
                combinaison : 2,
            },  
            4 : 
            {
                pourcentages : [55,10,10,5,20],
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
        this.comboBuffer.unshift(type);
        console.log(this.comboBuffer);
        
    }

    CheckBuffer(){
        if(this.comboBuffer[0] === this.suite[0][0]&&this.comboBuffer[1] === this.suite[0][1]&&
            this.comboBuffer[2] === this.suite[0][2]&&this.comboBuffer[3] === this.suite[0][3]){
            this.combo = true;
            this.setPourcentages(this.combos[1].pourcentages[0],this.combos[1].pourcentages[1],
                this.combos[1].pourcentages[2],this.combos[1].pourcentages[3],this.combos[1].pourcentages[4]);
            this.comboBuffer = [];
            console.log("combo1");
            this.gameManager.mort = true;
            return this.combinaisons[this.combos[1].combinaison].suite;
        }
        if(this.comboBuffer[0] === this.suite[1][0]&&this.comboBuffer[1] === this.suite[1][1]&&
            this.comboBuffer[2] === this.suite[1][2]){
            this.combo = true;
            this.setPourcentages(this.combos[2].pourcentages[0],this.combos[2].pourcentages[2],
                this.combos[2].pourcentages[2],this.combos[2].pourcentages[3],this.combos[2].pourcentages[4]);
            console.log("combo2");
            this.comboBuffer = [];
            return this.combinaisons[this.combos[2].combinaison].suite;
        }
        if(this.comboBuffer[0] === this.suite[2][0]&&this.comboBuffer[1] === this.suite[2][1]&&
            this.comboBuffer[2] === this.suite[2][2]){
            this.combo = true;
            this.setPourcentages(this.combos[3].pourcentages[0],this.combos[3].pourcentages[3],
                this.combos[3].pourcentages[3],this.combos[3].pourcentages[3],this.combos[3].pourcentages[4]);
            console.log("combo3");
            return this.combinaisons[this.combos[3].combinaison].suite;
        }
        if(this.comboBuffer[0] === this.suite[3][0]&&this.comboBuffer[1] === this.suite[3][1]&&
            this.comboBuffer[2] === this.suite[3][2]){
            this.combo = true;
            this.setPourcentages(this.combos[4].pourcentages[0],this.combos[4].pourcentages[4],
                this.combos[4].pourcentages[4],this.combos[4].pourcentages[3],this.combos[4].pourcentages[4]);
            console.log("combo4");
            this.comboBuffer = [];
            return this.combinaisons[this.combos[4].combinaison].suite;
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

    setPourcentages(nb1,nb2,nb3,nb4,nb5){
        this.combinaisons[1].pourcentage = nb1;
        this.combinaisons[2].pourcentage = nb2;
        this.combinaisons[3].pourcentage = nb3;
        this.combinaisons[4].pourcentage = nb4;
        this.combinaisons[5].pourcentage = nb5;
        for (let i = 1; i <= 5; i++) {
            console.log("Combo" + this.combinaisons[i].pourcentage);
        }
    };

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