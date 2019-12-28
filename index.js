

const checkSecondCond = (divisorsArray, amountOfDivisors, beer) => {
    if (beer === 0) {
        return true;
    }
    if (amountOfDivisors === 0) {
        return false;
    }
    if (divisorsArray[amountOfDivisors - 1] > beer) {
        return checkSecondCond(divisorsArray, amountOfDivisors - 1, beer);
    }
    return checkSecondCond(divisorsArray, amountOfDivisors - 1, beer) ||
        checkSecondCond(divisorsArray, amountOfDivisors - 1, beer - divisorsArray[amountOfDivisors - 1]);
}


const  checkBeer  = (beer) =>{
    const divisors = [1];
    let sumOfDivisors = 0;
    let max = beer/2;
    let divisor = 2
    while (divisor <= max){
        if(beer % divisor === 0) {
            if(!divisors.includes(divisor)) {
                divisors.push(divisor);
                sumOfDivisors += divisor;
            }
            max = beer/divisor;
            if(!divisors.includes(max)) {
                divisors.push(max);
                sumOfDivisors += max;
            }
        }
        divisor++;
    }
    // check first condition
    if(sumOfDivisors > beer) { 
        //sort in descending
        divisors.sort((a, b) =>  b - a );
        // check second condition
        if(!checkSecondCond(divisors,divisors.length,beer)) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
Array.from(Array(100).keys()).forEach((beer) => checkBeer(beer) ? console.log(beer) : false);

