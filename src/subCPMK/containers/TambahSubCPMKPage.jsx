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
import ModifiedFormTambahSubCPMK from '../components/ModifiedFormTambahSubCPMK'

import getCPMK from '../services/getCPMK'
const TambahSubCPMKPage = props => {
const [isLoading, setIsLoading] = useState({
	tambahSubCPMK: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [cPMK, setCPMK] = useState()

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, tambahSubCPMK: true}))
		const { data: cPMKResponse } = await getCPMK({  })

	    setCPMK(cPMKResponse.data)


	    setIsLoading(prev => ({...prev, tambahSubCPMK: false}))
    }
    fetch()
  }, [])

	
	useEffect(() => {
		setTitle("Tambah SubCPMK Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/subcpmk`}>	<Button className="p-4" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  	
			  	
			  </Layouts.ViewContainerBackButtonLayout>
			</>
		}
	>
<Layouts.FormContainerLayout
		singularName={"SubCPMK"}
		isLoading={isLoading.tambahSubCPMK}
	>
		{cPMK ? 
		(<>
		 <ModifiedFormTambahSubCPMK
			{...{ 
				cPMK
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TambahSubCPMKPage

