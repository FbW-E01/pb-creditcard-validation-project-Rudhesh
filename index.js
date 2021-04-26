function validateCreditCard(creditCardNum) {
    // Number must be 16 digits, all of them must be numbers
    if (creditCardNum.length !== 16) {
        
        return false;
    }
    // You must have at least two different digits represented (all of the digits cannot be the same)
    for (let i = 0; i < creditCardNum.length; i++) {
        let element = creditCardNum[i];

        element = Number.parseInt(element)
        if (!Number.isInteger(element)) { 
            return false;   
        }
        
    //  The final digit must be even

    if (creditCardNum[creditCardNum.length-1] % 2 !== 0) {
        
        return false;
    }

   
}
// You must have at least two different digits represented (all of the digits cannot be the same)

obj = {};
for (let i = 0; i < creditCardNum.length; i++) {
    obj[creditCardNum[i]] = true;
}
if (Object.keys(obj).length < 2) {
    return false;
}

//  The sum of all the digits must be greater than 16

let total = 0;
for (let j = 0; j < creditCardNum.length; j++) {
    total += creditCardNum[j];
  
}
if (total <= 16) {
    
    return false;
}




return true ;


};
console.log(validateCreditCard('9999777788880000'));
/**** tests *****/
console.log(validateCreditCard('9999777788880000')); //{ valid: true, number: '9999-7777-8888-0000' }
console.log(validateCreditCard('6666-666666661666')); //{ valid: true, number: '6666-6666-6666-1666' }
console.log(validateCreditCard('a92332119c011112')); //{ valid: false,number: 'a923-3211-9c01-1112',error: '_invalid characters_' }
console.log(validateCreditCard('4444-444444444444')); //{ valid: false,number: '4444-4444-4444-4444',error: '_only one type of number_' }
console.log(validateCreditCard('1211111111111112')); //{ valid: true, number: '1211-1111-1111-1112' }





function validateCredit(dashes) {
   
      if ( dash = dashes.split('-').join('')
      ) {
        return dash;
    }
      }

        
  
    



console.log(validateCredit('9999-7777-8888-0000')); //{ valid: true, number: '9999-7777-8888-0000' }
console.log(validateCredit('6666-6666-6666-1666')); //{ valid: true, number: '6666-6666-6666-1666' }
console.log(validateCredit('a923-3211-9c01-1112')); //{ valid: false,number: 'a923-3211-9c01-1112',error: '_invalid characters_' }
console.log(validateCredit('4444-4444-4444-4444')); //{ valid: false,number: '4444-4444-4444-4444',error: '_only one type of number_' }
console.log(validateCredit('1211-1111-1111-1112')); //{ valid: true, number: '1211-1111-1111-1112' }
