const listItem = document.querySelectorAll('.hover-text');
let img1 = document.querySelector('img');
let imgList = ['./assets/rose_tulip.jpeg','./assets/rose_tulip.jpeg','./assets/contrast_stitch.jpeg','./assets/contrast_stitch.jpeg','./assets/contrast_stitch.jpeg','./assets/flower.jpeg','./assets/petal.jpeg']


/*Replace images on hover*/
listItem.forEach((item, index) => {
    console.log("Index:", index);

    /*Replace image with feature*/
    listItem[index].addEventListener("mouseover", function(){
            img1.src = imgList[index]
            listItem[index].style.cursor = 'default'
    })

    /*Return to landing image*/
    listItem[index].addEventListener("mouseout", function(){
        img1.src = "./assets/full_sweater.jpeg"
    })

})



