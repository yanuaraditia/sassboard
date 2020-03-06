feather.replace();
$(document).ready(function(){
    var wi = $('.sidebar').width();
    $('.bodycast').css('--nav-width',wi+'px');
    startTime();
    $('.select2-iki').select2();
});
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    $('#clock').html(h + ":" + m + ":" + s);
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
const swalClass = {
    content: 'px-5',
    input: 'form-control',
    confirmButton: 'btn btn-primary',
    cancelButton: 'btn btn-secondary'
}
const confBtn = $('.confirm-btn');
confBtn.click(function() {
    var name = confBtn.data('name');
    Swal.fire({
        title: 'Hapus '+name+'?',
        text: "Proses ini tidak bisa dibatalkan!",
        icon: 'warning',
        customClass: swalClass,
        showCancelButton: true,
        confirmButtonText: 'Ya, lanjutkan!',
        confirmButtonColor: '#d32f2f',
        cancelButtonText: 'Batal'
    }).then((result) => {
        if (result.value) {
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
        }
        window.location.href;
    })
});
const selectBtn = $('.cetakLaporan');
selectBtn.click(function() {
    Swal.fire({
        title: 'Pilih Laporan',
        icon: 'question',
        input: 'select',
        inputOptions: {
            '1' : 'Gaji',
            '2' : 'Golongan',
            '3' : 'Karyawan'
        },
        customClass: swalClass,
        showCancelButton: true,
        confirmButtonText: "Cetak",
        showLoaderOnConfirm: true,
      }).then((result) => {
        if (result.value) {
          Swal.fire({
            title: 'All done!',
            html: `
              Your answers:
              <pre><code>${result.value}</code></pre>
            `,
            confirmButtonText: 'Lovely!'
          })
        }
      })
})