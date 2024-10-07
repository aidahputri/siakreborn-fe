/*
	Generated on 13/06/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.4.0
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import DaftarSubCPMKPage from './containers/DaftarSubCPMKPage'
import DetailSubCPMKPage from './containers/DetailSubCPMKPage'
import TambahSubCPMKPage from './containers/TambahSubCPMKPage'
import UbahSubCPMKPage from './containers/UbahSubCPMKPage'

const subCPMKRoutes = [
	{ 
		path: "/subcpmk/tambah",
		element: <RequireAuth permissionNeeded="CreateSubCPMK" ><TambahSubCPMKPage/></RequireAuth>
	},
	{ 
		path: "/subcpmk",
		element: <RequireAuth permissionNeeded="ReadSubCPMK" ><DaftarSubCPMKPage/></RequireAuth>
	},
	{ 
		path: "/subcpmk/ubah",
		element: <RequireAuth permissionNeeded="UpdateSubCPMK" ><UbahSubCPMKPage/></RequireAuth>
	},
	{ 
		path: "/subcpmk/:id",
		element: <RequireAuth permissionNeeded="ReadSubCPMK" ><DetailSubCPMKPage /></RequireAuth>
	}
]

export default subCPMKRoutes
