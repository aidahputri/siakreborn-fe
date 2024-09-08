/*
	Generated on 13/06/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.4.0
*/
import RequireAuth from 'commons/auth/RequireAuth'

import DaftarNilaiCPLPage from './containers/DaftarNilaiCPLPage'

const nilaiCPLRoutes = [
{ 
	path: "/nilaicpl",
	element: <RequireAuth permissionNeeded="ReadPenilaianCPL" ><DaftarNilaiCPLPage/></RequireAuth>
}	

]

export default nilaiCPLRoutes
