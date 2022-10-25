let upBtn = document.querySelector(".up");
let buttons = document.querySelectorAll(".itemOne button");
let moonBtn = document.querySelector(".moonBtn")
let logo = document.querySelectorAll(".navbar-brand img")
// console.log(buttons);
onscroll = _ =>{
    if(scrollY > 300){
        upBtn.classList.add("showJs");
    }
    else{
        upBtn.classList.remove("showJs");
    }
}
upBtn.onclick = (_) => {
    scrollTo(
        {
            top : 0 ,
            left : 0 ,
            behavior : "smooth" 
        }
    )
}
buttons.forEach(button => {
    button.onclick = (_) =>{
        document.body.classList.toggle("dark");
        buttons[0].classList.toggle("d-none");
        buttons[1].classList.toggle("d-none");
        logo[0].classList.toggle("d-none");
        logo[1].classList.toggle("d-none");
    }
});
// moonBtn.onclick = (_) =>{
//     document.body.classList.toggle("dark");
//     buttons[0].classList.toggle("d-none");
//     buttons[1].classList.toggle("d-none");
//     logo[0].classList.toggle("d-none");
//     logo[1].classList.toggle("d-none");
// }