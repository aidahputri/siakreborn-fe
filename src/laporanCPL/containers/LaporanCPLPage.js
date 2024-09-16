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
import LaporanTable from '../components/LaporanTable'

import getLaporanCPLDataList from '../services/getLaporanCPLDataList'
const LaporanCPLPage = props => {
const { checkPermission } = useAuth()

	const [isLoading, setIsLoading] = useState({
	tableLaporanCPL: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [laporanCPLDataList, setLaporanCPLDataList] = useState()
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableLaporanCPL: true}))
				const { data: laporanCPLDataList } = await getLaporanCPLDataList()
				setLaporanCPLDataList(laporanCPLDataList.data)
			} finally {
				setIsLoading(prev => ({...prev, tableLaporanCPL: false}))
			}
		}
		fetchData()	
  	}, [])

	
	useEffect(() => {
		setTitle("Laporan CPL Page")
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
	title={"Table Laporan CPL"}
	singularName={"Laporan"}
	items={[laporanCPLDataList]}
	isLoading={isLoading.tableLaporanCPL}
>
	<LaporanTable
		laporanCPLDataList={laporanCPLDataList}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default LaporanCPLPage

