let contact = document.getElementById('contact')
const contactButton = document.querySelectorAll('.contact-button');
const githubButton = document.querySelectorAll('.github-button');
const linkedinButton = document.querySelectorAll('.linkedin-button');


function scrollToContact(){
    contact.style.transitionDuration = '0.5s';
    contact.scrollIntoView({behavior: "smooth"});    
}

function goToGithub(){
   window.open('https://github.com/xsquid') 
}

function goToLinkedin(){
    window.open('https://www.linkedin.com/in/daman-bundschuh-622802175/')
}

linkedinButton.forEach(el => el.addEventListener('click', goToLinkedin));
contactButton.forEach(el => el.addEventListener('click', scrollToContact));
githubButton.forEach(el => el.addEventListener('click', goToGithub));


/*let daman = document.getElementById('daman');
let hamster = document.getElementById('hamster');


daman.addEventListener('mouseover', function(){
    daman.innerHTML = 'poopy boy';
});

daman.addEventListener('mouseout', function(){
    daman.innerHTML = 'Daman Bundschuh';
});

hamster.addEventListener('mouseover', hideMe);

hamster.addEventListener('mouseout', imBack);

function hideMe(){
    hamster.style.display = 'none';
}

function imBack(){
    hamster.style.display = 'block'
}
*/