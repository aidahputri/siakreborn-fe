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

import updateSemester from '../services/updateSemester'

import { notifyError } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormUbahSemester = ({ 
	semesterUbah
, 	kurikulum
 }) => {
  const { control, handleSubmit 
   } = useForm({ defaultValues: semesterUbah })
  
  
  
  
  
  
  
  const navigate = useNavigate()
  
  const simpan = (data) => {
    const cleanData = cleanFormData(data)
    updateSemester({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`/semester`)
    })
    .catch((error) => {
      console.error(error);
      notifyError(error);
    });
  }
  
  
  return (
	  <Layouts.FormComponentLayout
		  title="Ubah Semester" 
		  onSubmit={handleSubmit(simpan)}
	
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
		            defaultValue={semesterUbah.kode}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
		        name="status"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Status"
		            placeholder="Masukkan status"
		            defaultValue={semesterUbah.status}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
		        name="tanggalMulai"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Tanggal Mulai"
		            placeholder="Masukkan tanggal mulai"
		            defaultValue={semesterUbah.tanggalMulai}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
		        name="tanggalSelesai"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Tanggal Selesai"
		            placeholder="Masukkan tanggal selesai"
		            defaultValue={semesterUbah.tanggalSelesai}	            fieldState={fieldState}
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
		            defaultValue={semesterUbah.deskripsi}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
		  ,
	
		  
		  <Controller
	        name="idKurikulum"
	        control={control}
	        render={({ field, fieldState }) => (
					<SelectionField
				
	            label="Kurikulum"
	            options={kurikulum}
	            placeholder="Masukkan kurikulum"
					fieldState={fieldState}
					defaultValue={semesterUbah.idKurikulum}
	            {...field}
					isRequired={false}
	          />
	        )}
	      />
		  ]}
	
		  itemsEvents={[
				<Button type="submit" variant="primary">Simpan</Button>
	    ]}
	  />
  )
}

export default FormUbahSemester
