/*
	Generated on 13/06/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.4.0
*/
import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "commons/auth";
import { Button, Modal } from "commons/components";
import isSelectedFeature from "commons/utils/isSelectedFeature";

import * as Layouts from "commons/layouts";

const SubCPMKTable = ({ subCPMKDataList }) => {
  const { checkPermission } = useAuth();

  return (
    <Layouts.ListComponentTableLayout
      items={[subCPMKDataList]}
      itemsAttrs={[
        {
          id: "kode",
          condition: "isHeading",
          label: "Kode",
          featureName: "kode",
        },
        {
          id: "nama",
          condition: "isHeading",
          label: "Nama",
          featureName: "nama",
        },
        {
          id: "deskripsi",
          condition: "isHeading",
          label: "Deskripsi",
          featureName: "deskripsi",
        },
        {
          id: "bobot",
          condition: "isHeading",
          label: "Bobot",
          featureName: "bobot",
        },
        {
          id: "cPL",
          condition: "isHeading",
          label: "CPL",
          featureName: "parentCPMKCplName",
        },
        {
          id: "mataKuliah",
          condition: "isHeading",
          label: "Mata Kuliah",
          featureName: "parentCPMKMataKuliahNama",
        },
      ]}
    />
  );
};

export default SubCPMKTable;
