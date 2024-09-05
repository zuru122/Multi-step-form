// STEPS BUTTONS

function goStepTwo(){
    checkName();
    checkNum();
    checkMail();
    Achieve();
}

function backStepOne(){
    stepInfo.style.display = "flex";
    stepPlan.style.display =  "none";
    circle1.style.color =  "#000"
    circle1.style.backgroundColor = "#fff";
    circle2.style.backgroundColor =  "rgb(255, 255, 255, 0)";
    circle2.style.color = "#fff";
}

function goStepThree(){
  console.log(typeof document.getElementById("totalPrice").innerHTML);
  if(document.getElementById("totalPrice").innerHTML == ""){
    console.log(document.getElementById("totalPrice").innerHTML)
    document.getElementById("totalPrice").innerHTML = "0";
    console.log(document.getElementById("totalPrice").innerHTML);
  }
  checkPlan();
}

function  backStepTwo(){
  stepPlan.style.display = "flex";
  stepAddOn.style.display = "none";
  circle2.style.backgroundColor =  "#fff";
  circle2.style.color =  "black";
  circle3.style.backgroundColor = "rgba(255, 255, 255, 0)";
  circle3.style.color = "#fff";
}

function goStepFour(){
  stepSummary.style.display = "flex";
  stepAddOn.style.display = "none";
  circle3.style.color = "#fff";
  circle3.style.backgroundColor = "rgba(255, 255, 255, 0)";
  circle4.style.backgroundColor =  "rgb(255,255,255)";
  circle4.style.color = "#000";

    // Calculating the selected Totals from plans and add-ons
  const  addOnPrice = document.getElementsByName("addOn").forEach(radio =>{
    if(radio.checked){
      console.log(radio.value);
      console.log(document.getElementById("totalPrice").innerHTML);
      const planPrice  =  document.getElementById("totalPrice").innerHTML;
      console.log(planPrice);
      document.getElementById("totalPrice").innerHTML =  parseInt(planPrice) + parseInt(radio.value);
    }
  });
    
}


function  backStepThree(){
  stepSummary.style.display = "none";
  stepAddOn.style.display = "flex";
  circle3.style.color = "#000";
  circle3.style.backgroundColor = "rgba(255, 255, 255)";
  circle4.style.backgroundColor  = "rgba(255,255,255,0)";
  circle4.style.color = "#fff";

    // Calculating the selected Totals from plans and add-ons
  const  addOnPrice = document.getElementsByName("addOn").forEach(radio =>{
    if(radio.checked){
      console.log(radio.value);
      console.log(document.getElementById("totalPrice").innerHTML);
      const planPrice  =  document.getElementById("totalPrice").innerHTML;
      console.log(planPrice);
      document.getElementById("totalPrice").innerHTML =  parseInt(planPrice) -  parseInt(radio.value);
    }
  });

}

function goFromFourToTwo() {
  stepSummary.style.display = "none";
  stepPlan.style.display = "flex";
  circle2.style.color = "black";
  circle2.style.backgroundColor = "rgba(255, 255, 255)";
  circle4.style.backgroundColor = "rgb(255, 255, 255, 0)";
  circle4.style.color = "#fff";

  const adOnnPrice = document.getElementsByName("addOn").forEach(radio => {
    if (radio.checked) {
      console.log(radio.value);
      console.log(document.getElementById("totalPrice").innerHTML);
      const planPrice = document.getElementById("totalPrice").innerHTML;
      console.log(planPrice);
      document.getElementById("totalPrice").innerHTML =
        parseInt(planPrice) - parseInt(radio.value);
    }
  });
}

function goToStepThankYou(){
  console.log(document.getElementById("modeResume").innerHTML);
  if(document.getElementById("modeResume").innerHTML == "Choose a plan"){
    stepSummary.style.display = "flex";
    stepThankYou.style.display = "none";
  }
  else{
    stepSummary.style.display = "none";
    stepThankYou.style.display = "flex";
  }
}



// Check Inputs
function  checkName(){
    let myNameInput = document.getElementById("infoName");

    let  myNameError = document.getElementById("errorName");

    let  myNameRegex = /^[a-zA-Z-\s]+$/;

    if(myNameInput.value.trim()==  ""){
        myNameError.innerHTML = "This field is required";
    }
    else if (myNameRegex.test(myNameInput.value) ==  false){
        myNameError.innerHTML = "Can't contain  numbers or symbols";

    }
    else if  (myNameInput.value.trim()  !=="" ) {myNameError.innerHTML = "";
    }
}

function checkNum() {
  let myNumInput = document.getElementById("infoNumber");
  let myNumError = document.getElementById("errorNum");
  let myNumRegex = /^[0-9\s]+$/;

  if (myNumInput.value.trim() == "") {
    myNumError.innerHTML = "This field is required";
  } else if (myNumRegex.test(myNumInput.value) == false) {
    myNumError.innerHTML = "Must contain number";
  } else if (myNumInput.value.trim().length !== 10) {
    myNumError.innerHTML = "Invalid Phone Number";
  } else {
    myNumError.innerHTML = "";
  }
}

