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

import updateKelas from '../services/updateKelas'

import { notifyError } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormUbahKelas = ({ 
	kelasUbah
, 	mataKuliah
, 	semester
 }) => {
  const { control, handleSubmit 
   } = useForm({ defaultValues: kelasUbah })
  
  
  
  
  
  
  
  const navigate = useNavigate()
  
  const simpan = (data) => {
    const cleanData = cleanFormData(data)
    updateKelas({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`/kelas/${kelasUbah.id}`)
    })
    .catch((error) => {
      console.error(error);
      notifyError(error);
    });
  }
  
  
  return (
	  <Layouts.FormComponentLayout
		  title="Ubah Kelas" 
		  onSubmit={handleSubmit(simpan)}
	
	    vas={[
		  ]}
	
		  formFields={[
			  
			  <Controller
		        name="nama"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Nama"
		            placeholder="Masukkan nama"
		            defaultValue={kelasUbah.nama}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
		        name="kapasitas"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Kapasitas"
		            placeholder="Masukkan kapasitas"
		            defaultValue={kelasUbah.kapasitas}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
		        name="ruangan"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Ruangan"
		            placeholder="Masukkan ruangan"
		            defaultValue={kelasUbah.ruangan}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
		        name="jadwal"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Jadwal"
		            placeholder="Masukkan jadwal"
		            defaultValue={kelasUbah.jadwal}	            fieldState={fieldState}
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
				
	            label="Mata Kuliah"
	            options={mataKuliah}
	            placeholder="Masukkan mata kuliah"
					fieldState={fieldState}
					defaultValue={kelasUbah.idMataKuliah}
	            {...field}
					isRequired={false}
	          />
	        )}
	      />
	,
		  
		  <Controller
	        name="idSemester"
	        control={control}
	        render={({ field, fieldState }) => (
					<SelectionField
				
	            label="Semester"
	            options={semester}
	            placeholder="Masukkan semester"
					fieldState={fieldState}
					defaultValue={kelasUbah.idSemester}
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

export default FormUbahKelas
