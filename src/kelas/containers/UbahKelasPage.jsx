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
import FormUbahKelas from '../components/FormUbahKelas'

import getKelasUbah from '../services/getKelasUbah'
import getMataKuliah from '../services/getMataKuliah'
import getSemester from '../services/getSemester'
const UbahKelasPage = props => {
const [isLoading, setIsLoading] = useState({
	ubahKelas: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [searchParams] = useSearchParams()
const id = searchParams.get('id')
const [kelasUbah, setKelasUbah] = useState()
const [mataKuliah, setMataKuliah] = useState()
const [semester, setSemester] = useState()

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, ubahKelas: true}))
		const { data: kelasUbahResponse } = await getKelasUbah({ id  })
		const { data: mataKuliahResponse } = await getMataKuliah({ id  })
		const { data: semesterResponse } = await getSemester({ id  })

	    setKelasUbah(kelasUbahResponse.data)
	    setMataKuliah(mataKuliahResponse.data)
	    setSemester(semesterResponse.data)


	    setIsLoading(prev => ({...prev, ubahKelas: false}))
    }
    fetch()
  }, [])

	
	useEffect(() => {
		setTitle("Ubah Kelas Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/kelas/${id}`}>	<Button className="p-4" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  	
			  	
			  </Layouts.ViewContainerBackButtonLayout>
			</>
		}
	>
<Layouts.FormContainerLayout
		singularName={"Kelas"}
		isLoading={isLoading.ubahKelas}
	>
		{kelasUbah && mataKuliah && semester ? 
		(<>
		 <FormUbahKelas
			{...{ 
				kelasUbah
, 				mataKuliah
, 				semester
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default UbahKelasPage

