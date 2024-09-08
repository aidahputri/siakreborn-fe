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
import FormTambahBobotKomponenPenilaian from '../components/FormTambahBobotKomponenPenilaian'

import getKomponenPenilaian from '../services/getKomponenPenilaian'
import getCPMK from '../services/getCPMK'
const TambahBobotKomponenPenilaianPage = props => {
const [isLoading, setIsLoading] = useState({
	tambahBobotKomponenPenilaian: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [komponenPenilaian, setKomponenPenilaian] = useState()
const [cPMK, setCPMK] = useState()
useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, tambahBobotKomponenPenilaian: true}))
	    const { data: komponenPenilaianResponse } = await getKomponenPenilaian()
	    const { data: cPMKResponse } = await getCPMK()

	    setKomponenPenilaian(komponenPenilaianResponse.data)
	    setCPMK(cPMKResponse.data)


	    setIsLoading(prev => ({...prev, tambahBobotKomponenPenilaian: false}))
    }
    fetch()
  }, [])

	
	useEffect(() => {
		setTitle("Tambah Bobot Komponen Penilaian Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/penilaian`}>	<Button className="p-4" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  	
			  	
			  </Layouts.ViewContainerBackButtonLayout>
			</>
		}
	>
<Layouts.FormContainerLayout
		singularName={"Bobot"}
		isLoading={isLoading.tambahBobotKomponenPenilaian}
	>
		{komponenPenilaian && cPMK ? 
		(<>
		 <FormTambahBobotKomponenPenilaian
			{...{ 
				komponenPenilaian
, 				cPMK
 }}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TambahBobotKomponenPenilaianPage

