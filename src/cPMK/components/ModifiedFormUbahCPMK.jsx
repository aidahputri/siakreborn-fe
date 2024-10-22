/*
	Generated on 13/06/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.4.0
*/
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
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
} from "@/commons/components";
import {
  ALLOWED_PERMISSIONS,
  findAllowedPermission,
} from "@/commons/constants/allowedPermission";
import cleanFormData from "@/commons/utils/cleanFormData";

import updateCPMK from "../services/updateCPMK";

import { notifyError } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const ModifiedFormUbahCPMK = ({ cPMKUbah, cPL, mataKuliah }) => {
  const { control, handleSubmit } = useForm({ defaultValues: cPMKUbah });

  const navigate = useNavigate();

  const simpan = (data) => {
    const cleanData = cleanFormData(data);
    updateCPMK({
      ...cleanData,
    })
      .then(({ data: { data } }) => {
        navigate(`/cpmk/${cPMKUbah.id}`);
      })
      .catch((error) => {
        console.error(error);
        notifyError(error);
      });
  };

  return (
    <Layouts.FormComponentLayout
      title="Ubah CPMK"
      onSubmit={handleSubmit(simpan)}
      vas={[]}
      formFields={[
        <Controller
          name="kode"
          control={control}
          render={({ field, fieldState }) => (
            <InputField
              label="Kode"
              placeholder="Masukkan kode"
              defaultValue={cPMKUbah.kode}
              fieldState={fieldState}
              {...field}
              isRequired={false}
            />
          )}
        />,

        <Controller
          name="deskripsi"
          control={control}
          render={({ field, fieldState }) => (
            <InputField
              label="Deskripsi"
              placeholder="Masukkan deskripsi"
              defaultValue={cPMKUbah.deskripsi}
              fieldState={fieldState}
              {...field}
              isRequired={false}
            />
          )}
        />,

        <Controller
          name="bobot"
          control={control}
          render={({ field, fieldState }) => (
            <InputField
              label="Bobot"
              placeholder="Masukkan bobot"
              defaultValue={cPMKUbah.bobot}
              fieldState={fieldState}
              {...field}
              isRequired={false}
            />
          )}
        />,

        <Controller
          name="parentCPLId"
          control={control}
          render={({ field, fieldState }) => (
            <SelectionField
              label="Pilihan CPL"
              options={cPL}
              placeholder="Masukkan pilihan cpl"
              fieldState={fieldState}
              defaultValue={cPMKUbah.idCPL}
              {...field}
              isRequired={false}
            />
          )}
        />,

        <Controller
          name="mataKuliahId"
          control={control}
          render={({ field, fieldState }) => (
            <SelectionField
              label="Pilihan Mata Kuliah"
              options={mataKuliah}
              placeholder="Masukkan pilihan mata kuliah"
              fieldState={fieldState}
              defaultValue={cPMKUbah.idMataKuliah}
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

export default ModifiedFormUbahCPMK;
