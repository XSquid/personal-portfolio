let daman = document.getElementById('daman');
let hamster = document.getElementById('hamster');
let contact = document.getElementById('contact')

function hideMe(){
    hamster.style.display = 'none';
}

function imBack(){
    hamster.style.display = 'block'
}

function scrollToContact(){
    contact.style.transitionDuration = '0.5s';
    contact.scrollIntoView({behavior: "smooth"});    
}


const contactButton = document.querySelectorAll('.contact-button');

contactButton.forEach(el => el.addEventListener('click', scrollToContact));



daman.addEventListener('mouseover', function(){
    daman.innerHTML = 'poopy boy';
});

daman.addEventListener('mouseout', function(){
    daman.innerHTML = 'Daman Bundschuh';
});

hamster.addEventListener('mouseover', hideMe);

hamster.addEventListener('mouseout', imBack);