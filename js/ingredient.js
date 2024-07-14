import { disIng, AreaMealsDisplay } from "./thirdlayer.js"


class IngredMeals  {
    constructor(data){
       
      //  this.nameCategory = data.categories;
    console.log(data)
        this.id = data.idIngredient;
        this.type = data.strIngredient;
        this.desc = data.strDescription
        
      
    }}
IngredMeals.prototype.ingred_meals_card_maker = function(){
  let area =this.strArea
    const dis_cat_grid = document.getElementById("dis-cat-grid");
         dis_cat_grid.innerHTML += `
         
          <div id="${this.type}" class="relative parent flex flex-col bg-blue-500 shadow-md overflow-hidden mt-6 text-gray-700   bg-clip-border rounded-xl">
             <div
               class="relative  overflow-hidden text-white  bg-clip-border rounded-xl   ">
              <div class="text-center h-full">
  <img class="w-full" src="https://www.themealdb.com/images/ingredients/${this.type}.png"
             <div class="p-6 ">
               <h5 class=" mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-900">
                 ${this.type}
               </h5>
               <p class=" font-sans text-base antialiased font-light leading-relaxed text-inherit">
                ${this.desc.split(" ").slice(0,20).join(" ")}
              </p>
             </div>
          
           </div> 
         `
         const elements = document.querySelectorAll(".parent");
elements.forEach((element)=>
  {  element.addEventListener("click", function(){
    let id =  element.getAttribute("id")
    console.log(id)
    disIng(id)
    })
  })
}


export { IngredMeals }