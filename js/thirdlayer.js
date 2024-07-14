import { getDetailedDataMeal } from "./finaldatadisplay.js";


class AreaMealsDisplay  {
    constructor(data){
       
      //  this.nameCategory = data.categories;
    
        this.strMeal = data.strMeal;
        this.thumb = data.strMealThumb;
        this.id = data.idMeal
      
    }}
    const dis_cat_grid = document.getElementById("dis-cat-grid"); 

AreaMealsDisplay.prototype.area_meals_card_maker = async function(){
  
    console.log(dis_cat_grid )
   
 console.log(this)
         dis_cat_grid.innerHTML += `
         
          <div id="${this.id}" class="relative parent flex flex-col overflow-hidden mt-6 text-gray-700  shadow-md bg-clip-border rounded-xl">
             <div
               class="relative  overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <img
  src="${this.thumb}"
  class="w-100"
  alt="meal">
             <div class="p-6 layer">
               <h5 class=" mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                 ${this.strMeal}
               </h5>
             </div>
           </div> </div>
         `
         const elements = document.querySelectorAll(".parent");
         elements.forEach((element)=>
           {  element.addEventListener("click", function(){
             let id =  element.getAttribute("id")
             console.log(id)
            getDetailedDataMeal(id);
             })})
         
}


async function disCat(catName){
  console.log(catName)
//  const dis_cat_grid = document.getElementById("dis-cat-grid");
dis_cat_grid.innerHTML =""
  let data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${catName}`)
  let res = await data.json();
let all_area_data = res.meals
console.log("all-data-area",all_area_data )
all_area_data.forEach((item)=>{
  let meal = new AreaMealsDisplay(item)
  meal.area_meals_card_maker();
})
}

async function dis(area){
    console.log(area)
  //  const dis_cat_grid = document.getElementById("dis-cat-grid");
  dis_cat_grid.innerHTML =""
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
    let res = await data.json();
let all_area_data = res.meals
console.log("all-data-area",all_area_data )
all_area_data.forEach((item)=>{
    let meal = new AreaMealsDisplay(item)
    meal.area_meals_card_maker();
})
}

async function disIng(ing){
        console.log(ing)
       // const dis_cat_grid = document.getElementById("category-display");
      dis_cat_grid.innerHTML =""
        let data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ing}`)
        let res = await data.json();
    let all_area_data = res.meals
    console.log("all-data-area",all_area_data )
    all_area_data.forEach((item)=>{
        console.log(item)
        let meal = new AreaMealsDisplay(item)
        meal.area_meals_card_maker();
    })
    }

 
export { dis , AreaMealsDisplay , disIng, disCat}

