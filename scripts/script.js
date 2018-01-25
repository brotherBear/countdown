
    CountDownTimer('06/12/2018 04:00 PM', 'countdown');

    function CountDownTimer(dt, id)
    {
        var end = new Date(dt);

        var _second = 1000;
        var _minute = _second * 60;
        var _hour = _minute * 60;
        var _day = _hour * 24;
        var timer;

        function showRemaining() {
            var now = new Date();
            var distance = end.getTime() - now.getTime();
            if (distance < 0) {

                clearInterval(timer);
                document.getElementById(id).innerHTML = 'EXPIRED!';

                return;
            }
            var days = Math.floor(distance / _day);
            var hours = Math.floor((distance % _day) / _hour);
            var minutes = Math.floor((distance % _hour) / _minute);
            var seconds = Math.floor((distance % _minute) / _second);

            var displaytext = days + ' days ';
            displaytext += hours + ' hours ';
            displaytext += minutes + ' mins ';
            displaytext += seconds + ' secs';

            document.getElementById('header').innerHTML = 'Countdown to: <br/>' + end;
            document.getElementById(id).innerHTML = displaytext;
        }

        timer = setInterval(showRemaining, 1000);
    }
