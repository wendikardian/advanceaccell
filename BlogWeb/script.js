function changeText(){
    var replaceText = document.getElementsByClassName("mini-text")[0].innerHTML = "Scroll untuk melihat"
    document.getElementById("icon-up").style.display = "none";
    document.getElementById("icon-down").style.display = "block";
}

var btnLike = document.querySelector('#green')
var btnDislike = document.querySelector("#red")

btnLike.onclick = likeColor
btnDislike.onclick = dislikeColor

function likeColor(){
    if(btnDislike.classList.contains('red')){
        btnDislike.classList.remove('red')
    }
    this.classList.toggle('green')
}

function dislikeColor(){
    if(btnLike.classList.contains('green')){
        btnLike.classList.remove('green')
    }
    this.classList.toggle('red')
}

function changeImage(element){
    element.setAttribute('src', 'img/img-header2.png')
}
function changeImageBack(element){
    element.setAttribute('src', 'img/img-header.png')
}

var myList = document.getElementsByTagName("li");
// console.log(myList);
var i;
for(i = 0; i<myList.length; i++){
    var span = document.createElement("span");
    span.innerHTML = "x"
    myList[i].appendChild(span).setAttribute("class", "close")
}

var close = document.getElementsByClassName("close")
var i;
for(i=0; i<close.length; i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none";
    }
}

function newElement(){
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    if(inputValue === '' || inputValue === ' '){
        alert("Data tidak boleh kosong")
    }else{
        document.getElementById("myUL").appendChild(li).setAttribute("class", "search-tags-item")
        li.innerHTML = inputValue
    }
    document.getElementById("myInput").value = "";
    var span = document.createElement("span");
    span.innerHTML = "x"
    li.appendChild(span).setAttribute("class", "close");
    for(i = 0; i<close.length; i++){
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none"
        }
    }
}


var slides = document.querySelectorAll('.slide');
var buttons = document.querySelectorAll('.slider-btn')
let currentSlide = 1

var manualNav = function(manual){
    slides.forEach(function(slide) {
        slide.classList.remove('active');
        buttons.forEach(btn => {
            btn.classList.remove('active')
        });
    });
    slides[manual].classList.add('active');
    buttons[manual].classList.add('active');
}

buttons.forEach(function(btn, i) {
    btn.addEventListener('click', function(){
        manualNav(i);
        currentSlide = i;
    })
})


var repeat = function(activeClass){
    let active = document.getElementsByClassName('active');
    let i=1;
    var repeater = function(){
        setTimeout(function() {
            [...active].forEach(function(activeSlide) {
                activeSlide.classList.remove('active')
            });

            slides[i].classList.add('active')
            buttons[i].classList.add('active')
            i++;
            if(slides.length == i){
                i = 0
            }
            if(i>= slides.length){
                return
            }
            repeater();
        }, 5000)
    }
    repeater()
}

repeat()

AOS.init();