function checkMail() {
  let myMailInput = document.getElementById("infoMail");
  let myNumError = document.getElementById("errorMail");
  let myMailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (myMailInput.value.trim() == "") {
    myNumError.innerHTML = "This field is required";
  } else if (myMailRegex.test(myMailInput.value) == false) {
    myNumError.innerHTML = "Please enter a valid e-mail";
  } else {
    myNumError.innerHTML = "";
  }
}

function Achieve() {
  let myNumInput = document.getElementById("infoNumber");
  let myNameInput = document.getElementById("infoName");
  let myMailInput = document.getElementById("infoMail");
  let myNameRegex = /^[a-zA-Z-\s]+$/;
  let myNumRegex = /^[0-9\s]+$/;
  let myMailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (
    myNumInput.value.trim().length === 10 &&
    myNumRegex.test(myNumInput.value) === true &&
    myMailInput.value.trim().length !== 0 &&
    myMailRegex.test(myMailInput.value) === true &&
    myNameInput.value.trim().length !== 0 &&
    myNameRegex.test(myNameInput.value) === true
  ) {
    stepInfo.style.display = "none";
    stepPlan.style.display = "flex";
    circle1.style.color = "white";
    circle1.style.backgroundColor = "rgba(255, 255, 255, 0)";
    circle2.style.backgroundColor = "rgb(255, 255, 255)";
    circle2.style.color = "black";
  }
}

function checkPlan(){
  if (document.getElementById("modeResume").innerHTML ==  "Choose a plan"){
    stepInfo.style.display = "none";
    stepPlan.style.display = "flex";
    circle1.style.color = "white";
    circle1.style.backgroundColor = "rgba(255, 255, 255, 0)";
    circle2.style.backgroundColor = "rgb(255, 255, 255)";
    circle2.style.color = "black";
  }
  else {
    stepPlan.style.display = "none";
    stepAddOn.style.display = "flex";
    circle2.style.color = "white";
    circle2.style.backgroundColor = "rgba(255, 255, 255, 0)";
    circle3.style.backgroundColor = "rgb(255, 255, 255)";
    circle3.style.color = "black";

  }
}


// CHECK BOX (TOOGLE BETWEEN  MONTH AND YEAR PLANS)
document.getElementById("monthYear").innerHTML ="/mo";
checkBox =  document
.getElementById("switch")
.addEventListener("click", event=>{
    if(event.target.checked){
        planYear.style.display =  "flex";
        planMonth.style.display =  "none";
        adOnAnne.style.display = "flex";
        adOnMois.style.display =  "none";
        document.getElementById("monthYear").innerHTML ="/yr";
    }
    else{
        planYear.style.display = "none";
        planMonth.style.display = "flex";
        adOnAnne.style.display = "none";
        adOnMois.style.display =  "flex";
        document.getElementById("monthYear").innerHTML ="/mo";

    }
});

// Change color of Button plan after click and tracking users choices
// MONTHLY
checkBox = document
.getElementById("moiseArcade")
.addEventListener("click", event =>{
  moiseArcade.style.backgroundColor = "hsl(217, 100%, 97%)";
  moiseArcade.style.border =  "1px solid  hsl(213, 96%, 18%)";

  // setting other Monthly buttons to default
  moiseAdvanced.style.backgroundColor = "#fff";
  moiseAdvanced.style.border  = "1px solid hsl(229, 24%, 87%)";
  moisePro.style.backgroundColor =  "#fff";
  moisePro.style.border = "1px solid  hsl(229, 24%,  87%)";

   // setting all yearly buttons to default
  anneeArcade.style.backgroundColor =  "#fff";
  anneeArcade.style.border = "1px solid  hsl(229, 24%,  87%)";

  anneeAdvanced.style.backgroundColor =  "#fff";
  anneeAdvanced.style.border = "1px solid  hsl(229, 24%,  87%)";

  anneePro.style.backgroundColor =  "#fff";
  anneePro.style.border = "1px solid  hsl(229, 24%,  87%)";
   

  // taking the click  entry  into the summary box
  document.getElementById("modeResume").innerHTML = "Arcade (Monthly)";
  document.getElementById("priceResume").innerHTML = "$9/mo";
  document.getElementById("modeTotal").innerHTML = "Total (per month)";
})

