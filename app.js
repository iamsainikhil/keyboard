// color themes
var bodyStyles = document.body.style;

// lock keys toggle condition
let clkToggle = false;
let nlkToggle = false;
let slkToggle = false;

// keys
let keys = document.querySelectorAll('kbd');
let keyToggle = false;

// audio 
let keyAudio = document.getElementById('keyAudio');

// theme buttons
let buttons = document.querySelectorAll('button');

// toggle class on a lock key element
function toggleLockClass(element, condition) {
    if (condition) {
        element.classList.add('on');
        element.classList.remove('off');
    } else {
        element.classList.add('off');
        element.classList.remove('on');
    }
};

// toggle function for caps, num, and scroll lock keys
function toggleKey(code) {
    var el;
    // detect el based on keyCode
    switch (code) {
        case '20':
            el = document.getElementById('clk');
            clkToggle = !clkToggle;
            toggleLockClass(el, clkToggle);
            break;
        case '123':
            keyToggle = !keyToggle;
            if (keyToggle) {
                document.body.classList.add('light-off');
                buttons.forEach(button => button.style.color = '#fff');
            } else {
                document.body.classList.remove('light-off');
                buttons.forEach(button => button.style.color = '#333');
            }
            break;
        case '144':
            el = document.getElementById('nlk');
            nlkToggle = !nlkToggle;
            toggleLockClass(el, nlkToggle);
            break;
        case '145':
            el = document.getElementById('slk');
            slkToggle = !slkToggle;
            toggleLockClass(el, slkToggle);
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


defaultElement.addEventListener('click', function() {
    applyTheme('#D5BCA2', '#353535', '#f5f5f5', '#A46F5E')
});
themeOneElement.addEventListener('click', function() {
    applyTheme('#ddd', '#eee', '#808080', '#333')
});
themeTwoElement.addEventListener('click', function() {
    applyTheme('#333', '#fff', '#000', '#008996')
});
themeThreeElement.addEventListener('click', function() {
    applyTheme('#00c3b3', '#353535', '#f8f8f8', '#00AE94')
});

// custom theme
themeFourElement.addEventListener('click', function() {
    customToggle = !customToggle;
    if (customToggle) {
        customeElement.style.display = 'block';
    } else {
        customeElement.style.display = 'none';
    }
});

// global window keydown event from real keyboard
window.addEventListener('keydown', function(e) {
    toggleKey(e.keyCode.toString());
});