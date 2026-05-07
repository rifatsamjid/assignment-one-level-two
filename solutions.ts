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


// problem 6

class Person {
    name:string;
    age:number
    constructor(name:string,age:number){
        this.name=name
        this.age=age
    }
}

class Student extends Person {
    grade:string;
    constructor(name:string,age:number,grade:string){
        super(name,age)
        this.grade=grade
    }
    getDetails(){
        return (`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`)
    }
}


