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
import ProgramTable from '../components/ProgramTable'

import getProgramStudiDataList from '../services/getProgramStudiDataList'
const DaftarProgramStudiPage = props => {
const { checkPermission } = useAuth()

	const [isLoading, setIsLoading] = useState({
	tableProgramStudi: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [programStudiDataList, setProgramStudiDataList] = useState()

useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableProgramStudi: true}))
				const { data: programStudiDataList } = await getProgramStudiDataList()
				setProgramStudiDataList(programStudiDataList.data)
			} finally {
				setIsLoading(prev => ({...prev, tableProgramStudi: false}))
			}
		}
		fetchData()	
  	}, [])

	
	useEffect(() => {
		setTitle("Daftar Program Studi Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	{checkPermission("CreateProgramStudi") &&  (
			  	  <Link to={`/programstudi/tambah`}>	<Button className="p-2" variant="primary">
			  	  	  Tambah Program Studi
			  	  	</Button>
			  	  </Link>
			  	  
			  	)}
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table Program Studi"}
	singularName={"Program"}
	items={[programStudiDataList]}
	isLoading={isLoading.tableProgramStudi}
>
	<ProgramTable
		programStudiDataList={programStudiDataList}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DaftarProgramStudiPage

