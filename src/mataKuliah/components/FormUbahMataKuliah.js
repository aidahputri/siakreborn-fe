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

import updateMataKuliah from '../services/updateMataKuliah'

import { ToasterError } from "commons/components";
import * as Layouts from "commons/layouts";

const FormUbahMataKuliah = ({ 
	mataKuliahUbah
, 	kurikulum
 }) => {
  const { control, handleSubmit 
   } = useForm({ defaultValues: mataKuliahUbah })
  
  
  
  
  
  
  
  const navigate = useNavigate()
  
  const simpan = (data) => {
    const cleanData = cleanFormData(data)
    updateMataKuliah({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`/matakuliah`)
    })
    .catch((error) => {
      console.error(error);
      toast.error((t) => <ToasterError error={error} t={t} />);
    });
  }
  
  
  return (
	  <Layouts.FormComponentLayout
		  title="Ubah Mata Kuliah" 
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
		            defaultValue={mataKuliahUbah.kode}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
		        name="nama"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Nama"
		            placeholder="Masukkan nama"
		            defaultValue={mataKuliahUbah.nama}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
		        name="sks"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="SKS"
		            placeholder="Masukkan sks"
					type="number"
		            defaultValue={mataKuliahUbah.sks}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
		        name="term"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Term"
		            placeholder="Masukkan term"
					type="number"
		            defaultValue={mataKuliahUbah.term}	            fieldState={fieldState}
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
				
	            label="Pilihan Kurikulum"
	            options={kurikulum}
	            placeholder="Masukkan pilihan kurikulum"
					fieldState={fieldState}
					defaultValue={mataKuliahUbah.idKurikulum}
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

export default FormUbahMataKuliah
