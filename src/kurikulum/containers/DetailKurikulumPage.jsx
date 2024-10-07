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
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/commons/auth';
import DetailKurikulum from '../components/DetailKurikulum'
import getKurikulumDataDetail from '../services/getKurikulumDataDetail'
import CPLTable from '../components/CPLTable'

import getCPLDataList from '../services/getCPLDataList'
const DetailKurikulumPage = props => {
const { checkPermission } = useAuth()

	const [isLoading, setIsLoading] = useState({
	detailKurikulum: false,
	tableCPL: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [kurikulumDataDetail, setKurikulumDataDetail] = useState()
const { id } = useParams()
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, detailKurikulum: true}))
			const { data: kurikulumDataDetail } = await getKurikulumDataDetail({ id })
			setKurikulumDataDetail(kurikulumDataDetail.data)
		} finally {
			setIsLoading(prev => ({...prev, detailKurikulum: false}))
		}
	}
	 fetchData()
}, [])
const [cPLDataList, setCPLDataList] = useState()

useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableCPL: true}))
				const { data: cPLDataList } = await getCPLDataList({  })
				setCPLDataList(cPLDataList.data)
			} finally {
				setIsLoading(prev => ({...prev, tableCPL: false}))
			}
		}
		fetchData()	
  	}, [])

	
	useEffect(() => {
		setTitle("Detail Kurikulum Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/kurikulum`}>	<Button className="p-4 w-full" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  	
			  	
			  </Layouts.ViewContainerBackButtonLayout>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Detail Kurikulum"}
	singularName={"Kurikulum"}
	items={{...kurikulumDataDetail}}
	isLoading={isLoading.detailKurikulum}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailKurikulum {...{ data : { ...kurikulumDataDetail }}} />
</Layouts.DetailContainerLayout>
<Layouts.ListContainerTableLayout
	title={"Table CPL"}
	singularName={"CPL"}
	items={[cPLDataList]}
	isLoading={isLoading.tableCPL}
>
	<CPLTable
		cPLDataList={cPLDataList}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailKurikulumPage

