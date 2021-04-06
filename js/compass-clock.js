(function () {
    document.addEventListener('DOMContentLoaded', function domloaded() {
        console.info('compass clock loading');
        let _dial = document.querySelector('.dial-container');
        if (!!_dial) {
            let _seconds = _dial.querySelectorAll('.dial-second span');
            let _minute = _dial.querySelectorAll('.dial-minute span');
            let _hour = _dial.querySelectorAll('.dial-hour span');
            let _s_d = 200;
            let _s_r = 360 / _seconds.length;
            _seconds.forEach(function (e, i) {
                console.info(e);
                e.style.transform = 'rotate(' + i * _s_r + 'deg) translateX(' + _s_d + 'px)';
            });
        }
    });
})();