// ! JANGAN DIMODIFIKASI
/*
  Data Array Object Pegawai
  [
    {
      "id": 1,
      "namaDepan": "Edyth",
      "namaBelakang": "Roberts",
      "jenisKelamin": "M"
    },
    ...
  ]
*/
const arrayObjectPegawai = require("./data-customer.json");

function lakukanLooping(arrPegawai) {
  // ! JANGAN DIMODIFIKASI
  let dataYangAkanDilooping = arrPegawai;

  /*
    TODO 1: Buatlah sebuah variabel bernama "hasilLooping" 
      yang berisi gabungan nama depan dan belakang dari masing masing pegawai

      Contoh: ["Aisyah Nirmala", "Mansur Faisal", ...]
  */
  let hasilLooping = null;
  
  /*
    TODO 2: Buatlah sebuah variabel bernama "jumlahPria"
      yang berisi jumlah pria dari masing masing pegawai
  */
  let jumlahPria = null;

  /*
    TODO 3: Buatlah sebuah variabel bernama "jumlahWanita"
      yang berisi jumlah wanita dari masing masing pegawai
  */
  let jumlahWanita = null;

  /*
    Proses
  */
  hasilLooping = []
  let index = 0;
  while (dataYangAkanDilooping[index]){
    // let namaPegawai = '';
    // namaPegawai =+ '${dataYangAkanDilooping[index].namaDepan} ${dataYangAkanDilooping[index].namaBelakang}';
    let namaDepanPegawai = dataYangAkanDilooping[index].namaDepan;
    let namaBelakangPegawai = dataYangAkanDilooping[index].namaBelakang;
    hasilLooping.push(namaDepanPegawai + " " + namaBelakangPegawai);
    if (dataYangAkanDilooping[index].jenisKelamin === 'M') {
      jumlahPria += 1;
    } else {
      jumlahWanita += 1;
    }
    index++;
  }

  /*
    TODO 4: Buatlah sebuah variabel bernama "komentar"
      yang akan mengomentari apakah lebih banyak Pria atau Wanita
      
      Apabila Pria lebih banyak dari Wanita, maka komentar akan berisi:
        "Jumlah Pria lebih banyak dari Wanita"
      Apabila Wanita lebih banyak dari Pria, maka komentar akan berisi:
        "Jumlah Wanita lebih banyak dari Pria"
      Apabila imbang, maka komentar akan berisi:
        "Jumlah Pria dan Wanita berimbang"
  */
  let komentar = null;

  if (jumlahPria > jumlahWanita) {
    komentar = 'Jumlah Pria lebih banyak dari Wanita.';
  } else if (jumlahPria < jumlahWanita) {
    komentar = 'Jumlah Wanita lebih banyak dari Pria.';
  } else {
    komentar = 'Jumlah Pria dan Wanita berimbang.';
  }


  // ! JANGAN DIMODIFIKASI
  return {
    hasilLooping,
    jumlahPria,
    jumlahWanita,
    komentar,
  };
}

function main(data) {
  const hasil = lakukanLooping(data || arrayObjectPegawai);

  console.log('Daftar Nama Pegawai: ');
  console.log(hasil.hasilLooping);
  console.log('Jumlah Pria: ' + hasil.jumlahPria);
  console.log('Jumlah Wanita: ' + hasil.jumlahWanita);
  console.log('Oh Ternyata, ' + hasil.komentar);

  return hasil;

}

main(arrayObjectPegawai);

module.exports = main;
