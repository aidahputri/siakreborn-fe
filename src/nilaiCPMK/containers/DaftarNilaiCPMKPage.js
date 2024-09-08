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
import NilaiTable from '../components/NilaiTable'

import getNilaiCPMKDataList from '../services/getNilaiCPMKDataList'
const DaftarNilaiCPMKPage = props => {
const { checkPermission } = useAuth()

	const [isLoading, setIsLoading] = useState({
	tableNilaiCPMK: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [nilaiCPMKDataList, setNilaiCPMKDataList] = useState()
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableNilaiCPMK: true}))
				const { data: nilaiCPMKDataList } = await getNilaiCPMKDataList()
				setNilaiCPMKDataList(nilaiCPMKDataList.data)
			} finally {
				setIsLoading(prev => ({...prev, tableNilaiCPMK: false}))
			}
		}
		fetchData()	
  	}, [])

	
	useEffect(() => {
		setTitle("Daftar Nilai CPMK Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table Nilai CPMK"}
	singularName={"Nilai"}
	items={[nilaiCPMKDataList]}
	isLoading={isLoading.tableNilaiCPMK}
>
	<NilaiTable
		nilaiCPMKDataList={nilaiCPMKDataList}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DaftarNilaiCPMKPage

