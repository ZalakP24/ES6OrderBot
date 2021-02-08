const Order = require("./assignment1Order");

const OrderState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    SIZE:   Symbol("size"),
    TOPPINGS:   Symbol("toppings"),
    SAUCE: Symbol("sauce"),
    SALAD:  Symbol("salad"),
    QUANTITY: Symbol("quantity")
});

module.exports = class ChipotleOrder extends Order{
    constructor(){
        super();
        this.stateCur = OrderState.WELCOMING;
        this.sSize = "";
        this.sToppings = "";
        this.sSauce = "";
        this.sSalad = "";
        this.sItem = "Chipotle";
        this.sPrice = 10;
       
    }
    handleInput(sInput){
        let aReturn = [];
       
        switch(this.stateCur){
            case OrderState.WELCOMING:
                this.stateCur = OrderState.SIZE
                aReturn.push("Welcome to Rick's Chipotle");
                aReturn.push("What size would you like?");
                break;
            case OrderState.SIZE:
                this.stateCur = OrderState.TOPPINGS
                this.sSize = sInput;
                if(this.sSize == "small"){
                    this.sPrice += 2;
                }
                if(this.sSize == "medium"){
                    this.sPrice += 5;
                }
                if(this.sSize == "large"){
                    this.sPrice += 7;
                }
                aReturn.push("What toppings would you like?");
                break;           
            case OrderState.TOPPINGS:
                this.stateCur = OrderState.SAUCE
                this.sToppings = sInput;
                aReturn.push("Which Sauce would you like 1.Tomato 2.Ranch 3.Sweet Onion ?");
                break;
            case OrderState.SAUCE:
                this.stateCur = OrderState.SALAD
                this.sSauce = sInput;
                if(this.sSauce== "Mayo"){
                    this.sPrice += 2;
                }
                if(this.sSauce = "ranch"){
                    this.sPrice += 3;
                }
                if(this.sSauce == "sweet onion"){
                    this.sPrice += 4;
                }
                aReturn.push("do you want salad with that?");                        
                break;
           
            case OrderState.SALAD:                
                this.isDone(true);
                if(sInput.toLowerCase() != "no"){                       
                    this.sSalad = sInput;
                    this.sPrice += 10;
                }
              
             
            
                aReturn.push("Thank-you for your order of");
                aReturn.push(`${this.sSize} ${this.sItem} with ${this.sToppings} and ${this.sSauce} Sauce `); 
                if(this.sSalad){
                    aReturn.push(`and Salad`);
                }
                aReturn.push(`Your Total Amount is ${this.sPrice}$`)
                let d = new Date(); 
                d.setMinutes(d.getMinutes() + 20);
                aReturn.push(`Please pick it up at ${d.toTimeString()}`);
                break;
        }
        return aReturn;
    }
         break;
        }
       
    
