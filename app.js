const btn = document.getElementById("loveBtn");
const box = document.getElementById("messageBox");

const messages = [
"💖 Wewe ni zawadi ya moyo wangu.",
"🌹 Tabasamu lako linaangaza dunia yangu.",
"✨ Kila siku nafurahi kukufikiria.",
"😍 Wewe ni mtu wa kipekee sana.",
"💞 Moyo wangu hupata amani nikikukumbuka.",
"👑 Mulhat, wewe ni malkia wa moyo wangu."
];

btn.addEventListener("click",()=>{

let random =
messages[Math.floor(Math.random()*messages.length)];

box.innerHTML=random;

createExplosion();

});

function createExplosion(){

for(let i=0;i<40;i++){

let heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=window.innerWidth/2+"px";

heart.style.top=window.innerHeight/2+"px";

heart.style.fontSize=
(Math.random()*30+15)+"px";

heart.style.pointerEvents="none";

document.body.appendChild(heart);

let x=(Math.random()-0.5)*700;
let y=(Math.random()-0.5)*700;

heart.animate([
{
transform:"translate(0,0)",
opacity:1
},
{
transform:`translate(${x}px,${y}px)`,
opacity:0
}
],{
duration:2500
});

setTimeout(()=>{
heart.remove();
},2500);

}

}

document.addEventListener("mousemove",(e)=>{

const heart=document.createElement("div");

heart.innerHTML="💖";

heart.style.position="fixed";

heart.style.left=e.clientX+"px";

heart.style.top=e.clientY+"px";

heart.style.pointerEvents="none";

document.body.appendChild(heart);

heart.animate([
{opacity:1},
{
transform:"translateY(-40px)",
opacity:0
}
],{
duration:1000
});

setTimeout(()=>{
heart.remove();
},1000);

});