/*
	Generated on 13/06/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.4.0
*/
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { useAuth } from "@/commons/auth";
import { Button, Modal } from "@/commons/components";
import isSelectedFeature from "@/commons/utils/isSelectedFeature";
import { isMobile } from "@/commons/utils/responsive";

import * as Layouts from "@/commons/layouts";

const SubCPMKTable = ({ subCPMKDataList }) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (subCPMKItem) => {
    isMobile() && navigate(`/subcpmk/${subCPMKItem.id}`);
  };

  return (
    <Layouts.ListComponentTableLayout
      items={[subCPMKDataList]}
      detail={detail}
      isSearchable
      itemsAttrs={[
        {
          id: "kode",
          condition: "isHeading",
          label: "Kode",
          featureName: "kode",
        },
        {
          id: "deskripsi",
          condition: "isHeading",
          label: "Deskripsi",
          featureName: "deskripsi",
        },
        {
          id: "cPMK",
          condition: "isHeading",
          label: "CPMK",
          featureName: "parentCPMKKode",
        },
        {
          id: "mataKuliah",
          condition: "isHeading",
          label: "Mata Kuliah",
          featureName: "parentCPMKMataKuliahNama",
        },
        {
          id: "bobot",
          condition: "isHeading",
          label: "Bobot",
          featureName: "bobot",
        },
      ]}
      itemsEvents={(subCPMKItem) => [
        <Link to={`/subcpmk/${subCPMKItem.id}`}>
          <Button variant="primary">Detail</Button>
        </Link>,
      ]}
      itemsModals={(subCPMKItem) => []}
    />
  );
};

export default SubCPMKTable;
