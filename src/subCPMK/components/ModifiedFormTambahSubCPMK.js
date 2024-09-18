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
} from "commons/components";
import {
  ALLOWED_PERMISSIONS,
  findAllowedPermission,
} from "commons/constants/allowedPermission";
import cleanFormData from "commons/utils/cleanFormData";

import saveSubCPMK from "../services/saveSubCPMK";

import { ToasterError } from "commons/components";
import * as Layouts from "commons/layouts";

const ModifiedFormTambahSubCPMK = ({ cPMK }) => {
  const { control, handleSubmit } = useForm();

  const navigate = useNavigate();

  const tambah = (data) => {
    const cleanData = cleanFormData(data);
    saveSubCPMK({
      ...cleanData,
    })
      .then(({ data: { data } }) => {
        navigate(`/subcpmk`);
      })
      .catch((error) => {
        console.error(error);
        toast.error((t) => <ToasterError error={error} t={t} />);
      });
  };

  return (
    <Layouts.FormComponentLayout
      title="Tambah Sub CPMK"
      onSubmit={handleSubmit(tambah)}
      vas={[]}
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
        />,
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
        />,
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
        />,
        <Controller
          name="idParentCPMK"
          control={control}
          render={({ field, fieldState }) => (
            <SelectionField
              label="Pilihan CPMK"
              options={cPMK}
              placeholder="Masukkan pilihan cpmk"
              fieldState={fieldState}
              {...field}
              isRequired={false}
            />
          )}
        />,
      ]}
      itemsEvents={[
        <Button type="submit" variant="primary">
          Tambah
        </Button>,
      ]}
    />
  );
};

export default ModifiedFormTambahSubCPMK;
