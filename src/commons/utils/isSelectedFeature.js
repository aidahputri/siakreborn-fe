const isSelectedFeature = (item) =>
  selectedFeatures.some((x) => x.includes(item));

export default isSelectedFeature;

var selectedFeatures = Array.from(
  new Set([
    "MataKuliah",

    "ProgramStudi",

    "Kurikulum",

    "CPL",

    "CPMK",

    "Penilaian",

    "CPL",
    "SubCPL",

    "CPMK",
    "SubCPMK",

    "NilaiCPL",

    "NilaiCPMK",

    "Semester",

    "Kelas",

    "LaporanCPMK",

    "LaporanCPL",

    "Home",
  ])
);
