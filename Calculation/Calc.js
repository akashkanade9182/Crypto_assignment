const porcess = require("process");
const commond = process.argv;

switch (commond[5]) {

     case 'plus':
          {
               let result = Number(commond[4]) + Number(commond[6])
               console.log(` ${commond[4]} ${commond[5]} ${commond[6]} is ${result}`)
               break;
          }
     case 'minus':
          {
               let result = Number(commond[4]) - Number(commond[6])
               console.log(` ${commond[4]} ${commond[5]} ${commond[6]} is ${result}`)
               break;
          }
     case 'multiply ':
          {
               let result = Number(commond[4]) * Number(commond[7])
               console.log(` ${commond[4]} ${commond[5]} by ${commond[7]} is ${result}`)
               break;
          }
     case 'divided':
          {
               let result = Number(commond[4]) / Number(commond[7])
               console.log(` ${commond[4]} ${commond[5]} ${commond[7]} is ${result}`)
               break;
          }
     default:
          console.log('Error: Unknown operator');
          process.exit(1);

}