const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 70);
});


const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1000,
    delay: 100,
//     reset: true
});

sr.reveal('.texto-inicio, about',{}); 
sr.reveal('.seprator, .info, .butao',{delay: 400}); 
sr.reveal('.sobre, .sobre-conteudo, .caixa, .separator, .featured, .item, .details, .item-info, .year-badge',{ interval: 200}); 
sr.reveal('.centro, .centro-principal, .centro-texto, .formulario, .final, .pra-cima, .copyright',{interval: 200}); 