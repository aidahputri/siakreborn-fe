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
import DetailMataKuliah from '../components/DetailMataKuliah'
import getMataKuliahDataDetail from '../services/getMataKuliahDataDetail'
import CPMKTable from '../components/CPMKTable'

import getCPMKDataList from '../services/getCPMKDataList'
const DetailMataKuliahPage = props => {
const { checkPermission } = useAuth()

	const [isLoading, setIsLoading] = useState({
	detailMataKuliah: false,
	tableCPMK: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [mataKuliahDataDetail, setMataKuliahDataDetail] = useState()
const { id } = useParams()
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, detailMataKuliah: true}))
			const { data: mataKuliahDataDetail } = await getMataKuliahDataDetail({ id })
			setMataKuliahDataDetail(mataKuliahDataDetail.data)
		} finally {
			setIsLoading(prev => ({...prev, detailMataKuliah: false}))
		}
	}
	 fetchData()
}, [])
const [cPMKDataList, setCPMKDataList] = useState()

useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableCPMK: true}))
				const { data: cPMKDataList } = await getCPMKDataList()
				setCPMKDataList(cPMKDataList.data)
			} finally {
				setIsLoading(prev => ({...prev, tableCPMK: false}))
			}
		}
		fetchData()	
  	}, [])

	
	useEffect(() => {
		setTitle("Detail Mata Kuliah Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/matakuliah`}>	<Button className="p-4 w-full" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  	
			  	
			  </Layouts.ViewContainerBackButtonLayout>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Detail Mata Kuliah"}
	singularName={"Mata"}
	items={{...mataKuliahDataDetail}}
	isLoading={isLoading.detailMataKuliah}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailMataKuliah {...{ data : { ...mataKuliahDataDetail }}} />
</Layouts.DetailContainerLayout>
<Layouts.ListContainerTableLayout
	title={"Table CPMK"}
	singularName={"CPMK"}
	items={[cPMKDataList]}
	isLoading={isLoading.tableCPMK}
>
	<CPMKTable
		cPMKDataList={cPMKDataList}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailMataKuliahPage

