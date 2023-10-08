const boxs = document.querySelectorAll(".box")

boxs.forEach(item => item.addEventListener("click", function(e){
    if(e.target.classList.contains("box1")){
        e.target.classList.toggle("yellow")
    }
    else if(e.target.classList.contains("box2")){
        e.target.classList.toggle("pink")
    }
    else if(e.target.classList.contains("box3")){
        e.target.classList.toggle("change-color")
    }
}))