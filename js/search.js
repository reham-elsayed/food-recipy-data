
import { getDetailedDataMeal } from "./finaldatadisplay.js";
class IngredMealsSearch {
    constructor(data) {
        this.dateModified = data.dateModified;
        this.idMeal = data.idMeal;
        this.strArea = data.strArea;
        this.strCategory = data.strCategory;
        this.strCreativeCommonsConfirmed = data.strCreativeCommonsConfirmed;
        this.strDrinkAlternate = data.strDrinkAlternate;
        this.strImageSource = data.strImageSource;
        this.strIngredient1 = data.strIngredient1;
        this.strIngredient2 = data.strIngredient2;
        this.strIngredient3 = data.strIngredient3;
        this.strIngredient4 = data.strIngredient4;
        this.strIngredient5 = data.strIngredient5;
        this.strIngredient6 = data.strIngredient6;
        this.strIngredient7 = data.strIngredient7;
        this.strIngredient8 = data.strIngredient8;
        this.strIngredient9 = data.strIngredient9;
        this.strIngredient10 = data.strIngredient10;
        this.strIngredient11 = data.strIngredient11;
        this.strIngredient12 = data.strIngredient12;
        this.strIngredient13 = data.strIngredient13;
        this.strIngredient14 = data.strIngredient14;
        this.strIngredient15 = data.strIngredient15;
        this.strIngredient16 = data.strIngredient16;
        this.strIngredient17 = data.strIngredient17;
        this.strIngredient18 = data.strIngredient18;
        this.strIngredient19 = data.strIngredient19;
        this.strIngredient20 = data.strIngredient20;
        this.strInstructions = data.strInstructions;
        this.strMeal = data.strMeal;
        this.strMealThumb = data.strMealThumb;
        this.strMeasure1 = data.strMeasure1;
        this.strMeasure2 = data.strMeasure2;
        this.strMeasure3 = data.strMeasure3;
        this.strMeasure4 = data.strMeasure4;
        this.strMeasure5 = data.strMeasure5;
        this.strMeasure6 = data.strMeasure6;
        this.strMeasure7 = data.strMeasure7;
        this.strMeasure8 = data.strMeasure8;
        this.strMeasure9 = data.strMeasure9;
        this.strMeasure10 = data.strMeasure10;
        this.strMeasure11 = data.strMeasure11;
        this.strMeasure12 = data.strMeasure12;
        this.strMeasure13 = data.strMeasure13;
        this.strMeasure14 = data.strMeasure14;
        this.strMeasure15 = data.strMeasure15;
        this.strMeasure16 = data.strMeasure16;
        this.strMeasure17 = data.strMeasure17;
        this.strMeasure18 = data.strMeasure18;
        this.strMeasure19 = data.strMeasure19;
        this.strMeasure20 = data.strMeasure20;
        this.strSource = data.strSource;
        this.strTags = data.strTags;
        this.strYoutube = data.strYoutube;

        console.log(data);
    }
}

const dis_cat_grid = document.getElementById("dis-cat-grid"); 

IngredMealsSearch.prototype.SearchDisplay = function(){
    dis_cat_grid.innerHTML += `
         
    <div id="${this.idMeal}" class="relative parent flex flex-col overflow-hidden mt-6 text-gray-700  shadow-md bg-clip-border rounded-xl">
       <div
         class="relative  overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
        <img
src="${this.strMealThumb}"
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

export { IngredMealsSearch}