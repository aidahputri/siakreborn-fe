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
import SubTable from '../components/SubTable'

import getSubCPLDataList from '../services/getSubCPLDataList'
const DaftarSubCPLPage = props => {
const { checkPermission } = useAuth()

	const [isLoading, setIsLoading] = useState({
	tableSubCPL: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [subCPLDataList, setSubCPLDataList] = useState()

useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableSubCPL: true}))
				const { data: subCPLDataList } = await getSubCPLDataList()
				setSubCPLDataList(subCPLDataList.data)
			} finally {
				setIsLoading(prev => ({...prev, tableSubCPL: false}))
			}
		}
		fetchData()	
  	}, [])

	
	useEffect(() => {
		setTitle("Daftar Sub CPL Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	{checkPermission("CreateSubCPL") &&  (
			  	  <Link to={`/subcpl/tambah`}>	<Button className="p-2" variant="primary">
			  	  	  Tambah Sub CPL
			  	  	</Button>
			  	  </Link>
			  	  
			  	)}
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table Sub CPL"}
	singularName={"Sub"}
	items={[subCPLDataList]}
	isLoading={isLoading.tableSubCPL}
>
	<SubTable
		subCPLDataList={subCPLDataList}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DaftarSubCPLPage

