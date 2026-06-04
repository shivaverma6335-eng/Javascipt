     // Immediately Invoked Function Expression   ( IIFE)
// two main reason for IIFE
  //   1) global scope se koi dikkat na aaye kisi function mein (global scope ke pollution ko kam krne aur avoid krne ke liye  )
  //   2) hame kisi function ko immediately execute krna ho


    // IIFE
(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();        // Error na aaye iske liye semicolon jruri h jisse execution end ho aur dusra function call ho     

(() => {
    //Unnamed IIFE
    console.log(`DB CONNECTED two`);
})();

(function aurcode(name){
    //parameter pass krke
    console.log(`DB CONNECTED TWO ${name}`);
})("Shiva");



