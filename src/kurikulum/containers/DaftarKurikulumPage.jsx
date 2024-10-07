/*
	Generated on 13/06/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.4.0
*/
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link, useParams } from 'react-router-dom'
import { HeaderContext } from "@/commons/components"
import isSelectedFeature from '@/commons/utils/isSelectedFeature'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/commons/auth';
import KurikulumTable from '../components/KurikulumTable'

import getKurikulumDataList from '../services/getKurikulumDataList'
const DaftarKurikulumPage = props => {
const { checkPermission } = useAuth()

	const [isLoading, setIsLoading] = useState({
	tableKurikulum: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [kurikulumDataList, setKurikulumDataList] = useState()

useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableKurikulum: true}))
				const { data: kurikulumDataList } = await getKurikulumDataList({  })
				setKurikulumDataList(kurikulumDataList.data)
			} finally {
				setIsLoading(prev => ({...prev, tableKurikulum: false}))
			}
		}
		fetchData()	
  	}, [])

	
	useEffect(() => {
		setTitle("Daftar Kurikulum Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	{checkPermission("CreateKurikulum") &&  (
			  	  <Link to={`/kurikulum/tambah`}>	<Button className="p-2" variant="primary">
			  	  	  Tambah Kurikulum
			  	  	</Button>
			  	  </Link>
			  	  
			  	)}
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table Kurikulum"}
	singularName={"Kurikulum"}
	items={[kurikulumDataList]}
	isLoading={isLoading.tableKurikulum}
>
	<KurikulumTable
		kurikulumDataList={kurikulumDataList}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DaftarKurikulumPage

