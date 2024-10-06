/*
	Generated on 13/06/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.4.0
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import DaftarKurikulumPage from './containers/DaftarKurikulumPage'
import TambahKurikulum from './containers/TambahKurikulum'
import UbahKurikulumPage from './containers/UbahKurikulumPage'
import DetailKurikulumPage from './containers/DetailKurikulumPage'

const kurikulumRoutes = [
{ 
	path: "/kurikulum/tambah",
	element: <RequireAuth permissionNeeded="CreateKurikulum" ><TambahKurikulum/></RequireAuth>
}	
,
{ 
	path: "/kurikulum/ubah",
	element: <RequireAuth permissionNeeded="UpdateKurikulum" ><UbahKurikulumPage/></RequireAuth>
}	
,
{ 
	path: "/kurikulum",
	element: <RequireAuth permissionNeeded="ReadKurikulum" ><DaftarKurikulumPage/></RequireAuth>
}	
,
{ 
	path: "/kurikulum/:id",
	element: <RequireAuth permissionNeeded="ReadKurikulum" ><DetailKurikulumPage/></RequireAuth>
}	

]

export default kurikulumRoutes
