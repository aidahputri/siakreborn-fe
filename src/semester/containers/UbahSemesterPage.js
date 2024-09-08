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
import FormUbahSemester from '../components/FormUbahSemester'

import getSemesterUbah from '../services/getSemesterUbah'
import getKurikulum from '../services/getKurikulum'
const UbahSemesterPage = props => {
const [isLoading, setIsLoading] = useState({
	ubahSemester: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [searchParams] = useSearchParams()
const id = searchParams.get('id')
const [semesterUbah, setSemesterUbah] = useState()
const [kurikulum, setKurikulum] = useState()
useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, ubahSemester: true}))
	    const { data: semesterUbahResponse } = await getSemesterUbah({ id })
	    const { data: kurikulumResponse } = await getKurikulum({ id })

	    setSemesterUbah(semesterUbahResponse.data)
	    setKurikulum(kurikulumResponse.data)


	    setIsLoading(prev => ({...prev, ubahSemester: false}))
    }
    fetch()
  }, [])

	
	useEffect(() => {
		setTitle("Ubah Semester Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/semester`}>	<Button className="p-4" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  	
			  	
			  </Layouts.ViewContainerBackButtonLayout>
			</>
		}
	>
<Layouts.FormContainerLayout
		singularName={"Semester"}
		isLoading={isLoading.ubahSemester}
	>
		{semesterUbah && kurikulum ? 
		(<>
		 <FormUbahSemester
			{...{ 
				semesterUbah
, 				kurikulum
 }}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default UbahSemesterPage

