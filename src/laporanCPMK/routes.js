/*
	Generated on 13/06/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.4.0
*/
import RequireAuth from 'commons/auth/RequireAuth'

import LaporanCPMKPage from './containers/LaporanCPMKPage'

const laporanCPMKRoutes = [
{ 
	path: "/cpmk/laporan",
	element: <RequireAuth permissionNeeded="ReadLaporanCPMK" ><LaporanCPMKPage/></RequireAuth>
}	

]

export default laporanCPMKRoutes
