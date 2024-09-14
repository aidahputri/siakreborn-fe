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

const LaporanTable = ({ laporanCPMKDataList, kelasSelectionField
	}) => {
  const { checkPermission } = useAuth();
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[laporanCPMKDataList, kelasSelectionField]}
  	  isSearchable
  	  filterFields={[
  	    {
  	      label: "Kelas",
  	      featureName: "kelasName",
  	      options: kelasSelectionField,
  	    }
  	  ]}
  	  itemsAttrs={[
  		{
            id: "nPM",
            condition: "isHeading",
            label: "NPM",
            featureName: "npm",
  		}
  ,
  		{
            id: "nama",
            condition: "isHeading",
            label: "Nama",
            featureName: "nama",
  		}
  ,
  		{
            id: "kelas",
            condition: "isHeading",
            label: "Kelas",
            featureName: "kelasNama",
  		}
  ,
  	  ]}
  	/>
  )
};

export default LaporanTable;
