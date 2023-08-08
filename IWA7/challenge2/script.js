const nickname= "Timmy";
const firstname = "Timothy";
const isValid = nickname || firstname

if(isValid){
console.log(`Good Morning, ${nickname || firstname}!`)
}
else{
    console.log("Good Morning")
}