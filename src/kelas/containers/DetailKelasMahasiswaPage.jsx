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

import getMahasiswaDataList from '../services/getMahasiswaDataList'
const DetailKelasMahasiswaPage = props => {
const { checkPermission } = useAuth()

	const [isLoading, setIsLoading] = useState({
	tableDaftarMahasiswa: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [mahasiswaDataList, setMahasiswaDataList] = useState()
const { id } = useParams()
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableDaftarMahasiswa: true}))
				const { data: mahasiswaDataList } = await getMahasiswaDataList({kelasId:id})
				setMahasiswaDataList(mahasiswaDataList.data)
			} finally {
				setIsLoading(prev => ({...prev, tableDaftarMahasiswa: false}))
			}
		}
		fetchData()	
  	}, [])

	
	useEffect(() => {
		setTitle("Detail Kelas Mahasiswa Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/kelas/${id}`}>	<Button className="p-4" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  	
			  	
			  </Layouts.ViewContainerBackButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table Daftar Mahasiswa"}
	singularName={"Daftar"}
	items={[mahasiswaDataList]}
	isLoading={isLoading.tableDaftarMahasiswa}
>
	<DaftarTable
		mahasiswaDataList={mahasiswaDataList}
		kelasId={id}
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailKelasMahasiswaPage

