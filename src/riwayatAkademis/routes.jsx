/*
	Generated on 13/06/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.4.0
*/
import RequireAuth from "@/commons/auth/RequireAuth";

import DaftarRiwayatAkademisPage from "./containers/DaftarRiwayatAkademisPage";
import { SelectionProvider } from "@/laporanCPMK/context/SelectionField";

const riwayatAkademisRoutes = [
  {
    path: "/daftar-akademis",
    element: (
      <RequireAuth permissionNeeded="ReadKelasMahasiswaMe">
        <SelectionProvider>
          <DaftarRiwayatAkademisPage />
        </SelectionProvider>
      </RequireAuth>
    ),
  },
];

export default riwayatAkademisRoutes;
