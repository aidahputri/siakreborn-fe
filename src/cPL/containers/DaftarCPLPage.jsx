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
import CPLTable from '../components/CPLTable'

import getCPLDataList from '../services/getCPLDataList'
import getKurikulumSelectionField from '../services/getKurikulumSelectionField'
const DaftarCPLPage = props => {
const { checkPermission } = useAuth()

	const [isLoading, setIsLoading] = useState({
	tableCPL: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [cPLDataList, setCPLDataList] = useState()
const [kurikulumSelectionField, setKurikulumSelectionField] = useState()

useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableCPL: true}))
				const { data: cPLDataList } = await getCPLDataList()
				const { data: kurikulumSelectionField } = await getKurikulumSelectionField()
				setCPLDataList(cPLDataList.data)
				setKurikulumSelectionField(kurikulumSelectionField.data)
			} finally {
				setIsLoading(prev => ({...prev, tableCPL: false}))
			}
		}
		fetchData()	
  	}, [])

	
	useEffect(() => {
		setTitle("Daftar CPL Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	{checkPermission("CreateCPL") &&  (
			  	  <Link to={`/cpl/tambah`}>	<Button className="p-2" variant="primary">
			  	  	  Tambah CPL
			  	  	</Button>
			  	  </Link>
			  	  
			  	)}
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table CPL"}
	singularName={"CPL"}
	items={[cPLDataList, kurikulumSelectionField]}
	isLoading={isLoading.tableCPL}
>
	<CPLTable
		cPLDataList={cPLDataList}
		kurikulumSelectionField={kurikulumSelectionField}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DaftarCPLPage

