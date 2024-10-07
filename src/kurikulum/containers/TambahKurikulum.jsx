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
import { useSearchParams } from 'react-router-dom';
import FormTambahKurikulum from '../components/FormTambahKurikulum'

import getProgramStudi from '../services/getProgramStudi'
const TambahKurikulum = props => {
const [isLoading, setIsLoading] = useState({
	tambahKurikulum: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [programStudi, setProgramStudi] = useState()

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, tambahKurikulum: true}))
		const { data: programStudiResponse } = await getProgramStudi({  })

	    setProgramStudi(programStudiResponse.data)


	    setIsLoading(prev => ({...prev, tambahKurikulum: false}))
    }
    fetch()
  }, [])

	
	useEffect(() => {
		setTitle("Tambah Kurikulum")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/kurikulum`}>	<Button className="p-4" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  	
			  	
			  </Layouts.ViewContainerBackButtonLayout>
			</>
		}
	>
<Layouts.FormContainerLayout
		singularName={"Kurikulum"}
		isLoading={isLoading.tambahKurikulum}
	>
		{programStudi ? 
		(<>
		 <FormTambahKurikulum
			{...{ 
				programStudi
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TambahKurikulum

