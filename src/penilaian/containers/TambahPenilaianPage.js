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
import FormTambahdanEditPenilaian from '../components/FormTambahdanEditPenilaian'

import getMahasiswa from '../services/getMahasiswa'
import getKomponenPenilaian from '../services/getKomponenPenilaian'
const TambahPenilaianPage = props => {
const [isLoading, setIsLoading] = useState({
	tambahdanEditPenilaian: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [mahasiswa, setMahasiswa] = useState()
const [komponenPenilaian, setKomponenPenilaian] = useState()
useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, tambahdanEditPenilaian: true}))
	    const { data: mahasiswaResponse } = await getMahasiswa()
	    const { data: komponenPenilaianResponse } = await getKomponenPenilaian()

	    setMahasiswa(mahasiswaResponse.data)
	    setKomponenPenilaian(komponenPenilaianResponse.data)


	    setIsLoading(prev => ({...prev, tambahdanEditPenilaian: false}))
    }
    fetch()
  }, [])

	
	useEffect(() => {
		setTitle("Tambah Penilaian Page")
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
		singularName={"dan"}
		isLoading={isLoading.tambahdanEditPenilaian}
	>
		{mahasiswa && komponenPenilaian ? 
		(<>
		 <FormTambahdanEditPenilaian
			{...{ 
				mahasiswa
, 				komponenPenilaian
 }}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TambahPenilaianPage

