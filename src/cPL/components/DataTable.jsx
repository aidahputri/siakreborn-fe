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

import deleteCPL from '../services/deleteCPL'

import * as Layouts from "@/commons/layouts";

const DataTable = ({ bobot
	}) => {
  const { checkPermission } = useAuth();
  
  const [showModalKonfirmasiHapusCPL, setShowModalKonfirmasiHapusCPL] = React.useState(false);
  const hapus = async  (data) => {
    await deleteCPL({
    });
    window.location.reload(false);
      };
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[bobot]}
  	  itemsAttrs={[
  		{
            id: "kode",
            condition: "isHeading",
            label: "Kode",
            featureName: "kode",
  		}
  ,
  		{
            id: "deskripsi",
            condition: "isHeading",
            label: "Deskripsi",
            featureName: "deskripsi",
  		}
  ,
  		{
            id: "bobot",
            condition: "isHeading",
            label: "Bobot",
            featureName: "bobot",
  		}
  	  ]}
  	/>
  )
};

export default DataTable;
