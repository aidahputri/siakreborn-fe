/*
	Generated on 13/06/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.4.0
*/
import RequireAuth from 'commons/auth/RequireAuth'

import DaftarPenilaianPage from './containers/DaftarPenilaianPage'
import TambahPenilaianPage from './containers/TambahPenilaianPage'
import TambahKomponenPenilaianPage from './containers/TambahKomponenPenilaianPage'
import TambahBobotKomponenPenilaianPage from './containers/TambahBobotKomponenPenilaianPage'

const penilaianRoutes = [
{ 
	path: "/penilaian",
	element: <RequireAuth permissionNeeded="ReadPenilaian" ><DaftarPenilaianPage/></RequireAuth>
}	
,
// { 
// 	path: "/penilaian/tambah",
// 	element: <RequireAuth permissionNeeded="CreatePenilaian" ><TambahPenilaianPage/></RequireAuth>
// }	
// ,
{ 
	path: "/penilaian/tambah-komponen",
	element: <RequireAuth permissionNeeded="CreateKomponenPenilaian" ><TambahKomponenPenilaianPage/></RequireAuth>
}	
,
{ 
	path: "/penilaian/tambah-bobot",
	element: <RequireAuth permissionNeeded="CreateBobotKomponenPenilaian" ><TambahBobotKomponenPenilaianPage/></RequireAuth>
}	

]

export default penilaianRoutes
