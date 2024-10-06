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
  
} from '@/commons/components'
import { ALLOWED_PERMISSIONS, findAllowedPermission } from '@/commons/constants/allowedPermission'
import cleanFormData from '@/commons/utils/cleanFormData'

import saveCPMK from '../services/saveCPMK'

import { notifyError } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const ModifiedFormTambahCPMK = ({ 
	cPL
, 	mataKuliah
 }) => {
  const { control, handleSubmit 
   } = useForm()
  
  
  
  
  
  
  
  const navigate = useNavigate()
  
  const tambah = (data) => {
    const cleanData = cleanFormData(data)
    saveCPMK({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/cpmk`)
    })
    .catch((error) => {
      console.error(error);
      notifyError(error);
    });
  }
  
  
  return (
	  <Layouts.FormComponentLayout
		  title="Tambah CPMK" 
		  onSubmit={handleSubmit(tambah)}
	
	    vas={[
		  ]}
	
		  formFields={[
			  
			  <Controller
		        name="kode"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Kode"
		            placeholder="Masukkan kode"
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
		        name="deskripsi"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Deskripsi"
		            placeholder="Masukkan deskripsi"
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
		        name="bobot"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Bobot"
		            placeholder="Masukkan bobot"
					type="number"
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
		  ,
	
		  
		  <Controller
	        name="idCPL"
	        control={control}
	        render={({ field, fieldState }) => (
					<SelectionField
				
	            label="Pilihan CPL"
	            options={cPL}
	            placeholder="Masukkan pilihan cpl"
					fieldState={fieldState}
	            {...field}
					isRequired={false}
	          />
	        )}
	      />
	,
		  
		  <Controller
	        name="idMataKuliah"
	        control={control}
	        render={({ field, fieldState }) => (
					<SelectionField
				
	            label="Pilihan Mata Kuliah"
	            options={mataKuliah}
	            placeholder="Masukkan pilihan mata kuliah"
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

export default ModifiedFormTambahCPMK
