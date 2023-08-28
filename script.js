var chicken = {
    num:"0",
    calories:"165",
    protein: "30",
    fat: "3.6",
    carbs: "0",
    price:"160"
}
var beef = {
    num:"1",
    calories:"259",
    protein: "26",
    fat: "17",
    carbs: "0",
    price:"250"
}
var salmon = {
    num:"2",
    calories:"206",
    protein: "22",
    fat: "12",
    carbs: "0",
    price:"300"
}
var egg = {
    num:"3",
    calories:"143",
    protein: "13",
    fat: "9.5",
    carbs: "0.7",
    price:"70"
}
var falafel = {
    num:"4",
    calories:"416",
    protein: "5.4",
    fat: "37",
    carbs: "19",
    price:"163"
}
var cauliflower = {
    num:"5",
    calories:"23",
    protein: "1.8",
    fat: "0.5",
    carbs: "4.1",
    price:"50"
}
var broccoli = {
    num:"6",
    calories:"35",
    protein: "2.4",
    fat: "0.4",
    carbs: "7.2",
    price:"100"
}

var rice = {
    num:"7",
    calories:"130",
    protein: "2.7",
    fat: "0.3",
    carbs: "28",
    price:"30"
}

var potato = {
    num:"8",
    calories:"93",
    protein: "2.5",
    fat: "0.1",
    carbs: "21",
    price:"20"
}
var sweetpotato = {
    num:"9",
    calories:"90",
    protein: "2",
    fat: "0.2",
    carbs: "21",
    price:"55"
}
var pasta = {
    num:"10",
    calories:"158",
    protein: "5.8",
    fat: "0.9",
    carbs: "31",
    price:"40"
}

var Weight = document.getElementById("weight")
var Calories = document.getElementById("calories")
var Protein = document.getElementById("protein")
var Fats = document.getElementById("fats")
var Carbs = document.getElementById("carbs")
var Price = document.getElementById("price")

var cook = document.getElementById("cook")

cook.addEventListener("click",()=>{
    var weights = document.querySelectorAll(".weight")
    var weight = 0
    var foodWeight = 0
    var foodCal = 0
    var foodProtein = 0
    var foodFat = 0
    var foodCarbs = 0
    var foodPrice = 0
    for (var n=0; n<11; n++){
    if (weights[n].value > 0)
       { weight = weights[n].value
        let foods = document.querySelectorAll(".food")
       
        switch(foods[n].value){
            case "chicken":
                food=chicken;
                break;
            case "beef":
                food=beef;
                break;
            case "salmon":
                 food=salmon;
                 break;               
            case "egg":
                 food=egg;
                 break;  
            case "falafel":
                food=falafel;
                break;
            case "broccoli":
                 food=broccoli;
                break;
            case "cauliflower":
                food=cauliflower;
                break;               
            case "rice":
                food=rice;
                break;
            case "potato":
                food=potato;
                break;
            case "sweetpotato":
                food=sweetpotato;
                break;
            case "pasta":
                food=pasta;
                break;
        }
        foodWeight += Math.abs(weight*1)
        foodCal += Math.abs(food.calories * weight / 100)
        foodProtein += Math.abs(food.protein * weight / 100)
        foodFat += Math.abs(food.fat * weight / 100)
        foodCarbs += Math.abs(food.carbs * weight / 100)
        foodPrice += Math.abs(food.price * weight / 100)

        Calories.textContent = foodCal
        Protein.textContent = foodProtein
        Fats.textContent = foodFat
        Carbs.textContent = foodCarbs
        Weight.textContent = foodWeight
        Price.textContent = Math.abs(foodPrice / 100) + "KM"
        
    }}

       
    
} )