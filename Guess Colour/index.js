let rand, hex, gameOver = false,
    lives = 3;
InitOrEasy();

document.getElementById("easy").onclick = function () {
    InitOrEasy()
}
document.getElementById("hard").onclick = function () {
    Hard();
}

function Hard() {
    for (let i = 5; i <= 9; i++) {
        document.getElementById("c" + i).style.display = "block";
    }
    for (let j = 0; j <= 9; j++) {
        document.getElementById("c" + j).style.opacity = 1;
    }
    gameOver = false;
    lives = 3;
    for (let i = 0; i <= 9; i++) {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let j = 0; j < 6; j++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        document.getElementById("c" + i).style.backgroundColor = color;
    }
    rand = Math.floor(Math.random() * 9);
    hex = document.getElementById("c" + rand).style.backgroundColor;
    document.getElementById("rgb-code").innerText = hex;
    for (let i = 0; i <= 9; i++) {
        document.getElementById("c" + i).onclick = function () {
            if (gameOver == false) {
                if (document.getElementById("c" + i).style.backgroundColor == hex) {
                    document.getElementById("rgb-code").innerText = "You Won!";
                    gameOver = true;
                    setTimeout(Hard, 3000);
                } else {
                    document.getElementById("c" + i).style.opacity = 0;
                    lives--;
                    if (lives == 0) {
                        gameOver = true;
                        document.getElementById("rgb-code").innerText = "You Lost!";
                        setTimeout(Hard, 3000);
                    }
                }
            }
        }
    }
}

function InitOrEasy() {
    for (let i = 5; i <= 9; i++) {
        document.getElementById("c" + i).style.display = "none";
    }
    for (let i = 0; i <= 4; i++) {
        document.getElementById("c" + i).style.opacity = 1;
    }
    gameOver = false;
    lives = 3;
    for (let i = 0; i <= 4; i++) {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let j = 0; j < 6; j++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        document.getElementById("c" + i).style.backgroundColor = color;
    }
    rand = Math.floor(Math.random() * 5);
    hex = document.getElementById("c" + rand).style.backgroundColor;
    document.getElementById("rgb-code").innerText = hex;
    for (let i = 0; i <= 4; i++) {
        document.getElementById("c" + i).onclick = function () {
            if (gameOver == false) {
                if (document.getElementById("c" + i).style.backgroundColor == hex) {
                    document.getElementById("rgb-code").innerText = "You Won!";
                    gameOver = true;
                    setTimeout(InitOrEasy, 3000);
                } else {
                    document.getElementById("c" + i).style.opacity = 0;
                    lives--;
                    if (lives == 0) {
                        gameOver = true;
                        document.getElementById("rgb-code").innerText = "You Lost!";
                        setTimeout(InitOrEasy, 3000);
                    }
                }
            }
        }
    }
}