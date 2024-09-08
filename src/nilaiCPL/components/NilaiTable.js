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

const NilaiTable = ({ nilaiCPLDataList
	}) => {
  const { checkPermission } = useAuth();
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[nilaiCPLDataList]}
  	  isSearchable
  	  itemsAttrs={[
  		{
            id: "namaMahasiswa",
            condition: "isHeading",
            label: "Nama Mahasiswa",
            featureName: "mahasiswaName",
  		}
  ,
  		{
            id: "cPL",
            condition: "isHeading",
            label: "CPL",
            featureName: "cplKode",
  		}
  ,
  		{
            id: "nilaiCPL",
            condition: "isHeading",
            label: "Nilai CPL",
            featureName: "nilaiCPL",
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
