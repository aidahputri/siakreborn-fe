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
import FormUbahProgramStudi from '../components/FormUbahProgramStudi'

import getDataBinding from '../services/getDataBinding'
const UbahProgramStudiPage = props => {
const [isLoading, setIsLoading] = useState({
	ubahProgramStudi: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [searchParams] = useSearchParams()
const id = searchParams.get('id')
const [dataBinding, setDataBinding] = useState()

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, ubahProgramStudi: true}))
		const { data: dataBindingResponse } = await getDataBinding({ id  })

	    setDataBinding(dataBindingResponse.data)


	    setIsLoading(prev => ({...prev, ubahProgramStudi: false}))
    }
    fetch()
  }, [])

	
	useEffect(() => {
		setTitle("Ubah ProgramStudi Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/programstudi/${id}`}>	<Button className="p-4" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  	
			  	
			  </Layouts.ViewContainerBackButtonLayout>
			</>
		}
	>
<Layouts.FormContainerLayout
		singularName={"Program"}
		isLoading={isLoading.ubahProgramStudi}
	>
		{dataBinding ? 
		(<>
		 <FormUbahProgramStudi
			{...{ 
				dataBinding
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default UbahProgramStudiPage

