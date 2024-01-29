let myString = "Hola mundo";

// myString = 5

let a:string = "hola"

let b:String = "adios"

console.log(`${a} y ${b}`)

let c:number = 6.5
let d:number = 5

console.log(c+d)

let e:boolean = true
console.log(typeof e)

let f:undefined
console.log(typeof f)

let g:any = "gogogogo"
console.log(typeof g)

let h:string | number;

h="uojauoja"
h=12

function myFunction() :string{
    return "farsa"
}

function sumar(a:number, b:number): number{
    return a+b
}

console.log(sumar(3,4))

//ARRAY
let array:Array<string | number | boolean>=["hola", 5, false]

//Set
let set:Set<string> = new Set(["1", "2", "2"])
console.log(set)

//Map
let map:Map<string, number> = new Map([])
