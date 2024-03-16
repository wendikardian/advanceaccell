function changeImage(element){
    element.setAttribute('src', 'img/img-header2.png')
}
function changeImageBack(element){
    element.setAttribute('src', 'img/img-header1.png')
}


var btnLike = document.querySelector('#green')
var btnDislike = document.querySelector("#red")

btnLike.onclick = likeColor
btnDislike.onclick = dislikeColor

function likeColor(){
    if(btnDislike.classList.contains('red')){
        btnDislike.classList.remove('red')
    }
    // console.log("Helll")
    // var a  = this.querySelector('i');
    this.classList.toggle('green')
}

function dislikeColor(){
    if(btnLike.classList.contains('green')){
        btnLike.classList.remove('green')
    }
    this.classList.toggle('red')
    // var a  = this.querySelector('i');
    // a.classList.toggle('red')
}