checkBox =  document
.getElementById("moiseAdvanced")
.addEventListener("click", event =>{
  moiseAdvanced.style.backgroundColor = "hsl(217, 100%, 97%)";
  moiseAdvanced.style.border = "1px solid hsl(213, 96%, 18%)";

  // setting other Monthly buttons to default
  moiseArcade.style.backgroundColor = "#fff";
  moiseArcade.style.border  = "1px solid hsl(229, 24%, 87%)";
  moisePro.style.backgroundColor =  "#fff";
  moisePro.style.border = "1px solid  hsl(229, 24%,  87%)";

   // setting all yearly buttons to default
  anneeArcade.style.backgroundColor =  "#fff";
  anneeArcade.style.border = "1px solid  hsl(229, 24%,  87%)";

  anneeAdvanced.style.backgroundColor =  "#fff";
  anneeAdvanced.style.border = "1px solid  hsl(229, 24%,  87%)";

  anneePro.style.backgroundColor =  "#fff";
  anneePro.style.border = "1px solid  hsl(229, 24%,  87%)";

  document.getElementById("modeResume").innerHTML = "Advanced  (Monthly)";
  document.getElementById("priceResume").innerHTML = "$12/mo";
  document.getElementById("modeTotal").innerHTML = "Total (per month)";
})

checkBox =  document
.getElementById("moisePro")
.addEventListener("click", event =>{
  moisePro.style.backgroundColor = "hsl(217, 100%, 97%)";
  moisePro.style.border = "1px solid hsl(213, 96%, 18%)";

  // setting other Monthly buttons to default
  moiseArcade.style.backgroundColor =  "#fff";
  moiseArcade.style.border = "1px solid  hsl(229, 24%,  87%)";
  moiseAdvanced.style.backgroundColor = "#fff";
  moiseAdvanced.style.border  = "1px solid hsl(229, 24%, 87%)";
 

   // setting all yearly buttons to default
  anneeArcade.style.backgroundColor =  "#fff";
  anneeArcade.style.border = "1px solid  hsl(229, 24%,  87%)";

  anneeAdvanced.style.backgroundColor =  "#fff";
  anneeAdvanced.style.border = "1px solid  hsl(229, 24%,  87%)";

  anneePro.style.backgroundColor =  "#fff";
  anneePro.style.border = "1px solid  hsl(229, 24%,  87%)";

  document.getElementById("modeResume").innerHTML = "Pro  (Monthly)";
  document.getElementById("priceResume").innerHTML = "$15/mo";
  document.getElementById("modeTotal").innerHTML = "Total (per month)";
})

// YEARLY (ANNUALLY)
checkBox = document
.getElementById("anneeArcade")
.addEventListener("click", event =>{
  anneeArcade.style.backgroundColor = "hsl(217, 100%, 97%)";
  anneeArcade.style.border =  "1px solid  hsl(213, 96%, 18%)";

  // setting other yearly buttons to default
  anneeAdvanced.style.backgroundColor =  "#fff";
  anneeAdvanced.style.border = "1px solid  hsl(229, 24%,  87%)";
  anneePro.style.backgroundColor =  "#fff";
  anneePro.style.border = "1px solid  hsl(229, 24%,  87%)";

  // setting all Monthly buttons to default
  moiseArcade.style.backgroundColor =  "#fff";
  moiseArcade.style.border = "1px solid  hsl(229, 24%,  87%)";

  moiseAdvanced.style.backgroundColor = "#fff";
  moiseAdvanced.style.border  = "1px solid hsl(229, 24%, 87%)";
  moisePro.style.backgroundColor =  "#fff";
  moisePro.style.border = "1px solid  hsl(229, 24%,  87%)";

   
  // taking the click  entry  into the summary box
  document.getElementById("modeResume").innerHTML = "Arcade (Yearly)";
  document.getElementById("priceResume").innerHTML = "$90/mo";
  document.getElementById("modeTotal").innerHTML = "Total (per year)";
})

checkBox = document
.getElementById("anneeAdvanced")
.addEventListener("click", event =>{
  anneeAdvanced.style.backgroundColor = "hsl(217, 100%, 97%)";
  anneeAdvanced.style.border =  "1px solid  hsl(213, 96%, 18%)";

  // setting other yearly buttons to default
  anneeArcade.style.backgroundColor =  "#fff";
  anneeArcade.style.border = "1px solid  hsl(229, 24%,  87%)";
  anneePro.style.backgroundColor =  "#fff";
  anneePro.style.border = "1px solid  hsl(229, 24%,  87%)";

  // setting all Monthly buttons to default
  moiseArcade.style.backgroundColor =  "#fff";
  moiseArcade.style.border = "1px solid  hsl(229, 24%,  87%)";

  moiseAdvanced.style.backgroundColor = "#fff";
  moiseAdvanced.style.border  = "1px solid hsl(229, 24%, 87%)";
  moisePro.style.backgroundColor =  "#fff";
  moisePro.style.border = "1px solid  hsl(229, 24%,  87%)";

   
  // taking the click  entry  into the summary box
  document.getElementById("modeResume").innerHTML = "Advanced (Yearly)";
  document.getElementById("priceResume").innerHTML = "$120/mo";
  document.getElementById("modeTotal").innerHTML = "Total (per year)";
})

