// problem 1

function filterEvenNumbers(numbers: number[]):number[]{
    return numbers.filter(number=>number%2===0)
}


// problem 2 

function reverseString(text:string):string {
    return text.split("").reverse().join('');
}




// problem 3

type StringOrNumber = string | number;

function checkType(value : StringOrNumber):string {
    if(typeof value === 'string'){
        return "String"
    }else{
        return "number"
    }
}

