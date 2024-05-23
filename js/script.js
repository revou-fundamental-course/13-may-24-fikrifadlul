let box = null;
let rumus = null;
let boxLuas = null;
let boxKeliling = null;
let boxHasil = null;

function showBox(params) {
    box = document.getElementById("box");
    rumus = document.getElementsByClassName("rumus");
    boxLuas = document.getElementById("boxLuas");
    boxKeliling = document.getElementById("boxKeliling");
    if (params == 1) {
        if (box.style.display != "block") {
            box.style.display = "block";
        }
        rumus[0].innerHTML = "<p>Rumus Luas Segitiga : <b>L = 1/2 x a x t</b> </p>";
        boxKeliling.style.display = "none";
        boxLuas.style.display = "block";
    } else if (params == 2) {
        if (box.style.display != "block") {
            box.style.display = "block";
        }
        rumus[0].innerHTML = "<p>Rumus Keliling <b>K = a + b + c</b></p>";
        boxLuas.style.display = "none";
        boxKeliling.style.display = "block";
    }

    if (boxHasil != null) {
        boxHasil.innerHTML = ""
        boxHasil.style.display = 'none';
    }

}

function hitung() {
    boxHasil = document.getElementById("result");
    boxHasil.style.display = 'block';
    if (boxLuas.style.display == 'block') {
        const alas = parseFloat(document.getElementById('inputAlas').value);
        const tinggi = parseFloat(document.getElementById('inputTinggi').value);
        let hasil = 0;

        if (isNaN(alas) || isNaN(tinggi)) {
            alert('Harap semua nilai sisi diisi dengan angka yang valid.');
            boxHasil.style.display = 'none';
            return;
        } else {
            hasil = 0.5 * alas * tinggi;
            boxHasil.innerHTML = "<p>Luas segitiga dari alas <b>" + alas + "</b> dan tinggi <b>" + tinggi + "</b> adalah <b>" + hasil + "</b>.</p>";
        }
    } else if (boxKeliling.style.display == 'block') {
        const siA = parseFloat(document.getElementById('inputA').value);
        const siB = parseFloat(document.getElementById('inputB').value);
        const siC = parseFloat(document.getElementById('inputC').value);
        let hasil = 0;
        
        if (isNaN(siA) || isNaN(siB) || isNaN(siC)) {
            alert('Harap semua nilai sisi diisi dengan angka yang valid.');
            boxHasil.style.display = 'none';
            return;
        } else {
            hasil = siA + siB + siC;
            boxHasil.innerHTML = "<p>Keliling segitiga dari sisi A = <b>" + siA + "</b> dan sisi B = <b>" + siB + "</b> dan sisi C = <b>" + siC + "</b> adalah <b>" + hasil + "</b>.</p>";
        }

    }
}

function resetArea() {
    let inputUser = document.getElementsByTagName("input");
    for (let i = 0; i < inputUser.length; i++) {
        inputUser[i].value = "";
    }
}
