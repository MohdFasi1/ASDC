var a = 10;
var b=20;
console.log("using if else");
if(a>b){
    console.log("a is greater than b");
}
else{
    console.log("a is less than b");
}
console.log("using ternary");
console.log(a>b?"a is greater than b":"a is less than b")
var c = 2;
var d = 9;
console.log(c,c%2==0?"is a even number":"is a odd number")
console.log(d,d%2==0?"is a even number":"is a odd number")
var e = prompt("Enter your age:")
if(e>=18){
    console.log("you are old enough to drive")
}
else{
    console.log("you are left with ",18-e," years to drive")
}
var f = 2;
var g = 4;
var h = 7;
if(f>g&&f>h)
console.log(f,"is largest");
else if(g>h&&g>f)
console.log(g,"is largest");
else console.log(h,"is largest");

var day = "Monday"

switch(day){
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
    case "Saturday":
        console.log(day,"is a Working Day");
        break;
    case "Sunday":
        console.log(day,"is a weekend");
        break;
    default:
        console.log(day,"is not a weekday");
}


function checkpermission(userRole,action){
    if(userRole == "admin"){
        console.log("Permission granted");
    }
    else if(action == "read"){
        console.log("Permission granted");
    }
    else console.log("Permission denied");
}

checkpermission("admin","update");


function cal(price){
    if(price>50){
        console.log("final price: ",(price-(price/10)));
    }
}
cal(60);