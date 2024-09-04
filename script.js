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




// CHECK BOX (TOOGLE BETWEEN  MONTH AND YEAR PLANS)

checkBox =  document
.getElementById("switch")
.addEventListener("click", event=>{
    if(event.target.checked){
        planYear.style.display =  "flex";
        planMonth.style.display =  "none";
        adOnAnne.style.display = "flex";
        adOnMois.style.display =  "none";
    }
    else{
        planYear.style.display = "none";
        planMonth.style.display = "flex";
        adOnAnne.style.display = "none";
        adOnMois.style.display =  "flex";

    }
});

// Change color of Button plan after click
