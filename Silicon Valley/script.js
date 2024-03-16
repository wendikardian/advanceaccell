window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    console.log(reveals)
    reveals.forEach(reveal => {
        var windowHeight = window.innerHeight;
        var revealTop = reveal.getBoundingClientRect().top;
        var revealPoint = 40;
        if(revealTop < windowHeight - revealPoint) {
            reveal.classList.add('active');
        }else{
            reveal.classList.remove('active');
        }
    })
}