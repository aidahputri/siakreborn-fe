/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.5
*/
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button, InputField } from "@/commons/components";
import cleanFormData from "@/commons/utils/cleanFormData";
import updateRencanaStudi from "../services/updateRencanaStudi";
import { toLocalISOString } from "@/commons/utils/getLocalISOString";

import { notifyError } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormPengaturanMasaPengisianIRS = ({ periodeData }) => {
  const { control, handleSubmit } = useForm();
  const navigate = useNavigate();

  const simpan = (data) => {
    const cleanData = cleanFormData({
      mulai: new Date(data.mulai).toISOString(),
      akhir: new Date(data.akhir).toISOString(),
    });

    // console.log(cleanData);

    updateRencanaStudi(cleanData)
      .then(({ data: { data } }) => {})
      .catch((error) => {
        console.error(error);
        notifyError(error);
      });
  };

  // console.log(new Date(periodeData?.mulai).toISOString())

  return (
    <Layouts.FormComponentLayout
      title="Pengaturan Masa Pengisian IRS"
      onSubmit={handleSubmit(simpan)}
      formFields={[
        <Controller
          name="mulai"
          control={control}
          render={({ field }) => (
            <InputField
              {...field}
              type="datetime-local"
              defaultValue={toLocalISOString(periodeData?.mulai)}
              label="Tanggal Mulai"
              placeholder="Pilih tanggal mulai pengisian IRS"
            />
          )}
        />,
        <Controller
          name="akhir"
          control={control}
          render={({ field }) => (
            <InputField
              {...field}
              type="datetime-local"
              defaultValue={toLocalISOString(periodeData?.akhir)}
              label="Tanggal Akhir"
              placeholder="Pilih tanggal akhir pengisian IRS"
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

export default FormPengaturanMasaPengisianIRS;
