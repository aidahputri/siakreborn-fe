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
import MataTable from '../components/MataTable'

import getMataKuliahDataList from '../services/getMataKuliahDataList'
import getKurikulumSelectionField from '../services/getKurikulumSelectionField'
const DaftarMataKuliahPage = props => {
const { checkPermission } = useAuth()

	const [isLoading, setIsLoading] = useState({
	tableMataKuliah: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [mataKuliahDataList, setMataKuliahDataList] = useState()
const [kurikulumSelectionField, setKurikulumSelectionField] = useState()

useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableMataKuliah: true}))
				const { data: mataKuliahDataList } = await getMataKuliahDataList()
				const { data: kurikulumSelectionField } = await getKurikulumSelectionField()
				setMataKuliahDataList(mataKuliahDataList.data)
				setKurikulumSelectionField(kurikulumSelectionField.data)
			} finally {
				setIsLoading(prev => ({...prev, tableMataKuliah: false}))
			}
		}
		fetchData()	
  	}, [])

	
	useEffect(() => {
		setTitle("Daftar Mata Kuliah Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	{checkPermission("CreateMataKuliah") &&  (
			  	  <Link to={`/matakuliah/tambah`}>	<Button className="p-2" variant="primary">
			  	  	  Tambah Mata Kuliah
			  	  	</Button>
			  	  </Link>
			  	  
			  	)}
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table Mata Kuliah"}
	singularName={"Mata"}
	items={[mataKuliahDataList, kurikulumSelectionField]}
	isLoading={isLoading.tableMataKuliah}
>
	<MataTable
		mataKuliahDataList={mataKuliahDataList}
		kurikulumSelectionField={kurikulumSelectionField}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DaftarMataKuliahPage

