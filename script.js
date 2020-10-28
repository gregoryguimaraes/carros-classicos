function initTabNav(){

const carImages = document.querySelectorAll('.tab-img');
const carDescription = document.querySelectorAll('.tab-description');


carDescription[0].classList.add('active')
function showText(index) {
    carDescription.forEach((text) => {
        text.classList.remove('active');
    });
    carDescription[index].classList.add('active')
}


carImages.forEach((img, i) => {
    img.addEventListener('click', () =>{
        showText(i)
    });
});
};
initTabNav();


function initAccordionList(){
const accordionList = document.querySelectorAll('.accordion-list dt');

accordionList[0].classList.toggle('ativo');
accordionList[0].nextElementSibling.classList.toggle('ativo')
function showAccordion(event){
    event.target.classList.toggle('ativo');
    event.target.nextElementSibling.classList.toggle('ativo')
}

accordionList.forEach((list) =>{
    list.addEventListener('click', showAccordion)
});
}
initAccordionList();


function initDarkThemeMode(){
const buttonImage = document.querySelector('.dark-light-theme-img img');

function alterarTema(){
    const darkTheme = document.querySelectorAll('.dark-theme');
    const todasLetras = document.querySelectorAll('p, h1, h2, dt, dd');
    const todasSections = document.querySelectorAll('section')

    todasSections.forEach((section) =>{
        section.classList.toggle('dark-theme-ativo')
    })
    todasLetras.forEach((palavra) => {
        palavra.classList.toggle('dark-theme-ativo')
    })
    darkTheme.forEach((item)=>{
        item.classList.toggle('dark-theme-ativo')
    })
}


buttonImage.addEventListener('click', function(){
    alterarTema();
});
};
initDarkThemeMode();

function initScrollSuave(){
    const linksInternos = document.querySelectorAll('a')

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href); //busca pelo ID
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })

        //Forma alternativa
        // const topo = section.offsetTop;
        // window.scrollTo({
        //     top: topo,
        //     behavior: 'smooth',
        // });
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection)
    });
}
initScrollSuave();