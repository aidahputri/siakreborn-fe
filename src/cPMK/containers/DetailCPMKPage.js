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

import DetailCPMK from '../components/DetailCPMK'
import getCPMKDataDetail from '../services/getCPMKDataDetail'
const DetailCPMKPage = props => {
const [isLoading, setIsLoading] = useState({
	detailCPMK: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [cPMKDataDetail, setCPMKDataDetail] = useState()
const { id } = useParams()
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, detailCPMK: true}))
			const { data: cPMKDataDetail } = await getCPMKDataDetail({ id })
			setCPMKDataDetail(cPMKDataDetail.data)
		} finally {
			setIsLoading(prev => ({...prev, detailCPMK: false}))
		}
	}
	 fetchData()
}, [])

	
	useEffect(() => {
		setTitle("Detail CPMK Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/cpmk`}>	<Button className="p-4 w-full" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  	
			  	
			  </Layouts.ViewContainerBackButtonLayout>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Detail CPMK"}
	singularName={"CPMK"}
	items={{...cPMKDataDetail}}
	isLoading={isLoading.detailCPMK}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailCPMK {...{ data : { ...cPMKDataDetail }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailCPMKPage

