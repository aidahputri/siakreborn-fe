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

import updateSubCPMK from "../services/updateSubCPMK";

import { notifyError } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const ModifiedFormUbahSubCPMK = ({ subCPMKUbah, cPMK }) => {
  const { control, handleSubmit } = useForm({ defaultValues: subCPMKUbah });

  const navigate = useNavigate();

  const simpan = (data) => {
    const cleanData = cleanFormData(data);
    updateSubCPMK({
      ...cleanData,
    })
      .then(({ data: { data } }) => {
        navigate(`/subcpmk/${subCPMKUbah.id}`);
      })
      .catch((error) => {
        console.error(error);
        notifyError(error);
      });
  };

  return (
    <Layouts.FormComponentLayout
      title="Ubah SubCPMK"
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
              defaultValue={subCPMKUbah.kode}
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
              defaultValue={subCPMKUbah.deskripsi}
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
              type="number"
              defaultValue={subCPMKUbah.bobot}
              fieldState={fieldState}
              {...field}
              isRequired={false}
            />
          )}
        />,

        <Controller
          name="parentCPMKId"
          control={control}
          render={({ field, fieldState }) => (
            <SelectionField
              label="Pilihan CPMK"
              options={cPMK}
              placeholder="Masukkan pilihan cpmk"
              fieldState={fieldState}
              defaultValue={subCPMKUbah.idParentCPMK}
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

export default ModifiedFormUbahSubCPMK;
