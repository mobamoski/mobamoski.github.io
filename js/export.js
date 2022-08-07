"use strict";
document.querySelector("#export_candles").addEventListener("click", function (event) {
    var data = document.getElementById('toPDF');
    html2pdf().from(data).save();
});
document.querySelector("#button_modal").addEventListener("click", function (event) {
    var data = document.getElementById("text_export");
    data.innerHTML = '';
    var date = document.getElementById('date').value;
    var time = document.getElementById('time');
    time = time.children[time.selectedIndex].textContent;
    data.innerHTML = "Data: " + dateFns.format(date, 'DD/MM/YYYY') + "&#13;&#10";
    data.innerHTML += "Time: " + time + "&#13;&#10";
    data.innerHTML += "&#13;&#10 ";
    var table = document.querySelectorAll('tbody tr');
    var tableArr = Array.prototype.slice.call(table);
    tableArr.map(function (tr) {
        var hour = tr.children[1].innerText;
        var parity = tr.children[2].innerText;
        var direction = tr.children[3].innerText;
        var gale = tr.children[4].innerText;
        var result = tr.children[5].innerText;
        gale = Number(gale.substr(0, gale.length - 2)) > 0 ? gale.substr(0, gale.length - 2) : '';
        var resultIcon = 'Aguardando sinal';
        if (result === 'WIN' || result === 'WIN C/Gale')
            resultIcon = '✅';
        if (result === 'LOSS')
            resultIcon = '⛔';
        if (result === 'DOJI')
            resultIcon = 'DOJI';
        data.innerHTML += hour + " " + parity + " " + direction + " " + resultIcon + " " + sup(gale) + " &#13;&#10";
    });
    var doji = document.getElementById("doji").innerText;
    var win = document.getElementById("win").innerText;
    var winNumber = Number(win.substr(18, win.length));
    var winGale = document.getElementById("winGale").innerText;
    var winGale1 = document.getElementById("winGale1").innerText;
    var winGale2 = document.getElementById("winGale2").innerText;
    var winGale3 = document.getElementById("winGale3").innerText;
    var winGale1Number = Number(winGale1.substr(20, win.length));
    var winGale2Number = Number(winGale2.substr(20, win.length));
    var winGale3Number = Number(winGale3.substr(20, win.length));
    var loss = document.getElementById("loss").innerText;
    var total = winNumber + Number(winGale.substr(18, win.length)) + Number(loss.substr(21, loss.length)) + Number(doji.substr(20, doji.length));
    data.innerHTML += "&#13;&#10Sinais verificados: " + total + "&#13;&#10";
    data.innerHTML += "&#13;&#10Win sem gale (" + Number(win.substr(18, win.length)) + "): " + Math.floor(winNumber * 100 / total) + "% ";
    data.innerHTML += "&#13;&#10Win com gale 1 (" + winGale1Number + "): " + Math.floor((winNumber + winGale1Number) * 100 / total) + "% ";
    data.innerHTML += "&#13;&#10Win com gale 2 (" + winGale2Number + "): " + Math.floor((winNumber + winGale1Number + winGale2Number) * 100 / total) + "% ";
    data.innerHTML += "&#13;&#10Win com gale 3 (" + winGale3Number + "): " + Math.floor((winNumber + winGale1Number + winGale2Number + winGale3Number) * 100 / total) + "% &#13;&#10";
    data.innerHTML += "&#13;&#10Resultado : " + (winNumber + Number(winGale.substr(18, win.length))) + " x " + (Number(loss.substr(21, loss.length)) + Number(doji.substr(20, doji.length))) + "&#13;&#10";
});
function sup(number) {
    switch (number) {
        case '1':
            return '¹';
            break;
        case '2':
            return '²';
            break;
        case '3':
            return '³';
            break;
        default:
            return '';
    }
}
document.querySelector("#export_text").addEventListener("click", function (event) {
    textExport(event);
});
function textExport(event) {
    var data = document.getElementById('text_export');
    data.select();
    document.execCommand('copy');
}
function exportResults(event) {
    var date = dateFns.format(new Date(), 'DD/MM/YYYY');
    var time = document.getElementById('time');
    time = time.children[time.selectedIndex].textContent;
    var market = document.querySelector('input[name=market]:checked').value;
    var data = document.getElementById("text_export");
    data.innerHTML = "Data: " + date + "&#13;&#10";
    data.innerHTML += "Time: " + time + "&#13;&#10";
    data.innerHTML += "Mercado: " + market.toUpperCase() + "&#13;&#10";
    data.innerHTML += "&#13;&#10 ";
    var allResults = document.querySelectorAll('#result p');
    var allResultsArr = Array.prototype.slice.call(allResults);
    allResultsArr.map(function (p) {
        data.innerHTML += p.innerText + " &#13;&#10";
    });
}
