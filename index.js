

const uldrop = document.querySelector (".ul-drop") 
const uldropdown = document.querySelector (".ul-dropdown") 

drop.addEventListener("click", e =>{
   if(!uldrop.classList.contains("active")){
      uldrop.classList.add("active")
   } else{
      uldrop.classList.remove("active")
   }
})



drop2.addEventListener("click", e =>{
   if(!uldropdown.classList.contains("active")){
      uldropdown.classList.add("active")
   } else{
      uldropdown.classList.remove("active")
   }
})