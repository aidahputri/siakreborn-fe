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
import DetailKelas from '../components/DetailKelas'
import getKelasDataDetail from '../services/getKelasDataDetail'
import DosenTable from '../components/DosenTable'

import getDosenDataList from '../services/getDosenDataList'
import KomponenTable from '../components/KomponenTable'

import getKomponenPenilaianDataList from '../services/getKomponenPenilaianDataList'
const DetailKelasPage = props => {
const { checkPermission } = useAuth()

	const [isLoading, setIsLoading] = useState({
	detailKelas: false,
	tableDosen: false,
	tableKomponenPenilaian: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [kelasDataDetail, setKelasDataDetail] = useState()
const { id } = useParams()
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, detailKelas: true}))
			const { data: kelasDataDetail } = await getKelasDataDetail({ id })
			setKelasDataDetail(kelasDataDetail.data)
		} finally {
			setIsLoading(prev => ({...prev, detailKelas: false}))
		}
	}
	 fetchData()
}, [])
const [dosenDataList, setDosenDataList] = useState()


useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableDosen: true}))
				const { data: dosenDataList } = await getDosenDataList({kelasId:id})
				setDosenDataList(dosenDataList.data)
			} finally {
				setIsLoading(prev => ({...prev, tableDosen: false}))
			}
		}
		fetchData()	
  	}, [])
const [komponenPenilaianDataList, setKomponenPenilaianDataList] = useState()


useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableKomponenPenilaian: true}))
				const { data: komponenPenilaianDataList } = await getKomponenPenilaianDataList({kelasId:id})
				setKomponenPenilaianDataList(komponenPenilaianDataList.data)
			} finally {
				setIsLoading(prev => ({...prev, tableKomponenPenilaian: false}))
			}
		}
		fetchData()	
  	}, [])

	
	useEffect(() => {
		setTitle("Detail Kelas Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/kelas`}>	<Button className="p-4 w-full" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  	
			  	
			  </Layouts.ViewContainerBackButtonLayout>
			  	
			  <Layouts.ViewContainerButtonLayout>
			  	{checkPermission("ReadKelasMahasiswa") &&  (
			  	  <Link to={`/kelas/${id}/mahasiswa`}>	<Button className="p-2 w-full" variant="primary">
			  	  	  Lihat Daftar Mahasiswa
			  	  	</Button>
			  	  </Link>
			  	  
			  	)}
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Detail Kelas"}
	singularName={"Kelas"}
	items={{...kelasDataDetail}}
	isLoading={isLoading.detailKelas}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailKelas {...{ data : { ...kelasDataDetail }}} />
</Layouts.DetailContainerLayout>
<Layouts.ListContainerTableLayout
	title={"Table Dosen"}
	singularName={"Dosen"}
	items={[dosenDataList]}
	isLoading={isLoading.tableDosen}
>
	<DosenTable
		dosenDataList={dosenDataList}
		
	/>
</Layouts.ListContainerTableLayout>
<Layouts.ListContainerTableLayout
	title={"Table Komponen Penilaian"}
	singularName={"Komponen"}
	items={[komponenPenilaianDataList]}
	isLoading={isLoading.tableKomponenPenilaian}
>
	<KomponenTable
		komponenPenilaianDataList={komponenPenilaianDataList}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailKelasPage

