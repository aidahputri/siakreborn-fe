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

import DetailCPL from '../components/DetailCPL'
import getCPLDataDetail from '../services/getCPLDataDetail'
const DetailCPLPage = props => {
const [isLoading, setIsLoading] = useState({
	detailCPL: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [cPLDataDetail, setCPLDataDetail] = useState()
const { id } = useParams()
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, detailCPL: true}))
			const { data: cPLDataDetail } = await getCPLDataDetail({ id })
			setCPLDataDetail(cPLDataDetail.data)
		} finally {
			setIsLoading(prev => ({...prev, detailCPL: false}))
		}
	}
	 fetchData()
}, [])

	
	useEffect(() => {
		setTitle("Detail CPL Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/cpl`}>	<Button className="p-4 w-full" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  	
			  	
			  </Layouts.ViewContainerBackButtonLayout>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Detail CPL"}
	singularName={"CPL"}
	items={{...cPLDataDetail}}
	isLoading={isLoading.detailCPL}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailCPL {...{ data : { ...cPLDataDetail }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailCPLPage

