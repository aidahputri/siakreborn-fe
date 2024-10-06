/*
	Generated on 13/06/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.4.0
*/
import RequireAuth from 'commons/auth/RequireAuth'

import TambahSubCPMKPage from './containers/TambahSubCPMKPage'
import DaftarSubCPMKPage from './containers/DaftarSubCPMKPage'
import UbahSubCPMKPage from './containers/UbahSubCPMKPage'
import DetailCPMKPage from './containers/DetailCPMKPage'

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
		path: "",
		element: <DetailCPMKPage />,
	}
]

export default subCPMKRoutes
