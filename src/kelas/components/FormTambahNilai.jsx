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

import tambahNilai from '../services/tambahNilai'

import { notifyError } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormTambahNilai = ({ komponenPenilaian, idMahasiswa, idKelas }) => {
  const { control, handleSubmit } = useForm();

  const navigate = useNavigate();

  const simpan = (data) => {
    const cleanData = cleanFormData(data);
    // console.log(cleanData)
    // console.log(komponenPenilaian)
    tambahNilai({
      ...cleanData,
      idMahasiswa,
    })
      .then(({ data: { data } }) => {
         navigate(`/kelas/${idKelas}/mahasiswa/${idMahasiswa}/nilai`)
      })
      .catch((error) => {
        console.error(error);
        toast.error((t) => <ToasterError error={error} t={t} />);
      });
  };

  return (
    <Layouts.FormComponentLayout
      title="Tambah Nilai"
      onSubmit={handleSubmit(simpan)}
      vas={[]}
      formFields={[
        <Controller
          name="nilai"
          control={control}
          render={({ field, fieldState }) => (
            <InputField
              label="Nilai"
              type="number"
              placeholder="Masukkan nilai"
              defaultValue={0}
              fieldState={fieldState}
              {...field}
              isRequired={false}
            />
          )}
        />,
        <Controller
          name="idKomponenPenilaian"
          control={control}
          render={({ field, fieldState }) => (
            <SelectionField
              label="Komponen Penilaian"
              options={komponenPenilaian}
              placeholder="Masukkan komponen penilaian"
              fieldState={fieldState}
              //   defaultValue={komponenPenilaian.id}
              {...field}
              isRequired={false}
            />
          )}
        />,
      ]}
      itemsEvents={[
        <Button type="submit" variant="primary">
          Simpan
        </Button>,
      ]}
    />
  );
};

export default FormTambahNilai;
