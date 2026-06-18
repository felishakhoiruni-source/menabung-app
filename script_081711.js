let saldo = 0;

function updatesaldo() {
    document.getElementById("saldo").textContent =saldo.toLocaleString("id-ID")
}

function tambahtabungan() {
    let jumlah =
    parseInt(document.getElementById("jumlah").value);

    if (!jumlah || jumlah <= 0) {
        alert("masukan jumlah yang valid!");return;
    }

    saldo += jumlah;
    updatesaldo();
    document.getElementById("jumlah").value ="";
}

function tariktabungan() {
    let jumlah =
    parseInt(document.getElementById("jumlah").value);

    if (!jumlah || jumlah <=0) {
        alert("masukan jumlah yang valid!");return;
    }

    if(jumlah > saldo) {
        alert("saldo tidak mencukupi!");return;
    }

    saldo -= jumlah;
    updatesaldo();
    document.getElementById("jumlah").value = "";
}