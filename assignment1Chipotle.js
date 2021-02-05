const Order = require("./assignment1Order");

const OrderState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    SIZE:   Symbol("size"),
    TOPPINGS:   Symbol("toppings"),
    SAUCE: Symbol("sauce"),
    DRINKS:  Symbol("drinks")
});

module.exports = class ChipotleOrder extends Order{
    constructor(){
        super();
        this.stateCur = OrderState.WELCOMING;
        this.sSize = "";
        this.sToppings = "";
        this.sSauce = "";
        this.sDrinks = "";
        this.sItem = "Chipotle";
    }
    handleInput(sInput){
        let aReturn = [];
        switch(this.stateCur){
            case OrderState.WELCOMING:
                this.stateCur = OrderState.SIZE;
                aReturn.push("Welcome to Zalak's Chipotle");
                aReturn.push("What size would you like?");
                break;
            case OrderState.SIZE:
                this.stateCur = OrderState.TOPPINGS
                this.sSize = sInput;
                aReturn.push("What toppings would you like?");
                break;           
            case OrderState.TOPPINGS:
                this.stateCur = OrderState.SAUCE
                this.sToppings = sInput;
                aReturn.push("Which Sauce would you like?");
                break;
            case OrderState.SAUCE:
                this.stateCur = OrderState.DRINKS
                this.sSauce = sInput;
                aReturn.push("Would you like drinks with that?");
                break;
            case OrderState.DRINKS:
                this.isDone(true);
                if(sInput.toLowerCase != "no"){
                    this.sDrinks = sInput;
                }
                aReturn.push("Thank-you for your order of");
                aReturn.push(`${this.sSize} ${this.sItem} with ${this.sToppings} and ${this.sSauce} Sauce`);
                if(this.sDrinks){
                    aReturn.push(this.sDrinks);
                }
                let d = new Date(); 
                d.setMinutes(d.getMinutes() + 20);
                aReturn.push(`Please pick it up at ${d.toTimeString()}`);
                break;
        }
        return aReturn;
    }
         break;
        }
       
    
