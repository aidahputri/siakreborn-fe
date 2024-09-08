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

import savePenilaian from '../services/savePenilaian'

import { ToasterError } from "commons/components";
import * as Layouts from "commons/layouts";

const FormTambahdanEditPenilaian = ({ 
	mahasiswa
, 	komponenPenilaian
 }) => {
  const { control, handleSubmit 
   } = useForm()
  
  
  
  
  
  
  
  const navigate = useNavigate()
  
  const simpan = (data) => {
    const cleanData = cleanFormData(data)
    savePenilaian({
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
		  title="Tambah dan Edit Penilaian" 
		  onSubmit={handleSubmit(simpan)}
	
	    vas={[
		  ]}
	
		  formFields={[
			  
			  <Controller
		        name="nilai"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Nilai"
		            placeholder="Masukkan nilai"
					type="number"
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
		  ,
	
		  
		  <Controller
	        name="idMahasiswa"
	        control={control}
	        render={({ field, fieldState }) => (
					<SelectionField
				
	            label="Mahasiswa"
	            options={mahasiswa}
	            placeholder="Masukkan mahasiswa"
					fieldState={fieldState}
	            {...field}
					isRequired={false}
	          />
	        )}
	      />
	,
		  
		  <Controller
	        name="idBobotKomponenPenilaian"
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
		  ]}
	
		  itemsEvents={[
				<Button type="submit" variant="primary">Simpan</Button>
	    ]}
	  />
  )
}

export default FormTambahdanEditPenilaian
