let salon={
    name:"Pet Stop",
    address:{
        street:"777 Main St.",
        ZIPcode:"92055",
        number:"Suite Z"
    },
    hours:{
        open:"9:00 am",
        close:"5:00 pm"
    },
    pets:[]
}

// create the constructor
function Pet(name,age,gender,breed,service,owner,contact){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.owner=owner;
    this.contact=contact;
}




let petName = document.getElementById("txtName");
let petAge = document.getElementById("txtAge");
let petGender = document.getElementById("txtGender");
let petBreed = document.getElementById("txtBreed");
let petService = document.getElementById("selService");
let petOwner = document.getElementById("txtOwner");
let petContact = document.getElementById("txtContact");

function register(){
    console.log("register");
    //create a obj
    let thePet = new Pet(petName.value,petAge.value,petGender.value,petBreed.value,petService.value,petOwner.value,petContact.value)
    //push the obj into the array
    salon.pets.push(thePet);
    //display the array
    console.log(salon.pets);
    alert("You have registered your pet!");
    showPetsCards();
}

function showPetsCards(){
    document.getElementById('btnClear').hidden = true;
    document.getElementById('headerList').innerHTML="Pets List";
    //clear the field
    document.getElementById("petList").innerHTML="";
    //travel the array
    for(let i=0;i<salon.pets.length;i++){
    //create the card;

    //append the tmp into the html
    document.getElementById("petList").innerHTML +=
    createCard(salon.pets[i]);
  }   
}

function removePet(index){
    if(index < salon.pets.length)
    {
      salon.pets.splice(index, 1);   
    }
    showPetsCards();
   
}

function searchPet(){
    document.getElementById('btnClear').hidden = false;
    let name = document.getElementById('txtSearch').value;
    document.getElementById('headerList').innerHTML = "Search Result";
    document.getElementById("petList").innerHTML="";
    for(let i=0;i<salon.pets.length;i++){
        if(name.toLowerCase() == salon.pets[i].name.toLowerCase())
        {
         document.getElementById("petList").innerHTML += createCard(salon.pets[i]);   
        }    
  }   

}

function createCard(pet, index){
    return`
        <div class="pet-card">
            <h3>${pet.name}</h3>
            <label> Age: ${pet.age}</label>
            <label> Gender: ${pet.gender}</label>
            <label> Breed: ${pet.breed}</label>
            <label> Service: ${pet.service}</label>
            <label> Owner: ${pet.owner}</label>
            <label> Contact: ${pet.contact}</label>
            <button onclick="removePet(${index});">Remove</button>
        </div> 
    `;
    
}
function init(){
    //create 3 pets using the constructor
let pet1 = new Pet("Scooby",60,"Male","Dane","Grooming","Shaggy",555-555-5555);
let pet2 = new Pet("Scrappy",55,"Male","Dane","Bath","None",555-555-5554);
let pet3 = new Pet("Rupert",5,"Male","Beagle","Bath","Daniel",222-222-2222);
let pet4 = new Pet("Guera",7,"Female","Mutt","Nail Cutting","Antuanet",333-333-3333);
let pet5 = new Pet("Rocky",9,"Male","Boxer","Allergies","Gerardo",444-444-4444);
let pet6 = new Pet("Galina",9,"Female","Chihuaha","Bath","Daniel",222-222-2222);
salon.pets.push(pet1,pet2,pet3,pet4,pet5,pet6); //push element into array
showPetsCards();
}
window.onload=init;

