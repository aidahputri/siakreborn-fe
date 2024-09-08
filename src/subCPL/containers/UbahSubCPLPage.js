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
import { useSearchParams } from 'react-router-dom';
import ModifiedFormUbahSubCPL from '../components/ModifiedFormUbahSubCPL'

import getSubCPLUbah from '../services/getSubCPLUbah'
import getCPL from '../services/getCPL'
const UbahSubCPLPage = props => {
const [isLoading, setIsLoading] = useState({
	ubahSubCPL: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [searchParams] = useSearchParams()
const id = searchParams.get('id')
const [subCPLUbah, setSubCPLUbah] = useState()
const [cPL, setCPL] = useState()
useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, ubahSubCPL: true}))
	    const { data: subCPLUbahResponse } = await getSubCPLUbah({ id })
	    const { data: cPLResponse } = await getCPL({ id })

	    setSubCPLUbah(subCPLUbahResponse.data)
	    setCPL(cPLResponse.data)


	    setIsLoading(prev => ({...prev, ubahSubCPL: false}))
    }
    fetch()
  }, [])

	
	useEffect(() => {
		setTitle("Ubah SubCPL Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/subcpl`}>	<Button className="p-4" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  	
			  	
			  </Layouts.ViewContainerBackButtonLayout>
			</>
		}
	>
<Layouts.FormContainerLayout
		singularName={"Sub"}
		isLoading={isLoading.ubahSubCPL}
	>
		{subCPLUbah && cPL ? 
		(<>
		 <ModifiedFormUbahSubCPL
			{...{ 
				subCPLUbah
, 				cPL
 }}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default UbahSubCPLPage

