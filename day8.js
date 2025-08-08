//STUDY purpose

//find current time
let current=new Date();
let day=current.getDay();//unt
console.log(current)
console.log(current.toString());//local
console.log(day);


//create class
class dark{
    constructor(velprasath){
        this.velprasath=velprasath;

console.log(velprasath)
    }
}

//simple bank code 
class bank{
    constructor(initialamount=0){
        this._balance=initialamount;
    }

    get balance(){
        return this._balance;
    }
    set balance(amount){
        if (amount>0){
            this._balance =this._balance+amount;
            console.log(amount);
        }
    }
}

let b=new bank(10);
console.log(b)

b.balance=100;
console.log(b)