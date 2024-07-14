import { getDetailedDataMeal } from "./finaldatadisplay.js";
import { disCat } from "./thirdlayer.js"

class Category  {
    constructor(data){
       
      //  this.nameCategory = data.categories;
    
        this.idCategory = data.idCategory;
        this.strCategory = data.strCategory;
        this.strCategoryDescription = data.strCategoryDescription;
        this.strCategoryThumb = data.strCategoryThumb
      
    }}

Category.prototype.catedCardMaker = function(){

    const dis_cat_grid = document.getElementById("dis-cat-grid");
   // const categories = this.nameCategory.map(category => {category = category.strCategory
console.log(this.strCategory)

        dis_cat_grid.innerHTML += `
        
         <div id="${this.strCategory}" class="relative parent flex flex-col overflow-hidden mt-6 text-gray-700  shadow-md bg-clip-border rounded-xl">
            <div
              class="relative  overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <img
                src="${this.strCategoryThumb}"
                alt="card-image" />
            </div>
            <div class="p-6 layer">
              <h5 class=" mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                ${this.strCategory}
              </h5>
              <p class=" font-sans text-base antialiased font-light leading-relaxed text-inherit">
                ${this.strCategoryDescription.split(" ").slice(0, 20).join(" ")}
              </p>
            </div>
         
          </div> 
        `
        const elements = document.querySelectorAll(".parent");
        elements.forEach((element)=>
          {  element.addEventListener("click", function(){
            let categ =  element.getAttribute("id")
            console.log(categ)
            disCat(categ)
            })})

    }

Category.prototype.onloadCardMaker = function(){
    const dis_cat_grid = document.getElementById("dis-cat-grid");
    // const categories = this.nameCategory.map(category => {category = category.strCategory
 console.log(this.strCategory)
         dis_cat_grid.innerHTML += `
         
          <div id="${this.strCategory}" class="relative parent flex flex-col overflow-hidden mt-6 text-gray-700  shadow-md bg-clip-border rounded-xl">
             <div
               class="relative  overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
               <img
                 src="${this.strCategoryThumb}"
                 alt="card-image" />
             </div>
             <div class="p-6 layer">
               <h5 class=" mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                 ${this.strCategory}
               </h5>
               
             </div>
          
           </div> 
         `

         const elements = document.querySelectorAll(".parent");
         elements.forEach((element)=>
           {  element.addEventListener("click", function(){
             let categ =  element.getAttribute("id")
             console.log(categ)
             disCat(categ)
             })})
}
export { Category }