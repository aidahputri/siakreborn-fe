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

import deleteKelas from '../services/deleteKelas'

import * as Layouts from "commons/layouts";

const KomponenTable = ({ komponenPenilaianDataList
	}) => {
  const { checkPermission } = useAuth();
  
  const [showModalKonfirmasiHapusKelas, setShowModalKonfirmasiHapusKelas] = React.useState(false);
  const hapus = async  (komponen) => {
    await deleteKelas({
        id: komponen.id,
    });
    window.location.reload(false);
      };
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[komponenPenilaianDataList]}
  	  itemsAttrs={[
  		{
            id: "komponen",
            condition: "isHeading",
            label: "Komponen",
            featureName: "nama",
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

export default KomponenTable;
