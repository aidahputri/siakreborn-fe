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
import FormUbahCPMK from '../components/FormUbahCPMK'

import getCPMKUbah from '../services/getCPMKUbah'
import getCPL from '../services/getCPL'
import getMataKuliah from '../services/getMataKuliah'
const UbahCPMKPage = props => {
const [isLoading, setIsLoading] = useState({
	ubahCPMK: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [searchParams] = useSearchParams()
const id = searchParams.get('id')
const [cPMKUbah, setCPMKUbah] = useState()
const [cPL, setCPL] = useState()
const [mataKuliah, setMataKuliah] = useState()
useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, ubahCPMK: true}))
	    const { data: cPMKUbahResponse } = await getCPMKUbah({ id })
	    const { data: cPLResponse } = await getCPL({ id })
	    const { data: mataKuliahResponse } = await getMataKuliah({ id })

	    setCPMKUbah(cPMKUbahResponse.data)
	    setCPL(cPLResponse.data)
	    setMataKuliah(mataKuliahResponse.data)


	    setIsLoading(prev => ({...prev, ubahCPMK: false}))
    }
    fetch()
  }, [])

	
	useEffect(() => {
		setTitle("Ubah CPMK Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/cpmk/${id}`}>	<Button className="p-4" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  	
			  	
			  </Layouts.ViewContainerBackButtonLayout>
			</>
		}
	>
<Layouts.FormContainerLayout
		singularName={"CPMK"}
		isLoading={isLoading.ubahCPMK}
	>
		{cPMKUbah && cPL && mataKuliah ? 
		(<>
		 <FormUbahCPMK
			{...{ 
				cPMKUbah
, 				cPL
, 				mataKuliah
 }}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default UbahCPMKPage

