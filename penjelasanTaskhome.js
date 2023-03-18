class student {
    nama = '';
    nim = '';
    daftarnilai = []; 
    
    constructor(nama,nim) {
        this.nama = nama;
        this.nim = nim;
    }

    addNilai(nilai) {
        this.daftarNilai.push(nilai);

    }

    getRata2Nilai() {
        let totalNilai = 0;
        for (let i = 0; i < this.daftarnilai.length; i++) {
            const nilai = this.daftarnilai[i];
            totalNilai = totalNilai + nilai;
            
        }
        return totalNilai / this.daftarnilai.length
    }

    getPredikatRata2Nilai(){
        const nilaiAkhir = this.getRata2Nilai()
        let predikat = 'E'
        if (nilaiAkhir > 90){
            predikat = 'A'
        } else if (nilaiAkhir > 85){
            predikat = 'B+'
        } else if (nilaiAkhir > 80){
            predikat = 'B'
        } else if (nilaiAkhir > 75){
            predikat = 'C+'
        } else if (nilaiAkhir > 70){
            predikat = 'C'
        } else if (nilaiAkhir > 65){
            predikat = 'C-'
        } else {
            predikat = 'E'
        }
        return predikat
    }

    getReport(){
        console.log('nama Mahasiswa', this.nama);
        console.log('NIM Mahasiswa', this.nim);
        console.log('nilai akhir Mahasiswa', this.nama);
        console.log('Predikat', this.nama);
    }
}
