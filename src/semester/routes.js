/*
	Generated on 13/06/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.4.0
*/
import RequireAuth from 'commons/auth/RequireAuth'

import DaftarSemesterPage from './containers/DaftarSemesterPage'
import TambahSemesterPage from './containers/TambahSemesterPage'
import UbahSemesterPage from './containers/UbahSemesterPage'

const semesterRoutes = [
{ 
	path: "/semester",
	element: <RequireAuth permissionNeeded="ReadSemester" ><DaftarSemesterPage/></RequireAuth>
}	
,
{ 
	path: "/semester/tambah",
	element: <RequireAuth permissionNeeded="CreateSemester" ><TambahSemesterPage/></RequireAuth>
}	
,
{ 
	path: "/semester/ubah",
	element: <RequireAuth permissionNeeded="UpdateSemester" ><UbahSemesterPage/></RequireAuth>
}	

]

export default semesterRoutes
