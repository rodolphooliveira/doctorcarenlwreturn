window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
    const targetLine = scrollY + innerHeight / 2

    //verificar se a seção passou a linha
    // quais dados vou precisar?
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    console.log(sectionTop)
    console.log(sectionHeight)

    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

    // informações dos dados 
    console.log('O topo da seção chegou ou passou da linha?', sectionTopReachOrPassedTargetLine)

    // verificar se a base está abaixo da linha alvo
    // quais o dados vou precisar?  

    // a seção termina onde? 
    const sectionEndsAt = sectionTop + sectionHeight

    // o final da seção passou da linha alto
    const sectionEndPassedTargetline = sectionEndsAt <= targetLine

    console.log('O fundo da seção passou da linha?' ,sectionEndPassedTargetline)

    //limites da seção
    const sectionBoundaries = 
    sectionTopReachOrPassedTargetLine && 
    !sectionEndPassedTargetline

    const sectionId = section.getAttribute('id')
    .querySelector(`menu. a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if (sectionBoundaries) {
        menuElement.classList.add('active')
    }    

}

function showNavOnScroll () {
    if (scrollY > 0) {
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
}

function showBackToTopButtonOnScroll() {
    if (scrollY > 550) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu () {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`
#home, 
#home img, 
#home .stats, 
#services,
#services header,
#services .card,
#about,
#about header,
#about .content`)


