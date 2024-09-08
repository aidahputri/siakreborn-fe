/*
	Generated on 13/06/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.4.0
*/
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "commons/components"
import * as Layouts from 'commons/layouts';
import { Link, useParams } from 'react-router-dom'
import { HeaderContext } from "commons/components"
import isSelectedFeature from 'commons/utils/isSelectedFeature'
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'commons/auth';
import DaftarTable from '../components/DaftarTable'

import getPenilaianDataList from '../services/getPenilaianDataList'
import getMahasiswaSelectionField from '../services/getMahasiswaSelectionField'
import getKelasSelectionField from '../services/getKelasSelectionField'
const DaftarPenilaianPage = props => {
const { checkPermission } = useAuth()

	const [isLoading, setIsLoading] = useState({
	tableDaftarNilai: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [penilaianDataList, setPenilaianDataList] = useState()
const [mahasiswaSelectionField, setMahasiswaSelectionField] = useState()
const [kelasSelectionField, setKelasSelectionField] = useState()



useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableDaftarNilai: true}))
				const { data: penilaianDataList } = await getPenilaianDataList()
				const { data: mahasiswaSelectionField } = await getMahasiswaSelectionField()
				const { data: kelasSelectionField } = await getKelasSelectionField()
				setPenilaianDataList(penilaianDataList.data)
				setMahasiswaSelectionField(mahasiswaSelectionField.data)
				setKelasSelectionField(kelasSelectionField.data)
			} finally {
				setIsLoading(prev => ({...prev, tableDaftarNilai: false}))
			}
		}
		fetchData()	
  	}, [])

	
	useEffect(() => {
		setTitle("Daftar Penilaian Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	{checkPermission("CreatePenilaian") &&  (
			  	  <Link to={`/penilaian/tambah`}>	<Button className="p-2" variant="primary">
			  	  	  Tambah/Edit Nilai
			  	  	</Button>
			  	  </Link>
			  	  
			  	)}
			  	
			  	{checkPermission("CreateKomponenPenilaian") &&  (
			  	  <Link to={`/penilaian/tambah-komponen`}>	<Button className="p-2" variant="primary">
			  	  	  Tambah Komponen Penilaian
			  	  	</Button>
			  	  </Link>
			  	  
			  	)}
			  	
			  	{checkPermission("CreateBobotKomponenPenilaian") &&  (
			  	  <Link to={`/penilaian/tambah-bobot`}>	<Button className="p-2" variant="primary">
			  	  	  Tambah Bobot Komponen Penilaian
			  	  	</Button>
			  	  </Link>
			  	  
			  	)}
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table Daftar Nilai"}
	singularName={"Daftar"}
	items={[penilaianDataList, mahasiswaSelectionField, kelasSelectionField]}
	isLoading={isLoading.tableDaftarNilai}
>
	<DaftarTable
		penilaianDataList={penilaianDataList}
		mahasiswaSelectionField={mahasiswaSelectionField}
		kelasSelectionField={kelasSelectionField}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DaftarPenilaianPage

