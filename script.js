function showPage(num){

document.querySelectorAll(".page")
.forEach(p=>p.classList.remove("active"));

document
.getElementById("page"+num)
.classList.add("active");

if(num===4){
startTyping();
}

}

const startDate =
new Date("2025-12-18");

function updateCounter(){

const now=new Date();

const days=Math.floor(
(now-startDate)/(1000*60*60*24)
);

document.getElementById("counter")
.innerHTML=
"❤️ بقالنا مع بعض "+days+" يوم ❤️";

}

updateCounter();

const message=
`انا عارفه أننا م هنعرف نقعد مع بعض ولا نشوف بعض
بس حاولت اعملك حاجه حلوه حتي لو هتضحكك شويه
ومتحسش أن عيد ميلادك عدى عادي زى اى يوم

لحد ما نشوف بعض ❤️

حاولت افكر كتير انى ابسطك
بس بما اننا مهندسين زي بعض
قولت حاجه تميزنا يا هندسه ❤️

كل سنه وانت طيب يا حبيبي
وسنه سعيده عليك
وان شاء الله تحقق كل اللي انت بتتمناه
واشوفك احسن واحد ف الدنيا بحبك😍
عارفة إنك شوفت الويب سايت بدري والمفاجأة اتحرقت 😭❤️، بس ده مش مبرر إنك تبخل عليا بريأكشن حلو 🌚، أنا تعبت فيه والله 🫡💖
وقعدت أفكر كتير أعملك إيه يفرحك ويفكرك إن اليوم ده مميز
المهم إن كل كلمة وصورة وذكرى بينا هنا معمولة مخصوص علشانك وكنت مبسوطه اوى وانا بعملهولك والله ❤️.
كفايه عندي وانت بتتفرج عليه بتبقى بتضحك أو مبسوط 🎂✨❤️.`;

let i=0;

function startTyping(){

const typing=
document.getElementById("typing");

typing.innerHTML="";

i=0;

const timer=setInterval(()=>{

typing.innerHTML+=message.charAt(i);

i++;

if(i>=message.length){
clearInterval(timer);
}

},40);

}

function badGift(){

document.getElementById("bad").innerHTML=`
<h2>هموت نفسي اقسم بالله  😭</h2>
<button onclick="showPage(6)">
خلاص خلاص حلوة 😂
</button>
`;

}

for(let i=0;i<35;i++){

let heart=
document.createElement("div");

heart.className="heart";

heart.innerHTML=
["❤️","💖","💕","💗"]
[Math.floor(Math.random()*4)];

heart.style.left=
Math.random()*100+"%";

heart.style.animationDuration=
(4+Math.random()*6)+"s";

heart.style.fontSize=
(20+Math.random()*20)+"px";

document.body.appendChild(heart);

}