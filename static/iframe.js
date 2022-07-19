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

/** @param {Element} iframe */
export function init(iframe) {

    function closeFullscreen() {
        window.postMessage('scrolly-fullscreen-false', iframe.getAttribute('href'));
    }

    function openFullscreen() {
        
    }

    document.addEventListener('keydown', () => {
        if (e.code === 'Escape') closeModal();
    })

    function handleKeyDown(e) {
    }
    
    el.appendChild()
}