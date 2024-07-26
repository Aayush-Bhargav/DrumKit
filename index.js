const handleClick = (event, type) => {
    alert("Hey!" + type + " got clicked.");

}
// let w=document.getElementsByClassName("drum")[0];
// let a=document.getElementsByClassName("drum")[1];
// let s=document.getElementsByClassName("drum")[2];
// let d=document.getElementsByClassName("drum")[3];
// let j=document.getElementsByClassName("drum")[4];
// let k=document.getElementsByClassName("drum")[5];
// let l=document.getElementsByClassName("drum")[6];
// w.addEventListener('click',(event)=>{handleClick(event,'w')});
// a.addEventListener('click',(event)=>{handleClick(event,'a')});
// s.addEventListener('click',(event)=>{handleClick(event,'s')});
// d.addEventListener('click',(event)=>{handleClick(event,'d')});
// j.addEventListener('click',(event)=>{handleClick(event,'j')});
// k.addEventListener('click',(event)=>{handleClick(event,'k')});
// l.addEventListener('click',(event)=>{handleClick(event,'l')});
// const clickHandler = (event, part) => {
//     let audio;
//     switch (part) {
//         case 'w':
//             audio = new Audio('sounds/tom-1.mp3');
//             audio.play();
//             break;
//         case 'a':
//             audio = new Audio('sounds/tom-2.mp3');
//             audio.play();
//             break;
//         case 's':
//             audio = new Audio('sounds/tom-3.mp3');
//             audio.play();
//             break;
//         case 'd':
//             audio = new Audio('sounds/tom-4.mp3');
//             audio.play();
//             break;
//         case 'j':
//             audio = new Audio('sounds/snare.mp3');
//             audio.play();
//             break;
//         case 'k':
//             audio = new Audio('sounds/crash.mp3');
//             audio.play();
//             break;
//         case 'l':
//             audio = new Audio('sounds/kick-bass.mp3');
//             audio.play();
//             break;
//         default:
//             break;
//     }
// }
const keyHandler=(key)=>{
    // console.log(event);
    // let val=event.key;
    // console.log(val);
    let audio;
    switch (key) {
        case 'w':
            audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case 'a':
            audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case 's':
            audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case 'd':
            audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case 'j':
            audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case 'k':
            audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case 'l':
            audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        default:
            break;
    }
}
const keyAnimate=(key)=>{//to add animation effect to the pressed key
    let btn=document.getElementsByClassName(key)[0];
    btn.classList.add("pressed");//add a class
    setTimeout(()=>{ //after a 200 millisecond delay remove that class thus creating an animation effect.
        btn.classList.remove("pressed")
    },200)

}
let buttons = document.querySelectorAll('button');
for (let i = 0; i < buttons.length; i++) {
    let part = buttons[i].innerHTML;
    buttons[i].addEventListener('click', (event) => { keyHandler( part);keyAnimate(part) });
}
document.addEventListener('keydown',(event)=>{keyHandler(event.key);keyAnimate(event.key)})
//changing color of text to white when clicked on
// for (let i = 0; i < buttons.length; i++) {
//     // let part = buttons[i].innerHTML;
//     buttons[i].addEventListener('click',(event)=>{
//         event.target.style.color="white";
//     })
// }
