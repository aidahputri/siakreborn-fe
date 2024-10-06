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
import ModifiedFormUbahCPL from '../components/ModifiedFormUbahCPL'

import getCPLUbah from '../services/getCPLUbah'
import getKurikulum from '../services/getKurikulum'
const UbahCPLPage = props => {
const [isLoading, setIsLoading] = useState({
	ubahCPL: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [searchParams] = useSearchParams()
const id = searchParams.get('id')
const [cPLUbah, setCPLUbah] = useState()
const [kurikulum, setKurikulum] = useState()

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, ubahCPL: true}))
		const { data: cPLUbahResponse } = await getCPLUbah({ id  })
		const { data: kurikulumResponse } = await getKurikulum({ id  })

	    setCPLUbah(cPLUbahResponse.data)
	    setKurikulum(kurikulumResponse.data)


	    setIsLoading(prev => ({...prev, ubahCPL: false}))
    }
    fetch()
  }, [])

	
	useEffect(() => {
		setTitle("Ubah CPL Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/cpl/${id}`}>	<Button className="p-4" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  	
			  	
			  </Layouts.ViewContainerBackButtonLayout>
			</>
		}
	>
<Layouts.FormContainerLayout
		singularName={"CPL"}
		isLoading={isLoading.ubahCPL}
	>
		{cPLUbah && kurikulum ? 
		(<>
		 <ModifiedFormUbahCPL
			{...{ 
				cPLUbah
, 				kurikulum
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default UbahCPLPage

