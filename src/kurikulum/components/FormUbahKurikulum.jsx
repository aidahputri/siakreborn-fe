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

import updateKurikulum from "../services/updateKurikulum";

import { notifyError } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormUbahKurikulum = ({ kurikulumUbah, programStudi }) => {
  const { control, handleSubmit } = useForm({ defaultValues: kurikulumUbah });

  const navigate = useNavigate();

  const simpan = (data) => {
    const cleanData = cleanFormData(data);
    updateKurikulum({
      ...cleanData,
    })
      .then(({ data: { data } }) => {
        navigate(`/kurikulum`);
      })
      .catch((error) => {
        console.error(error);
        notifyError(error);
      });
  };

  return (
    <Layouts.FormComponentLayout
      title="Ubah Kurikulum"
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
              defaultValue={kurikulumUbah.kode}
              fieldState={fieldState}
              {...field}
              isRequired={false}
            />
          )}
        />,

        <Controller
          name="noSK"
          control={control}
          render={({ field, fieldState }) => (
            <InputField
              label="Nomor SK"
              placeholder="Masukkan nomor sk"
              defaultValue={kurikulumUbah.noSK}
              fieldState={fieldState}
              {...field}
              isRequired={false}
            />
          )}
        />,

        <Controller
          name="status"
          control={control}
          render={({ field, fieldState }) => (
            <InputField
              label="Status"
              placeholder="Masukkan status"
              defaultValue={kurikulumUbah.status}
              fieldState={fieldState}
              {...field}
              isRequired={false}
            />
          )}
        />,

        <Controller
          name="profilLulusan"
          control={control}
          render={({ field, fieldState }) => (
            <InputField
              label="Profil Lulusan"
              placeholder="Masukkan profil lulusan"
              defaultValue={kurikulumUbah.profilLulusan}
              fieldState={fieldState}
              {...field}
              isRequired={false}
            />
          )}
        />,

        <Controller
          name="programStudiId"
          control={control}
          render={({ field, fieldState }) => (
            <SelectionField
              label="Program Studi"
              options={programStudi}
              placeholder="Masukkan program studi"
              fieldState={fieldState}
              defaultValue={kurikulumUbah.idProgramStudi}
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

export default FormUbahKurikulum;
