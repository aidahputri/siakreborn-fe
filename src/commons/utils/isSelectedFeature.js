const isSelectedFeature = (item) =>
  selectedFeatures.some((x) => x.includes(item));

export default isSelectedFeature;

var selectedFeatures = Array.from(
  new Set([
    "RiwayatAkademis",

    "Capaian",
    "CPL",

    "PenilaianKelas",

    "Capaian",
    "SubCPMK",

    "ProgramStudi",

    "LaporanCapaian",
    "LaporanCPMK",

    "Kurikulum",

    "Semester",

    "Kelas",

    "MataKuliah",

    "LaporanCapaian",
    "LaporanCPL",

    "Capaian",
    "CPMK",

    "Home",
  ])
);
