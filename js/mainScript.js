document.querySelector('button').onclick = function () {
    let intervalFun = function(seconds) {
        let time = document.querySelector('#timeInp').value;
        let timeMinutes = time - 1;
        let interval = false;
        let timeSeconds = 59;
        let timerInterval = setInterval(() => {
            interval = true;
            timeSeconds--;
            if (timeSeconds <= 0) {
                timeSeconds = seconds;
                timeMinutes--;
            };
            if (timeMinutes < 0) {
                clearInterval(timerInterval);
                interval = false;
                new Audio('../timer.mp3').play();
                timeMinutes = 0;
                timeSeconds = 0;
            };
            document.querySelector('#minutes').innerHTML = timeMinutes;
            document.querySelector('#seconds').innerHTML = timeSeconds;
        }, 1000);  
    };
    if (document.querySelector('#timer').value>0) {
        let tOut = setTimeout(() => {
            new Audio('chill.mp3').play();
            setTimeout(() => {
                new Audio('chill.mp3').play();
                if (interval) {
                    setTimeout(tOut);
                };
            }, document.querySelector('#timer').value * 60000);
        }, document.querySelector('#chillTime').value * 60000);
    };
};