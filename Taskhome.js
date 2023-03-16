class person {
    nama = 'Mari';
    umur = 100;
    kelamin = 'none';
    tinggi = '200';
    
    setDataPerson(nama, umur, kelamin, tinggi) {
        this.nama = nama;
        this.umur = umur;
        this.kelamin = kelamin;
        this.tinggi = tinggi;
    }

    getDataPerson(){
        const obj = {    
            nama : this.nama,
            umur : this.umur,
            kelamin : this.kelamin,
            tinggi : this.tinggi,
        };
        return obj;
    }
}

const m = new person();
console.log(m.person);
let dataPerson = m.getDataPerson();
console.log(dataPerson);
m.setDataPerson('Aryo', 20,'laki-laki', 173);
dataPerson = m.getDataPerson();
console.log(dataPerson);


console.log('=========================================');

class Student {
    constructor(nama, NIM, nilai, nilaiBaru) {
        console.log('Nama :', nama, 'NIM :', NIM,'nilai :', nilai,'Nilai Baru :', nilaiBaru);
    }

    setNilai() {
        this.nilai = nilai;
    }
    setNilaiBaru(nilaiBaru) {
        this.nilaiBaru = nilaiBaru;
    }
    rataRata(){
        return this.nilai / 3;
    }
    rataRataNilaiBaru(){
        return (this.nilai + this.nilaiBaru) / 5
    }
}
const student1 = new Student('Aryo', 200378734, [80, 100, 85], [90,55]);
const student1RataRata = student1.rataRata();
const student1RataRataNilaiBaru = student1.rataRataNilaiBaru();
console.log('rata-rata nilai sebelumnya', student1RataRata);
console.log('rata-rata Nilai Baru', student1RataRataNilaiBaru);
 
if (student1RataRataNilaiBaru >= 80) {
    console.log('Nilai = A');
} else if (80 > student1RataRataNilaiBaru >= 70) {
    console.log('Nilai = B');
} else if (70 > student1RataRataNilaiBaru >= 65) {
    console.log('Nilai = C');
} else if (65 > student1RataRataNilaiBaru >= 60) {
    console.log('Nilai = D');
} else if (60 > student1RataRataNilaiBaru)
    console.log('Nilai = E');