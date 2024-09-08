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
import FormUbahKurikulum from '../components/FormUbahKurikulum'

import getKurikulumUbah from '../services/getKurikulumUbah'
import getProgramStudi from '../services/getProgramStudi'
const UbahKurikulumPage = props => {
const [isLoading, setIsLoading] = useState({
	ubahKurikulum: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [searchParams] = useSearchParams()
const id = searchParams.get('id')
const [kurikulumUbah, setKurikulumUbah] = useState()
const [programStudi, setProgramStudi] = useState()
useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, ubahKurikulum: true}))
	    const { data: kurikulumUbahResponse } = await getKurikulumUbah({ id })
	    const { data: programStudiResponse } = await getProgramStudi({ id })

	    setKurikulumUbah(kurikulumUbahResponse.data)
	    setProgramStudi(programStudiResponse.data)


	    setIsLoading(prev => ({...prev, ubahKurikulum: false}))
    }
    fetch()
  }, [])

	
	useEffect(() => {
		setTitle("Ubah Kurikulum Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/kurikulum/${id}`}>	<Button className="p-4" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  	
			  	
			  </Layouts.ViewContainerBackButtonLayout>
			</>
		}
	>
<Layouts.FormContainerLayout
		singularName={"Kurikulum"}
		isLoading={isLoading.ubahKurikulum}
	>
		{kurikulumUbah && programStudi ? 
		(<>
		 <FormUbahKurikulum
			{...{ 
				kurikulumUbah
, 				programStudi
 }}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default UbahKurikulumPage

