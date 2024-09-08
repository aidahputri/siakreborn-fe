/*
	Generated on 13/06/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.4.0
*/
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate, useSearchParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import {
  Button,
  Form,
  SelectionField,
  MultiSelectionField,
  InputField,
  MultiSelectField,
  TextAreaField,
  VisualizationAttr,
  Spinner,
  
} from 'commons/components'
import { ALLOWED_PERMISSIONS, findAllowedPermission } from 'commons/constants/allowedPermission'
import cleanFormData from 'commons/utils/cleanFormData'

import saveBobotKomponenPenilaian from '../services/saveBobotKomponenPenilaian'

import { ToasterError } from "commons/components";
import * as Layouts from "commons/layouts";

const FormTambahBobotKomponenPenilaian = ({ 
	komponenPenilaian
, 	cPMK
 }) => {
  const { control, handleSubmit 
   } = useForm()
  
  
  
  
  
  
  
  const navigate = useNavigate()
  
  const tambah = (data) => {
    const cleanData = cleanFormData(data)
    saveBobotKomponenPenilaian({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/penilaian`)
    })
    .catch((error) => {
      console.error(error);
      toast.error((t) => <ToasterError error={error} t={t} />);
    });
  }
  
  
  return (
	  <Layouts.FormComponentLayout
		  title="Tambah Bobot Komponen Penilaian" 
		  onSubmit={handleSubmit(tambah)}
	
	    vas={[
		  ]}
	
		  formFields={[
			  
			  <Controller
		        name="bobot"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Bobot"
		            placeholder="Masukkan bobot"
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
		  ,
	
		  
		  <Controller
	        name="idKomponenPenilaian"
	        control={control}
	        render={({ field, fieldState }) => (
					<SelectionField
				
	            label="Komponen Penilaian"
	            options={komponenPenilaian}
	            placeholder="Masukkan komponen penilaian"
					fieldState={fieldState}
	            {...field}
					isRequired={false}
	          />
	        )}
	      />
	,
		  
		  <Controller
	        name="idCPMK"
	        control={control}
	        render={({ field, fieldState }) => (
					<SelectionField
				
	            label="CPMK"
	            options={cPMK}
	            placeholder="Masukkan cpmk"
					fieldState={fieldState}
	            {...field}
					isRequired={false}
	          />
	        )}
	      />
		  ]}
	
		  itemsEvents={[
				<Button type="submit" variant="primary">Tambah</Button>
	    ]}
	  />
  )
}

export default FormTambahBobotKomponenPenilaian
