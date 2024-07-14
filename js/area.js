import { dis } from "./thirdlayer.js"

class Areameal  {
    constructor(data){
       
      //  this.nameCategory = data.categories;
    
        this.strArea = data.strArea;
        
      
    }}
Areameal.prototype.area_meals_card_maker = function(){
  let flag = ''
  Object.entries(nationalityToCountryCode).forEach(([key, value]) => {
    if (key === this.strArea) {
      console.log(value); 
      flag = value.toLowerCase()
      console.log(flag); 
    }
  });
  
  console.log(this.strArea)
    const dis_cat_grid = document.getElementById("dis-cat-grid");
         dis_cat_grid.innerHTML += `
          <div id="${this.strArea}" class="relative parent flex flex-col overflow-hidden mt-6 text-gray-700 bg-blue-gray-800   shadow-md bg-clip-border rounded-xl">
             <div
               class="relative  overflow-hidden text-white  bg-clip-border rounded-xl text-center ">
             
  <img class="w-full " src="https://flagcdn.com/${flag}.svg"

  alt="flag">
             <div class="p-6 ">
               <h5 class=" mb-2 font-sans text-xl  font-semibold leading-snug tracking-normal text-blue-gray-900">
                 ${this.strArea}
               </h5>
              
             </div>
          
           </div> 
         `
const elements = document.querySelectorAll(".parent");
elements.forEach((element)=>
  {  element.addEventListener("click", function(){
    let id =  element.getAttribute("id")
    console.log(id)
    dis(id)
    })
  }
)

 }

 const nationalityToCountryCode = {
  "American": "US",
  "British": "GB",
  "Canadian": "CA",
  "Chinese": "CN",
  "Croatian": "HR",
  "Dutch": "NL",
  "Egyptian": "EG",
  "Filipino": "PH",
  "French": "FR",
  "Greek": "GR",
  "Indian": "IN",
  "Irish": "IE",
  "Italian": "IT",
  "Jamaican": "JM",
  "Japanese": "JP",
  "Kenyan": "KE",
  "Malaysian": "MY",
  "Mexican": "MX",
  "Moroccan": "MA",
  "Polish": "PL",
  "Portuguese": "PT",
  "Russian": "RU",
  "Spanish": "ES",
  "Thai": "TH",
  "Tunisian": "TN",
  "Turkish": "TR",
  "Ukrainian": "UA",
  "Vietnamese": "VN",
  "Unknown": "UN" // Placeholder for unknown nationalities
};


export { Areameal }