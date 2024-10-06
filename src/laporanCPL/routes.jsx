/*
	Generated on 13/06/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.4.0
*/
import RequireAuth from "commons/auth/RequireAuth";

import LaporanCPLPage from "./containers/LaporanCPLPage";
import { SelectionProvider } from "laporanCPMK/context/SelectionField";

const laporanCPLRoutes = [
  {
    path: "/cpl/laporan",
    element: (
      <RequireAuth permissionNeeded="ReadLaporanCPL">
        <SelectionProvider>
          <LaporanCPLPage />
        </SelectionProvider>
      </RequireAuth>
    ),
  },
];

export default laporanCPLRoutes;
