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

const LaporanTable = ({ laporanCPLDataList
	}) => {
  const { checkPermission } = useAuth();
  
  
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
  		}
  ,
  		{
            id: "mataKuliah",
            condition: "isHeading",
            label: "Mata Kuliah",
            featureName: "nama",
  		}
  	  ]}
  	/>
  )
};

export default LaporanTable;
