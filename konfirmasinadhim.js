function konfirmnadhim() {

    var inama = document.fabsen.txtnama.value;
    var iemail = document.fabsen.txtemail.value;
    var ipesan = document.fabsen.txtpesan.value;
    var kosong = "wajib di isi";

    if (inama == "") {
        alert("Namanya" + kosong);
    } else if (iemail == "") {
        alert("Emailnya" + kosong);
    } else if (ipesan == "") {
        alert("pesan" + kosong);
    } else {
        document.fabsen.submit();
    }

}