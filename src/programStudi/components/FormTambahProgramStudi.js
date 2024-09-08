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

import saveProgramStudi from '../services/saveProgramStudi'

import { ToasterError } from "commons/components";
import * as Layouts from "commons/layouts";

const FormTambahProgramStudi = ({ 
 }) => {
  const { control, handleSubmit 
   } = useForm()
  
  
  
  
  
  
  
  const navigate = useNavigate()
  
  const tambah = (data) => {
    const cleanData = cleanFormData(data)
    saveProgramStudi({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/programstudi`)
    })
    .catch((error) => {
      console.error(error);
      toast.error((t) => <ToasterError error={error} t={t} />);
    });
  }
  
  
  return (
	  <Layouts.FormComponentLayout
		  title="Tambah Program Studi" 
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
		        name="noSK"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Nomor SK"
		            placeholder="Masukkan nomor sk"
		            fieldState={fieldState}
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
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
		        name="kaprodi"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Kaprodi"
		            placeholder="Masukkan kaprodi"
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
		        name="jenjang"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Jenjang"
		            placeholder="Masukkan jenjang"
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
		  ,
	
		  ]}
	
		  itemsEvents={[
				<Button type="submit" variant="primary">Tambah</Button>
	    ]}
	  />
  )
}

export default FormTambahProgramStudi
