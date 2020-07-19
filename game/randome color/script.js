let nums = document.querySelectorAll('.num');
let spisocbgs = document.querySelectorAll('.spisocbg');
let checks = document.querySelectorAll('.check');
let button = document.querySelectorAll('.proverca');

let cislo1 = getRandomInRange(1,4)
let cislo2 = getRandomInRange(1,4)
let cislo3 = getRandomInRange(1,4)
let cislo4 = getRandomInRange(1,4)

let color1 = getRandomInRange(1,4)
    if (color1 === 1) {
        color1 = 'black';
    } else if (color1 === 2) {
        color1 = 'gold';
    } else if (color1 === 3) {
        color1 = 'pink';
    } else if (color1 === 4) {
        color1 = 'forestgreen';
    }
let color2 = getRandomInRange(1,4)
    if (color2 === 1) {
        color2 = 'black';
    } else if (color2 === 2) {
        color2 = 'gold';
    } else if (color2 === 3) {
        color2 = 'pink';
    } else if (color2 === 4) {
        color2 = 'forestgreen';
    }
let color3 = getRandomInRange(1,4)
    if (color3 === 1) {
        color3 = 'black';
    } else if (color3 === 2) {
        color3 = 'gold';
    } else if (color3 === 3) {
        color3 = 'pink';
    } else if (color3 === 4) {
        color3 = 'forestgreen';
    }
let color4 = getRandomInRange(1,4)
    if (color4 === 1) {
        color4 = 'black';
    } else if (color4 === 2) {
        color4 = 'gold';
    } else if (color4 === 3) {
        color4 = 'pink';
    } else if (color4 === 4) {
        color4 = 'forestgreen';
    }

nums[0].oninput = function () {
    spisocbgs[0].oninput = function () {
        button[0].onclick = function () {
            if (nums[0].value == cislo1 && spisocbgs[0].value == color1) {
                checks[0].style.backgroundColor = 'forestgreen';
            } else if (nums[0].value == cislo1 || spisocbgs[0].value == color1) {
                checks[0].style.backgroundColor = 'gold';
            }
            else {
                checks[0].style.backgroundColor = 'black';
            }
        };
    };
};

nums[1].oninput = function () {
    spisocbgs[1].oninput = function () {
        button[1].onclick = function () {
            if (nums[1].value == cislo2 && spisocbgs[1].value == color2) {
                checks[1].style.backgroundColor = 'forestgreen';
            } else if (nums[1].value == cislo2 || spisocbgs[1].value == color2) {
                checks[1].style.backgroundColor = 'gold';
            }
            else {
                checks[1].style.backgroundColor = 'black';
            }
        };
    };
};

nums[2].oninput = function () {
    spisocbgs[2].oninput = function () {
        button[2].onclick = function () {
            if (nums[2].value == cislo3 && spisocbgs[2].value == color3) {
                checks[2].style.backgroundColor = 'forestgreen';
            } else if (nums[2].value == cislo3 || spisocbgs[2].value == color3) {
                checks[2].style.backgroundColor = 'gold';
            }
            else {
                checks[2].style.backgroundColor = 'black';
            }
        };
    };
};

nums[3].oninput = function () {
    spisocbgs[3].oninput = function () {
        button[3].onclick = function () {
            if (nums[3].value == cislo4 && spisocbgs[3].value == color4) {
                checks[3].style.backgroundColor = 'forestgreen';
            } else if (nums[3].value == cislo4 || spisocbgs[3].value == color4) {
                checks[3].style.backgroundColor = 'gold';
            }
            else {
                checks[3].style.backgroundColor = 'black';
            }
        };
    };
}

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }