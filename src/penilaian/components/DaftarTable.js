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

const DaftarTable = ({ penilaianDataList, mahasiswaSelectionField, kelasSelectionField
	}) => {
  const { checkPermission } = useAuth();
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[penilaianDataList, mahasiswaSelectionField, kelasSelectionField]}
  	  isSearchable
  	  filterFields={[
  	    {
  	      label: "Mahasiswa",
  	      featureName: "mahasiswaName",
  	      options: mahasiswaSelectionField,
  	    }
  , 	    {
  	      label: "Kelas",
  	      featureName: "bobotKomponenPenilaianKomponenPenilaianKelasName",
  	      options: kelasSelectionField,
  	    }
  	  ]}
  	  itemsAttrs={[
  		{
            id: "namaMahasiswa",
            condition: "isHeading",
            label: "Nama Mahasiswa",
            featureName: "mahasiswaNama",
  		}
  ,
  		{
            id: "nPM",
            condition: "isHeading",
            label: "NPM",
            featureName: "mahasiswaNpm",
  		}
  ,
  		{
            id: "kelas",
            condition: "isHeading",
            label: "Kelas",
            featureName: "bobotKomponenPenilaianKomponenPenilaianKelasNama",
  		}
  ,
  		{
            id: "komponenNilai",
            condition: "isHeading",
            label: "Komponen Nilai",
            featureName: "bobotKomponenPenilaianKomponenPenilaianNama",
  		}
  ,
  		{
            id: "nilai",
            condition: "isHeading",
            label: "Nilai",
            featureName: "nilai",
  		}
  ,
  ,
  	  ]}
  	/>
  )
};

export default DaftarTable;
