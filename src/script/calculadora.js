export function Somar() {
    var hora1 = Number(document.getElementById("hora1").value) 

    var hora2 = Number(document.getElementById("hora2").value)

    var min1 = Number(document.getElementById("min1").value)

    var min2 = Number(document.getElementById("min2").value)

    let resHora = hora1 + hora2

    let resMin = min1 + min2

    if (resMin === 120) {
        document.getElementById("resHora").value = resHora + 2
        document.getElementById("resMin").value = 0
    }
    else if (resMin >= 60) {
        document.getElementById("resHora").value = resHora + 1
        document.getElementById("resMin").value = resMin - 60
    }
    else {
        document.getElementById("resHora").value = resHora
        document.getElementById("resMin").value = resMin
    }

};

export function Subtrair() {

    var hora1 = Number(document.getElementById("hora1").value)

    var hora2 = Number(document.getElementById("hora2").value)

    var min1 = Number(document.getElementById("min1").value)

    var min2 = Number(document.getElementById("min2").value)

    let resHora = hora1 - hora2

    let resMin = min1 - min2


    if (resMin === 0) {
        document.getElementById("resHora").value = resHora + 0
        document.getElementById("resMin").value = "00"
    }
    else if (resMin <= 60 && resMin >= 0) {
        document.getElementById("resHora").value = resHora 
        document.getElementById("resMin").value = resMin 
    }
    else if (resMin < 0) {
        document.getElementById("resHora").value = resHora - 1
        document.getElementById("resMin").value = 60 + resMin
    }

};

export function Limpar() {
    document.querySelectorAll('input[type="number"]').forEach(input => {
        input.value = '';
    });
}