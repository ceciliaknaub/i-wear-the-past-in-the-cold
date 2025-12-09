const list_item = document.querySelectorAll('.hover-text');
let img_1 = document.querySelector('img');

const img_list = ['./assets/design.jpeg',"./assets/design.jpeg"]

list_item.forEach(item => {
    item.addEventListener("mouseover", function(){
        img_1.src = "./assets/design.jpeg"
        item.style.cursor = 'default'
    })

    item.addEventListener("mouseout", function(){
        img_1.src = "./assets/pattern_1.jpeg"
    })
})


