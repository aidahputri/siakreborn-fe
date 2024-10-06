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
import CPMKTable from '../components/CPMKTable'

import getCPMKDataList from '../services/getCPMKDataList'
import getCPLSelectionField from '../services/getCPLSelectionField'
import getMataKuliahSelectionField from '../services/getMataKuliahSelectionField'
const DaftarCPMKPage = props => {
const { checkPermission } = useAuth()

	const [isLoading, setIsLoading] = useState({
	tableCPMK: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [cPMKDataList, setCPMKDataList] = useState()
const [cPLSelectionField, setCPLSelectionField] = useState()
const [mataKuliahSelectionField, setMataKuliahSelectionField] = useState()

useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableCPMK: true}))
				const { data: cPMKDataList } = await getCPMKDataList()
				const { data: cPLSelectionField } = await getCPLSelectionField()
				const { data: mataKuliahSelectionField } = await getMataKuliahSelectionField()
				setCPMKDataList(cPMKDataList.data)
				setCPLSelectionField(cPLSelectionField.data)
				setMataKuliahSelectionField(mataKuliahSelectionField.data)
			} finally {
				setIsLoading(prev => ({...prev, tableCPMK: false}))
			}
		}
		fetchData()	
  	}, [])

	
	useEffect(() => {
		setTitle("Daftar CPMK Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	{checkPermission("CreateCPMK") &&  (
			  	  <Link to={`/cpmk/tambah`}>	<Button className="p-2" variant="primary">
			  	  	  Tambah CPMK
			  	  	</Button>
			  	  </Link>
			  	  
			  	)}
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table CPMK"}
	singularName={"CPMK"}
	items={[cPMKDataList, cPLSelectionField, mataKuliahSelectionField]}
	isLoading={isLoading.tableCPMK}
>
	<CPMKTable
		cPMKDataList={cPMKDataList}
		cPLSelectionField={cPLSelectionField}
		mataKuliahSelectionField={mataKuliahSelectionField}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DaftarCPMKPage

