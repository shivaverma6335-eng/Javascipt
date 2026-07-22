// let myName = "Shiva      "

// console.log(myName.trueLength);

let myHeros = ["Thor", "spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman: "Sling",

    getSpiderPower: function(){
        console.log(`Spidy power  ${this.spiderman}`);
        
    }
}

 Object.prototype.shiva = function(){
    console.log(`Jai shree Ram`);
    
 }

 Array.prototype.heyShiva = function(){
    console.log(`Shiva Verma`);
    
 }
heroPower.shiva()
myHeros.shiva()  // Object me banaya h to Array,String,Function sbme aa jayega
myHeros.heyShiva()
// heroPower.heyShiva()

//inheritance

const user = {
    name: "Chai",
    email:"Chai@gmail.com"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport= {
    isAvailable:false
    
}

const TASupport = {
        makeAssignment :"Js Assignment",
        fullTime:true,
        __proto__:TeachingSupport //
    }
    console.log(TASupport.isAvailable);
    
    Teacher.__proto__ = user
    console.log(Teacher.name);
    


    //modern syntax

    // Object.setPrototupeof(TeachingSupport,Teacher)



 //khud ka bhi prototype bna skte 

    let anotherUsername = "chaiAurCode   "

    String.prototype.trueLength = function(){
        console.log(`${this}`);
        console.log(`True length is : ${this.trim().length}`);
        
    }

    anotherUsername.trueLength()
    "shiva   ".trueLength()