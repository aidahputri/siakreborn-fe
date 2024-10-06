const isSelectedFeature = (item) => selectedFeatures.some(x => x.includes(item))

export default isSelectedFeature

var selectedFeatures = Array.from(new Set ([


"ProgramStudi",




"LaporanCapaian",
"LaporanCPL",




"Semester",




"Kurikulum",




"Penilaian",




"MataKuliah",




"Kelas",




"RiwayatAkademis",




"Capaian",
"CPMK",




"Capaian",
"CPL",




"LaporanCapaian",
"LaporanCPMK",




"Capaian",
"SubCPMK",




"Home",
]))