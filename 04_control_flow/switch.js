// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
       // break;
    case "april":
        console.log("april");
       break;

    default:
        console.log("default case match");
        //break;
}



 /*switch statement upar se neeche tak matching case dhoondta hai.

Jaise hi usko pehla matching case mil jata hai, wo uske andar ka code execute karta hai.

Uske baad, jab tak usko koi break keyword nahi milta, wo neeche ke saare cases (including default case) ka code bina kisi condition ko check kiye execute karta chala jata hai. */