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

const DosenTable = ({ dosenDataList
	}) => {
  const { checkPermission } = useAuth();
  
  const [showModalKonfirmasiHapusKelas, setShowModalKonfirmasiHapusKelas] = React.useState(false);
  const hapus = async  (dosen) => {
    await deleteKelas({
        id: dosen.id,
    });
    window.location.reload(false);
      };
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[dosenDataList]}
  	  itemsAttrs={[
  		{
            id: "nama",
            condition: "isHeading",
            label: "Nama",
            featureName: "nama",
  		}
  ,
  		{
            id: "nIP",
            condition: "isHeading",
            label: "NIP",
            featureName: "nip",
  		}
  	  ]}
  	/>
  )
};

export default DosenTable;
