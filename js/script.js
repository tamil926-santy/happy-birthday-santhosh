// ======================================
// HAPPY BIRTHDAY WEBSITE
// JavaScript Part 1
// ======================================

// Pages
const pages = document.querySelectorAll(".page");
let currentPage = 0;

// Loading Screen
window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loading").style.display = "none";
        document.getElementById("website").classList.remove("hidden");

        createFloatingHearts();

    }, 2500);

});

// Show Page
function showPage(index){

    pages.forEach(page=>{
        page.classList.remove("active");
    });

    pages[index].classList.add("active");

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}

// YES Button
const yesBtn=document.getElementById("yesBtn");

yesBtn.addEventListener("click",()=>{

    currentPage=1;

    showPage(currentPage);

});

// Funny NO Button
const noBtn=document.getElementById("noBtn");
const cry=document.getElementById("cryMessage");

const messages=[

"😭 Please Say Yes Baby",

"😭😭 Please Say Yes Baby",

"💔 Really No?",

"🥺 I'm Crying...",

"❤️ Please Press YES..."

];

let noClick=0;

noBtn.addEventListener("click",()=>{

    if(noClick<messages.length){

        cry.innerHTML=messages[noClick];

    }else{

        cry.innerHTML="❤️ I Still Love You ❤️";

    }

    noBtn.style.position="relative";

    noBtn.style.left=(Math.random()*140-70)+"px";

    noBtn.style.top=(Math.random()*60-30)+"px";

    let size=1-(noClick*0.08);

    if(size<0.4){
        size=0.4;
    }

    noBtn.style.transform="scale("+size+")";

    yesBtn.style.transform="scale("+(1+(noClick*0.08))+")";

    noClick++;

});

// Next Buttons
const nextButtons=document.querySelectorAll(".next");

nextButtons.forEach(btn=>{

    btn.addEventListener("click",()=>{

        currentPage++;

        if(currentPage<pages.length){

            showPage(currentPage);

        }

    });

});

// Floating Hearts
function createFloatingHearts(){

    const container=document.getElementById("floatingHearts");

    setInterval(()=>{

        const heart=document.createElement("div");

        heart.className="heart";

        const icons=["❤️","💖","💕","💗","💘"];

        heart.innerHTML=icons[Math.floor(Math.random()*icons.length)];

        heart.style.left=Math.random()*100+"%";

        heart.style.fontSize=(18+Math.random()*25)+"px";

        heart.style.animationDuration=(5+Math.random()*4)+"s";

        container.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },9000);

    },350);

}

// =======================================
// JAVASCRIPT PART 2A
// Typing Effect + Image Reveal + Q1 + Q2
// =======================================


// ==============================
// FIRST KISS TYPING EFFECT
// ==============================

const typingBox = document.getElementById("typingBox");

const kissMessage =

`We Made it on your last birthday 😚...

Close your eyes for a while

and feel it ♥️`;

let typeIndex = 0;

let typingStarted = false;

function startTyping(){

    if(typingStarted) return;

    typingStarted = true;

    typingBox.innerHTML="";

    function type(){

        if(typeIndex < kissMessage.length){

            if(kissMessage[typeIndex] === "\n"){

                typingBox.innerHTML += "<br>";

            }else{

                typingBox.innerHTML += kissMessage[typeIndex];

            }

            typeIndex++;

            setTimeout(type,60);

        }

    }

    type();

}



// ==============================
// IMAGE REVEAL
// ==============================

const showImageBtn=document.getElementById("showImage");

const imageBox=document.getElementById("dateImageBox");

if(showImageBtn){

showImageBtn.addEventListener("click",()=>{

imageBox.style.display="block";

imageBox.classList.add("fadeIn");

showImageBtn.style.display="none";

});

}



// ==============================
// PAGE EVENTS
// ==============================

function pageEvents(){

const current=pages[currentPage];

if(current.id==="page6"){

startTyping();

}

}

const oldShowPage=showPage;

showPage=function(index){

oldShowPage(index);

pageEvents();

};



// ==============================
// QUESTION 1
// ==============================

const q1Buttons=document.querySelectorAll("#q1 .answer");

const q1Result=document.querySelector("#q1 .result");

q1Buttons.forEach(button=>{

button.addEventListener("click",()=>{

if(button.dataset.correct){

q1Result.innerHTML=`

🥳💙

Correct!!

You know me so well ❤️

`;

}else{

q1Result.innerHTML=`

😂😂

Wrong Answer!!

Correct Answer is

💙 Blue

`;

}

});

});



// ==============================
// QUESTION 2
// ==============================

const admireButtons=document.querySelectorAll(".admire");

const admireResult=document.querySelector("#q2 .result");

admireButtons.forEach(button=>{

button.addEventListener("click",()=>{

admireResult.innerHTML=`

🥰❤️

Oh my Darling...

<br><br>

I admire every inch of YOU

<br><br>

But first Thing Which make me fall in You

is Your Cute Dimple ❤️

`;

});

});



// ==============================
// BUTTON ANIMATION
// ==============================

const allButtons=document.querySelectorAll("button");

allButtons.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="scale(1.05)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="scale(1)";

});

});



// ==============================
// MEMORY IMAGE ZOOM
// ==============================

const memoryImages=document.querySelectorAll(".memory");

memoryImages.forEach(image=>{

image.addEventListener("click",()=>{

image.style.transform="scale(1.12)";

setTimeout(()=>{

image.style.transform="scale(1)";

},500);

});

});



