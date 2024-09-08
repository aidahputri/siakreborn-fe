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

import getNilaiCPLDataList from '../services/getNilaiCPLDataList'
const DaftarNilaiCPLPage = props => {
const { checkPermission } = useAuth()

	const [isLoading, setIsLoading] = useState({
	tableNilaiCPL: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [nilaiCPLDataList, setNilaiCPLDataList] = useState()
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableNilaiCPL: true}))
				const { data: nilaiCPLDataList } = await getNilaiCPLDataList()
				setNilaiCPLDataList(nilaiCPLDataList.data)
			} finally {
				setIsLoading(prev => ({...prev, tableNilaiCPL: false}))
			}
		}
		fetchData()	
  	}, [])

	
	useEffect(() => {
		setTitle("Daftar Nilai CPL Page")
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
	title={"Table Nilai CPL"}
	singularName={"Nilai"}
	items={[nilaiCPLDataList]}
	isLoading={isLoading.tableNilaiCPL}
>
	<NilaiTable
		nilaiCPLDataList={nilaiCPLDataList}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DaftarNilaiCPLPage

