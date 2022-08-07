"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var socket = io('https://quotexsinais.xyz/');
var minutes = 0;
var dateNow = 0;
function getSignals(event) {
    return __awaiter(this, void 0, void 0, function () {
        var paritiesOTC, parities, days, percentage, time, market, params, text;
        return __generator(this, function (_a) {
            paritiesOTC = [
                
"EURGBP-OTC",

            
            ];
            parities = [
"AUDCAD",
"AUDCHF",
"AUDJPY",
"AUDNZD",
"AUDUSD",
"BTCUSD",
"CADCHF",
"CADJPY",
"CHFJPY",
"ETHUSD",
"EURAUD",
"EURCAD",
"EURCHF",
"EURGBP",
"EURJPY",
"EURNZD",
"EURUSD",
"GBPAUD",
"GBPCAD",
"GBPCHF",
"GBPJPY",
"GBPNZD",
"GBPUSD",
"LTCUSD",
"NZDCAD",
"NZDCHF",
"NZDJPY",
"NZDUSD",
"USDCAD",
"USDCHF",
"USDJPY",
"XAGUSD",
"XAUUSD",

            ];
            event.preventDefault();
            days = document.getElementById('days').value;
            percentage = document.getElementById('percentage').value;
            time = document.getElementById('time').value;
            market = document.querySelector('input[name=market]:checked').value;
            if (days > 0 && days <= 365 && percentage > 0 && percentage <= 100 && Number.isInteger(Number(days))) {
                params = {
                    date: Date.now() / 1000,
                    parities: market === 'normal' ? parities : paritiesOTC,
                    days: Number(days),
                    percentage: Number(percentage) / 100,
                    size: Number(time),
                };
                socket.emit('signals', params);
                document.getElementById("liveToastBtn").disabled = true;
            }
            else {
                text = '';
                console.log(days);
                if (days < 0 || days > 366 || days === '') {
                    text += "<p>A quantidade dias tem que ser maior que 1 e menor que 15</p>\n               <p>A quantidade dias deve ser um n\u00FAmero inteiro</p>";
                }
                if (percentage <= 0 || percentage > 100 || percentage === '') {
                    text += '<p>A porcentagem  tem que ser maior que 0 e menor  ou igual a 100</p>';
                }
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    html: text,
                    buttonsStyling: false,
                    customClass: {
                        confirmButton: 'button_green button',
                    },
                });
            }
            return [2 /*return*/];
        });
    });
}
socket.on('getting_values', function (_a) {
    var parity = _a.parity, index = _a.index, length = _a.length;
    var percentage = 0;
    var divResult = document.getElementById('result');
    var progress = document.getElementById('progress');
    var progressBar = document.getElementById('progress-bar');
    progress.classList.remove('visually-hidden');
    percentage = ((index + 1) / length) * 100;
    divResult.innerHTML = "Getting signals from " + parity;
    progressBar.innerHTML = percentage.toFixed(2) + "%";
    progressBar.style.width = percentage.toFixed(2) + "%";
});
socket.on('result_values', function (_a) {
    var hour = _a.hour, parity = _a.parity, direction = _a.direction, from = _a.from;
    var divResult = document.getElementById('result');
    var progress = document.getElementById('progress');
    var progressBar = document.getElementById('progress-bar');
    var spinner = document.getElementById('spinner');
    var createP = document.createElement('p');
    createP.setAttribute('class', "2021-10-10 " + hour);
    var btnExport = document.getElementById('buttons_export');
    btnExport.classList.remove("visually-hidden");
    progress.classList.add('visually-hidden');
    spinner.classList.remove('visually-hidden');
    createP.innerHTML += parity + " - " + hour + " - " + direction;
    divResult.appendChild(createP);
    progressBar.innerHTML = 0 + "%";
    progressBar.style.width = 0 + "%";
    var allResults = document.querySelectorAll('#result p');
    var allResultsArr = Array.prototype.slice.call(allResults);
    allResultsArr.sort(function (a, b) {
        return Date.parse(a.attributes.class.value) - Date.parse(b.attributes.class.value);
    });
    allResultsArr.map(function (p) {
        divResult.appendChild(p);
    });
});
socket.on('start', function () {
    var divResult = document.getElementById('result');
    var progress = document.getElementById('progress');
    var progressBar = document.getElementById('progress-bar');
    var spinner = document.getElementById('spinner');
    var createH1 = document.createElement('h1');
    progress.classList.add('visually-hidden');
    spinner.classList.remove('visually-hidden');
    divResult.innerHTML = '';
    createH1.innerHTML = "Result";
    divResult.appendChild(createH1);
    progressBar.innerHTML = 0 + "%";
    progressBar.style.width = 0 + "%";
});
socket.on('end', function () {
    var spinner = document.getElementById('spinner');
    var divResult = document.getElementById('result');
    spinner.classList.add('visually-hidden');
    document.getElementById("liveToastBtn").disabled = false;
    if (divResult.childNodes.length === 1) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            html: 'Sem sinais para a configuração informada !',
            buttonsStyling: false,
            customClass: {
                confirmButton: 'button_green button',
            },
        });
        divResult.innerHTML = '';
    }
});
