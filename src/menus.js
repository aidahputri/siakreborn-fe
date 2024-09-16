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
    subMenus: [
      {
        route: "/settings/appearance",
        label: "Pengaturan Tampilan",
      },
      {
        route: "/settings/role",
        label: "Pengaturan Role",
      },
      {
        route: "/settings/user",
        label: "Pengaturan User",
      },
    ],
  },
];

export default menus;
addMenu({
  route: "/matakuliah",
  label: "Mata Kuliah",
  subMenus: [],
});

addMenu({
  route: "/programstudi",
  label: "Program Studi",
  subMenus: [],
});

addMenu({
  route: "/kurikulum",
  label: "Kurikulum",
  subMenus: [],
});

addMenu({
  route: "#",
  label: "CPL",
  subMenus: [],
});

addSubMenu("CPL", {
  route: "/cpl",
  label: "CPL",
});

addSubMenu("CPL", {
  route: "/subcpl",
  label: "Sub-CPL",
});

addSubMenu("CPL", {
  route: "/nilaicpl",
  label: "Nilai CPL",
});

addSubMenu("CPL", {
  route: "/cpl/laporan",
  label: "Laporan CPL",
});

addMenu({
  route: "#",
  label: "CPMK",
  subMenus: [],
});

addSubMenu("CPMK", {
  route: "/cpmk",
  label: "CPMK",
});

addSubMenu("CPMK", {
  route: "/subcpmk",
  label: "Sub-CPMK",
});

addSubMenu("CPMK", {
  route: "/nilaicpmk",
  label: "Nilai CPMK",
});

addSubMenu("CPMK", {
  route: "/cpmk/laporan",
  label: "Laporan CPMK",
});

addMenu({
  route: "/penilaian",
  label: "Penilaian",
  subMenus: [],
});

addMenu({
  route: "/semester",
  label: "Semester",
  subMenus: [],
});

addMenu({
  route: "/kelas",
  label: "Kelas",
  subMenus: [],
});
