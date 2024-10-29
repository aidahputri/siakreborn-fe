import { useRoutes } from "react-router-dom";

import { commonRoutes, commonMobileRoutes } from "@/commons/routes";
import userRoutes from "@/user/routes";
import roleRoutes from "@/role/routes";
import staticPageRoutes from "@/staticPage/routes";
import homeRoutes from "@/home/routes";
import kurikulumRoutes from "@/kurikulum/routes";
import programStudiRoutes from "@/programStudi/routes";
import kelasRoutes from "@/kelas/routes";
import lihatIRSRoutes from "@/lihatIRS/routes";
import semesterRoutes from "@/semester/routes";
import isiUbahIRSRoutes from "@/isiUbahIRS/routes";
import riwayatAkademisRoutes from "@/riwayatAkademis/routes";
import cPMKRoutes from "@/cPMK/routes";
import subCPMKRoutes from "@/subCPMK/routes";
import laporanCPMKRoutes from "@/laporanCPMK/routes";
import cPLRoutes from "@/cPL/routes";
import laporanCPLRoutes from "@/laporanCPL/routes";
import mataKuliahRoutes from "@/mataKuliah/routes";
import penilaianKelasRoutes from "@/penilaianKelas/routes";

const GlobalRoutes = () => {
  const router = useRoutes([
    ...commonRoutes,
    ...staticPageRoutes,
    ...userRoutes,
    ...roleRoutes,
    ...homeRoutes,
    ...kurikulumRoutes,
    ...programStudiRoutes,
    ...kelasRoutes,
    ...lihatIRSRoutes,
    ...semesterRoutes,
    ...isiUbahIRSRoutes,
    ...riwayatAkademisRoutes,
    ...cPMKRoutes,
    ...subCPMKRoutes,
    ...laporanCPMKRoutes,
    ...cPLRoutes,
    ...laporanCPLRoutes,
    ...penilaianKelasRoutes,
    ...mataKuliahRoutes,
  ]);
  return router;
};

const MobileRoutes = () => {
  const router = useRoutes([...commonMobileRoutes]);
  return router;
};

export { GlobalRoutes, MobileRoutes };
