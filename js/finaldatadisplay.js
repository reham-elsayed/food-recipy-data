async function getDetailedDataMeal(id){

      const dis_cat_grid = document.getElementById("dis-cat-grid");
  dis_cat_grid.innerHTML =""
    console.log(id)
   let data = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`) 
   let res = await data.json()
console.log(res.meals)
   displayDetails(res.meals[0])
  
}

async function displayDetails(res){

 const dis_cat_grid = document.getElementById("dis-cat-grid");
 let recipyData = await handleResData(res);

let inst = res.strInstructions.split(".")

  dis_cat_grid.innerHTML += `   
  <div class="col-span-2 md:col-span-1 text-center rounded-lg place-items-center">
    <img class="w-full" src="${res.strMealThumb}" alt="meal">
 <div
      class="block mb-4 font-sans text-lg font-semibold leading-tight tracking-normal  text-inherit">
      ${res.strMeal}
    </div>
  </div>
   <div class="col-span-3">
  <div class=" p-5">
    <h3
      class="block mb-4 font-sans text-l text-xl font-semibold leading-tight tracking-normal  text-inherit">
     Instructions
    </h3>
    <div id="instructions"
      class="block mb-4   leading-tight tracking-normal  text-inherit">
      
    </div>
    
    <h3
      class="block mb-4 font-sans text-l text-xl font-semibold leading-tight tracking-normal  text-inherit">
     Area: ${res.strArea}
    </h3>
    <h3
      class="block mb-4 font-sans text-l text-xl font-semibold leading-tight tracking-normal  text-inherit">
     Area: ${res.strCategory}
    </h3>
   <h3
      class="block mb-4 font-sans text-l text-xl font-semibold leading-tight tracking-normal  text-inherit">
     Recipy:

    </h3>
    <div id="bat"
      class="flex flex-wrap gap-2  mb-2 font-sans ">
    </div>
    <div>
    <button id="link" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Source
</button>

<button id="youtube" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-4">
    Youtube
</button>
    </div>
        </div>
    `; 
    const bat = document.getElementById("bat")
      recipyData.forEach(item => {
        bat.innerHTML += `<p class="bg-red-500 text-white px-2 text-xs rounded-md">${item}</p>`;
    });
const you = document.getElementById("youtube");
you.addEventListener("click", function(){
  console.log("click for you tube")
  window.location.href = res.strYoutube;
})


const link = document.getElementById("link");
link.addEventListener("click", function(){
  console.log("click for you tube")
  window.location.href = res.strSource;
})

const instruction = document.getElementById("instructions")
console.log(instruction)
inst.map((item)=>
{
  console.log("p content",item)
  instruction.innerHTML += `<p class="block mb-4 font-comfortaa text-l  leading-tight tracking-normal  text-inherit"
  > ${item}</p>`
}
)
}

async function handleResData(res){
  let recipy = []
  let mesStr = []
  const result = []
  let mainlen = 0
  for (let key of Object.keys(res)){
    
    if (key.startsWith("strIngredient")){
      if (res[key] !== ""){
        const value = res[key]
        console.log(`${key} : ${value}`)
        mesStr.push(res[key])
      } 
    } 
    if (key.startsWith("strMeasure")){
      if (res[key] !== " "){
        const value = res[key]
        console.log(`${key} : ${value}`)
        
        recipy.push(res[key])   
      } 
    }
  }
    if (mesStr.length === recipy.length) {
      for (let i = 0; i < mesStr.length ; i++) {
        // Combine the ingredient and measure at each index
        result.push(`${mesStr[i]} ${recipy[i]}`); // Adjusted to concatenate with a space
    }
    }
     else{
       if (mesStr.length < recipy.length)
      {
mainlen = mesStr.length
      }
      else{
        mainlen = recipy.length
      }
      for (let i = 0; i < mainlen; i++) {
          // Combine the ingredient and measure at each index
          result.push(`${mesStr[i]} ${recipy[i]}`); // Adjusted to concatenate with a space
      }
    }
   console.log("result", result)
   console.log(mesStr)
    console.log(recipy) 
    return (result)
}


export { getDetailedDataMeal }