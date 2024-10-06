const menus = [];
const addMenu = (menu) => {
  menus.push(menu);
};

const addSubMenu = (label, subMenu, menu = menus) => {
  for (const item of menu) {
    if (item.label === label) {
      item.subMenus.push(subMenu);
      return;
    }
    if (item.subMenus) {
      addSubMenu(label, subMenu, item.subMenus);
    }
  }
};

export const settingsMenu = [
  {
    route: "#",
    label: "Pengaturan",
    permission: "settings.view",
    subMenus: [
      {
        route: "/settings/appearance",
        label: "Pengaturan Tampilan",
        permission: "administrator",
      },
      {
        route: "/settings/role",
        label: "Pengaturan Role",
        permission: "administrator",
      },
      {
        route: "/settings/user",
        label: "Pengaturan User",
        permission: "administrator",
      },
    ],
  },
];

export default menus;

// Add menus with permission attributes
addMenu({
  route: "/matakuliah",
  label: "Mata Kuliah",
  permission: "ReadMataKuliah",
  subMenus: [],
});

addMenu({
  route: "/programstudi",
  label: "Program Studi",
  permission: "ReadProgramStudi",
  subMenus: [],
});

addMenu({
  route: "/kurikulum",
  label: "Kurikulum",
  permission: "ReadKurikulum",
  subMenus: [],
});

addMenu({
  route: "#",
  label: "CPL",
  permission: "ReadCPL",
  subMenus: [],
});

addSubMenu("CPL", {
  route: "/cpl",
  label: "CPL",
  permission: "ReadCPL",
});

addSubMenu("CPL", {
  route: "/cpl/laporan",
  label: "Laporan CPL",
  permission: "ReadLaporanCPL",
});

addMenu({
  route: "#",
  label: "CPMK",
  permission: "ReadCPMK",
  subMenus: [],
});

addSubMenu("CPMK", {
  route: "/cpmk",
  label: "CPMK",
  permission: "ReadCPMK",
});

addSubMenu("CPMK", {
  route: "/subcpmk",
  label: "Sub-CPMK",
  permission: "ReadSubCPMK",
});

addSubMenu("CPMK", {
  route: "/cpmk/laporan",
  label: "Laporan CPMK",
  permission: "ReadLaporanCPMK",
});

addMenu({
  route: "/semester",
  label: "Semester",
  permission: "ReadSemester",
  subMenus: [],
});

addMenu({
  route: "/kelas",
  label: "Kelas",
  permission: "ReadKelas",
  subMenus: [],
});
