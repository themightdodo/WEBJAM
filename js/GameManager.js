export default class GameManager{
    static instance
    constructor(canvas){
        if(GameManager.instance){
            return GameManager.instance
        }
    }
}