// ==============================
// SMALL HEART BURST
// ==============================

document.addEventListener("click",(e)=>{

const heart=document.createElement("div");

heart.innerHTML="💖";

heart.style.position="fixed";

heart.style.left=e.clientX+"px";

heart.style.top=e.clientY+"px";

heart.style.fontSize="24px";

heart.style.pointerEvents="none";

heart.style.transition="1s";

heart.style.zIndex="99999";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform="translateY(-80px) scale(2)";

heart.style.opacity="0";

},20);

setTimeout(()=>{

heart.remove();

},1000);

});

// =======================================
// JAVASCRIPT PART 2B
// Q3 + Q4 + Q5 + Final Animation
// =======================================


// ==============================
// QUESTION 3
// ==============================

const checkLove=document.getElementById("checkLove");

const loveNumber=document.getElementById("loveNumber");

const loveResult=document.getElementById("loveResult");

if(checkLove){

checkLove.addEventListener("click",()=>{

const value=parseInt(loveNumber.value);

if(isNaN(value)){

loveResult.innerHTML="❤️ Please enter a number.";

return;

}

if(value<=100){

loveResult.innerHTML="🥺 More... It should be greater than 100 ❤️";

}else{

loveResult.innerHTML=`
🥰❤️

That's my Baby!!

I knew your love is much more than 100 ❤️
`;

}

});

}



// ==============================
// QUESTION 4
// ==============================

const nicknames=document.querySelectorAll(".nickname");

const nicknameResult=document.querySelector("#q4 .result");

nicknames.forEach(button=>{

button.addEventListener("click",()=>{

nicknameResult.innerHTML=`

🥹❤️

Neenga ipdi kupdanum

<br><br>

apdi kupdanum nu illa

<br><br>

Neenga Kupdunga Podhum ❤️

`;

});

});



// ==============================
// QUESTION 5
// ==============================

const checkWord=document.getElementById("checkWord");

const favoriteWord=document.getElementById("favoriteWord");

const wordResult=document.getElementById("wordResult");

if(checkWord){

checkWord.addEventListener("click",()=>{

const answer=favoriteWord.value.trim().toLowerCase();

if(answer==="enna"){

wordResult.innerHTML=`

🥹❤️

Correct!!

Our Favourite Word is

<b>Enna</b>

❤️

`;

}else{

wordResult.innerHTML=`

😜

Wrong Answer!!

Correct Answer is

<b>Enna</b>

❤️

`;

}

});

}



// ==============================
// LOVE LETTER ANIMATION
// ==============================

const letter=document.getElementById("loveLetter");

if(letter){

letter.style.opacity="0";

}

function showLetter(){

if(!letter) return;

letter.style.transition="2s";

letter.style.opacity="1";

letter.style.transform="scale(1.02)";

}



// ==============================
// FINAL PAGE
// ==============================

function createFinalHearts(){

const container=document.getElementById("finalHearts");

if(!container) return;

for(let i=0;i<40;i++){

setTimeout(()=>{

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="absolute";

heart.style.left=Math.random()*100+"%";

heart.style.top="100%";

heart.style.fontSize=(18+Math.random()*25)+"px";

heart.style.transition="5s linear";

container.appendChild(heart);

setTimeout(()=>{

heart.style.top="-20%";

heart.style.opacity="0";

},50);

setTimeout(()=>{

heart.remove();

},5000);

},i*120);

}

}



// ==============================
// STARS
// ==============================

function createStars(){

const stars=document.getElementById("stars");

if(!stars) return;

for(let i=0;i<80;i++){

const star=document.createElement("div");

star.innerHTML="✨";

star.style.position="absolute";

star.style.left=Math.random()*100+"%";

star.style.top=Math.random()*100+"%";

star.style.opacity=Math.random();

star.style.fontSize=(10+Math.random()*18)+"px";

stars.appendChild(star);

}

}



// ==============================
// SIMPLE CONFETTI
// ==============================

function launchConfetti(){

const container=document.getElementById("confetti");

if(!container) return;

for(let i=0;i<120;i++){

const piece=document.createElement("div");

piece.style.position="absolute";

piece.style.width="10px";

piece.style.height="10px";

piece.style.left=Math.random()*100+"%";

piece.style.top="-20px";

piece.style.background=[
"#ff4f87",
"#63c8ff",
"#ffd700",
"#8cff66",
"#ffffff"
][Math.floor(Math.random()*5)];

piece.style.transition="4s linear";

container.appendChild(piece);

setTimeout(()=>{

piece.style.top="110%";

piece.style.transform="rotate(720deg)";

},20);

setTimeout(()=>{

piece.remove();

},4200);

}

}



// ==============================
// FINAL PAGE DETECTION
// ==============================

const originalShowPage=showPage;

showPage=function(index){

originalShowPage(index);

const current=pages[index];

if(current.id==="letterPage"){

showLetter();

}

if(current.id==="finalPage"){

createStars();

createFinalHearts();

launchConfetti();

}

};



// ==============================
// END
// ==============================

console.log("❤️ Website Loaded Successfully ❤️");

// =============================
// SECRET CODE
// =============================

const SECRET = "santy@96";   // Change this to any code you want

const unlockBtn = document.getElementById("unlockWebsite");

unlockBtn.addEventListener("click",()=>{

const entered = document.getElementById("secretCode").value;

if(entered === SECRET){

document.getElementById("secretScreen").style.display="none";

}else{

document.getElementById("secretMessage").innerHTML="❌ Wrong Secret Code ❤️";

}

});