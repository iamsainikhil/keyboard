// color themes
var bodyStyles = document.body.style;

// keys
let keyboardElement = document.getElementsByClassName('keyboard');
let keys = document.querySelectorAll('kbd');

// audio 
let keyAudio = document.getElementById('keyAudio');

// theme buttons
let buttons = document.querySelectorAll('button');

// learn more
let info = document.getElementById('info');
let notes = document.getElementsByClassName('notes')[0];

// toggle class on a lock key element
function toggleLockClass(element) {
    element.classList.toggle('on');
};

// toggle function for caps, num, and scroll lock keys
function toggleKey(code) {
    var el;
    // detect el based on keyCode
    switch (code) {
        case '20':
            el = document.getElementById('clk');
            toggleLockClass(el);
            break;
        case '123':
            keyboardElement[0].classList.toggle('light-off');
            break;
        case '144':
            el = document.getElementById('nlk');
            toggleLockClass(el);
            break;
        case '145':
            el = document.getElementById('slk');
            toggleLockClass(el);
            break;
        default:
            keyAudio.currentTime = 0;
            keyAudio.play();
            break;
    }
};

// on screen keyboard keypress event
function keyPress(e) {
    let keyAttribute = e.target.dataset.key;
    if (e.target.localName === 'i' || e.target.localName === 'span') {
        // get data-key of kbd which is a parent of <i>
        keyAttribute = e.target.parentNode.dataset.key;
    }
    toggleKey(keyAttribute);
};

// virtual keyboard key event
keys.forEach(key => key.addEventListener('click', keyPress));

// color themes button events
let defaultElement = document.getElementById('t-0');
let themeOneElement = document.getElementById('t-1');
let themeTwoElement = document.getElementById('t-2');
let themeThreeElement = document.getElementById('t-3');
let themeFourElement = document.getElementById('t-4');

let customeElement = document.getElementById('c-t');
let customToggle = false;


function applyTheme(c1, c2, c3, c4) {
    bodyStyles.setProperty('--keyboard-bg-color', c1);
    bodyStyles.setProperty('--key-bg-color', c2);
    bodyStyles.setProperty('--key-color', c3);
    bodyStyles.setProperty('--lock-on-color', c4);
}

function toggleCustomThemeContent() {
    customToggle = !customToggle;
    if (customToggle) {
        customeElement.style.display = 'block';
    } else {
        customeElement.style.display = 'none';
    }
}

function hideCustomTheme() {
    customToggle = true;
    toggleCustomThemeContent();
}

defaultElement.addEventListener('click', function() {
    applyTheme('#00c3b3', '#353535', '#f8f8f8', '#00AE94');
    hideCustomTheme();
});
themeOneElement.addEventListener('click', function() {
    applyTheme('#bbb', '#eee', '#808080', '#333');
    hideCustomTheme();
});
themeTwoElement.addEventListener('click', function() {
    applyTheme('rgba(0, 0, 0, 0.8)', '#353535', '#f8f8f8', '#008996');
    hideCustomTheme();
});
themeThreeElement.addEventListener('click', function() {
    applyTheme('#D5BCA2', '#353535', '#f5f5f5', '#A46F5E');
    hideCustomTheme();
});

// custom theme
themeFourElement.addEventListener('click', function() {
    toggleCustomThemeContent();
});

// toggle key-press class on keys when real keyboard key is clicked
function toggleKeyPress(el) {
    if (el.classList.contains('key-press')) {
        el.classList.remove('key-press');
    } else {
        keys.forEach(key => key.classList.remove('key-press'));
        el.classList.add('key-press');
    }
}

// global window keydown event from real keyboard
window.addEventListener('keydown', function(e) {
    let code = e.keyCode.toString();
    let keyElement = document.querySelector(`kbd[data-key="${code}"]`);
    toggleKey(code);
    toggleKeyPress(keyElement);
});

// info button
info.addEventListener('click', function() {
    notes.classList.toggle('show-notes');
    gtag('send', 'event', 'Information', 'Learn More', 'Info Button', 5);
});