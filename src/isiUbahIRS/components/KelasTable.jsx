/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.5
*/
import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { useAuth } from '@/commons/auth';
import { Button, Modal } from '@/commons/components';
import { isMobile } from '@/commons/utils/responsive';

import * as Layouts from "@/commons/layouts";

const KelasTable = ({ kelasRencanaStudiDataList

	}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (kelasItem) => {
    isMobile() && navigate();
  };
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[kelasRencanaStudiDataList]}
  	  detail={detail}
  	  itemsAttrs={[
  		{
            id: "namaKelas",
            condition: "isHeading",
            label: "Nama Kelas",
            featureName: "invalid",
  		}
  ,
  		{
            id: "kapasitas",
            condition: "isHeading",
            label: "Kapasitas",
            featureName: "invalid",
  		}
  ,
  		{
            id: "jadwal",
            condition: "isHeading",
            label: "Jadwal",
            featureName: "invalid",
  		}
  ,
  		{
            id: "ruangan",
            condition: "isHeading",
            label: "Ruangan",
            featureName: "invalid",
  		}
  ,
  		{
            id: "pengajar",
            condition: "isHeading",
            label: "Pengajar",
            featureName: "invalid",
  		}
  ,
  		{
            id: "semester",
            condition: "isHeading",
            label: "Semester",
            featureName: "invalid",
  		}
  	  ]}
        itemsEvents={(kelasItem) => [
          <Link to=''>
            <Button 
          	variant=
          				"secondary"
            >
              Detail
            </Button>
          </Link>
          
          
        ]}
    	  itemsModals={(kelasItem) => [
        ]}
  	/>
  )
};

export default KelasTable;
