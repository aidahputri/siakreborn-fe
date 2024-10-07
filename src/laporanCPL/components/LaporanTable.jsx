/*
	Generated on 13/06/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.4.0
*/
import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { useAuth } from '@/commons/auth';
import { Button, Modal } from '@/commons/components';
import isSelectedFeature from '@/commons/utils/isSelectedFeature';

import * as Layouts from "@/commons/layouts";

const LaporanCPLTable = ({ laporanCPLDataList, cplList = [] }) => {
  const { checkPermission } = useAuth();
  console.log(laporanCPLDataList)
  return (
    <Layouts.ListComponentTableLayout
      items={[laporanCPLDataList]}
      isSearchable
      itemsAttrs={[
        {
          id: "kode",
          condition: "isHeading",
          label: "Kode",
          featureName: "kode",
        },
        {
          id: "mataKuliah",
          condition: "isHeading",
          label: "Mata Kuliah",
          featureName: "nama",
        },
      ].concat(
        cplList.map((cpl) => {
          return {
            id: cpl.id,
            condition: "IsHeading",
            label: cpl.kode,
            featureName: cpl.id,
          };
        })
      )}
    />
  );
};

export default LaporanCPLTable;
