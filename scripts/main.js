const listItem = document.querySelectorAll('.hover-text');
let img1 = document.querySelector('img');
let imgList = ['./assets/rose.png','./assets/tulip.png','./assets/contrast_stitch.jpeg','./assets/white_stitch.png','./assets/magenta_stitch.png','./assets/flower_1.jpeg','./assets/petal.jpeg']


/*Replace images on hover*/
listItem.forEach((item, index) => {

    /*Replace image with feature*/
    setInterval(timerOn(index),1000)

    
    /*Return to landing image*/
    setInterval(timerOff(index),1000)
})

function timerOn(index) {
        listItem[index].addEventListener("mouseover", function(){
            img1.src = imgList[index]
            listItem[index].style.cursor = 'pointer'
            listItem[index].style.opacity = "0.5"
    })
}

function timerOff(index) {
        listItem[index].addEventListener("mouseout", function(){
        img1.src = "./assets/full_sweater.jpeg"
        listItem[index].style.cursor = 'none'
        listItem[index].style.opacity = "1"
    })
}




