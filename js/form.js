const contact = document.getElementById("contact")

contact.addEventListener("click", function(){
    console.log("form")

  const dis_cat_grid = document.getElementById("dis-cat-grid");
    dis_cat_grid.innerHTML =`
    <form  class="col-span-4 p-10 container ml-20 md:m-0 px-0">
    <div class="grid grid-col-1 md:grid-cols-2 gap-4 mb-4">
        <!-- First Row -->
        <div>
      <!-- Username Field -->
<input type="text" id="username" placeholder="Username" class="w-full p-2 border border-gray-300 custom-focus-effect rounded">
<p id="nameal" class="hidden bg-red-200 text-black "> name sould contain letters only</p>
</div>
<!-- Email Field -->
<div>
<input type="text" id="email" placeholder="Email" class="w-full p-2 border border-gray-300 custom-focus-effect rounded">
<p id="emailal" class="hidden bg-red-200 text-black "> email  is not valid</p>
</div>
<!-- Phone Field -->
<div>
<input type="text" id="phone" placeholder="Phone Number" class="w-full p-2 border border-gray-300 custom-focus-effect rounded">
<p id="phoneal" class="hidden bg-red-200 text-black "> not valid phone number</p>
</div>
<!-- Age Field -->
<div>
<input type="number" id="age" placeholder="Age" class="w-full p-2 border border-gray-300 custom-focus-effect rounded">
<p id="ageal" class="hidden bg-red-200 text-black "> age sould be between 5 and 100</p>
</div>
<!-- Password Field -->
<div>
<input type="password" id="password" placeholder="Password" class="w-full p-2 border border-gray-300 custom-focus-effect rounded">
<p id="passal" class="hidden bg-red-200 text-black ">password length > 8 and should contain at least one number </p>
</div>
<!-- Repassword Field -->
<div>
<input type="password" id="repassword" placeholder="Confirm Password" class="w-full p-2 border border-gray-300 custom-focus-effect rounded">
<p id="repassal" class="hidden bg-red-200 text-black "> password not matched</p>
</div>
</div>
<div class="col-span-2 flex justify-center ">
<button id="formb" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded">
Submit
</button></div>
</form>`
fornvalidate();

})
function fornvalidate(){
    const username= document.getElementById("username");
    const email= document.getElementById("email");
    const age= document.getElementById("age");
    const phone= document.getElementById("phone");
    const password= document.getElementById("password");
    const repassword= document.getElementById("repassword");
    const nameal= document.getElementById("nameal");
const emailal= document.getElementById("emailal");
const ageal= document.getElementById("ageal");
const phoneal= document.getElementById("phoneal");
const passwordal= document.getElementById("passal");
const repasswordal= document.getElementById("repassal");
const formb = document.getElementById("formb")
username.addEventListener("input", function() {
   if(nameValidation() == true){
    console.log(username.value)
username.classList.add("custom-valid")
nameal.classList.add("hidden")
nameal.classList.remove("block")
this.classList.remove("custom-invalid")
}
else{
    this.classList.add("custom-invalid")
    nameal.classList.add("block")
    nameal.classList.remove("hidden")
    this.classList.remove("custom-valid")
}
})
email.addEventListener("input", function() {
    if(emailValidation() == true){
     console.log(email.value)
 this.classList.add("custom-valid")
 this.classList.remove("custom-invalid")
 emailal.classList.add("hidden")
emailal.classList.remove("block")
 }
 else{
    this.classList.add("custom-invalid")
    this.classList.remove("custom-valid")
    emailal.classList.add("block")
    emailal.classList.remove("hidden")
 }
 })
 age.addEventListener("input", function() {
    if(ageValidation() == true){
     console.log(age.value)
 age.classList.add("custom-valid")
 this.classList.remove("custom-invalid")
 ageal.classList.add("hidden")
 ageal.classList.remove("block")
 }
 else{
    this.classList.add("custom-invalid")
    this.classList.remove("custom-valid")
    ageal.classList.add("block")
    ageal.classList.remove("hidden")
 }
 })

 phone.addEventListener("input", function() {
    if(phoneValidation() == true){
     console.log(phone.value)
 phone.classList.add("custom-valid")
 this.classList.remove("custom-invalid")
 phoneal.classList.add("hidden")
 phoneal.classList.remove("block")
 }
 else{
    this.classList.add("custom-invalid")
    this.classList.remove("custom-valid")
    phoneal.classList.add("block")
    phoneal.classList.remove("hidden")
 }
 })


password.addEventListener("input", function() {
    if(passwordValidation() == true){
     console.log(password.value)
 password.classList.add("custom-valid")
 passal.classList.add("hidden")
 passal.classList.remove("block")
 }
 else{
    this.classList.add("custom-invalid")
    this.classList.remove("custom-valid")
    passal.classList.add("block")
    passal.classList.remove("hidden")
 }

 })

 repassword.addEventListener("input", function() {
    if(repasswordValidation() == true){
     console.log(repassword.value)
 repassword.classList.add("custom-valid")
 repassal.classList.add("hidden")
 repassal.classList.remove("block")
 }else{
    this.classList.add("custom-invalid")
    this.classList.remove("custom-valid")
    repassal.classList.add("block")
    repassal.classList.remove("hidden")
 }
 })
formb.addEventListener("click", function(e){
e.preventDefault();
if (nameValidation() && emailValidation() &&  phoneValidation() && ageValidation() && passwordValidation() && repasswordValidation()){
    console.log("form valid")
}
})

}


function nameValidation() {
    return (/^[a-zA-Z ]+$/.test(document.getElementById("username").value))
}

function emailValidation() {
    return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("email").value))
}

function phoneValidation() {
    return (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(document.getElementById("phone").value))
}

function ageValidation() {
    return (/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(document.getElementById("age").value))
}

function passwordValidation() {
    return (/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(document.getElementById("password").value))
}

function repasswordValidation() {
    return document.getElementById("repassword").value == document.getElementById("password").value
}