checkBox = document
.getElementById("anneePro")
.addEventListener("click", event =>{
  anneePro.style.backgroundColor = "hsl(217, 100%, 97%)";
  anneePro.style.border =  "1px solid  hsl(213, 96%, 18%)";

  // setting other yearly buttons to default
  anneeArcade.style.backgroundColor =  "#fff";
  anneeArcade.style.border = "1px solid  hsl(229, 24%,  87%)";
  anneeAdvanced.style.backgroundColor =  "#fff";
  anneeAdvanced.style.border = "1px solid  hsl(229, 24%,  87%)";

  // setting all Monthly buttons to default
  moiseArcade.style.backgroundColor =  "#fff";
  moiseArcade.style.border = "1px solid  hsl(229, 24%,  87%)";

  moiseAdvanced.style.backgroundColor = "#fff";
  moiseAdvanced.style.border  = "1px solid hsl(229, 24%, 87%)";
  moisePro.style.backgroundColor =  "#fff";
  moisePro.style.border = "1px solid  hsl(229, 24%,  87%)";

   
  // taking the click  entry  into the summary box
  document.getElementById("modeResume").innerHTML = "Pro (Yearly)";
  document.getElementById("priceResume").innerHTML = "$150/mo";
  document.getElementById("modeTotal").innerHTML = "Total (per year)";
})

// Pick Add-ons  STEP3
// Monthly Add-ons
checkBox = document
.getElementById("onlineMois")
.addEventListener("click", event =>{
  if(event.target.checked){
    document.getElementById("onlinePrice").innerHTML = "+$1/mo";
    document.getElementById("modeTotal").innerHTML  = "Total (per month)";
  }
  else{
    document.getElementById("onlinePrice").innerHTML = "+$0/mo";
  }
})

checkBox = document
.getElementById("storageMois")
.addEventListener("click", event =>{
  if(event.target.checked){
    document.getElementById("storagePrice").innerHTML = "+$2/mo";
    document.getElementById("modeTotal").innerHTML  = "Total (per month)";
  }
  else{
    document.getElementById("onlinePrice").innerHTML = "+$0/mo";
  }
})

checkBox = document
.getElementById("cutomizableMois")
.addEventListener("click", event =>{
  if(event.target.checked){
    document.getElementById("customizablePrice").innerHTML = "+$2/mo";
    document.getElementById("modeTotal").innerHTML  = "Total (per month)";
  }
  else{
    document.getElementById("onlinePrice").innerHTML = "+$0/mo";
  }
})

// Yearly Add-ons
checkBox = document
.getElementById("onlineAnne")
.addEventListener("click", event =>{
  if(event.target.checked){
    document.getElementById("onlinePrice").innerHTML = "+$10/yr";
    document.getElementById("modeTotal").innerHTML  = "Total (per year)";
  }
  else{
    document.getElementById("onlinePrice").innerHTML = "+$0/yr";
  }
})

checkBox = document
.getElementById("storageAnne")
.addEventListener("click", event =>{
  if(event.target.checked){
    document.getElementById("storagePrice").innerHTML = "+$20/yr";
    document.getElementById("modeTotal").innerHTML  = "Total (per year)";
  }
  else{
    document.getElementById("onlinePrice").innerHTML = "+$0/yr";
  }
})

checkBox = document
.getElementById("cutomizableAnne")
.addEventListener("click", event =>{
  if(event.target.checked){
    document.getElementById("customizablePrice").innerHTML = "+$20/yr";
    document.getElementById("modeTotal").innerHTML  = "Total (per year)";
  }
  else{
    document.getElementById("onlinePrice").innerHTML = "+$0/yr";
  }
})

// Plan price function
const planPrice = "0";
console.log(planPrice);

function getPrice1(){
  const planPrice = "9";
  console.log(planPrice);
  document.getElementById("totalPrice").innerHTML = planPrice;
}

function getPrice2(){
  const planPrice = "12";
  console.log(planPrice);
  document.getElementById("totalPrice").innerHTML = planPrice;
}

function getPrice3(){
  const planPrice = "15";
  console.log(planPrice);
  document.getElementById("totalPrice").innerHTML = planPrice;
}

function getPrice4(){
  const planPrice = "90";
  console.log(planPrice);
  document.getElementById("totalPrice").innerHTML = planPrice;
}

function getPrice5(){
  const planPrice = "120"
  console.log(planPrice);
  document.getElementById("totalPrice").innerHTML = planPrice;
}

function getPrice6(){
  const planPrice = "150";
  console.log(planPrice);
  document.getElementById("totalPrice").innerHTML = planPrice;
}

