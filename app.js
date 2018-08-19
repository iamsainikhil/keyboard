// lock keys toggle condition
let clkToggle = false;
let nlkToggle = false;
let slkToggle = false;

// keys
let keys = document.querySelectorAll('kbd');
let keyToggle = false;

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
            console.log(keyToggle);
            keyToggle = !keyToggle;
            if (keyToggle) {
                document.body.classList.add('light-off');
            } else {
                document.body.classList.remove('light-off');
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
    }
};

// on screen keyboard keypress event
function keyPress(e) {
    keyAttribute = e.target.dataset.key;
    if (e.target.localName === 'i') {
        // get data-key of kbd which is a parent of <i>
        keyAttribute = e.target.parentNode.dataset.key;
    }
    toggleKey(keyAttribute);
};

// // global window keydown event from real keyboard
// window.addEventListener('keydown', function(e) {
//     console.log(e.keyCode);
//     if (e.keyCode === 20 || e.keyCode === 144 || e.keyCode === 145) {
//         toggleKey(e.keyCode);
//     }
// });

// virtual keyboard key event
keys.forEach(key => key.addEventListener('click', keyPress));