let aboutContainer = document.getElementById('about-container');
let progressBars = document.getElementsByClassName('progress-bar');
let smoothScrollContainer = document.getElementById('smooth-scroll-container');
let aboutBase = document.querySelectorAll('.about-base');

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
            progressBars[i].children[0].style.width = progressBars[i].children[0].getAttribute('data-percentage') + '%';
        }
        else {
            progressBars[i].children[0].style.width = '0%';
        }
    }
})

history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search)