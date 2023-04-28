//string
let s:string="abc";
s="abrakadabra";


//boolean
let b:boolean=true;
b=false;

//Array

let arr:number[]=[1,2,3,4];

// arry of objects
type Todo={
    id?:number;
    name:string
}
let arr1:Todo[]=[{name:"ravi"},{id:45,name:"shukla"}]

// union

let numstr:number| string=123;
numstr="abc";
numstr=98654654;

//