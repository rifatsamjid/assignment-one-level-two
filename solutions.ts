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


// problem 4

function getProperty<T, K extends keyof T>(obj:T,key:K):T[K]{
    return obj[key]
}


// problem 5

interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

function toggleReadStatus(book : Book):Book & {isRead:boolean} {
    return {
        ...book,
        isRead:true
    }
}

