const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const welcome = document.getElementById("welcome");
const balloonScreen = document.getElementById("balloonScreen");

let popped = 0;

yesBtn.onclick = () => {
    welcome.classList.add("hidden");
    balloonScreen.classList.remove("hidden");
};

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", moveButton);

function moveButton(){
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 80);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

const messages = [
    "You are so special ❤️",
    "You make the world brighter ✨",
    "Never stop smiling 😊",
    "You are loved more than you know 💖"
];

document.querySelectorAll(".balloon").forEach((balloon, index)=>{

    balloon.onclick = ()=>{

        alert(messages[index]);

        balloon.style.transform="scale(0)";
        balloon.style.opacity="0";

        popped++;

        if(popped===4){
            setTimeout(()=>{
                alert("🎂 Amazing! Next we'll bring the birthday cake!");
            },500);
        }

    }

});
