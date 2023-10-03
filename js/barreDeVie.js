
class BarreDeVie{
    constructor(){
    this.pv = 12;
    this.poison = false;
    this.degatsPoison = 0;
    // this.type = ?????
    }

    calculBarreDeVie(){
        if(this.type == "Rouge"){
            this.poison = true;
            this.degatsPoison += 2;
            this.pv -= this.degatsPoison;
        }
        if(this.type == "Bleu"){
            if(!this.poison){
                this.pv -= 1;
            }
            if(this.poison){
                this.pv -= this.degatsPoison;
            }
        }
        if(this.type == "Vert"){
            if(this.poison){
                this.pv -= this.degatsPoison;
                this.poison = false;
            }
        }
    }
}