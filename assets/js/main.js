const boxs = document.querySelectorAll(".box")

let arrIndex = [0, 1, 2]
let arrColors = ["#ff7e00", "#ffcc01", "#e94b86"]

boxs.forEach(item => item.addEventListener("click", function (e) {
    handleChangeBackground(arrIndex, boxs)
}))

function handleChangeBackground(arrIndex, boxs) {
    let i = 0;
    while (i < arrIndex.length) {
        if (i === arrIndex.length - 1) {
            break;
        }
        [arrIndex[i], arrIndex[i + 1]] = [arrIndex[i + 1], arrIndex[i]]
        console.log(arrIndex)
        i++;
    }


    for (let i = 0; i < boxs.length; i++) {
        boxs[i].style.backgroundColor = arrColors[arrIndex[i]];
    }
}


