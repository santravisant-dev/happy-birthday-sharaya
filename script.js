const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");

const yes = document.getElementById("yes");
const no = document.getElementById("no");

const balloons = document.querySelectorAll(".balloon");

const card = document.getElementById("messageCard");
const cardText = document.getElementById("cardText");
const continueBtn = document.getElementById("continueBtn");

let popped = 0;

yes.onclick = () => {

page1.classList.remove("active");
page2.classList.add("active");

};

function moveNo(){

const x = Math.random()*(window.innerWidth-150);

const y = Math.random()*(window.innerHeight-100);

no.style.left = x+"px";
no.style.top = y+"px";

}

no.addEventListener("mouseover",moveNo);
no.addEventListener("click",moveNo);

balloons.forEach(balloon=>{

balloon.onclick=()=>{

if(balloon.classList.contains("done")) return;

balloon.classList.add("done");

balloon.style.transition=".5s";
balloon.style.transform="scale(0)";
balloon.style.opacity="0";

card.style.display="block";

cardText.innerHTML = balloon.dataset.message;

popped++;

};

});

continueBtn.onclick=()=>{

card.style.display="none";

if(popped===4){

page2.classList.remove("active");

page3.classList.add("active");

}

};
