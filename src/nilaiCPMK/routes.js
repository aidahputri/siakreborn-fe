/*
	Generated on 13/06/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.4.0
*/
import RequireAuth from 'commons/auth/RequireAuth'

import DaftarNilaiCPMKPage from './containers/DaftarNilaiCPMKPage'

const nilaiCPMKRoutes = [
{ 
	path: "/nilaicpmk",
	element: <RequireAuth permissionNeeded="ReadPenilaianCPMK" ><DaftarNilaiCPMKPage/></RequireAuth>
}	

]

export default nilaiCPMKRoutes
