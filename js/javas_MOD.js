let timer_glob_sec = 0,
    prohod = 0,
    timer_glob_sec_temp = 0,
    kotirovka = 0,
    onetiksec_on = 0,
    gorizontal_on = 0;
let gorizontmini,
    vremya_size,
    max_size,
    gis_size,
    ur_gist,
    ur_str_size,
    str_min_size,
    font_size,
    menuopen,
    color,
    invert,
    timer,
    max_obj,
    max_obj_color,
    Strelki_On,
    strelki_procent,
    blok_shema,
    odinak,
    okrugl_on,
    poc,
    obrez,
    pair2,
    okr_get_elem,
    local_get_elem,
    okrugl,
    gorizontal,
    testgorizont,
    details;

const valx = document.getElementById('valx');
const Qvalx = $(valx);
const ctx = valx.getContext('2d');

let preload = $('.preload');
let pair = $('#pair');
let size = $('#size');
let divscrol = $('.divscrol');
let period = $('#period')
function ArrowDraw(_0xf774xb, _0xf774xc, _0xf774xd, _0xf774xe, _0xf774xf, _0xf774x10, _0xf774x11, _0xf774x12, _0xf774x13) {
    let rasp;
    if (_0xf774xc === 'up') {
        rasp = 1
    }
    if (_0xf774xc === 'down') {
        rasp = -1
    }
    let fun;
    if (_0xf774x13 === 'str') {
        fun = 1
    }
    if (_0xf774x13 === 'fill') {
        fun = 2
    }
    _0xf774xb.beginPath();
    _0xf774xb.strokeStyle = _0xf774x11;
    _0xf774xb.fillStyle = _0xf774x11;
    _0xf774xb.lineWidth = _0xf774x12;
    let _0xf774x14, _0xf774x15;
    _0xf774xd += _0xf774xf / 2;
    _0xf774xb.moveTo(_0xf774xd, _0xf774xe);
    _0xf774x14 = _0xf774xf / 2;
    _0xf774x15 = rasp * _0xf774x10 / 2;
    _0xf774xb.lineTo(_0xf774xd + _0xf774x14, _0xf774xe + _0xf774x15);
    _0xf774x14 = _0xf774xf / 5;
    _0xf774x15 = rasp * _0xf774x10 / 2;
    _0xf774xb.lineTo(_0xf774xd + _0xf774x14, _0xf774xe + _0xf774x15);
    _0xf774x14 = _0xf774xf / 5;
    _0xf774x15 = rasp * _0xf774x10;
    _0xf774xb.lineTo(_0xf774xd + _0xf774x14, _0xf774xe + _0xf774x15);
    _0xf774x14 = -_0xf774xf / 5;
    _0xf774x15 = rasp * _0xf774x10;
    _0xf774xb.lineTo(_0xf774xd + _0xf774x14, _0xf774xe + _0xf774x15);
    _0xf774x14 = -_0xf774xf / 5;
    _0xf774x15 = rasp * _0xf774x10 / 2;
    _0xf774xb.lineTo(_0xf774xd + _0xf774x14, _0xf774xe + _0xf774x15);
    _0xf774x14 = -_0xf774xf / 2;
    _0xf774x15 = rasp * _0xf774x10 / 2;
    _0xf774xb.lineTo(_0xf774xd + _0xf774x14, _0xf774xe + _0xf774x15);
    _0xf774xb.closePath();
    _0xf774xb.stroke();
    if (fun === 2) {
        _0xf774xb.fill()
    }
}
function OpenMenu() {
    $('#open_menu').click(function () {
        if (document.getElementById('open_menu').checked) {
            document.getElementById('Menu').style.display = 'block';
            localStorage.setItem('open_menu', 'true');
            stsrelki_move();
            return 1
        } else {
            document.getElementById('Menu').style.display = 'none';
            localStorage.setItem('open_menu', 'false');
            stsrelki_move();
            return 0
        }
    });
    if (localStorage.getItem('open_menu') === 'true') {
        document.getElementById('open_menu').setAttribute('checked', 'checked');
        document.getElementById('Menu').style.display = 'block';
        return 1
    } else {
        document.getElementById('Menu').style.display = 'none';
        return 0
    }
}
function stsrelki_move() {
    document.getElementById('strelki_check').onclick = function () {
        if (document.getElementById('strelki_check').checked) {
            if (localStorage.getItem('open_menu') === 'true') {
                localStorage.setItem('strelki_check', 'true');
                return 1
            }
        } else {
            document.getElementById('Strelki_On').style.display = 'none';
            localStorage.setItem('strelki_check', 'false');
            return 0
        }
    };
    if (localStorage.getItem('open_menu') === 'true') {
        if (localStorage.getItem('strelki_check') === 'true') {
            document.getElementById('strelki_check').setAttribute('checked', 'checked');
            return 1
        } else {
            return 0
        }
    } else {
        if (localStorage.getItem('strelki_check') === 'true') {
            document.getElementById('strelki_check').setAttribute('checked', 'checked');
            return 1
        } else {
            return 0
        }
    }
}
function check_1(_0xf774x1a) {
    document.getElementById(_0xf774x1a).onclick = function () {
        if (document.getElementById(_0xf774x1a).checked) {
            localStorage.setItem(_0xf774x1a, 'true');
            return 1
        } else {
            localStorage.setItem(_0xf774x1a, 'false');
            return 0
        }
    };
    if (localStorage.getItem(_0xf774x1a) === 'true') {
        document.getElementById(_0xf774x1a).setAttribute('checked', 'checked');
        return 1
    } else {
        return 0
    }
}
function font_size_s(_0xf774x1a) {
    document.getElementById(_0xf774x1a).onclick = function () {
        const _0xf774x1c = document.getElementById('font');
        let _0xf774x1d = _0xf774x1c.options[_0xf774x1c.selectedIndex].value, id0;
        switch (_0xf774x1d) {
            case '0':
                id0 = 'vremya_size';
                if (localStorage.getItem('vremya_size') >= 1) {
                    vremya_size = localStorage.getItem('vremya_size');
                    document.getElementById('font_size').setAttribute('value', vremya_size)
                } else {
                    vremya_size = 14;
                    document.getElementById('font_size').setAttribute('value', vremya_size)
                }
                break;
            case '1':
                id0 = 'max_size';
                if (localStorage.getItem('max_size') >= 1) {
                    max_size = localStorage.getItem('max_size');
                    document.getElementById('font_size').setAttribute('value', max_size)
                } else {
                    max_size = 14;
                    document.getElementById('font_size').setAttribute('value', max_size)
                }
                break;
            case '2':
                id0 = 'gis_size';
                if (localStorage.getItem('gis_size') >= 1) {
                    gis_size = localStorage.getItem('gis_size');
                    document.getElementById('font_size').setAttribute('value', gis_size)
                } else {
                    gis_size = 14;
                    document.getElementById('font_size').setAttribute('value', gis_size)
                }
                break;
            case '3':
                id0 = 'ur_gist';
                if (localStorage.getItem('ur_gist') >= 1) {
                    ur_gist = localStorage.getItem('ur_gist');
                    document.getElementById('font_size').setAttribute('value', ur_gist)
                } else {
                    ur_gist = 14;
                    document.getElementById('font_size').setAttribute('value', ur_gist)
                }
                break;
            case '4':
                id0 = 'ur_str_size';
                if (localStorage.getItem('ur_str_size') >= 1) {
                    ur_str_size = localStorage.getItem('ur_str_size');
                    document.getElementById('font_size').setAttribute('value', ur_str_size)
                } else {
                    ur_str_size = 14;
                    document.getElementById('font_size').setAttribute('value', ur_str_size)
                }
                break;
            case '5':
                id0 = 'str_min_size';
                if (localStorage.getItem('str_min_size') >= 1) {
                    str_min_size = localStorage.getItem('str_min_size');
                    document.getElementById('font_size').setAttribute('value', str_min_size)
                } else {
                    str_min_size = 14;
                    document.getElementById('font_size').setAttribute('value', str_min_size)
                }
                break
        }
        font_size = document.getElementById('font_size').value;
        localStorage.setItem(id0, font_size);
        document.getElementById(_0xf774x1a).setAttribute('value', font_size)
    };
    if (localStorage.getItem('vremya_size') >= 1) {
        vremya_size = localStorage.getItem('vremya_size')
    } else {
        vremya_size = 14
    }
    if (localStorage.getItem('max_size') >= 1) {
        max_size = localStorage.getItem('max_size')
    } else {
        max_size = 14
    }
    if (localStorage.getItem('gis_size') >= 1) {
        gis_size = localStorage.getItem('gis_size')
    } else {
        gis_size = 14
    }
    if (localStorage.getItem('ur_gist') >= 1) {
        ur_gist = localStorage.getItem('ur_gist')
    } else {
        ur_gist = 14
    }
    if (localStorage.getItem('ur_str_size') >= 1) {
        ur_str_size = localStorage.getItem('ur_str_size')
    } else {
        ur_str_size = 14
    }
    if (localStorage.getItem('str_min_size') >= 1) {
        str_min_size = localStorage.getItem('str_min_size')
    } else {
        str_min_size = 14
    }
}
function blok_shema_0(_0xf774x1a) {
    document.getElementById(_0xf774x1a).onclick = function () {
        if (document.getElementById(_0xf774x1a).checked) {
            localStorage.setItem(_0xf774x1a, 'true');
            if (invert === 1) {
                document.body.style.backgroundImage = "url('img/blok_shema_mod.png')"
            } else {
                document.body.style.backgroundImage = "url('img/blok_shema_classic.png')"
            }
            return 1
        } else {
            localStorage.setItem(_0xf774x1a, 'false');
            document.body.style.backgroundImage = 'none';
            return 0
        }
    };
    if (localStorage.getItem(_0xf774x1a) === 'true') {
        document.getElementById(_0xf774x1a).setAttribute('checked', 'checked');
        if (invert === 1) {
            document.body.style.backgroundImage = "url('img/blok_shema_mod.png')"
        } else {
            document.body.style.backgroundImage = "url('img/blok_shema_classic.png')"
        }
        return 1
    } else {
        document.body.style.backgroundImage = 'none';
        return 0
    }
}
function Menu() {
    menuopen = OpenMenu();
    color = check_1('color');
    invert = check_1('invert');
    timer = check_1('timer');
    max_obj = check_1('max_obj');
    max_obj_color = check_1('max_obj_color');
    Strelki_On = stsrelki_move();
    strelki_procent = 0;
    font_size = font_size_s('font_size');
    blok_shema = blok_shema_0('blok_shema');
    odinak = check_1('odinak');
    okrugl_on = check_1('okrugl_on');
    onetiksec_on = check_1('onetiksec_on');
    gorizontal_on = check_1('gorizontal_on');
    poc = check_1('poc');
    details = check_1('fotoprint');

    document.getElementById('background').onclick = function () {
        var _0xf774x20 = document.getElementById('background');
        var _0xf774x21 = _0xf774x20.options[_0xf774x20.selectedIndex].value;
        switch (_0xf774x21) {
            case '0':
                document.body.style.backgroundColor = '#21252c';
                break;
            case '1':
                document.body.style.backgroundColor = '#000000';
                break;
            case '2':
                document.body.style.backgroundColor = '#00008b';
                break;
            case '3':
                document.body.style.backgroundColor = '#808080';
                break;
            case '4':
                document.body.style.backgroundColor = '#686c5e';
                break;
            case '5':
                document.body.style.backgroundColor = '#964b00';
                break;
            case '6':
                document.body.style.backgroundColor = '#ffd700';
                break;
            case '7':
                document.body.style.backgroundColor = '#6DB3F2';
                break;
            case '8':
                document.body.style.backgroundColor = 'transparent';
                break
        }
        localStorage.setItem('background', _0xf774x21)
    };
    if (localStorage.getItem('background') > '0') {
        const _0xf774x22 = document.querySelector('#background');
        const _0xf774x23 = localStorage.getItem('background');
        switch (_0xf774x23) {
            case '0':
                document.body.style.backgroundColor = '#21252c';
                break;
            case '1':
                document.body.style.backgroundColor = '#000000';
                break;
            case '2':
                document.body.style.backgroundColor = '#00008b';
                break;
            case '3':
                document.body.style.backgroundColor = '#808080';
                break;
            case '4':
                document.body.style.backgroundColor = '#686c5e';
                break;
            case '5':
                document.body.style.backgroundColor = '#964b00';
                break;
            case '6':
                document.body.style.backgroundColor = '#ffd700';
                break;
            case '7':
                document.body.style.backgroundImage = '#6DB3F2';
                break;
            case '8':
                document.body.style.backgroundColor = 'transparent';
                break
        }
        document.getElementById('background').setAttribute('background', _0xf774x23);
        _0xf774x22.value = _0xf774x23
    }
    document.getElementById('obrez').onclick = function () {
        obrez = document.getElementById('obrez').value;
        document.getElementById('obrez').setAttribute('value', obrez);
        localStorage.setItem('obrez', obrez)
    };
    if (isNaN(obrez) === true) {
        obrez = 0
    } else {}
    if (localStorage.getItem('obrez') !== document.getElementById('obrez').value) {
        document.getElementById('obrez').value = localStorage.getItem('obrez');
        obrez = localStorage.getItem('obrez');
        if (!obrez) {
            obrez = 0;
            localStorage.setItem('obrez', obrez)
        }
    } else {
        localStorage.setItem('obrez', obrez)
    }
    pair2 = pair.attr('val');
    document.getElementById('okrugl').onclick = function () {
        okrugl = document.getElementById('okrugl').value;
        document.getElementById('okrugl').setAttribute('value', okrugl);
        localStorage.setItem('okrugl' + pair2, okrugl)
    };
    okr_get_elem = document.getElementById('okrugl').value;
    local_get_elem = localStorage.getItem('okrugl' + pair2);
    if (!local_get_elem) {
        if (!okr_get_elem) {} else {
            okrugl = okr_get_elem;
            localStorage.setItem('okrugl' + pair2, okr_get_elem)
        }
    } else {
        okrugl = localStorage.getItem('okrugl' + pair2);
        document.getElementById('okrugl').setAttribute('value', okrugl)
    }
    document.getElementById('gorizontal').onclick = function () {
        gorizontal = document.getElementById('gorizontal').value;
        document.getElementById('gorizontal').setAttribute('value', gorizontal);
        localStorage.setItem('gorizontal' + pair2, gorizontal)
    };
    okr_get_elem = document.getElementById('gorizontal').value;
    local_get_elem = localStorage.getItem('gorizontal' + pair2);
    if (!local_get_elem) {
        if (!okr_get_elem) {} else {
            gorizontal = okr_get_elem;
            localStorage.setItem('gorizontal' + pair2, okr_get_elem)
        }
    } else {
        gorizontal = localStorage.getItem('gorizontal' + pair2);
        document.getElementById('gorizontal').setAttribute('value', gorizontal)
    }
}
const Sign = function () {
    let _0xf774x2c = 0;
    mainpocmaxall = [];
    let X_price, Y_price,fon_svecha,open_sv;
    let main = this,
        _0xf774x2e, _0xf774x2f = false,
        _0xf774x30 = 0,
        _0xf774x31 = 0,
        _0xf774x32 = window.location.hostname,
        _0xf774x33 = [x = 0, y = 0],
        _0xf774x34 = 'Binomo',
        _0xf774x35 = 0,
        _0xf774x36 = 0,
        buyerrrtr = 0,
        sub_bin,
        sub_uid,
        glob_hour,
        glob_min,
        glob_sec;
    let color_text;
    let _0xf774x39 = [];
    Qvalx.attr('width', window.innerWidth);
    Qvalx.attr('height', window.innerHeight);
    $(window).bind('resize orientationchange', function () {
        Qvalx.attr('width', window.innerWidth);
        Qvalx.attr('height', window.innerHeight)
    });
    Qvalx.mousemove(function (_0xf774x3a) {
        _0xf774x33.x = _0xf774x3a.pageX;
        _0xf774x33.y = _0xf774x3a.pageY;
        const _0xf774x3b = ((Qvalx.width() / 100) * 15) / 100;
        const _0xf774x10 = Qvalx.height() - ((Qvalx.height() / 100) * 200);
        if (_0xf774x33.x < (_0xf774x3b * 100) && _0xf774x33.y < _0xf774x10) {
            requestAnimationFrame(main.indi)
        }
        if (_0xf774x33.y > _0xf774x10) {
            requestAnimationFrame(main.indi)
        }
    });
    this.lincen = function (_0xf774x3c) {
        if (_0xf774x3c.hp < _0xf774x33.y && _0xf774x33.y < (_0xf774x3c.hp + _0xf774x3c.hh) && _0xf774x33.x < _0xf774x3c.ww) {
            return true
        }
        return _0xf774x3c.hp < _0xf774x33.y && _0xf774x33.y < (_0xf774x3c.hp + _0xf774x3c.hh) && _0xf774x33.x > _0xf774x3c.wp && _0xf774x33.x < (_0xf774x3c.wp + _0xf774x3c.ww);
    };
    this.risv = function (_0xf774x3d, _0xf774x3e) {
        let _0xf774x44;
        const _0xf774x3f = _0xf774x3d.length;
        let _0xf774x10 = (Qvalx.height() - ((Qvalx.height() / 100) * 20)) / _0xf774x3f,
            _0xf774xf, _0xf774x40 = _0xf774x3e / 100,
            _0xf774x3b = ((Qvalx.width() / 100) * 15) / 100;
        if (window.location.hostname.length !== _0xf774x32.length) {
            return
        }
        const _0xf774x41 = [];
        let cena_gist = 0;
        let _0xf774x42 = 0,
            _0xf774x43 = 0;
        for (_0xf774x44 = 0; _0xf774x44 < _0xf774x3f; _0xf774x44++) {
            if (_0xf774x3d[_0xf774x44][0].length > _0xf774x42) {
                _0xf774x42 = _0xf774x3d[_0xf774x44][0].length
            }
            if (_0xf774x3d[_0xf774x44][0].length < _0xf774x42) {
                _0xf774x43 = _0xf774x3d[_0xf774x44][0].length
            }
        }
        let vertikal;
        let vertik;
        let temp;
        let temp_2;
        let tim;
        let hour;
        let plus;
        let minut;
        let sec;
        for (_0xf774x44 = 0; _0xf774x44 < _0xf774x3f; _0xf774x44++) {
            testgorizont = _0xf774x3d[_0xf774x44][0].split('.')[1];
            if (gorizontal_on === 1) {
                if (_0xf774x3d[_0xf774x44][0].length < _0xf774x42) {
                    if (_0xf774x42 - _0xf774x3d[_0xf774x44][0].length === 1) {
                        gorizontmini = _0xf774x3d[_0xf774x44][0].split('.')[1] + '0'
                    } else {
                        if (_0xf774x42 - _0xf774x3d[_0xf774x44][0].length === 2) {
                            gorizontmini = _0xf774x3d[_0xf774x44][0].split('.')[1] + '00'
                        } else {
                            if (_0xf774x42 - _0xf774x3d[_0xf774x44][0].length === 3) {
                                gorizontmini = _0xf774x3d[_0xf774x44][0].split('.')[1] + '000'
                            } else {
                                if (_0xf774x42 - _0xf774x3d[_0xf774x44][0].length === 4) {
                                    gorizontmini = _0xf774x3d[_0xf774x44][0].split('.')[1] + '0000'
                                } else {
                                    if (_0xf774x42 - _0xf774x3d[_0xf774x44][0].length === 5) {
                                        gorizontmini = _0xf774x3d[_0xf774x44][0].split('.')[1] + '00000'
                                    }
                                }
                            }
                        }
                    }
                    if (!(gorizontmini % gorizontal)) {
                        ctx.beginPath();
                        ctx.strokeStyle = 'grey';
                        ctx.moveTo(0, (_0xf774x10 * _0xf774x44 + _0xf774x10 / 2));
                        ctx.lineTo((Qvalx.width() / 2), (_0xf774x10 * _0xf774x44 + _0xf774x10 / 2));
                        ctx.stroke();
                        if (_0xf774x3d[_0xf774x44][0] <= main.data.data[0].close) {
                            ctx.fillStyle = 'rgba(210, 59, 59, 1)'
                        }
                        ctx.font = ur_gist + 'px Verdana';
                        ctx.fillText(gorizontmini, ((Qvalx.width() / 2) + 90) - (_0xf774x3d[_0xf774x44][0].length * 8), (_0xf774x10 * _0xf774x44) + _0xf774x10 / 2 + 5)
                    }
                } else {
                    if (_0xf774x3d[_0xf774x44][0].length > _0xf774x43) {
                        if (!(testgorizont % gorizontal)) {
                            ctx.beginPath();
                            ctx.strokeStyle = 'grey';
                            ctx.moveTo(0, (_0xf774x10 * _0xf774x44 + _0xf774x10 / 2));
                            ctx.lineTo((Qvalx.width() / 2), (_0xf774x10 * _0xf774x44 + _0xf774x10 / 2));
                            ctx.stroke();
                            if (_0xf774x3d[_0xf774x44][0] <= main.data.data[0].close) {
                                ctx.fillStyle = 'rgba(210, 59, 59, 1)'
                            }
                            ctx.fillStyle = '#fff';
                            ctx.font = ur_gist + 'px Verdana';
                            ctx.fillText(testgorizont, ((Qvalx.width() / 2) + 100) - (_0xf774x3d[_0xf774x44][0].length * 8), (_0xf774x10 * _0xf774x44) + _0xf774x10 / 2 + 5)
                        }
                    }
                }
            }
            if ((_0xf774x3d[_0xf774x44][1] > 6) && (poc === 1)) {
                if (_0xf774x3d[_0xf774x44][1] === _0xf774x3e) {
                    ctx.beginPath();
                    ctx.strokeStyle = 'grey';
                    ctx.moveTo(0, (_0xf774x10 * _0xf774x44 + _0xf774x10 / 2));
                    ctx.lineTo((Qvalx.width() / 80) * 50, (_0xf774x10 * _0xf774x44 + _0xf774x10 / 2));
                    ctx.stroke();
                    ctx.fillStyle = 'rgba(0, 33, 56, 0.61)';
                    ctx.fillRect(((Qvalx.width() / 100) * 25) - (_0xf774x3d[_0xf774x44][0].length * 8), (_0xf774x10 * _0xf774x44 + (_0xf774x10 / 2)) - 25, String(_0xf774x3d[_0xf774x44][0]).length * 10, 20);
                    ctx.fillStyle = 'rgba(210, 59, 59, 1)'
                    if (_0xf774x3d[_0xf774x44][0] <= main.data.data[0].close) {
                        ctx.fillStyle = 'rgba(86, 176, 104, 1)'
                    }
                    ctx.fillRect(((Qvalx.width() / 100) * 22) - (_0xf774x3d[_0xf774x44][0].length * 8), (_0xf774x10 * _0xf774x44 + (_0xf774x10 / 2)) - 25, String(_0xf774x3d[_0xf774x44][1]).length * 10, 20);
                    ctx.fillStyle = '#fff';
                    ctx.font = ur_gist + 'px Verdana';
                    ctx.fillText(_0xf774x3d[_0xf774x44][0], (($(valx).width() / 100) * 25) - (_0xf774x3d[_0xf774x44][0].length * 8), (_0xf774x10 * _0xf774x44) + _0xf774x10 / 2 - 10);
                    ctx.fillText(_0xf774x3e, (($(valx).width() / 100) * 22) - (_0xf774x3d[_0xf774x44][0].length * 8), (_0xf774x10 * _0xf774x44) + _0xf774x10 / 2 - 10)
                }
            }
            _0xf774xf = _0xf774x3d[_0xf774x44][1];
            if (invert === 1) {

                ctx.fillStyle = '#d75c48';
                if (_0xf774x3d[_0xf774x44][0] <= main.data.data[0].close) {
                    ctx.fillStyle = '#53a15f'
                }

                if (color === 1) {
                    if (_0xf774x3d[_0xf774x44][1] >= 5 && _0xf774x3d[_0xf774x44][1] < 8) {
                        ctx.fillStyle = '#bf3e2a'
                    } else {
                        if (_0xf774x3d[_0xf774x44][1] >= 8 && _0xf774x3d[_0xf774x44][1] < 10) {
                            ctx.fillStyle = '#963121'
                        } else {
                            if (_0xf774x3d[_0xf774x44][1] >= 10) {
                                ctx.fillStyle = '#6e2418'
                            }
                        }
                    }
                    if (_0xf774x3d[_0xf774x44][0] <= main.data.data[0].close) {
                        if (_0xf774x3d[_0xf774x44][1] >= 5 && _0xf774x3d[_0xf774x44][1] < 8) {
                            ctx.fillStyle = '#42804b'
                        } else {
                            if (_0xf774x3d[_0xf774x44][1] >= 8 && _0xf774x3d[_0xf774x44][1] < 10) {
                                ctx.fillStyle = '#315e38'
                            } else {
                                if (_0xf774x3d[_0xf774x44][1] >= 10) {
                                    ctx.fillStyle = '#203d24'
                                }
                            }
                        }
                    }
                }
            } else {
                ctx.fillStyle = '#53a15f';
                if (_0xf774x3d[_0xf774x44][0] <= main.data.data[0].close) {
                    ctx.fillStyle = '#d75c48'
                }
                if (color === 1) {
                    if (_0xf774x3d[_0xf774x44][1] >= 5 && _0xf774x3d[_0xf774x44][1] < 8) {
                        ctx.fillStyle = '#42804b'
                    } else {
                        if (_0xf774x3d[_0xf774x44][1] >= 8 && _0xf774x3d[_0xf774x44][1] < 10) {
                            ctx.fillStyle = '#315e38'
                        } else {
                            if (_0xf774x3d[_0xf774x44][1] >= 10) {
                                ctx.fillStyle = '#203d24'
                            }
                        }
                    }
                    if (_0xf774x3d[_0xf774x44][0] <= main.data.data[0].close) {
                        if (_0xf774x3d[_0xf774x44][1] >= 5 && _0xf774x3d[_0xf774x44][1] < 8) {
                            ctx.fillStyle = '#bf3e2a'
                        } else {
                            if (_0xf774x3d[_0xf774x44][1] >= 8 && _0xf774x3d[_0xf774x44][1] < 10) {
                                ctx.fillStyle = '#963121'
                            } else {
                                if (_0xf774x3d[_0xf774x44][1] >= 10) {
                                    ctx.fillStyle = '#6e2418'
                                }
                            }
                        }
                    }
                }
            }
            ctx.fillRect(0, _0xf774x10 * _0xf774x44, (_0xf774xf / _0xf774x40) * _0xf774x3b, _0xf774x10 - (_0xf774x10 / 100));
            if (_0xf774x3d[_0xf774x44][0] === main.data.data[0].close) {
                cena_gist = (_0xf774x10 * _0xf774x44);
                ctx.beginPath();
                ctx.strokeStyle = '#49bde8';
                ctx.moveTo(0, _0xf774x10 * _0xf774x44);
                ctx.lineTo((Qvalx.width() / 100) * 30, _0xf774x10 * _0xf774x44);
                ctx.stroke();
                ctx.fillStyle = '#49bde8';
                ctx.font = gis_size + 'px Verdana';
                vertikal = (Qvalx.height() / 2 - 100);
                vertik = Math.round(_0xf774x10 * _0xf774x44);
                if (vertik > vertikal) {
                    temp = (-15);
                    temp_2 = (-45)
                } else {
                    temp = 14;
                    temp_2 = 60
                }
                tim = new Date();
                hour = tim.getHours();
                if (timer === 1) {
                    if (_0xf774x34 === 'Binomo') {
                        plus = 1
                    } else {
                        plus = 0
                    }
                    minut = plus + tim.getMinutes();
                    sec = 60 - glob_sec + plus
                } else {
                    plus = 0;
                    minut = tim.getMinutes();
                    sec = glob_sec - plus
                }
                if (minut > 59) {
                    minut = 0;
                    hour = hour + plus
                }
                if (hour < 10) {
                    hour = '0' + hour
                }
                if (minut < 10) {
                    minut = '0' + minut
                }
                if (sec < 10) {
                    sec = ':' + '0' + sec
                } else {
                    if (sec < 0) {
                        sec = 0
                    }
                }
                if (timer === 1) {
                    if (sec <= '45' && sec > '35') {
                        ctx.fillStyle = '#ffff00'
                    }
                    if (sec <= '35' && sec > '30') {
                        ctx.fillStyle = '#ff0000'
                    }
                } else {
                    if (sec >= '15' && sec < '25') {
                        ctx.fillStyle = '#ffff00'
                    }
                    if (sec >= '25' && sec < '30') {
                        ctx.fillStyle = '#ff0000'
                    }
                }
                ctx.fillText(_0xf774x3d[_0xf774x44][0], ((Qvalx.width() / 100) * 20) - (_0xf774x3d[_0xf774x44][0].length * 8), (_0xf774x10 * _0xf774x44) + temp)
            }
            _0xf774x41.hp = _0xf774x10 * _0xf774x44;
            _0xf774x41.hh = _0xf774x10 - (_0xf774x10 / 100);
            _0xf774x41.ww = _0xf774x3b * 100;
            if (main.lincen(_0xf774x41) || (_0xf774x2c === _0xf774x3d[_0xf774x44][0])) {
                ctx.fillStyle = 'rgba(0, 33, 56, 0.61)';
                ctx.fillRect(((Qvalx.width() / 100) * 15.2), (_0xf774x10 * _0xf774x44 + (_0xf774x10 / 2)), String(_0xf774x3d[_0xf774x44][0]).length * 10, 20);
                ctx.fillStyle = 'rgba(210, 59, 59, 1)'
                if (_0xf774x3d[_0xf774x44][0] <= main.data.data[0].close) {
                    ctx.fillStyle = 'rgba(86, 176, 104, 1)';
                }
                ctx.fillRect(((Qvalx.width() / 100) * 15.2), (_0xf774x10 * _0xf774x44 + (_0xf774x10 / 2)) - 20, String(_0xf774x3d[_0xf774x44][1]).length * 20, 20);
                ctx.beginPath();
                ctx.strokeStyle = '#fff';
                ctx.moveTo(0, _0xf774x10 * _0xf774x44 + (_0xf774x10 / 2));
                ctx.lineTo((Qvalx.width() / 100) * 15.2, _0xf774x10 * _0xf774x44 + (_0xf774x10 / 2));
                ctx.stroke();
                ctx.fillStyle = '#fff';
                ctx.font = gis_size + 'px Verdana';
                if (odinak > 0) {
                    _0xf774x2c = _0xf774x3d[_0xf774x44][0]
                }
                ctx.fillText(_0xf774x3d[_0xf774x44][0], ((Qvalx.width() / 100) * 15.5), (_0xf774x10 * _0xf774x44 + (_0xf774x10 / 2)) + 14);
                ctx.fillText(_0xf774x3d[_0xf774x44][1], ((Qvalx.width() / 100) * 15.5), (_0xf774x10 * _0xf774x44 + (_0xf774x10 / 2)) - 5)
            }

            div = (_0xf774x3f-1) / 2
            if (_0xf774x44 === Math.round(div)) {
                ctx.beginPath();
                ctx.lineWidth = 4;
                ctx.strokeStyle = '#ffe000';
                ctx.moveTo(0, _0xf774x10 * _0xf774x44 + ((Number.isInteger((_0xf774x3f-1) / 2))  ? _0xf774x10 / 2 : _0xf774x10-_0xf774x10));
                ctx.lineTo(((Qvalx.width()) / 100) * 30.2, _0xf774x10 * _0xf774x44 + ((Number.isInteger((_0xf774x3f-1) / 2))  ? _0xf774x10 / 2 : _0xf774x10-_0xf774x10));
                ctx.stroke();
                ctx.lineWidth = 2;
            }
        }
    };
    this.risg = function (_0xf774x3d) {
        let _0xf774x44;
        fon_svecha = [];
        X_price = [];
        Y_price = [];
        if (window.location.hostname.length !== _0xf774x32.length) {
            return
        }
        let _0xf774x45 = period.val(),
            _0xf774x46 = 0;
        for (_0xf774x44 = 0; _0xf774x44 < _0xf774x45; _0xf774x44++) {
            if (!_0xf774x3d[_0xf774x44].tick) {
                break
            }
            if (_0xf774x3d[_0xf774x44].tick.length > _0xf774x46) {
                _0xf774x46 = _0xf774x3d[_0xf774x44].tick.length
            }
        }
        const _0xf774x40 = _0xf774x46 / 100,
            _0xf774xf = (Qvalx.width() - 120) / _0xf774x45,
            _0xf774x10 = ((Qvalx.height() / 100) * 20) / 100;
        let dataticks = 0,
            _0xf774x48, _0xf774x49, _0xf774x4a, _0xf774x4b, _0xf774x4c;
        open_sv = [];
        let plus;
        let sec_0;
        for (_0xf774x44 = 0; _0xf774x44 < _0xf774x45; _0xf774x44++) {
            if (!_0xf774x3d[_0xf774x44].tick) {
                break
            }
            if (_0xf774x3d[_0xf774x44].tick) {
                dataticks = _0xf774x3d[_0xf774x44].tick.length
            }
            open_sv[_0xf774x44] = _0xf774x3d[_0xf774x44].open;
            if (_0xf774x3d[_0xf774x44].close < _0xf774x3d[_0xf774x44].open) {
                ctx.fillStyle = '#d75c48';
                fon_svecha[_0xf774x44] = 'red'
            } else {
                if (_0xf774x3d[_0xf774x44].close > _0xf774x3d[_0xf774x44].open) {
                    ctx.fillStyle = '#53a15f';
                    fon_svecha[_0xf774x44] = 'green'
                } else {
                    if (_0xf774x3d[_0xf774x44].close === _0xf774x3d[_0xf774x44].open) {
                        ctx.fillStyle = '#808080';
                        fon_svecha[_0xf774x44] = 'grey'
                    }
                }
            }
            ctx.fillRect(_0xf774xf * ((_0xf774x45 - 1) - _0xf774x44), Qvalx.height(), _0xf774xf - (_0xf774xf / 100), 0 - (_0xf774x10 * (dataticks / _0xf774x40)));
            ctx.fillStyle = '#fff';
            ctx.font = vremya_size + 'px Verdana';
            _0xf774x48 = new Date(_0xf774x3d[_0xf774x44].time * 1000);
            _0xf774x4c = new Date();
            _0xf774x49 = _0xf774x48.getHours();
            if (_0xf774x34 === 'Binomo') {
                plus = 1;
                sec_0 = 59
            } else {
                plus = 0;
                sec_0 = 60
            }
            if (timer === 1) {
                _0xf774x4a = (_0xf774x48.getMinutes() + plus);
                if (_0xf774x44 < 1) {
                    _0xf774x4b = sec_0 - glob_sec + plus;
                    if (_0xf774x4b < -1) {
                        _0xf774x4b = 59
                    }
                    if (_0xf774x4b < -2) {
                        _0xf774x4b = 58
                    }
                    if (_0xf774x4b < 10) {
                        _0xf774x4b = '0' + _0xf774x4b
                    }
                } else {
                    _0xf774x4b = '';
                    ctx.font = vremya_size + 'px Verdana'
                }
                if (_0xf774x4a < 10) {
                    _0xf774x4a = '0' + _0xf774x4a
                }
                if (_0xf774x4a > 59) {
                    _0xf774x4a = '00';
                    _0xf774x49 = (parseInt(_0xf774x49) + 1)
                }
                if (_0xf774x49 < 10) {
                    _0xf774x49 = '0' + plus
                }
                if (_0xf774x4b > 59) {
                    _0xf774x4b = '00'
                }
                if (_0xf774x4b <= '45' && _0xf774x4b > '35') {
                    ctx.fillStyle = '#ffff00'
                }
                if (_0xf774x4b <= '35' && _0xf774x4b > '30') {
                    ctx.fillStyle = '#ff0000'
                }
            } else {
                _0xf774x4a = (_0xf774x48.getMinutes() + plus);
                if (_0xf774x44 < 1) {
                    _0xf774x4b = glob_sec - plus;
                    if (_0xf774x4b < 10) {
                        _0xf774x4b = '0' + _0xf774x4b
                    }
                } else {
                    _0xf774x4b = '';
                    ctx.font = vremya_size + 'px Verdana'
                }
                if (_0xf774x4a < 10) {
                    _0xf774x4a = '0' + _0xf774x4a
                }
                if (_0xf774x4a > 59) {
                    _0xf774x4a = '00';
                    _0xf774x49 = (parseInt(_0xf774x49) + plus)
                }
                if (_0xf774x49 < 10) {
                    _0xf774x49 = '0' + _0xf774x49
                }
                if (_0xf774x4b > 59) {
                    _0xf774x4b = '00'
                }
                if (_0xf774x4b >= '15' && _0xf774x4b < '25') {
                    ctx.fillStyle = '#ffff00'
                }
                if (_0xf774x4b >= '25' && _0xf774x4b < '30') {
                    ctx.fillStyle = '#ff0000'
                }
            }
            if (_0xf774x44 < 1) {
                _0xf774x4b = ':' + _0xf774x4b;
                if (timer === 1) {
                } else {
                    _0xf774x4a = _0xf774x4a - 1
                }
            }
            ctx.fillText(_0xf774x49 + ':' + _0xf774x4a + _0xf774x4b, _0xf774xf * ((_0xf774x45 - 1) - _0xf774x44), Qvalx.height() - (_0xf774x10 * (dataticks / _0xf774x40)) - 10);
            X_price[_0xf774x44] = _0xf774xf * ((_0xf774x45 - 1) - _0xf774x44);
            Y_price[_0xf774x44] = Qvalx.height() - (_0xf774x10 * (dataticks / _0xf774x40));
            dataticks = 0
        }
    };
    this.rish = function (data) {
        if (window.location.hostname.length !== _0xf774x32.length) {
            return
        }
        
        let rash_up = 0,
            price = 0,
            _0xf774x55 = 0,
            ticksmax = 0,
            avgdelta = 0,
            cumulativedelta = 0;

        let _0xf774x56,
            _0xf774x40,
            dataticks,
            raplength;

        let convertedata = [],
            rapconverted,
            rateandpoc = [],
            candlesdata = [],
            _0xf774x41 = [];

        let periodval = period.val();

        let zeroticksell0 = 0,zeroticksell0_b = 0, zeroticksell0_s = 0,
            zeroticksell1 = 0,zeroticksell1_b = 0, zeroticksell1_s = 0,
            zeroticksell2 = 0,zeroticksell2_b = 0, zeroticksell2_s = 0,
            zeroticksell3 = 0,zeroticksell3_b = 0, zeroticksell3_s = 0,
            zeroticksell4 = 0,zeroticksell4_b = 0, zeroticksell4_s = 0,
            zeroticksell5 = 0,zeroticksell5_b = 0, zeroticksell5_s = 0,
            zeroticksell6 = 0,zeroticksell6_b = 0, zeroticksell6_s = 0,
            zeroticksell7 = 0,zeroticksell7_b = 0, zeroticksell7_s = 0,
            zeroticksell8 = 0,zeroticksell8_b = 0, zeroticksell8_s = 0,
            zeroticksell9 = 0,zeroticksell9_b = 0, zeroticksell9_s = 0,
            zeroticksell10 = 0,zeroticksell10_b = 0, zeroticksell10_s = 0,
            zeroticksell11 = 0,zeroticksell11_b = 0, zeroticksell11_s = 0,
            zeroticksell12 = 0,zeroticksell12_b = 0, zeroticksell12_s = 0,
            zeroticksell13 = 0,zeroticksell13_b = 0, zeroticksell13_s = 0,
            zeroticksell14 = 0,zeroticksell14_b = 0, zeroticksell14_s = 0,
            zeroticksell15 = 0,zeroticksell15_b = 0, zeroticksell15_s = 0,
            zeroticksell16 = 0,zeroticksell16_b = 0, zeroticksell16_s = 0,
            zeroticksell17 = 0,zeroticksell17_b = 0, zeroticksell17_s = 0,
            zeroticksell18 = 0,zeroticksell18_b = 0, zeroticksell18_s = 0,
            zeroticksell19 = 0,zeroticksell19_b = 0, zeroticksell19_s = 0,
            zeroticksell20 = 0,zeroticksell20_b = 0, zeroticksell20_s = 0,
            zeroticksell21 = 0,
            zeroticksell22 = 0,
            zeroticksell23 = 0,
            zeroticksell24 = 0,
            zeroticksell25 = 0,
            zeroticksell26 = 0,
            zeroticksell27 = 0,
            zeroticksell28 = 0,
            zeroticksell29 = 0,
            zeroticksell30 = 0,
            zeroticksell31 = 0,
            zeroticksell32 = 0,
            zeroticksell33 = 0,
            zeroticksell34 = 0,
            zeroticksell35 = 0,
            zeroticksell36 = 0,
            zeroticksell37 = 0,
            zeroticksell38 = 0,
            zeroticksell39 = 0,
            zeroticksell40 = 0,
            zeroticksell41 = 0,
            zeroticksell42 = 0,
            zeroticksell43 = 0,
            zeroticksell44 = 0,
            zeroticksell45 = 0,
            zeroticksell46 = 0,
            zeroticksell47 = 0,
            zeroticksell48 = 0,
            zeroticksell49 = 0,
            zeroticksell50 = 0;


        for (let j = 0; j < periodval; j++) {
            if (!data[j].tick) {
                break
            }
            dataticks = data[j].tick.length;
            if (dataticks > ticksmax) {
                ticksmax = dataticks
            }

            convertedata = [];
            for (let i = 0; i < dataticks; i++) {
                if (!convertedata[data[j].tick[i].close]) {
                    convertedata[data[j].tick[i].close] = 1
                } else {
                    convertedata[data[j].tick[i].close]++
                }
            }

            rateandpoc = [];
            for (const p in convertedata) {
                rateandpoc.push([p, convertedata[p]])
            }

            raplength = rateandpoc.length;
            let rprev;
            rapconverted = [];
            for (let r = 0; r < raplength; r++) {
                if (Number(rateandpoc[r][0]) > 0) {
                    rprev = r;
                    price = rateandpoc[r][0];
                    for (let s = 0; s < raplength; s++) {
                        if (Number(rateandpoc[s][0]) > price) {
                            price = rateandpoc[s][0];
                            rprev = s;
                            if (r > 0) {
                                r--
                            }
                        }
                    }
                    rapconverted.push([price, rateandpoc[rprev][1]]);
                    rateandpoc[rprev][0] = 0
                }
            }
            candlesdata.push(rapconverted)
        }
        let qntcandles = candlesdata.length;

        _0xf774x40 = ticksmax / 100;

        const _0xf774xf = (Qvalx.width() - 120) / periodval;

        let _0xf774x67 = ((Qvalx.height() / 100) * 20) / 100;

        let candleLow = 0,
            candleHigh = 0,
            max_p_find = 0,
            _0xf774x10 = 0,
            _0xf774x68 = 0,
            _0xf774x69 = 0;

        let difpoc,
            difprice,
            pocnextmax,
            pricenextmax,
            pricemax,
            pricemaxx,
            pocmax,
            pocmaxx,
            lengthmax,
            ticksofsell,
            ticksofbuy,
            negticksell,
            negticksbuy,
            zerocountbuy,
            buymaxall,
            sellmaxall,
            ticks,
            delta,
            buyticks,
            sellticks,
            ladderbuyverify,
            laddersellverify,
            pocprevmax2,
            pricenextmax2,
            div,
            formatpricemax,
            formatpricenextmax,
            middle,
            colorstyle,
            lentghzero,
            zeroticksell,
            buyarrow,
            sellarrow,
            indecisionarrow,
            ia;

        let po_up,
            procent_rassh,
            rash_down,
            arrow_down_x,x,
            arrow_down_y,y,
            qnticks;

       let color_trend = [],
           arrow_trend = [],
           color_poc = [],
           arrow_poc = [],
           color_rate = [],
           arrow_rate = [],
           color_density = [],
           arrow_density = [],
           color_maxx = [],
           arrow_maxx = [],
           color_candle = [],
           arrow_candle = [],
           pocmaxall = [],
           tick_color = [];

       let color_buy = "",
           color_sell = 'rgba(210, 59, 59, 1)',
           color_indecision = 'rgba(255,255,255, 1)',
           color_default = "";

       let tickszero = [];



        for (let i = 0; i < qntcandles; i++) {
            teste = [];
            qnticks = candlesdata[i].length;
            _0xf774x10 = ((data[i].tick.length / _0xf774x40) * _0xf774x67) / qnticks;
            _0xf774x69 = data[i].tick[0].close;

            open[i] = open_sv[i];
            candleHigh = candlesdata[i][0][0];
            candleLow = candlesdata[i][qnticks - 1][0];

            pocnextmax = 0;
            pricenextmax = 0;
            pocprevmax2 = 0;
            pricenextmax2 = 0;
            pocmax = 0;
            pocmaxx = 0;
            pricemax = 0;
            pricemaxx = 0;
            ticksofsell = 0;
            ticksofbuy = 0;
            negticksell = 0;
            negticksbuy = 0;
            zerocountbuy = 0;
            buymaxall = 0;
            sellmaxall = 0;
            zeroticksell = 0;
            ticks = 0;
            delta = 0;
            buyticks = 0;
            sellticks = 0;
            div = 0;
            lengthmax = 0;
            middle = 0;
            lentghzero = 0;
            ladderbuyverify = false;
            laddersellverify = false;

            if (qntcandles > 1) {
                let nextlength = candlesdata[i > 0 ? i === qntcandles - 1 ? i : (i + 1) : (i + 1)].length
                for (let length = 0; length < nextlength; length++) {
                    if (candlesdata[i > 0 ? i === qntcandles - 1 ? i : (i + 1) : (i + 1)][length][1] >= pocnextmax) {
                        pocnextmax = candlesdata[i > 0 ? i === qntcandles - 1 ? i : (i + 1) : (i + 1)][length][1];
                        pricenextmax = candlesdata[i > 0 ? i === qntcandles - 1 ? i : (i + 1) : (i + 1)][length][0];
                    }
                }
            }
            if (qntcandles > 1) {
                if (i <= 1) {
                    let nextlength = candlesdata[i > 0 ? i === 1 ? (i - 1) : (i + 1) : (i + 1)].length
                    for (let length = 0; length < nextlength; length++) {
                        if (candlesdata[i > 0 ? i === 1 ? (i - 1) : (i + 1) : (i + 1)][length][1] >= pocprevmax2) {
                            pocprevmax2 = candlesdata[i > 0 ? i === 1 ? (i - 1) : (i + 1) : (i + 1)][length][1];
                            pricenextmax2 = candlesdata[i > 0 ? i === 1 ? (i - 1) : (i + 1) : (i + 1)][length][0];
                        }
                    }
                }
            }
            for (let j = 0; j < qnticks; j++) {
                if (candlesdata[i][j][1] > pocmaxx) {
                    pocmaxx = candlesdata[i][j][1]
                    pricemaxx = candlesdata[i][j][0]
                    lengthmax = j
                }
                if (i === 0){
                    color_tickszerp = '#3afd60'
                    if (candlesdata[i][j][0] <= _0xf774x69) {
                        color_tickszerp = '#f54343'
                    }
                    tickszero[j] = [candlesdata[i][j][0], candlesdata[i][j][1], 0, color_tickszerp]
                }
            }
            pocmaxall[i] = [pricemaxx, lengthmax]
            for (let length = qnticks - 1; length >= 0; length--) {
                if (candlesdata[i][length][1] - candlesdata[i][length === 0 ? length : length - 1][1] > 0 && candlesdata[i][length][0] < _0xf774x69) {
                    negticksbuy++;
                }
                if (candlesdata[i][length][0] < _0xf774x69) {
                    if (candlesdata[i][length][1] - candlesdata[i][length][1] >= 0 && negticksbuy <= 0) {
                        if (candlesdata[i][length][1] - candlesdata[i][length === 0 ? length : length - 1][1] <= 30) {
                            if (zerocountbuy === 0) {
                                ticksofbuy++;
                                if (ticksofbuy > 2) {
                                    ladderbuyverify = true
                                }
                                if (candlesdata[i][length][1] - candlesdata[i][length === 0 ? length : length - 1][1] === 0) {
                                    zerocountbuy++;
                                }
                            }
                        }
                    }
                }
            }
            for (let length = 0; length < qnticks; length++) {
                if (length > 0) {
                    if (candlesdata[i][length][1] - candlesdata[i][length - 1][1] < 0 && candlesdata[i][length][0] > _0xf774x69) {
                        negticksell++;
                    }
                    if (candlesdata[i][length][0] <= _0xf774x69) {
                    } else {
                        if (candlesdata[i][length][1] - candlesdata[i][length][1] >= 0 && negticksell <= 0) {
                            if (candlesdata[i][length][1] - candlesdata[i][length - 1][1] <= 30) {
                                if (zeroticksell === 0) {
                                    ticksofsell++;
                                    if (ticksofsell > 2) {
                                        laddersellverify = true
                                    }
                                    if (candlesdata[i][length][1] - candlesdata[i][length - 1][1] === 0) {
                                        zeroticksell++;
                                    }
                                }
                            }
                        }
                    }
                }
                if (candlesdata[i][length][1] >= pocmax) {
                    pocmax = candlesdata[i][length][1];
                    _0xf774x55 = qnticks;
                    max_p_find = length;
                    pricemax = candlesdata[i][length][0];
                    if (pricemax < _0xf774x69) {
                        color_text = '#008f1d'
                    }
                    if (pricemax > _0xf774x69) {
                        color_text = '#d75c48'
                    }
                    if (Number(candlesdata[i][length][0]) === _0xf774x69) {
                        color_text = '#ffffff'
                    }
                }
                if (invert === 1) {
                    ticks += 1;
                    ctx.fillStyle = '#930000';
                    if (candlesdata[i][length][0] <= _0xf774x69) {
                        ctx.fillStyle = '#005811'
                        buymaxall += candlesdata[i][length][1];
                        buyticks += 1;
                    } else {
                        sellmaxall += candlesdata[i][length][1];
                        sellticks += 1;
                    }
                    colorstyle = ctx.fillStyle
                    switch (colorstyle) {
                        case '#930000':
                            tick_color[length] = 'red'
                            break;

                        case '#005811':
                            tick_color[length] = 'green'
                            break;
                    }

                    delta = buymaxall - sellmaxall

                    if (color === 1) {
                        if (candlesdata[i][length][1] >= 6) {
                            ctx.fillStyle = '#2e0000'
                        }
                        if (candlesdata[i][length][1] >= 4 && candlesdata[i][length][1] < 6) {
                            ctx.fillStyle = '#610000'
                        }
                        if (candlesdata[i][length][0] <= _0xf774x69) {
                            if (candlesdata[i][length][1] >= 6) {
                                ctx.fillStyle = '#002908'
                            }
                            if (candlesdata[i][length][1] >= 4 && candlesdata[i][length][1] < 6) {
                                ctx.fillStyle = '#005c12'
                            }
                        }
                    }
                } else {
                    ctx.fillStyle = '#005811';
                    if (candlesdata[i][length][0] <= _0xf774x69) {
                        ctx.fillStyle = '#930000'
                    }
                    if (color === 1) {
                        if (candlesdata[i][length][1] >= 6) {
                            ctx.fillStyle = '#002908'
                        }
                        if (candlesdata[i][length][1] >= 4 && candlesdata[i][length][1] < 6) {
                            ctx.fillStyle = '#0a4500'
                        }
                        if (candlesdata[i][length][0] <= _0xf774x69) {
                            if (candlesdata[i][length][1] >= 6) {
                                ctx.fillStyle = '#2e0000'
                            }
                            if (candlesdata[i][length][1] >= 4 && candlesdata[i][length][1] < 6) {
                                ctx.fillStyle = '#610000'
                            }
                        }
                    }
                }

                _0xf774x68 = (_0xf774xf / 100) * (candlesdata[i][length][1] / (pocmaxx / 100));
                ctx.fillRect(_0xf774xf * ((periodval - 1) - i), Qvalx.height() - (_0xf774x10 * (qnticks - length)), _0xf774x68 - ((_0xf774x68 / 100) * 10), _0xf774x10 - (_0xf774x10 / 100));
                _0xf774x41.hp = Qvalx.height() - (_0xf774x10 * (qnticks - length));
                _0xf774x41.hh = _0xf774x10;
                _0xf774x41.wp = _0xf774xf * ((periodval - 1) - i);
                _0xf774x41.ww = (_0xf774xf / 100) * (pocmaxx / (pocmaxx / 100));

                if (main.lincen(_0xf774x41) || (_0xf774x2c === candlesdata[i][length][0])) {
                    const _0xf774x6a = candlesdata[i][length][0];
                    ctx.fillStyle = 'rgba(0, 33, 56, 0.61)';
                    ctx.fillRect((_0xf774xf * ((periodval - 1) - i)) + _0xf774x41.ww - 1, _0xf774x41.hp + (_0xf774x41.hh / 2) - 20, _0xf774x6a.slice(obrez, 12).length * 10, 20);
                    ctx.fillStyle = 'rgba(210, 59, 59, 1)'
                    if (candlesdata[i][length][0] <= _0xf774x69) {
                        ctx.fillStyle = 'rgba(86, 176, 104, 1)';
                    }
                    ctx.fillRect((_0xf774xf * ((periodval - 1) - i)) + _0xf774x41.ww - 1, _0xf774x41.hp + (_0xf774x41.hh / 2) - 40, String(candlesdata[i][length][1]).length * 15, 20);
                    ctx.beginPath();
                    ctx.strokeStyle = '#fff';
                    ctx.moveTo(_0xf774x41.wp, _0xf774x41.hp + (_0xf774x10 / 2));
                    ctx.lineTo(_0xf774x41.wp + _0xf774x41.ww, _0xf774x41.hp + (_0xf774x10 / 2));
                    ctx.stroke();
                    ctx.fillStyle = '#fff';
                    ctx.font = '14px Verdana';
                    if (odinak > 0) {
                        _0xf774x2c = _0xf774x6a
                    }
                    ctx.fillText(_0xf774x6a.slice(obrez, 12), (_0xf774xf * ((periodval - 1) - i)) + _0xf774x41.ww, _0xf774x41.hp + (_0xf774x41.hh / 2) - 5);
                    ctx.fillText(candlesdata[i][length][1], (_0xf774xf * ((periodval - 1) - i)) + _0xf774x41.ww, _0xf774x41.hp + (_0xf774x41.hh / 2) - 25)
                }

                div = (qnticks - 1) / 2
                if (length === Math.round(div)) {
                    ctx.beginPath();
                    ctx.strokeStyle = '#ffe000';
                    ctx.moveTo(_0xf774x41.wp, _0xf774x41.hp + ((Number.isInteger((qnticks - 1) / 2)) ? _0xf774x10 / 2 : _0xf774x10 - _0xf774x10));
                    ctx.lineTo(_0xf774x41.wp + _0xf774x41.ww, _0xf774x41.hp + ((Number.isInteger((qnticks - 1) / 2)) ? _0xf774x10 / 2 : _0xf774x10 - _0xf774x10));
                    ctx.stroke();
                }
                if (1 === 1) {
                    if (tickszero[0] !== undefined) {
                        if (tickszero[0][0] === candlesdata[i][length][0]) {
                            zeroticksell0 += candlesdata[i][length][1]
                            if (tick_color[length] === 'red') {
                                zeroticksell0_s -= candlesdata[i][length][1]
                            }
                            if (tick_color[length] === 'green') {
                                zeroticksell0_b += candlesdata[i][length][1]
                            }
                            tickszero[0][2] = i
                        }
                    }
                    if (tickszero[1] !== undefined) {
                        if (tickszero[1][0] === candlesdata[i][length][0]) {
                            zeroticksell1 += candlesdata[i][length][1]
                            if (tick_color[length] === 'red') {
                                zeroticksell1_s -= candlesdata[i][length][1]
                            }
                            if (tick_color[length] === 'green') {
                                zeroticksell1_b += candlesdata[i][length][1]
                            }
                            tickszero[1][2] = i
                        }
                    }
                    if (tickszero[2] !== undefined) {
                        if (tickszero[2][0] === candlesdata[i][length][0]) {
                            zeroticksell2 += candlesdata[i][length][1]
                            if (tick_color[length] === 'red') {
                                zeroticksell2_s -= candlesdata[i][length][1]
                            }
                            if (tick_color[length] === 'green') {
                                zeroticksell2_b += candlesdata[i][length][1]
                            }
                            tickszero[2][2] = i
                        }
                    }
                    if (tickszero[3] !== undefined) {
                        if (tickszero[3][0] === candlesdata[i][length][0]) {
                            zeroticksell3 += candlesdata[i][length][1]
                            if (tick_color[length] === 'red') {
                                zeroticksell3_s -= candlesdata[i][length][1]
                            }
                            if (tick_color[length] === 'green') {
                                zeroticksell3_b += candlesdata[i][length][1]
                            }
                            tickszero[3][2] = i
                        }
                    }
                    if (tickszero[4] !== undefined) {
                        if (tickszero[4][0] === candlesdata[i][length][0]) {
                            zeroticksell4 += candlesdata[i][length][1]
                            if (tick_color[length] === 'red') {
                                zeroticksell4_s -= candlesdata[i][length][1]
                            }
                            if (tick_color[length] === 'green') {
                                zeroticksell4_b += candlesdata[i][length][1]
                            }
                            tickszero[4][2] = i
                        }
                    }
                    if (tickszero[5] !== undefined) {
                        if (tickszero[5][0] === candlesdata[i][length][0]) {
                            zeroticksell5 += candlesdata[i][length][1]
                            if (tick_color[length] === 'red') {
                                zeroticksell5_s -= candlesdata[i][length][1]
                            }
                            if (tick_color[length] === 'green') {
                                zeroticksell5_b += candlesdata[i][length][1]
                            }
                            tickszero[5][2] = i
                        }
                    }
                    if (tickszero[6] !== undefined) {
                        if (tickszero[6][0] === candlesdata[i][length][0]) {
                            zeroticksell6 += candlesdata[i][length][1]
                            if (tick_color[length] === 'red') {
                                zeroticksell6_s -= candlesdata[i][length][1]
                            }
                            if (tick_color[length] === 'green') {
                                zeroticksell6_b += candlesdata[i][length][1]
                            }
                            tickszero[6][2] = i
                        }
                    }
                    if (tickszero[7] !== undefined) {
                        if (tickszero[7][0] === candlesdata[i][length][0]) {
                            zeroticksell7 += candlesdata[i][length][1]
                            if (tick_color[length] === 'red') {
                                zeroticksell7_s -= candlesdata[i][length][1]
                            }
                            if (tick_color[length] === 'green') {
                                zeroticksell7_b += candlesdata[i][length][1]
                            }
                            tickszero[7][2] = i
                        }
                    }
                    if (tickszero[8] !== undefined) {
                        if (tickszero[8][0] === candlesdata[i][length][0]) {
                            zeroticksell8 += candlesdata[i][length][1]
                            if (tick_color[length] === 'red') {
                                zeroticksell8_s -= candlesdata[i][length][1]
                            }
                            if (tick_color[length] === 'green') {
                                zeroticksell8_b += candlesdata[i][length][1]
                            }
                            tickszero[8][2] = i
                        }
                    }
                    if (tickszero[9] !== undefined) {
                        if (tickszero[9][0] === candlesdata[i][length][0]) {
                            zeroticksell9 += candlesdata[i][length][1]
                            if (tick_color[length] === 'red') {
                                zeroticksell9_s -= candlesdata[i][length][1]
                            }
                            if (tick_color[length] === 'green') {
                                zeroticksell9_b += candlesdata[i][length][1]
                            }
                            tickszero[9][2] = i
                        }
                    }
                    if (tickszero[10] !== undefined) {
                        if (tickszero[10][0] === candlesdata[i][length][0]) {
                            zeroticksell10 += candlesdata[i][length][1]
                            if (tick_color[length] === 'red') {
                                zeroticksell10_s -= candlesdata[i][length][1]
                            }
                            if (tick_color[length] === 'green') {
                                zeroticksell10_b += candlesdata[i][length][1]
                            }
                            tickszero[10][2] = i
                        }
                    }
                    if (tickszero[11] !== undefined) {
                        if (tickszero[11][0] === candlesdata[i][length][0]) {
                            zeroticksell11 += candlesdata[i][length][1]
                            if (tick_color[length] === 'red') {
                                zeroticksell11_s -= candlesdata[i][length][1]
                            }
                            if (tick_color[length] === 'green') {
                                zeroticksell11_b += candlesdata[i][length][1]
                            }
                            tickszero[11][2] = i
                        }
                    }
                    if (tickszero[12] !== undefined) {
                        if (tickszero[12][0] === candlesdata[i][length][0]) {
                            zeroticksell12 += candlesdata[i][length][1]
                            if (tick_color[length] === 'red') {
                                zeroticksell12_s -= candlesdata[i][length][1]
                            }
                            if (tick_color[length] === 'green') {
                                zeroticksell12_b += candlesdata[i][length][1]
                            }
                            tickszero[12][2] = i
                        }
                    }
                    if (tickszero[13] !== undefined) {
                        if (tickszero[13][0] === candlesdata[i][length][0]) {
                            zeroticksell13 += candlesdata[i][length][1]
                            if (tick_color[length] === 'red') {
                                zeroticksell13_s -= candlesdata[i][length][1]
                            }
                            if (tick_color[length] === 'green') {
                                zeroticksell13_b += candlesdata[i][length][1]
                            }
                            tickszero[13][2] = i
                        }
                    }
                    if (tickszero[14] !== undefined) {
                        if (tickszero[14][0] === candlesdata[i][length][0]) {
                            zeroticksell14 += candlesdata[i][length][1]
                            if (tick_color[length] === 'red') {
                                zeroticksell14_s -= candlesdata[i][length][1]
                            }
                            if (tick_color[length] === 'green') {
                                zeroticksell14_b += candlesdata[i][length][1]
                            }
                            tickszero[14][2] = i
                        }
                    }
                    if (tickszero[15] !== undefined) {
                        if (tickszero[15][0] === candlesdata[i][length][0]) {
                            zeroticksell15 += candlesdata[i][length][1]
                            if (tick_color[length] === 'red') {
                                zeroticksell15_s -= candlesdata[i][length][1]
                            }
                            if (tick_color[length] === 'green') {
                                zeroticksell15_b += candlesdata[i][length][1]
                            }
                            tickszero[15][2] = i
                        }
                    }
                    if (tickszero[16] !== undefined) {
                        if (tickszero[16][0] === candlesdata[i][length][0]) {
                            zeroticksell16 += candlesdata[i][length][1]
                            if (tick_color[length] === 'red') {
                                zeroticksell16_s -= candlesdata[i][length][1]
                            }
                            if (tick_color[length] === 'green') {
                                zeroticksell16_b += candlesdata[i][length][1]
                            }
                            tickszero[16][2] = i
                        }
                    }
                    if (tickszero[17] !== undefined) {
                        if (tickszero[17][0] === candlesdata[i][length][0]) {
                            zeroticksell17 += candlesdata[i][length][1]
                            if (tick_color[length] === 'red') {
                                zeroticksell17_s -= candlesdata[i][length][1]
                            }
                            if (tick_color[length] === 'green') {
                                zeroticksell17_b += candlesdata[i][length][1]
                            }
                            tickszero[17][2] = i
                        }
                    }
                    if (tickszero[18] !== undefined) {
                        if (tickszero[18][0] === candlesdata[i][length][0]) {
                            zeroticksell18 += candlesdata[i][length][1]
                            if (tick_color[length] === 'red') {
                                zeroticksell18_s -= candlesdata[i][length][1]
                            }
                            if (tick_color[length] === 'green') {
                                zeroticksell18_b += candlesdata[i][length][1]
                            }
                            tickszero[18][2] = i
                        }
                    }
                    if (tickszero[19] !== undefined) {
                        if (tickszero[19][0] === candlesdata[i][length][0]) {
                            zeroticksell19 += candlesdata[i][length][1]
                            if (tick_color[length] === 'red') {
                                zeroticksell19_s -= candlesdata[i][length][1]
                            }
                            if (tick_color[length] === 'green') {
                                zeroticksell19_b += candlesdata[i][length][1]
                            }
                            tickszero[19][2] = i
                        }
                    }
                    if (tickszero[20] !== undefined) {
                        if (tickszero[20][0] === candlesdata[i][length][0]) {
                            zeroticksell20 += candlesdata[i][length][1]
                            if (tick_color[length] === 'red') {
                                zeroticksell20_s -= candlesdata[i][length][1]
                            }
                            if (tick_color[length] === 'green') {
                                zeroticksell20_b += candlesdata[i][length][1]
                            }
                            tickszero[20][2] = i
                        }
                    }
                }
            }
            ia = 0;
            if (1 === 1) {
                if (i === (qntcandles-1)) {
                    ctx.font = 'bolder 14px Verdana';
                    if (zeroticksell0 > 0) {
                        if (tickszero[0][2] > 0) {
                            ia += 15;
                            ctx.fillStyle = tickszero[0][3]
                            ctx.fillText(tickszero[0][0].slice(obrez, 12), (Qvalx.width() / 2) + ((Qvalx.width() / 2) - 170), (Qvalx.height() / 2) - ((Qvalx.height() / 2) - (28 + ia)))
                            pricelength = tickszero[0][0].slice(obrez, 12).length

                            ctx.fillStyle = '#ffffff'
                            ctx.fillText("  ".repeat(pricelength) + " => " + zeroticksell0_b + " : " + zeroticksell0_s + " = ", (Qvalx.width() / 2) + ((Qvalx.width() / 2) - 170), (Qvalx.height() / 2) - ((Qvalx.height() / 2) - (28 + ia)))

                            delta_ = (zeroticksell0_b +  zeroticksell0_s)
                            textl = (" => " + zeroticksell0_b + " : " + zeroticksell0_s + " =").length

                            ctx.fillStyle = delta_ < 0 ? '#f54343' :  '#3afd60'
                            ctx.fillText(("  ".repeat((textl+pricelength)-2)) + "" + delta_, (Qvalx.width() / 2) + ((Qvalx.width() / 2) - 170), (Qvalx.height() / 2) - ((Qvalx.height() / 2) - (28 + ia)))
                        }
                    }
                    if (zeroticksell1 > 0) {
                        if (tickszero[1][2] > 0) {
                            ia += 15;
                            ctx.fillStyle = tickszero[1][3]
                            ctx.fillText(tickszero[1][0].slice(obrez, 12), (Qvalx.width() / 2) + ((Qvalx.width() / 2) - 170), (Qvalx.height() / 2) - ((Qvalx.height() / 2) - (28 + ia)))
                            pricelength = tickszero[1][0].slice(obrez, 12).length

                            ctx.fillStyle = '#ffffff'
                            ctx.fillText("  ".repeat(pricelength) + " => " + zeroticksell1_b + " : " + zeroticksell1_s + " = ", (Qvalx.width() / 2) + ((Qvalx.width() / 2) - 170), (Qvalx.height() / 2) - ((Qvalx.height() / 2) - (28 + ia)))

                            delta_ = (zeroticksell1_b +  zeroticksell1_s)
                            textl = (" => " + zeroticksell1_b + " : " + zeroticksell1_s + " =").length

                            ctx.fillStyle = delta_ < 0 ? '#f54343' :  '#3afd60'
                            ctx.fillText(("  ".repeat((textl+pricelength)-2)) + "" + delta_, (Qvalx.width() / 2) + ((Qvalx.width() / 2) - 170), (Qvalx.height() / 2) - ((Qvalx.height() / 2) - (28 + ia)))
                        }
                    }
                    if (zeroticksell2 > 0) {
                        if (tickszero[2][2] > 0) {
                            ia += 15;
                            ctx.fillStyle = tickszero[2][3]
                            ctx.fillText(tickszero[2][0].slice(obrez, 12), (Qvalx.width() / 2) + ((Qvalx.width() / 2) - 170), (Qvalx.height() / 2) - ((Qvalx.height() / 2) - (28 + ia)))
                            pricelength = tickszero[2][0].slice(obrez, 12).length

                            ctx.fillStyle = '#ffffff'
                            ctx.fillText("  ".repeat(pricelength) + " => " + zeroticksell2_b + " : " + zeroticksell2_s + " = ", (Qvalx.width() / 2) + ((Qvalx.width() / 2) - 170), (Qvalx.height() / 2) - ((Qvalx.height() / 2) - (28 + ia)))

                            delta_ = (zeroticksell2_b +  zeroticksell2_s)
                            textl = (" => " + zeroticksell2_b + " : " + zeroticksell2_s + " =").length

                            ctx.fillStyle = delta_ < 0 ? '#f54343' :  '#3afd60'
                            ctx.fillText(("  ".repeat((textl+pricelength)-2)) + "" + delta_, (Qvalx.width() / 2) + ((Qvalx.width() / 2) - 170), (Qvalx.height() / 2) - ((Qvalx.height() / 2) - (28 + ia)))
                        }
                    }
                    if (zeroticksell3 > 0) {
                        if (tickszero[3][2] > 0) {
                            ia += 15;
                            ctx.fillStyle = tickszero[3][3]
                            ctx.fillText(tickszero[3][0].slice(obrez, 12), (Qvalx.width() / 2) + ((Qvalx.width() / 2) - 170), (Qvalx.height() / 2) - ((Qvalx.height() / 2) - (28 + ia)))
                            pricelength = tickszero[3][0].slice(obrez, 12).length

                            ctx.fillStyle = '#ffffff'
                            ctx.fillText("  ".repeat(pricelength) + " => " + zeroticksell3_b + " : " + zeroticksell3_s + " = ", (Qvalx.width() / 2) + ((Qvalx.width() / 2) - 170), (Qvalx.height() / 2) - ((Qvalx.height() / 2) - (28 + ia)))

                            delta_ = (zeroticksell3_b +  zeroticksell3_s)
                            textl = (" => " + zeroticksell3_b + " : " + zeroticksell3_s + " =").length

                            ctx.fillStyle = delta_ < 0 ? '#f54343' :  '#3afd60'
                            ctx.fillText(("  ".repeat((textl+pricelength)-2)) + "" + delta_, (Qvalx.width() / 2) + ((Qvalx.width() / 2) - 170), (Qvalx.height() / 2) - ((Qvalx.height() / 2) - (28 + ia)))
                        }
                    }
                    if (zeroticksell4 > 0) {
                        if (tickszero[4][2] > 0) {
                            ia += 15;
                            ctx.fillStyle = tickszero[4][3]
                            ctx.fillText(tickszero[4][0].slice(obrez, 12), (Qvalx.width() / 2) + ((Qvalx.width() / 2) - 170), (Qvalx.height() / 2) - ((Qvalx.height() / 2) - (28 + ia)))
                            pricelength = tickszero[4][0].slice(obrez, 12).length

                            ctx.fillStyle = '#ffffff'
                            ctx.fillText("  ".repeat(pricelength) + " => " + zeroticksell4_b + " : " + zeroticksell4_s + " = ", (Qvalx.width() / 2) + ((Qvalx.width() / 2) - 170), (Qvalx.height() / 2) - ((Qvalx.height() / 2) - (28 + ia)))

                            delta_ = (zeroticksell4_b +  zeroticksell4_s)
                            textl = (" => " + zeroticksell4_b + " : " + zeroticksell4_s + " =").length

                            ctx.fillStyle = delta_ < 0 ? '#f54343' :  '#3afd60'
                            ctx.fillText(("  ".repeat((textl+pricelength)-2)) + "" + delta_, (Qvalx.width() / 2) + ((Qvalx.width() / 2) - 170), (Qvalx.height() / 2) - ((Qvalx.height() / 2) - (28 + ia)))
                        }
                    }
                    if (zeroticksell5 > 0) {
                        if (tickszero[5][2] > 0) {
                            ia += 15;
                            ctx.fillStyle = tickszero[5][3]
                            ctx.fillText(tickszero[5][0].slice(obrez, 12), (Qvalx.width() / 2) + ((Qvalx.width() / 2) - 170), (Qvalx.height() / 2) - ((Qvalx.height() / 2) - (28 + ia)))
                            pricelength = tickszero[5][0].slice(obrez, 12).length

                            ctx.fillStyle = '#ffffff'
                            ctx.fillText("  ".repeat(pricelength) + " => " + zeroticksell5_b + " : " + zeroticksell5_s + " = ", (Qvalx.width() / 2) + ((Qvalx.width() / 2) - 170), (Qvalx.height() / 2) - ((Qvalx.height() / 2) - (28 + ia)))

                            delta_ = (zeroticksell5_b +  zeroticksell5_s)
                            textl = (" => " + zeroticksell5_b + " : " + zeroticksell5_s + " =").length

                            ctx.fillStyle = delta_ < 0 ? '#f54343' :  '#3afd60'
                            ctx.fillText(("  ".repeat((textl+pricelength)-2)) + "" + delta_, (Qvalx.width() / 2) + ((Qvalx.width() / 2) - 170), (Qvalx.height() / 2) - ((Qvalx.height() / 2) - (28 + ia)))
                        }
                    }
                    if (zeroticksell6 > 0) {
                        if (tickszero[6][2] > 0) {
                            ia += 15;
                            ctx.fillStyle = tickszero[6][3]
                            ctx.fillText(tickszero[6][0].slice(obrez, 12), (Qvalx.width() / 2) + ((Qvalx.width() / 2) - 170), (Qvalx.height() / 2) - ((Qvalx.height() / 2) - (28 + ia)))
                            pricelength = tickszero[6][0].slice(obrez, 12).length

                            ctx.fillStyle = '#ffffff'
                            ctx.fillText("  ".repeat(pricelength) + " => " + zeroticksell6_b + " : " + zeroticksell6_s + " = ", (Qvalx.width() / 2) + ((Qvalx.width() / 2) - 170), (Qvalx.height() / 2) - ((Qvalx.height() / 2) - (28 + ia)))

                            delta_ = (zeroticksell6_b +  zeroticksell6_s)
                            textl = (" => " + zeroticksell6_b + " : " + zeroticksell6_s + " =").length

                            ctx.fillStyle = delta_ < 0 ? '#f54343' :  '#3afd60'
                            ctx.fillText(("  ".repeat((textl+pricelength)-2)) + "" + delta_, (Qvalx.width() / 2) + ((Qvalx.width() / 2) - 170), (Qvalx.height() / 2) - ((Qvalx.height() / 2) - (28 + ia)))
                        }
                    }
                    if (zeroticksell7 > 0) {
                        if (tickszero[7][2] > 0) {
                            ia += 15;
                            ctx.fillStyle = tickszero[7][3]
                            ctx.fillText(tickszero[7][0].slice(obrez, 12), (Qvalx.width() / 2) + ((Qvalx.width() / 2) - 170), (Qvalx.height() / 2) - ((Qvalx.height() / 2) - (28 + ia)))
                            pricelength = tickszero[7][0].slice(obrez, 12).length

                            ctx.fillStyle = '#ffffff'
                            ctx.fillText("  ".repeat(pricelength) + " => " + zeroticksell7_b + " : " + zeroticksell7_s + " = ", (Qvalx.width() / 2) + ((Qvalx.width() / 2) - 170), (Qvalx.height() / 2) - ((Qvalx.height() / 2) - (28 + ia)))

                            delta_ = (zeroticksell7_b +  zeroticksell7_s)
                            textl = (" => " + zeroticksell7_b + " : " + zeroticksell7_s + " =").length

                            ctx.fillStyle = delta_ < 0 ? '#f54343' :  '#3afd60'
                            ctx.fillText(("  ".repeat((textl+pricelength)-2)) + "" + delta_, (Qvalx.width() / 2) + ((Qvalx.width() / 2) - 170), (Qvalx.height() / 2) - ((Qvalx.height() / 2) - (28 + ia)))
                        }
                    }
                    if (zeroticksell8 > 0) {
                        if (tickszero[8][2] > 0) {
                            ia += 15;
                            ctx.fillStyle = tickszero[8][3]
                            ctx.fillText(tickszero[8][0].slice(obrez, 12), (Qvalx.width() / 2) + ((Qvalx.width() / 2) - 170), (Qvalx.height() / 2) - ((Qvalx.height() / 2) - (28 + ia)))
                            pricelength = tickszero[8][0].slice(obrez, 12).length

                            ctx.fillStyle = '#ffffff'
                            ctx.fillText("  ".repeat(pricelength) + " => " + zeroticksell8_b + " : " + zeroticksell8_s + " = ", (Qvalx.width() / 2) + ((Qvalx.width() / 2) - 170), (Qvalx.height() / 2) - ((Qvalx.height() / 2) - (28 + ia)))

                            delta_ = (zeroticksell8_b +  zeroticksell8_s)
                            textl = (" => " + zeroticksell8_b + " : " + zeroticksell8_s + " =").length

                            ctx.fillStyle = delta_ < 0 ? '#f54343' :  '#3afd60'
                            ctx.fillText(("  ".repeat((textl+pricelength)-2)) + "" + delta_, (Qvalx.width() / 2) + ((Qvalx.width() / 2) - 170), (Qvalx.height() / 2) - ((Qvalx.height() / 2) - (28 + ia)))
                        }
                    }
                    if (zeroticksell9 > 0) {
                        if (tickszero[9][2] > 0) {
                            ia += 15;
                            ctx.fillStyle = tickszero[9][3]
                            ctx.fillText(tickszero[9][0].slice(obrez, 12), (Qvalx.width() / 2) + ((Qvalx.width() / 2) - 170), (Qvalx.height() / 2) - ((Qvalx.height() / 2) - (28 + ia)))
                            pricelength = tickszero[9][0].slice(obrez, 12).length

                            ctx.fillStyle = '#ffffff'
                            ctx.fillText("  ".repeat(pricelength) + " => " + zeroticksell9_b + " : " + zeroticksell9_s + " = ", (Qvalx.width() / 2) + ((Qvalx.width() / 2) - 170), (Qvalx.height() / 2) - ((Qvalx.height() / 2) - (28 + ia)))

                            delta_ = (zeroticksell9_b +  zeroticksell9_s)
                            textl = (" => " + zeroticksell9_b + " : " + zeroticksell9_s + " =").length

                            ctx.fillStyle = delta_ < 0 ? '#f54343' :  '#3afd60'
                            ctx.fillText(("  ".repeat((textl+pricelength)-2)) + "" + delta_, (Qvalx.width() / 2) + ((Qvalx.width() / 2) - 170), (Qvalx.height() / 2) - ((Qvalx.height() / 2) - (28 + ia)))
                        }
                    }
                    if (zeroticksell10 > 0) {
                        if (tickszero[10][2] > 0) {
                            ia += 15;
                            ctx.fillStyle = tickszero[10][3]
                            ctx.fillText(tickszero[10][0].slice(obrez, 12), (Qvalx.width() / 2) + ((Qvalx.width() / 2) - 170), (Qvalx.height() / 2) - ((Qvalx.height() / 2) - (28 + ia)))
                            pricelength = tickszero[10][0].slice(obrez, 12).length

                            ctx.fillStyle = '#ffffff'
                            ctx.fillText("  ".repeat(pricelength) + " => " + zeroticksell10_b + " : " + zeroticksell10_s + " = ", (Qvalx.width() / 2) + ((Qvalx.width() / 2) - 170), (Qvalx.height() / 2) - ((Qvalx.height() / 2) - (28 + ia)))

                            delta_ = (zeroticksell10_b +  zeroticksell10_s)
                            textl = (" => " + zeroticksell10_b + " : " + zeroticksell10_s + " =").length

                            ctx.fillStyle = delta_ < 0 ? '#f54343' :  '#3afd60'
                            ctx.fillText(("  ".repeat((textl+pricelength)-2)) + "" + delta_, (Qvalx.width() / 2) + ((Qvalx.width() / 2) - 170), (Qvalx.height() / 2) - ((Qvalx.height() / 2) - (28 + ia)))
                        }
                    }
                }
            }
            avgdelta += delta > 0 ? delta : delta * -1;
            cumulativedelta += delta;

            x = X_price[i];
            y = Y_price[i]
            difpoc = pocmax - pocnextmax

            if (i <= 1) {
                buyarrow = "⭡"
                sellarrow = "⭣"
                indecisionarrow = "⭥"

                formatpricemax = pricemax === 0 ? pricemax : +pricemax.toString().split('.')[1]
                formatpricenextmax = pricenextmax2 === 0 ? pricenextmax2 : +pricenextmax2.toString().split('.')[1]

                if (formatpricemax.toString().length - formatpricenextmax.toString().length > 0) {
                    let repeat = formatpricemax.toString().length - formatpricenextmax.toString().length
                    formatpricenextmax = +String(formatpricenextmax + "0".repeat(repeat))
                }

                if (formatpricenextmax.toString().length - formatpricemax.toString().length > 0) {
                    let repeat = formatpricenextmax.toString().length - formatpricemax.toString().length
                    formatpricemax = +String(formatpricemax + "0".repeat(repeat))
                }
                switch (i) {
                    case 0:
                        difprice = formatpricemax - formatpricenextmax
                        break
                    case 1:
                        difprice = formatpricenextmax - formatpricemax
                        break;
                }

                switch (true) {
                    case qntcandles === 1:
                        color_trend[i] = 'rgb(155,159,155)'
                        arrow_trend[i] = indecisionarrow
                        arrow_rate[i] = indecisionarrow
                        break;
                    case difprice > 0:
                        color_trend[i] = 'rgba(86, 176, 104, 1)'
                        arrow_trend[i] = buyarrow
                        arrow_rate[i] = buyarrow
                        switch (true) {
                            case difprice <= 3:
                                color_rate[i] = 'rgb(4,246,255)'
                                break;
                            case difprice > 3:
                                color_rate[i] = 'rgb(255,224,0)'
                                break;
                        }
                        break;
                    case difprice < 0:
                        color_trend[i] = 'rgba(210, 59, 59, 1)'
                        arrow_trend[i] = sellarrow
                        arrow_rate[i] = sellarrow
                        switch (true) {
                            case difprice >= -3:
                                color_rate[i] = 'rgb(4,246,255)'
                                break;
                            case difprice < -3:
                                color_rate[i] = 'rgb(255,224,0)'
                                break;
                        }
                        break;
                    case difprice === 0:
                        color_trend[i] = 'rgb(255,255,255)'
                        color_rate[i] = 'rgb(255,255,255)'
                        arrow_trend[i] = indecisionarrow
                        arrow_rate[i] = indecisionarrow
                        break;
                }

                switch (true) {
                    case qntcandles === 1:
                        color_poc[i] = 'rgb(155,159,155)'
                        arrow_poc[i] = indecisionarrow
                        break;
                    case difpoc > 0:
                        switch (true) {
                            case difpoc <= 3:
                                switch (true) {
                                    case color_trend[i] === 'rgba(86, 176, 104, 1)':
                                        arrow_poc[i] = buyarrow
                                        break;
                                    case color_trend[i] === 'rgba(210, 59, 59, 1)':
                                        arrow_poc[i] = sellarrow
                                        break;
                                    case color_trend[i] === 'rgb(255,255,255)':
                                        arrow_poc[i] = indecisionarrow
                                        break;
                                }
                                color_poc[i] = 'rgb(4,246,255)'
                                break;
                            case difpoc > 3:
                                switch (true) {
                                    case color_trend[i] === 'rgba(86, 176, 104, 1)':
                                        arrow_poc[i] = buyarrow
                                        break;
                                    case color_trend[i] === 'rgba(210, 59, 59, 1)':
                                        arrow_poc[i] = sellarrow
                                        break;
                                    case color_trend[i] === 'rgb(255,255,255)':
                                        arrow_poc[i] = indecisionarrow
                                        break;
                                }
                                color_poc[i] = 'rgb(255,224,0)'
                                break;
                        }
                        break;
                    case difpoc < 0 :
                        color_poc[i] = 'rgb(155,159,155)'
                        arrow_poc[i] = indecisionarrow
                        break;
                    case difpoc === 0:
                        color_poc[i] = 'rgb(255,255,255)'
                        arrow_poc[i] = indecisionarrow
                        break;
                    default:
                        color_poc[i] = 'rgb(155,159,155)'
                        break;
                }

                switch (true) {
                    case qntcandles === 1:
                        color_density[i] = 'rgb(155,159,155)'
                        arrow_density[i] = indecisionarrow
                        break;

                    case ladderbuyverify === true && laddersellverify === true:
                        color_density[i] = 'rgb(255,224,0)'
                        arrow_density[i] = indecisionarrow
                        break;
                    case ladderbuyverify === true && color_trend[i] === 'rgba(210, 59, 59, 1)':
                        arrow_density[i] = buyarrow
                        color_density[i] = 'rgb(255,224,0)'
                        break
                    case laddersellverify === true && color_trend[i] === 'rgba(86, 176, 104, 1)':
                        arrow_density[i] = sellarrow
                        color_density[i] = 'rgb(255,224,0)'
                        break;
                    case ladderbuyverify === true && color_trend[i] === 'rgba(86, 176, 104, 1)':
                        arrow_density[i] = buyarrow
                        color_density[i] = 'rgb(4,246,255)'
                        break;
                    case laddersellverify === true && color_trend[i] === 'rgba(210, 59, 59, 1)':
                        arrow_density[i] = sellarrow
                        color_density[i] = 'rgb(4,246,255)'
                        break;

                    case ladderbuyverify === true && color_trend[i] === 'rgb(255,255,255)':
                        arrow_density[i] = buyarrow
                        color_density[i] = 'rgba(255,255,255)'
                        break;

                    case laddersellverify === true && color_trend[i] === 'rgb(255,255,255)':
                        arrow_density[i] = sellarrow
                        color_density[i] = 'rgba(255,255,255)'
                        break;

                    default :
                        color_density[i] = 'rgb(155,159,155)'
                        arrow_density[i] = indecisionarrow
                        break;

                }

                middle = (qnticks / 2) - 0.5
                switch (true) {
                    case qntcandles === 1:
                        color_maxx[i] = 'rgb(155,159,155)'
                        arrow_maxx[i] = indecisionarrow
                        break;
                    case lengthmax > middle && color_trend[i] === 'rgba(210, 59, 59, 1)':
                        arrow_maxx[i] = buyarrow
                        color_maxx[i] = 'rgb(255,224,0)'
                        break;
                    case lengthmax < middle && color_trend[i] === 'rgba(86, 176, 104, 1)':
                        arrow_maxx[i] = sellarrow
                        color_maxx[i] = 'rgb(255,224,0)'
                        break;
                    case lengthmax > middle && color_trend[i] === 'rgba(86, 176, 104, 1)':
                        arrow_maxx[i] = buyarrow
                        color_maxx[i] = 'rgb(4,246,255)'
                        break;
                    case lengthmax < middle && color_trend[i] === 'rgba(210, 59, 59, 1)':
                        arrow_maxx[i] = sellarrow
                        color_maxx[i] = 'rgb(4,246,255)'
                        break;

                    case lengthmax > middle &&  color_trend[i] === 'rgb(255,255,255)' :
                        arrow_maxx[i] = buyarrow
                        color_maxx[i] = 'rgb(255,255,255)'
                        break;
                    case lengthmax < middle &&  color_trend[i] === 'rgb(255,255,255)' :
                        arrow_maxx[i] = sellarrow
                        color_maxx[i] = 'rgb(255,255,255)'
                        break;
                    case lengthmax === middle:
                        arrow_maxx[i] = indecisionarrow
                        color_maxx[i] = 'rgb(255,255,255)'
                        break;
                }

                switch (true) {
                    case qntcandles === 1:
                        color_candle[i] = 'rgb(155,159,155)'
                        arrow_candle[i] = indecisionarrow
                        break;

                    case fon_svecha[i] === 'green' && color_trend[i] === 'rgba(210, 59, 59, 1)':
                        arrow_candle[i] = buyarrow
                        color_candle[i] = 'rgb(255,224,0)'
                        break;
                    case fon_svecha[i] === 'red' && color_trend[i] === 'rgba(86, 176, 104, 1)':
                        arrow_candle[i] = sellarrow
                        color_candle[i] = 'rgb(255,224,0)'
                        break;

                    case fon_svecha[i] === 'green' && color_trend[i] === 'rgba(86, 176, 104, 1)':
                        arrow_candle[i] = buyarrow
                        color_candle[i] = 'rgb(4,246,255)'
                        break;
                    case fon_svecha[i] === 'red' && color_trend[i] === 'rgba(210, 59, 59, 1)':
                        arrow_candle[i] = sellarrow
                        color_candle[i] = 'rgb(4,246,255)'
                        break;

                    case fon_svecha[i] === 'green' && color_trend[i] === 'rgb(255,255,255)':
                        arrow_candle[i] = buyarrow
                        color_candle[i] = 'rgb(255,225,255)'
                        break;

                    case fon_svecha[i] === 'red' && color_trend[i] === 'rgb(255,255,255)':
                        arrow_candle[i] = sellarrow
                        color_candle[i] = 'rgb(255,225,255)'
                        break;

                    case fon_svecha[i] === 'grey' && color_trend[i] === 'rgb(255,225,255)':
                        arrow_candle[i] = indecisionarrow
                        color_candle[i] = 'rgb(255,225,255)'
                        break;

                    case fon_svecha[i] === 'grey':
                        color_candle[i] = 'rgb(255,225,255)'
                        arrow_candle[i] = indecisionarrow
                        break;

                    default:
                        color_candle[i] = 'rgb(155,159,155)'
                        arrow_candle[i] = indecisionarrow
                        break;

                }

                switch (i) {
                    case 0:
                        ctx.beginPath();
                        ctx.font = 'bold 24px Verdana'
                        ctx.fillStyle = color_trend[i];
                        ctx.fillText(arrow_trend[i],(Qvalx.width() / 2) + ((Qvalx.width() / 2) - 508), (Qvalx.height() / 2) - ((Qvalx.height() / 2) - 52));

                        ctx.fillStyle = color_poc[i];
                        ctx.fillText(arrow_poc[i],(Qvalx.width() / 2) + ((Qvalx.width() / 2) - 488), (Qvalx.height() / 2) - ((Qvalx.height() / 2) - 52));

                        ctx.fillStyle = color_rate[i];
                        ctx.fillText(arrow_rate[i],(Qvalx.width() / 2) + ((Qvalx.width() / 2) - 468), (Qvalx.height() / 2) - ((Qvalx.height() / 2) - 52));

                        ctx.fillStyle = color_density[i];
                        ctx.fillText(arrow_density[i],(Qvalx.width() / 2) + ((Qvalx.width() / 2) - 448), (Qvalx.height() / 2) - ((Qvalx.height() / 2) - 52));

                        ctx.fillStyle = color_maxx[i];
                        ctx.fillText(arrow_maxx[i],(Qvalx.width() / 2) + ((Qvalx.width() / 2) - 428), (Qvalx.height() / 2) - ((Qvalx.height() / 2) - 52));

                        ctx.fillStyle = color_candle[i];
                        ctx.fillText(arrow_candle[i],(Qvalx.width() / 2) + ((Qvalx.width() / 2) - 408), (Qvalx.height() / 2) - ((Qvalx.height() / 2) - 52));

                        break;
                    case 1:
                        ctx.font = 'bold 24px Verdana'

                        ctx.fillStyle = color_density[i];
                        ctx.fillText(arrow_density[i],(Qvalx.width() / 2) + ((Qvalx.width() / 2) - 448), (Qvalx.height() / 2) - ((Qvalx.height() / 2) - 74));

                        ctx.fillStyle = color_maxx[i];
                        ctx.fillText(arrow_maxx[i],(Qvalx.width() / 2) + ((Qvalx.width() / 2) - 428), (Qvalx.height() / 2) - ((Qvalx.height() / 2) - 74));

                        ctx.fillStyle = color_candle[i];
                        ctx.fillText(arrow_candle[i],(Qvalx.width() / 2) + ((Qvalx.width() / 2) - 408), (Qvalx.height() / 2) - ((Qvalx.height() / 2) - 74));

                        break;
                }
            }

            if (details === 1) {
                ctx.font = '14px Verdana';
                ctx.fillStyle = '#00ffb2'
                ctx.fillText("C:" + (buymaxall + " - " + buyticks), x, y - (vremya_size * 4.6));

                ctx.fillStyle = '#f54343'
                ctx.fillText("V:" + (sellmaxall + " - " + sellticks), x, y - (vremya_size * 5.6))

                ctx.fillStyle = '#ddff00'
                ctx.fillText("VOL:" + (sellmaxall + buymaxall), x, y - (vremya_size * 6.6))

                ctx.fillStyle = '#ffffff'
                ctx.fillText("D:" + delta, x, y - (vremya_size * 7.6))

                ctx.fillStyle = '#ffffff'
                ctx.fillText("T:" + ticks, x, y - (vremya_size * 8.6))

                ctx.fillStyle = '#ffffff'
                ctx.fillText("CD: 0", x, y - (vremya_size * 9.6))
            }
            if (max_obj === 1) {
                if (max_obj_color === 1) {
                    ctx.fillStyle = color_text
                } else {
                    ctx.fillStyle = '#ffffff'
                }
                pricemax = pricemax.slice(obrez, 12);
                ctx.font = max_size + 'px Verdana';
                ctx.fillText(pricemax, x, y - (vremya_size * 2.2));
                ctx.font = "bolder " + max_size + 'px Verdana';
                ctx.fillText(pocmax, x, y - (vremya_size * 3.4));
            }
            if (strelki_procent === 1) {
                ctx.fillStyle = color_text;
                const _0xf774x6b = '⬈',
                    _0xf774x6c = '⬊',
                    _0xf774x6d = '⬍';
                procent_rassh = (max_p_find * 100 / _0xf774x55);
                procent_rassh = parseFloat(procent_rassh.toFixed());
                ctx.font = str_min_size + 'px Verdana';
                if (fon_svecha[i] === 'red') {
                    if (procent_rassh < 50) {
                        _0xf774x56 = 'down'
                    } else {
                        if (procent_rassh > 50) {
                            _0xf774x56 = 'down'
                        } else {
                            if (procent_rassh === 50) {
                                _0xf774x56 = '0'
                            }
                        }
                    }
                    procent_rassh = 100 - procent_rassh
                }
                if (fon_svecha[i] === 'green') {
                    if (procent_rassh < 50) {
                        _0xf774x56 = 'up'
                    } else {
                        if (procent_rassh > 50) {
                            _0xf774x56 = 'up'
                        } else {
                            if (procent_rassh === 50) {
                                _0xf774x56 = '0'
                            }
                        }
                    }
                }
                if (fon_svecha[i] === 'grey') {
                    if (procent_rassh < 50) {
                        _0xf774x56 = '0'
                    } else {
                        if (procent_rassh > 50) {
                            _0xf774x56 = '0'
                        } else {
                            if (procent_rassh === 50) {
                                _0xf774x56 = '0'
                            }
                        }
                    }
                }
                if (_0xf774x56 === 'up') {
                    ctx.fillText(_0xf774x6b + procent_rassh, x + (_0xf774x41.ww / 4), y - (parseFloat(max_size) + parseFloat(vremya_size) + parseFloat(max_size) * 2.4));
                    rash_up = procent_rassh;
                    rash_down = 100 - procent_rassh
                } else {
                    if (_0xf774x56 === 'down') {
                        ctx.fillText(_0xf774x6c + procent_rassh, x + (_0xf774x41.ww / 4), y - (parseFloat(max_size) + parseFloat(vremya_size) + parseFloat(max_size) * 2.4));
                        rash_up = 100 - procent_rassh;
                        rash_down = procent_rassh
                    } else {
                        if (_0xf774x56 === '0') {
                            ctx.fillText(_0xf774x6d + procent_rassh, x + (_0xf774x41.ww / 4), y - (parseFloat(max_size) + parseFloat(vremya_size) + parseFloat(max_size) * 2.4));
                            rash_up = procent_rassh;
                            rash_down = procent_rassh
                        }
                    }
                }
                po_up = 2;
            }
            if (Strelki_On === 1) {
                if (i === 1) {
                    const _0xf774x6e = (Qvalx.width() / 2);
                    const _0xf774x6f = (Qvalx.height() / 10);
                    const _0xf774x70 = _0xf774x6e,
                        _0xf774x71 = _0xf774x6f;
                    arrow_down_x = _0xf774x6e
                    arrow_down_y = _0xf774x6f + 330;
                    ctx.font = ur_str_size + 'px Verdana';
                    if (color_text === '#d75c48') {
                        ArrowDraw(ctx, 'up', _0xf774x70, _0xf774x71, 150, 150, 'green', 1, 'str');
                        ArrowDraw(ctx, 'down', arrow_down_x, arrow_down_y, 150, 150, 'red', 1, 'fill');
                        ctx.fillText(_0xf774x69, _0xf774x70 + 30, arrow_down_y / 1.6);
                        if (strelki_procent === 1) {
                            ctx.fillStyle = '#fff';
                            ctx.fillText(rash_down + '%', _0xf774x70 + 50, arrow_down_y / po_up * 1.5);
                            ctx.fillText(rash_up + '%', _0xf774x70 + 50, arrow_down_y / po_up)
                        }
                    } else {
                        if (color_text === '#008f1d') {
                            ArrowDraw(ctx, 'up', _0xf774x70, _0xf774x71, 150, 150, 'green', 1, 'fill');
                            ArrowDraw(ctx, 'down', arrow_down_x, arrow_down_y, 150, 150, 'red', 1, 'str');
                            ctx.fillText(_0xf774x69, _0xf774x70 + 30, arrow_down_y / 1.6);
                            if (strelki_procent === 1) {
                                ctx.fillStyle = '#fff';
                                ctx.fillText(rash_down + '%', _0xf774x70 + 50, arrow_down_y / po_up * 1.5);
                                ctx.fillText(rash_up + '%', _0xf774x70 + 50, arrow_down_y / po_up)
                            }
                        } else {
                            if (color_text === '#ffffff') {
                                ArrowDraw(ctx, 'up', _0xf774x70, _0xf774x71, 150, 150, 'green', 1, 'str');
                                ArrowDraw(ctx, 'down', arrow_down_x, arrow_down_y, 150, 150, 'red', 1, 'str');
                                ctx.fillText((_0xf774x69 + ' закр. на макс. объёме'), _0xf774x70 + 30, arrow_down_y / 1.6);
                                if (strelki_procent === 1) {
                                    ctx.fillStyle = '#fff';
                                    ctx.fillText(rash_down + '%', _0xf774x70 + 50, arrow_down_y / po_up * 1.5);
                                    ctx.fillText(rash_up + '%', _0xf774x70 + 50, arrow_down_y / po_up)
                                }
                            }
                        }
                    }
                }
            }
        }
        if (preload.is(':visible')) {
            console.log('загрузка завершена');
            preload.hide('fade')
        }
    };
    this.soc = function (_0xf774x72 = 'EURUSD', _0xf774x45 = 60) {
        if (window.location.hostname.length !== _0xf774x32.length) {
            return
        }
        console.log('Загрузка данных');
        preload.show('fade');
        if ($('#' + pair.attr('val').replace(/[/]/g, '_')).attr('data') !== _0xf774x34 || !_0xf774x2e) {
            _0xf774x34 = $('#' + pair.attr('val').replace(/[/]/g, '_')).attr('data');
            if (_0xf774x2e) {
                _0xf774x2e.close()
            }
            if (_0xf774x34 === 'OlympTrade') {
                console.log('OlympTrade');
                _0xf774x2e = new WebSocket('wss://olymptrade.com/ds/v4')
            }
            if (_0xf774x34 === 'Binary') {
                console.log('Binary');
                _0xf774x2e = new WebSocket('wss://blue.binaryws.com/websockets/v3?app_id=1&l=RU')
            }
            if (_0xf774x34 === 'Binomo') {
                console.log('Binomo');
                _0xf774x2e = new WebSocket('wss://as.binomo.com/')
            }
            _0xf774x2e.onopen = function () {
                let send_olymp;
                if (_0xf774x34 === 'OlympTrade') {
                    send_olymp = '[{"t":2,"e":4,"d":[{"p":"' + _0xf774x72 + '","tf":' + _0xf774x45 + '}]}]';
                    _0xf774x2e.send(send_olymp)
                }
                if (_0xf774x34 === 'Binary') {
                    _0xf774x2e.send('{"ticks_history":"' + _0xf774x72 + '","style":"ticks","end":"latest","count":20,"subscribe":1,"req_id":1,"passthrough":{}}')
                }
                if (_0xf774x34 === 'Binomo') {
                    _0xf774x2e.send('subscribe:' + _0xf774x72)
                }
            };
            _0xf774x2e.onclose = function () {
                console.log('Connection closed...');
                main.soc(pair.attr('val'), size.val())
            };
            _0xf774x2e.onmessage = function (_0xf774x73) {
                let temppp = (JSON.parse(_0xf774x73.data));
                let timer_temp;
                let timer_test;
                let temp_data_t0;
                let temp_data_t1;
                if (_0xf774x34 === 'Binomo') {
                    if (temppp.data[0].assets && temppp.data[0].assets[0].created_at) {
                        timer_temp = temppp.data[0].assets[0].created_at;
                        timer_test = new Date(timer_temp);
                        timer_glob_sec = timer_test.getSeconds();
                        kotirovka = temppp.data[0].assets[0].rate;
                        if (onetiksec_on === 1) {
                            if (prohod === 0) {
                                prohod = 1;
                                temp_data_t0 = _0xf774x73.data;
                            } else {
                                if (prohod === 1) {
                                    prohod = 0;
                                    temp_data_t1 = _0xf774x73.data;
                                }
                            }
                            if (timer_glob_sec_temp !== timer_test.getSeconds()) {
                                timer_glob_sec_temp = timer_test.getSeconds();
                                if (prohod === 1) {
                                    main.predobrdata(temp_data_t0)
                                } else {
                                    if (prohod === 0) {
                                        main.predobrdata(temp_data_t1)
                                    }
                                }
                            }
                        } else {
                            main.predobrdata(_0xf774x73.data)
                        }
                    }
                } else {
                    if (_0xf774x34 === 'Binary') {
                        if (temppp.tick && temppp.tick.quote) {
                            timer_temp = (temppp.tick.epoch * 1000);
                            timer_test = new Date(timer_temp);
                            timer_glob_sec = timer_test.getSeconds();
                            kotirovka = temppp.tick.quote;
                            if (onetiksec_on === 1) {
                                if (prohod === 0) {
                                    prohod = 1;
                                    temp_data_t0 = _0xf774x73.data;
                                } else {
                                    if (prohod === 1) {
                                        prohod = 0;
                                        temp_data_t1 = _0xf774x73.data;
                                    }
                                }
                                if (timer_glob_sec_temp !== timer_test.getSeconds()) {
                                    timer_glob_sec_temp = timer_test.getSeconds();
                                    if (prohod === 1) {
                                        main.predobrdata(temp_data_t0)
                                    } else {
                                        if (prohod === 0) {
                                            main.predobrdata(temp_data_t1)
                                        }
                                    }
                                }
                            } else {
                                main.predobrdata(_0xf774x73.data)
                            }
                        }
                    }
                }
                document.getElementById('tik').setAttribute('value', kotirovka)
            }
        } else {
            if (_0xf774x34 === 'OlympTrade' && _0xf774x2e) {
                if (!uuid) {
                    uuid = (Date.now().toString(36) + Math.random().toString(36).substr(2, 12)).toUpperCase()
                }
                if (sub_uid === 'undefined') {
                    if (_0xf774x2e.readyState === WebSocket.OPEN) {
                        _0xf774x2e.close();
                        _0xf774x2e = new WebSocket('wss://olymptrade.com/ds/v4')
                    }
                    _0xf774x2e.onopen = function () {
                        let send_olymp = '[{"t":2,"e":4,"d":[{"p":"' + _0xf774x72 + '","tf":' + _0xf774x45 + '}]}]';
                        _0xf774x2e.send(send_olymp)
                    }
                } else {
                    send_sub_uid = '[{"t":2,"e":5,"uuid":"' + uuid + '","d":[{"sub_uid":"' + sub_uid + '"}]}]';
                    _0xf774x2e.send(send_sub_uid);
                    send_olymp = '[{"t":2,"e":4,"uuid":"' + uuid + '","d":[{"p":"' + _0xf774x72 + '","tf":' + _0xf774x45 + '}]}]';
                    _0xf774x2e.send(send_olymp)
                }
            }
            if (_0xf774x34 === 'Binary') {
                _0xf774x2e.send('{"forget_all":["ticks","candles"],"passthrough":{}}');
                _0xf774x2e.send('{"ticks_history":"' + _0xf774x72 + '","style":"ticks","end":"latest","count":20,"subscribe":1,"req_id":1,"passthrough":{}}')
            }
            if (_0xf774x34 === 'Binomo') {
                console.log('Binomo22');
                if (sub_bin === 'undefined') {
                    if (_0xf774x2e.readyState === WebSocket.OPEN) {
                        _0xf774x2e.close();
                        _0xf774x2e = new WebSocket('wss://as.binomo.com/')
                    }
                    _0xf774x2e.onopen = function () {
                        _0xf774x2e.send('subscribe:' + _0xf774x72);
                        console.log('subscribe:' + _0xf774x72)
                    }
                } else {
                    _0xf774x2e.send('unsubscribe:' + main.data.pair);
                    console.log('unsubscribe:' + main.data.pair);
                    _0xf774x2e.send('subscribe:' + _0xf774x72);
                    console.log('subscribe:' + _0xf774x72)
                }
            }
            _0xf774x36 = 0
        }
    };
    this.predobrdata = function (arrayprice) {
        let _0xf774x75;
        let _0xf774x74;
        let _0xf774x44;
        arrayprice = JSON.parse(arrayprice);
        let test_time;
        if (_0xf774x34 === 'OlympTrade') {
            sub_bin = 'undefined';
            let _0xf774x74 = {},
                _0xf774x48;
            if (_0xf774x35 === 0 && arrayprice[5]) {
                if (_0xf774x35 === 0 && arrayprice[5].e === 4) {
                    sub_uid = arrayprice[5].d[0].sub_uid
                }
            } else {
                if (arrayprice[0].d[0].sub_uid) {
                    sub_uid = arrayprice[0].d[0].sub_uid
                } else {
                    if (arrayprice[5]) {
                        if (arrayprice[5].e === 4) {
                            if (arrayprice[5].d[0]) {
                                sub_uid = arrayprice[5].d[0].sub_uid
                            }
                        }
                    }
                }
            }
            if (_0xf774x35 === 0 && arrayprice[0].e === 1) {
                _0xf774x35 = arrayprice[0].d[0].q
            }
            if (arrayprice[0].d) {
                if (_0xf774x35 === arrayprice[0].d[0].close) {
                    _0xf774x36++
                }
            }
            if (arrayprice[0].e === 1) {
                arrayprice = arrayprice[0].d[0];
                _0xf774x48 = arrayprice.t;
                test_time = new Date(_0xf774x48 * 1000);
                if (_0xf774x2f === true) {
                    _0xf774x74.pair = arrayprice.p;
                    _0xf774x74.time = +_0xf774x48;
                    _0xf774x74.open = +arrayprice.q;
                    _0xf774x74.low = +arrayprice.q;
                    _0xf774x74.high = +arrayprice.q;
                    _0xf774x74.close = +arrayprice.q
                } else {
                    if (_0xf774x2f === false) {
                        _0xf774x74.barsize = +size.val();
                        _0xf774x74.data = [];
                        _0xf774x74.pair = arrayprice.p;
                        let _0xf774x75 = {};
                        _0xf774x75.pair = arrayprice.p;
                        _0xf774x75.time = _0xf774x48 - (_0xf774x48 % size.val());
                        _0xf774x75.open = +arrayprice.q;
                        _0xf774x75.low = +arrayprice.q;
                        _0xf774x75.high = +arrayprice.q;
                        _0xf774x75.close = +arrayprice.q;
                        for (_0xf774x44 = 0; _0xf774x44 < 72; _0xf774x44++) {
                            _0xf774x74.data.push(_0xf774x75);
                            _0xf774x75.time = _0xf774x48 - size.val()
                        }
                    }
                }
            }
            main.obr(_0xf774x74)
        }
        let num;
        let KF;
        if (_0xf774x34 === 'Binary') {
            sub_bin = 'undefined';
            _0xf774x74 = {};
            let _0xf774x48;
            if (_0xf774x35 === 0 && arrayprice.tick) {
                _0xf774x35 = arrayprice.tick.quote
            }
            if (arrayprice.tick) {
                if (_0xf774x35 === arrayprice.tick.quote) {
                    _0xf774x36++
                }
            }
            if (arrayprice.tick) {
                arrayprice = arrayprice.tick;
                _0xf774x48 = arrayprice.epoch;
                if (okrugl_on === 1) {
                    num = arrayprice.quote;
                    KF = Math.pow(10, okrugl);
                    arrayprice.quote = Math.trunc(num * KF) / KF
                }
                test_time = new Date(_0xf774x48 * 1000);
                glob_hour = test_time.getHours();
                glob_min = test_time.getMinutes();
                glob_sec = test_time.getSeconds();
                if (_0xf774x2f === true) {
                    _0xf774x74.pair = arrayprice.symbol;
                    _0xf774x74.time = +_0xf774x48;
                    _0xf774x74.open = +arrayprice.quote;
                    _0xf774x74.low = +arrayprice.quote;
                    _0xf774x74.high = +arrayprice.quote;
                    _0xf774x74.close = +arrayprice.quote
                } else {
                    if (_0xf774x2f === false) {
                        _0xf774x74.barsize = +size.val();
                        _0xf774x74.data = [];
                        _0xf774x74.pair = arrayprice.symbol;
                        _0xf774x75 = {};
                        _0xf774x75.pair = arrayprice.symbol;
                        _0xf774x75.time = _0xf774x48 - (_0xf774x48 % size.val());
                        _0xf774x75.open = +arrayprice.quote;
                        _0xf774x75.low = +arrayprice.quote;
                        _0xf774x75.high = +arrayprice.quote;
                        _0xf774x75.close = +arrayprice.quote;
                        for (_0xf774x44 = 0; _0xf774x44 < 72; _0xf774x44++) {
                            _0xf774x74.data.push(_0xf774x75);
                            _0xf774x75.time = _0xf774x48 - size.val()
                        }
                    }
                }
            }
            main.obr(_0xf774x74)
        }
        let tim_00;
        if (_0xf774x34 === 'Binomo') {
            sub_uid = 'undefined';
            sub_bin = 0;
            _0xf774x74 = {};
            let _0xf774x48;
            if (_0xf774x35 === 0 && arrayprice.data[0].action) {
                if (arrayprice.data[0].action === 'subscribe') {
                    sub_bin = 123
                }
            }
            if (_0xf774x35 === 0 && arrayprice.data[0].assets) {
                _0xf774x35 = arrayprice.data[0].assets[0].rate
            }
            if (arrayprice.data[0].assets) {
                if (_0xf774x35 === arrayprice.data[0].assets[0].rate) {
                    _0xf774x36++
                }
            }
            if (arrayprice.errors[0]) {
                _0xf774x74 = {
                    "servertime": 1234567890
                }
            } else {
                if (arrayprice.data[0].assets) {
                    arrayprice = arrayprice.data[0].assets[0];
                    if (okrugl_on === 1) {
                        num = arrayprice.rate;
                        KF = Math.pow(10, okrugl);
                        arrayprice.rate = Math.trunc(num * KF) / KF
                    }
                    _0xf774x48 = String(Date.parse(arrayprice.created_at));
                    tim_00 = (Date.parse(arrayprice.created_at));
                    test_time = new Date(tim_00);
                    glob_sec = test_time.getSeconds();
                    glob_min = test_time.getMinutes();
                    glob_hour = test_time.getHours();
                    _0xf774x48 = Number(_0xf774x48.substring(0, _0xf774x48.length - 3));
                    if (_0xf774x2f === true) {
                        _0xf774x74.pair = arrayprice.ric;
                        _0xf774x74.time = +_0xf774x48;
                        _0xf774x74.open = +arrayprice.rate;
                        _0xf774x74.low = +arrayprice.rate;
                        _0xf774x74.high = +arrayprice.rate;
                        _0xf774x74.close = +arrayprice.rate
                    } else {
                        if (_0xf774x2f === false) {
                            _0xf774x74.barsize = +size.val();
                            _0xf774x74.data = [];
                            _0xf774x74.pair = arrayprice.ric;
                            _0xf774x75 = {};
                            _0xf774x75.pair = arrayprice.ric;
                            _0xf774x75.time = _0xf774x48 - (_0xf774x48 % size.val());
                            _0xf774x75.open = +arrayprice.rate;
                            _0xf774x75.low = +arrayprice.rate;
                            _0xf774x75.high = +arrayprice.rate;
                            _0xf774x75.close = +arrayprice.rate;
                            for (_0xf774x44 = 0; _0xf774x44 < 72; _0xf774x44++) {
                                _0xf774x74.data.push(_0xf774x75);
                                _0xf774x75.time = _0xf774x48 - size.val()
                            }
                        }
                    }
                }
            }
            main.obr(_0xf774x74)
        }
        Menu()
    };
    this.indi = function () {
        let length;
        let i;
        if (!main.data) {
            return
        }
        if (window.location.hostname.length !== _0xf774x32.length) {
            return
        }
        const data = main.data.data;
        if (!data[0].tick) {
            return
        }
        let _0xf774x45 = period.val(),
            _0xf774x5c = [],
            _0xf774x76 = 0,
            _0xf774x5d = [];
        for (i = 0; i < _0xf774x45; i++) {
            if (!data[i].tick) {
                break
            }
            for (length = 0; length < data[i].tick.length; length++) {
                if (!_0xf774x5c[data[i].tick[length].close]) {
                    _0xf774x5c[data[i].tick[length].close] = 1
                } else {
                    _0xf774x5c[data[i].tick[length].close]++
                }
            }
        }
        for (const _0xf774x62 in _0xf774x5c) {
            if (_0xf774x5c[_0xf774x62] > _0xf774x76) {
                _0xf774x76 = _0xf774x5c[_0xf774x62]
            }
            _0xf774x5d.push([_0xf774x62, _0xf774x5c[_0xf774x62]])
        }
        let _0xf774x61 = _0xf774x5d.length,
            _0xf774x5f, _0xf774x3d = [];
        let ky;
        for (i = 0; i < _0xf774x61; i++) {
            if (Number(_0xf774x5d[i][0]) > 0) {
                _0xf774x5f = i;
                ky = _0xf774x5d[i][0];
                for (length = 0; length < _0xf774x61; length++) {
                    if (Number(_0xf774x5d[length][0]) > ky) {
                        ky = _0xf774x5d[length][0];
                        _0xf774x5f = length;
                        if (i > 0) {
                            i--
                        }
                    }
                }
                _0xf774x3d.push([ky, _0xf774x5d[_0xf774x5f][1]]);
                _0xf774x5d[_0xf774x5f][0] = 0
            }
        }
        ctx.clearRect(0, 0, Qvalx.width(), Qvalx.height());
        main.risv(_0xf774x3d, _0xf774x76);
        main.risg(data);
        main.rish(data, _0xf774x76)
    };
    if (window.location.hostname.length !== _0xf774x32.length) {
        return
    }
    this.obr = function (_0xf774x4d) {
        _0xf774x2c = 0;
        if (preload.is(':visible')) {
        }
        if (_0xf774x4d.servertime) {
            _0xf774x31++
        }
        if (_0xf774x4d.time) {
            _0xf774x31 = 0;
            i = 0;
            let _0xf774x3c = _0xf774x4d.time % main.data.barsize;
            if (_0xf774x3c === 0 || Math.floor(_0xf774x4d.time / main.data.barsize) > Math.floor(main.data.data[0].time / main.data.barsize)) {
                if (_0xf774x4d.time > _0xf774x30) {
                    _0xf774x30 = _0xf774x4d.time + 10;
                    main.data.data.unshift(_0xf774x4d);
                    localStorage.setItem('data', JSON.stringify(main.data))
                }
            } else {
                if (_0xf774x4d.close) {
                    _0xf774x31 = 0;
                    if (main.data.data[0].high < _0xf774x4d.high) {
                        main.data.data[0].high = _0xf774x4d.high
                    }
                    if (main.data.data[0].low > _0xf774x4d.low) {
                        main.data.data[0].low = _0xf774x4d.low
                    }
                    document.getElementById('tikokrugl').setAttribute('value', main.data.data[0].close);
                    if (main.data.data[0].close !== _0xf774x4d.close) {
                        main.data.data[0].close = _0xf774x4d.close;
                        if (!main.data.data[0].tick) {
                            main.data.data[0].tick = [];
                            main.data.data[0].tick.push(_0xf774x4d)
                        } else {
                            main.data.data[0].tick.unshift(_0xf774x4d)
                        }
                    }
                }
            }
            requestAnimationFrame(main.indi)
        } else {
            if (_0xf774x4d.data) {
                if (!_0xf774x2f) {
                    const _0xf774x77 = JSON.parse(localStorage.getItem('data'));
                    if (_0xf774x77) {
                        if (_0xf774x77.pair === _0xf774x4d.pair && _0xf774x77.barsize === _0xf774x4d.barsize) {
                            main.data = _0xf774x77
                        } else {
                            main.data = _0xf774x4d
                        }
                    } else {
                        main.data = _0xf774x4d
                    }
                    _0xf774x2f = true
                }
            }
        }
        if (_0xf774x31 > 2 || _0xf774x36 > 20) {
            const _0xf774x10 = Qvalx.height(),
                _0xf774xf = Qvalx.width();
            ctx.clearRect(0, 0, _0xf774xf, _0xf774x10);
            ctx.strokeStyle = '#fff';
            ctx.font = ((_0xf774xf / 100) * 4) + 'px Verdana';
            const _0xf774x78 = 'Котировки ' + pair.text() + ' недоступны';
            ctx.strokeText(_0xf774x78, (_0xf774xf / _0xf774x78.length) * 4, _0xf774x10 / 2);
            _0xf774x35 = 0;
            _0xf774x36 = 0;
            if (preload.is(':visible')) {
                console.log('preload4');
                preload.hide('fade')
            }
        }
    };
    this.pairchange = function () {
        _0xf774x2f = false;
        let _0xf774x79 = 0;
        if (_0xf774x39.aff) {
            _0xf774x79 = _0xf774x39.aff
        }
        const _0xf774x74 = {
            aff: _0xf774x79,
            pair: pair.attr('val'),
            period: period.val(),
            size: size.val(),
            date: _0xf774x39.date
        };
        _0xf774x31 = 0;
        localStorage.setItem('dsav', JSON.stringify(_0xf774x74));
        main.soc(pair.attr('val'), size.val())
    };
    size.change(function () {
        main.pairchange()
    });
    pair.click(function () {
        if (!divscrol.is(':visible')) {
            divscrol.show('blind')
        } else {
            divscrol.hide('blind')
        }
    });
    $('#valx').click(function () {
        if (divscrol.is(':visible')) {
            divscrol.hide('blind')
        }
    });
    $('.sels').click(function () {
        if ($(this).attr('val') !== pair.attr('val')) {
            pair.attr('val', $(this).attr('val'));
            pair.html($(this).html());
            main.pairchange()
        }
        divscrol.hide('blind')
    });
    period.change(function () {
        if ($(this).val() < 2) {
            $(this).val(2)
        }
        if ($(this).val() > 72) {
            $(this).val(72)
        }
        let _0xf774x79 = 0;
        if (_0xf774x39.aff) {
            _0xf774x79 = _0xf774x39.aff
        }
        const _0xf774x74 = {
            aff: _0xf774x79,
            pair: pair.attr('val'),
            period: period.val(),
            size: size.val(),
            date: _0xf774x39.date
        };
        localStorage.setItem('dsav', JSON.stringify(_0xf774x74))
    });
    _0xf774x39 = JSON.parse(localStorage.getItem('dsav'));
    let _0xf774x7a = new Date();
    _0xf774x7a = _0xf774x7a.getTime();
    if (_0xf774x39) {
        if (_0xf774x39.pair) {
            pair.attr('val', _0xf774x39.pair);
            pair.html($('#' + _0xf774x39.pair.replace(/[/]/g, '_')).html())
        }
        if (_0xf774x39.period) {
            period.val(_0xf774x39.period)
        }
        if (_0xf774x39.size) {
            $('#size>option:eq(2)').removeAttr('selected');
            $('#' + _0xf774x39.size).attr('selected', 'selected')
        }
    } else {
        const _0xf774x74 = {
            aff: 'null',
            pair: pair.val(),
            period: period.val(),
            size: size.val(),
            date: _0xf774x7a
        };
        localStorage.setItem('dsav', JSON.stringify(_0xf774x74));
        _0xf774x39 = _0xf774x74
    }
    main.soc($('#pair').attr('val'), $('#size').val())

    let _0xf774x7b = document.createElement('a');
    let _0xf774x7c = document.createElement('LABEL');
    _0xf774x7c.textContent = ' Ver 0.0.3.1 ';
    _0xf774x7c.style.right = '15px';
    _0xf774x7c.style.bottom = '5px';
    _0xf774x7c.style.position = 'absolute';
    _0xf774x7b.appendChild(_0xf774x7c);
    document.body.appendChild(_0xf774x7b);
};
window.onload = function () {
    Sign()
}