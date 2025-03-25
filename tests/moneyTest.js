import { formatCurrency } from "../scripts/utils/money.js";

console.log('Test Suite : formatCurrency')

console.log('Converts Cents into Dollars');
if (formatCurrency(2095)=== '20.95'){
    console.log('Passed');
}  else {
    console.log('Failed');
}



console.log('Works with Zero');
if (formatCurrency (0) ==='0.00'){
    console.log('passed');
}else{
    console.log('failed');
}



console.log('RoundsUp to the Nearest Cent');
if (formatCurrency(2000.5) ==='20.01'){
 console.log('passed');
} else{
    console.log('Failed');
}