/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.5
*/
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link, useParams } from 'react-router-dom'
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from 'react-router-dom';
import FormPengaturanMasaPengisianIRS from '../components/FormPengaturanMasaPengisianIRS'
const PengaturanMasaPengisianIRSPage = props => {
const [isLoading, setIsLoading] = useState({
	pengaturanMasaPengisianIRS: false,

	});
	const { setTitle } = useContext(HeaderContext);



	
	useEffect(() => {
		setTitle("Pengaturan Masa Pengisian IRS Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.FormContainerLayout
		singularName={"Masa"}
		
	>
		<FormPengaturanMasaPengisianIRS
			{...props}
		/>
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default PengaturanMasaPengisianIRSPage

