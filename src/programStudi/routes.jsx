/*
	Generated on 13/06/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.4.0
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import DaftarProgramStudiPage from './containers/DaftarProgramStudiPage'
import TambahProgramStudiPage from './containers/TambahProgramStudiPage'
import DetailProgramStudiPage from './containers/DetailProgramStudiPage'
import UbahProgramStudiPage from './containers/UbahProgramStudiPage'

const programStudiRoutes = [
{ 
	path: "/programstudi/tambah",
	element: <RequireAuth permissionNeeded="CreateProgramStudi" ><TambahProgramStudiPage/></RequireAuth>
}	
,
{ 
	path: "/programstudi/ubah",
	element: <RequireAuth permissionNeeded="UpdateProgramStudi" ><UbahProgramStudiPage/></RequireAuth>
}	
,
{ 
	path: "/programstudi",
	element: <RequireAuth permissionNeeded="ReadProgramStudi" ><DaftarProgramStudiPage/></RequireAuth>
}	
,
{ 
	path: "/programstudi/:id",
	element: <RequireAuth permissionNeeded="ReadProgramStudi" ><DetailProgramStudiPage/></RequireAuth>
}	

]

export default programStudiRoutes
