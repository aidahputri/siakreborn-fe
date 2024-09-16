/*
	Generated on 13/06/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.4.0
*/
import RequireAuth from 'commons/auth/RequireAuth'

import LaporanCPLPage from './containers/LaporanCPLPage'

const laporanCPLRoutes = [
{ 
	path: "/cpl/laporan",
	element: <RequireAuth permissionNeeded="ReadLaporanCPL" ><LaporanCPLPage/></RequireAuth>
}	

]

export default laporanCPLRoutes
