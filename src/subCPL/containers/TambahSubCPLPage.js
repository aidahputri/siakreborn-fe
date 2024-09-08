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
import ModifiedFormTambahSubCPL from '../components/ModifiedFormTambahSubCPL'

import getCPL from '../services/getCPL'
const TambahSubCPLPage = props => {
const [isLoading, setIsLoading] = useState({
	tambahSubCPL: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [cPL, setCPL] = useState()
useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, tambahSubCPL: true}))
	    const { data: cPLResponse } = await getCPL()

	    setCPL(cPLResponse.data)


	    setIsLoading(prev => ({...prev, tambahSubCPL: false}))
    }
    fetch()
  }, [])

	
	useEffect(() => {
		setTitle("Tambah Sub CPL Page")
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
		isLoading={isLoading.tambahSubCPL}
	>
		{cPL ? 
		(<>
		 <ModifiedFormTambahSubCPL
			{...{ 
				cPL
 }}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TambahSubCPLPage

