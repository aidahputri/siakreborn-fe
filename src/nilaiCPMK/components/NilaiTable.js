/*
	Generated on 13/06/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.4.0
*/
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from 'commons/auth';
import { Button, Modal } from 'commons/components';
import isSelectedFeature from 'commons/utils/isSelectedFeature';

import * as Layouts from "commons/layouts";

const NilaiTable = ({ nilaiCPMKDataList
	}) => {
  const { checkPermission } = useAuth();
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[nilaiCPMKDataList]}
  	  isSearchable
  	  itemsAttrs={[
  		{
            id: "namaMahasiswa",
            condition: "isHeading",
            label: "Nama Mahasiswa",
            featureName: "mahasiswaNama",
  		}
  ,
  		{
            id: "cPMK",
            condition: "isHeading",
            label: "CPMK",
            featureName: "name",
  		}
  ,
  		{
            id: "nilaiCPMK",
            condition: "isHeading",
            label: "Nilai CPMK",
            featureName: "nilaiCPMK",
  		}
  ,
  		{
            id: "totalBobot",
            condition: "isHeading",
            label: "Total Bobot",
            featureName: "totalBobot",
  		}
  ,
  		{
            id: "totalNilaiBerbobot",
            condition: "isHeading",
            label: "Total Nilai Berbobot",
            featureName: "totalNilaiBerbobot",
  		}
  	  ]}
  	/>
  )
};

export default NilaiTable;
