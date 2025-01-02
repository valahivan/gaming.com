const navbar = document.querySelector('.navbar-nav');
const btnToggle = document.querySelector('.btn-toggle');
btnToggle.onclick = function(){
    navbar.classList.toggle('open');
}

document.addEventListener('click', function(e){
    if(!navbar.contains(e.target) && !btnToggle.contains(e.target)){
        navbar.classList.remove('open');
    }
});