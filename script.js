const collapsebutton = document.querySelector('.navcollapse');
const navbar = document.querySelector('.navitems');

collapsebutton.addEventListener('click', ()=>{
    navbar.classList.toggle('active');
})
