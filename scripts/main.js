let list_item = document.querySelector('.col p');
let img_1 = document.querySelector('img');


list_item.addEventListener("mouseover", function(){
    img_1.src = "./assets/design.jpeg"
    list_item.style.cursor = 'default'
})

list_item.addEventListener("mouseout", function(){
    img_1.src = "./assets/pattern_1.jpeg"
})
