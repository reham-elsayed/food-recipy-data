import { Category } from "./main.js"
import { Areameal } from "./area.js"
//import {AreaMealsDisplay } from "./area.js"
import { IngredMeals } from "./ingredient.js"
import { IngredMealsSearch } from "./search.js"
const category = document.getElementById("category")
const area = document.getElementById("area")
const ingredient =document.getElementById("ingredient")
const search =document.getElementById("search")
const darkMode = document.querySelector(".slider");

darkMode.addEventListener("click", function(){
    const layers = document.querySelectorAll(".layer")
    const head = document.querySelector(".head")
    layers.forEach((layer)=> {
        if(layer.classList.contains("layer-dark")){
            layer.classList.remove("layer-dark");
        }
        else{
            layer.classList.add("layer-dark");
        }
        })
        if (head.classList.contains('head-dark')) {
            head.classList.remove('head-dark');
          } else {
            head.classList.add('head-dark');
          } 
    
    let body = document.body;
    if (body.classList.contains('darkm')) {
      body.classList.remove('darkm');
    } else {
      body.classList.add('darkm');
    }
})
function handleLoader(){
  if  (document.getElementById("dis-cat-grid").children.length === 0 ){
    console.log(document.getElementById("dis-cat-grid").children.length )
    document.getElementById("loader").classList.add("loader");
    document.getElementById("loader").classList.remove("hidd");
  }
  else{
    document.getElementById("loader").classList.remove("loader");
    document.getElementById("loader").classList.add("hidd");
  }
}
setInterval(handleLoader, 100);
category.addEventListener("click",async function(){
    handleSidebar()
    clearInput()
    console.log("clicked"); 
let data_cat = await getCategory();
data_cat.forEach((item)=>{
    let category = new Category(item);
    console.log(category)
    category.catedCardMaker();
})
} 
)
window.addEventListener("load",async function(){
    let data_cat = await getCategoryonload();
data_cat.forEach((item)=>{
    let category = new IngredMealsSearch(item);
    console.log(category)
    category.SearchDisplay();})
})


search.addEventListener("click",async function(){
    
    handleSidebar()
     const dis_cat_grid = document.getElementById("dis-cat-grid");
    dis_cat_grid.innerHTML =""
    const search_display = document.getElementById("searchdisplayinput");
    search_display.innerHTML =`
    <div class="flex justify-around items-center col-span-4">
        <input id="searchName" type="text" placeholder="Search by name..." class="border-2 border-gray-300 rounded-md p-2  ">
        <input id="searchLetter" type="text" maxlength="1" placeholder="Search by letter..." class="border-2 border-gray-300 rounded-md p-2">
    </div>
    `
    const searchName = document.getElementById("searchName")
const searchLetter = document.getElementById("searchLetter")
searchName.addEventListener("input",async function(){
    let data_cat = await getCategoryonload(searchName.value);
    console.log("searchName.value", searchName.value)
data_cat.forEach((item)=>{
    let category = new IngredMealsSearch(item);
    console.log(category)
    category.SearchDisplay();})


})
searchLetter.addEventListener("input",async function(){
    // if(searchLetter.value.length == 1 ){
    //     searchLetter.disabled = true;

    // }
    let data_cat = await getCategoryonloadfirstletter(searchLetter.value);
    console.log("searchName.value", searchLetter.value)
data_cat.forEach((item)=>{
    let category = new IngredMealsSearch(item);
    console.log(category)
    category.SearchDisplay();})
} )
})

function clearInput(){

    const search_display = document.getElementById("searchdisplayinput");
    search_display.innerHTML = ''
}
async function getCategory(){
     const dis_cat_grid = document.getElementById("dis-cat-grid");
    dis_cat_grid.innerHTML =""
    let data = await fetch("https://themealdb.com/api/json/v1/1/categories.php")
    let res = await data.json();
    console.log(res.categories)
    return res.categories;
}


async function getCategoryonload(cat=""){
    const dis_cat_grid = document.getElementById("dis-cat-grid");
   dis_cat_grid.innerHTML =""
   let data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${cat?cat:""}`)
   let res = await data.json();
   console.log(res.meals)
   return res.meals;
}
async function getCategoryonloadfirstletter(cat=""){
    const dis_cat_grid = document.getElementById("dis-cat-grid");
   dis_cat_grid.innerHTML =""
   let data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${cat?cat:""}`)
   let res = await data.json();
   console.log(res.meals)
   return res.meals;
}

/**api call to area meals */
area.addEventListener("click",async function(){
    clearInput()
    handleSidebar()
     const dis_cat_grid = document.getElementById("dis-cat-grid");
    dis_cat_grid.innerHTML =""
    console.log("clicked"); 
   let data = await fetch("https://themealdb.com/api/json/v1/1/list.php?a=list")
    let res = await data.json();
    let data_areas = res.meals
    data_areas.forEach((area)=>{
        let area_meal = new Areameal(area);
        area_meal.area_meals_card_maker();
    })

  
    console.log(res)
}
)


ingredient.addEventListener("click",async function(){
    clearInput()
    handleSidebar()
    console.log("clicked"); 
    const dis_cat_grid = document.getElementById("dis-cat-grid");
    dis_cat_grid.innerHTML =""
   let data = await fetch("https://themealdb.com/api/json/v1/1/list.php?i=list")
    let res = await data.json();
    console.log(res)
    let ing_data = res.meals.slice(0, 20)
    ing_data.forEach((item)=>{
        let ingredient_meals = new IngredMeals(item);
        ingredient_meals.ingred_meals_card_maker();
    })
}
)
const dis_cat_grid = document.getElementById("dis-cat-grid");
dis_cat_grid.addEventListener("click", function(){

handleSidebar()

})

function handleSidebar(){
    const iconD = document.querySelector(".dis-icon")
    console.log(iconD)
    if(iconD.children[0].classList.contains("fa-x")){
        console.log(iconD)
        toggleSidebar(iconD);}}
$(".dis-icon").on("click", function(){ toggleSidebar(this)})
function toggleSidebar(m){
    let $icon = $(m).find("i"); 
   
        $icon.toggleClass("fa-x"); 
       if( $icon.hasClass("fa-x")){
        $(".list").show(200, function(){
            $("ul").animate({right:"0"},200, function(){
            $(".zero").animate({transform: "translateY(0)", top:"50"}, 100, function(){
                $(".one").animate({transform: "translateY(0)", top:"50"}, 100, function(){
                    $(".two").animate({transform: "translateY(0)", top:"50"},100, function(){
                        $(".three").animate({transform: "translateY(0)",top:"50"}, 100, function(){
                            $(".four").animate({transform: "translateY(0)", top:"50"}, 100)
                        })
                    })
                });
            })
        });})
    }
    else{
     
            $(".zero").animate({transform: "translateY(0)",top:"100"}, 100, function(){
                $(".one").animate({transform: "translateY(0)",top:"100"}, 100, function(){
                    $(".two").animate({transform: "translateY(0)",top:"100"}, 100, function(){
                        $(".three").animate({transform: "translateY(0)",top:"100"}, 100, function(){
                            $(".four").animate({transform: "translateY(0)",top:"100"}, 100, function(){
                                $("ul").animate({right:"100"},100, function(){ 
                                $(".list").hide(1000)
                                })
                            })
                        })
                    })
                });
            })
    }
            }; 
    
