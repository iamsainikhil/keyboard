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
function toggleLock(code) {
    var el;
    // detect el based on keyCode
    if (code == 20) {
        el = document.getElementById('clk');
        clkToggle = !clkToggle;
        toggleLockClass(el, clkToggle);
    } else if (code == 144) {
        el = document.getElementById('nlk');
        nlkToggle = !nlkToggle;
        toggleLockClass(el, nlkToggle);
    } else if (code == 145) {
        el = document.getElementById('slk');
        slkToggle = !slkToggle;
        toggleLockClass(el, slkToggle);
    } else {
        // do nothing
    }
};

// on screen keyboard keypress event
function toggleKey(e) {
    keyAttribute = e.target;
    toggleLight(keyAttribute, keyToggle);
};

// lights off
function toggleLight(code) {
    if (code.dataset.key == 123) {
        keyToggle = !keyToggle;
        if (keyToggle) {
            document.body.classList.add('light-off');
        } else {
            document.body.classList.remove('light-off');
        }
    } else {
        toggleLock(code.dataset.key);
    }
}

// // global window keydown event from real keyboard
// window.addEventListener('keydown', function(e) {
//     console.log(e.keyCode);
//     if (e.keyCode === 20 || e.keyCode === 144 || e.keyCode === 145) {
//         toggleLock(e.keyCode);
//     }
// });

// virtual keyboard key event
keys.forEach(key => key.addEventListener('click', toggleKey));