let boxs = document.querySelectorAll(".box");

window.addEventListener("scroll", showBox);

showBox();
function showBox() {
  
    const triggerBtn =window.innerHeight/5*4;
  boxs.forEach(box=>{
    const boxTop = box.getBoundingClientRect().top;
    console.log(boxTop)
    if(boxTop<triggerBtn){
        box.classList.add('center')
    }else{
        box.classList.remove('center')
    }
  })
}
