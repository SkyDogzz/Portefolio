let aboutContainer = document.getElementById('about-container');
let progressBars = document.getElementsByClassName('progress-bar');
let smoothScrollContainer = document.getElementById('smooth-scroll-container');
let aboutBase = document.querySelectorAll('.about-base');
let h1Shadow = document.querySelector('#h1-shadow');
let h1 = document.querySelector('h1');
let cv = document.querySelector('.cv');

cv.addEventListener('click', () => {
    let url = window.location.href;
    url = url.split('#')[0];
    window.open(url + 'img/Cv.png');

});

smoothScrollContainer.addEventListener('scroll', function () {
    const scrollTop = smoothScrollContainer.scrollTop;
    const clientHeight = smoothScrollContainer.clientHeight;

    let topElementToTopViewPortAbout = aboutContainer.getBoundingClientRect().top
    let topElementToTopViewPortProgressBars = []
    for (let i = 0; i < progressBars.length; i++) {
        topElementToTopViewPortProgressBars.push(progressBars[i].getBoundingClientRect().top)
    }

    if (scrollTop > (scrollTop + topElementToTopViewPortAbout - clientHeight)) {
        for (let i = 0; i < aboutBase.length; i++) {
            setTimeout(function () {
                aboutBase[i].classList.add('about-container-animation');
            }, 100 * i)
        }
    }

    for (let i = 0; i < progressBars.length; i++) {
        if (scrollTop > (scrollTop + topElementToTopViewPortProgressBars[i] - clientHeight) && scrollTop < (scrollTop + topElementToTopViewPortProgressBars[i])) {
            setTimeout(function () {
                progressBars[i].children[0].style.width = progressBars[i].children[0].getAttribute('data-percentage') + '%';
            }, 50 * i)
        }
        else {
            progressBars[i].children[0].style.width = '0%';
        }
    }
})

/* event on window when mouse mouving */
window.addEventListener('mousemove', function (e) {
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    let toMovX = (mouseX - window.innerWidth / 2) / window.innerWidth * 100;
    let toMovY = (mouseY - window.innerHeight / 2) / window.innerHeight * 100;
    h1Shadow.style.transform = 'translate(calc(-50% + ' + toMovX + 'px), calc(-50% + ' + toMovY + 'px)) rotate(-20deg)';
    h1.style.transform = 'translate(calc(-50% + ' + -toMovX + 'px), calc(-50% + ' + -toMovY + 'px))';
})

history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search)