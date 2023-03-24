let arr=[1,2,3]
let arr12=[4,5,6]
let arr78=[5,6,7]
let arr128="amitabh";

const art:boolean=true;
 const helloWorld:string="ravi";
 const hiop:string="kite";
 
 interface user{
    name:string;
    id:number;
 }

 const user= {
    name:"ravi",
    id:0
 }

interface amit{
    name:string;
    id:Number;
}

const user12:amit={
    name:"ravi",
    id:0

}


interface amitabhsrivastava{
    name:number;
    irname:string;
}

const ok12:amitabhsrivastava={
    name:45,
    irname:"ravisshukla"
}


const hek=[1,2,3]

//type name with string
let a:string="ravi";

let first_name:string="masai";
let last_name:string="school";
// type age with number
let ab:number=56;

//type isFetching
let isFetching:boolean=true;

//array of numbers

let numarray:number[]=[1,2,3,4];

let arr000000:Array<number>=[1,2,3,4]


//array of string

let strArray:string[]=["a","b","c","d"]

//objects

type Data={id:number;

name:string;}


let person:Data={
    id:5,
    name:"ravi"
}

//company//tuple
let tuple: [number, string, boolean] = [7, "hello", true];

//intrface

interface Person{
   first:string;
   last?:string; 
   status?:boolean;
   id?:number;
}
const object12:Person={
    first:"ravi",
    last:"shukla",
    status:true,
    id:12

}

// function getname

interface User45{
    name:string;
    id:number;
}

function Sum(name:string,id:number){
    return {name,id}
}

let abbra=Sum("ravi",5654564656)
console.log(abbra,"fun")

//function
interface User {
    type: boolean;
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}
function user123():User{
  return{
    type:true,
    name:"ravii",
    age:56,
    occupation:"masai"
  }
}
console.log(user123())

////
//create a type name with a string

let nam:string="sumit"

//create a type age with a number
let age:number=22


//create a type isFetching with boolean
let isFetching123:boolean=false

// create an array of numbers
let arr45:number[]=[1,2,3,4,5,6]
arr.push(2)
//create an array of strings (using array constructor generic type)
let arr2:Array<string>=["a","b","g"]
arr2.push("g")

type ff=[number,string,number,string,boolean]

let arr3:ff=[1,"k",8,"hj",false]

//create obj

type user12={name:string,age12:number,address:string}

let obj:user12={
    name:"sumit",
    age12: 22 ,
    address:"Mumbai south"
}



// create a function that takes 2 arguments, x, y both numbers
// it should return the product of the 2 numbers

function aaa(a:number,b:number){
return a*b
}

aaa(6,7)

function aaa1<Type>(a:Type){
return a
}

aaa1<string>("ff")
aaa1<number>(1)

// create a function that takes 2 arguments, x ,y both numbers,
// it should divide output ( x / y )

function Divide(a:number,b:number){
    return a/b
}


Divide(10,2)

// create a function that takes a name and prints it without returning anything

function namew<Type>(a:Type){
    console.log(a)
}

namew<string>("ghhh")


// create an interface for an object
// it should accept a title string
// it should accept a status boolean
// it should accept an id number

interface person {
    title:string,
    status:boolean,
    id:number
}

let jj:person={
title:"fgffagfa",
status:true,
id:2
}


// create a function getName
// it should accept an object firstname and lastname
// it should return fullname
// keep lastname optional.
// if lastname does not exist then return only firstname
// make a interface for it
interface yy1{
    firstname:string,
    lastname?:string,
}
let oo:yy1={
    firstname:"sss",
lastname:"ghaga"
}

function getName(firstname:string,lastname?:string){
if(lastname){
    return firstname+" "+lastname
}else{    
    return firstname
}
}


getName(oo.firstname)       


// create an interface Address
// it takes
// houseNumber
// street
// city
// state
// postalCode
// country
// add appropriate types

interface Address{
houseNumber:number,
street:string,
city:string,
state:string,
postalCode:number
country:string
}

// create a PersonDetails interface
// it should have
// Prefix optional
// phones array of numbers
// addresses array of Addresses
// email optional
// firstname
// lastname
// middlename optional


interface PersonDetails{
    prefix?:boolean,
    phone:Array <number>,
    addresses:string[],
    emal?:string,
    firstname:string,
    lastname:string,
    middlename?:string,
}

// create a function PhoneBook
// it should accept PersonDetails type argument
// create an array of objects outside the PhoneBook function, that is expecting PersonDetails objects.
// Push the PersonDetails object in the array, from the function.


let phonea=[]

let obb:PersonDetails={
    prefix:false,
    phone:[1,2,3],
    addresses:["hjj"],
    emal:"ghhgh",
    firstname:"hhhh",
    lastname:"hjj",
    middlename:"ghhh",
}

// a:boolean,b:Array <number>,c:string[],d:string,e:string,f:string,g:string
function PhoneBook(a:PersonDetails){
//     let obb:PersonDetails={}
//     obb["prefix"]=a,
//     obb["phone"]=b,
//     obb["addresses"]=c,
//     obb["emal"]=d,
//     obb["firstname"]=e,
//     obb["lastname"]=f,
phonea.push(a)

    
}
PhoneBook(obb)

// PhoneBook(false,[12,1,2,3,4],["a","as"],"gh","df","jk","hj")

let arrd:number[]=[1,3,5,6]

// Write a function to retrieve the type of the user or admin
interface User123 {
    type?: 'user';
    name: string;
    age: number;
    occupation: string;
}


// let user:string="sumit"
function ravi(){
    let jk:User123={
       
        name:"ghh",
        age:12,
        occupation:"fgfggfg"
    }
    return typeof jk
}
console.log(ravi())











