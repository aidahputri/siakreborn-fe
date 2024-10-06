/*
	Generated on 13/06/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.4.0
*/
import RequireAuth from 'commons/auth/RequireAuth'

import DaftarKelasPage from './containers/DaftarKelasPage'
import TambahKelasPage from './containers/TambahKelasPage'
import UbahKelasPage from './containers/UbahKelasPage'
import DetailKelasPage from './containers/DetailKelasPage'
import DetailKelasMahasiswaPage from './containers/DetailKelasMahasiswaPage'
import DetailNilaiMahasiswaPage from './containers/DetailNilaiMahasiswaPage'
import TambahNilaiMahasiswa from './containers/TambahNilaiMahasiswa'

const kelasRoutes = [
{ 
	path: "/kelas",
	element: <RequireAuth permissionNeeded="ReadKelas" ><DaftarKelasPage/></RequireAuth>
}	
,
{ 
	path: "/kelas/tambah",
	element: <RequireAuth permissionNeeded="CreateKelas" ><TambahKelasPage/></RequireAuth>
}	
,
{ 
	path: "/kelas/ubah",
	element: <RequireAuth permissionNeeded="UpdateKelas" ><UbahKelasPage/></RequireAuth>
}	
,
{ 
	path: "/penilaian/tambah",
	element: <TambahNilaiMahasiswa />,
}	
,
{ 
	path: "/kelas/:id/mahasiswa/",
	element: <RequireAuth permissionNeeded="ReadKelasMahasiswa" ><DetailKelasMahasiswaPage/></RequireAuth>
}	
,
{ 
	path: "/kelas/:id/mahasiswa/:mahasiswaId/nilai",
	element: <RequireAuth permissionNeeded="ReadPenilaian" ><DetailNilaiMahasiswaPage/></RequireAuth>
}	
,
{ 
	path: "/kelas/:id",
	element: <RequireAuth permissionNeeded="ReadKelas" ><DetailKelasPage/></RequireAuth>
}	

]

export default kelasRoutes
