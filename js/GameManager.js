export default class GameManager{
    static instance
    constructor(){
        if(GameManager.instance){
            return GameManager.instance
        }
    }
}