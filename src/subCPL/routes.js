/*
	Generated on 13/06/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.4.0
*/
import RequireAuth from 'commons/auth/RequireAuth'

import TambahSubCPLPage from './containers/TambahSubCPLPage'
import DaftarSubCPLPage from './containers/DaftarSubCPLPage'
import UbahSubCPLPage from './containers/UbahSubCPLPage'

const subCPLRoutes = [
	{ 
		path: "/subcpl/tambah",
		element: <RequireAuth permissionNeeded="CreateSubCPL" ><TambahSubCPLPage/></RequireAuth>
	},
	{ 
		path: "/subcpl",
		element: <RequireAuth permissionNeeded="ReadSubCPL" ><DaftarSubCPLPage/></RequireAuth>
	},
	{ 
		path: "/subcpl/ubah",
		element: <RequireAuth permissionNeeded="UpdateSubCPL" ><UbahSubCPLPage/></RequireAuth>
	}
]

export default subCPLRoutes
