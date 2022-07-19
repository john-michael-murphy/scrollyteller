const iframe = document.currentScript.previousElementSibling;

function enableScroll() {
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';

    if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
}

function disableScroll() {
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.position = 'fixed';
}

const fullscreenStyles = Object.freeze({
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    zIndex: '99999999',
    height: '100%',
    width: '100%'
});

let styleCache = {};

function closeFullscreen() {
    Object.entries(styleCache).forEach(([styleKey, styleValue]) => {
        iframe.style[styleKey] = styleValue;
    });

    enableScroll();
}

function openFullscreen() {
    styleCache = {};

    Object.entries(fullscreenStyles).forEach(([styleKey, styleValue]) => {
        styleCache[styleKey] = iframe.style[styleKey];
        iframe.style[styleKey] = styleValue;
    });

    disableScroll();
}

document.addEventListener('keydown', () => {
    if (e.code === 'Escape') closeFullscreen();
})

window.addEventListener("message", (event) => {
   if (event.data === 'scrolly-fullscreen-true') openFullscreen();
   else if (event.data === 'scrolly-fullscreen-false') closeFullscreen();
}, false);
