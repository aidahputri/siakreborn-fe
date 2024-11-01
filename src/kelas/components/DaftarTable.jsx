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
import { isMobile } from '@/commons/utils/responsive';

import * as Layouts from "@/commons/layouts";

const DaftarTable = ({ mahasiswaDataList,
  kelasId
	}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (daftarItem) => {
    isMobile() && navigate(`/kelas/${kelasId}/mahasiswa/${daftarItem.id}/nilai`
    );
  };
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[mahasiswaDataList]}
  	  detail={detail}
  	  isSearchable
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
  	  ]}
        itemsEvents={(daftarItem) => {
          return([
          <Link to={`/kelas/${kelasId}/mahasiswa/${daftarItem.id}/nilai`}>
            <Button 
          	variant=
          		"primary"
            >
              Detail
            </Button>
          </Link>
          
          
        ])}}
    	  itemsModals={(daftarItem) => [
        ]}
  	/>
  )
};

export default DaftarTable;
