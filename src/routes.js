import { useRoutes } from "react-router-dom";

import { commonRoutes, commonMobileRoutes } from "commons/routes.js";
import userRoutes from "user/routes";
import roleRoutes from "role/routes";
import staticPageRoutes from "staticPage/routes";
import homeRoutes from "home/routes";
import mataKuliahRoutes from "mataKuliah/routes";
import programStudiRoutes from "programStudi/routes";
import kurikulumRoutes from "kurikulum/routes";
import cPLRoutes from "cPL/routes";
import laporanCPLRoutes from "laporanCPL/routes";
import cPMKRoutes from "cPMK/routes";
import subCPMKRoutes from "subCPMK/routes";
import laporanCPMKRoutes from "laporanCPMK/routes";
import semesterRoutes from "semester/routes";
import kelasRoutes from "kelas/routes";

const GlobalRoutes = () => {
  const router = useRoutes([
    ...commonRoutes,
    ...staticPageRoutes,
    ...userRoutes,
    ...roleRoutes,
    ...homeRoutes,
    ...mataKuliahRoutes,
    ...programStudiRoutes,
    ...kurikulumRoutes,
    ...cPLRoutes,
    ...laporanCPLRoutes,
    ...laporanCPMKRoutes,
    ...cPMKRoutes,
    ...subCPMKRoutes,
    ...semesterRoutes,
    ...kelasRoutes,
  ]);
  return router;
};

const MobileRoutes = () => {
  const router = useRoutes([...commonMobileRoutes]);
  return router;
};

export { GlobalRoutes, MobileRoutes };
