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

import deleteSemester from '../services/deleteSemester'

import * as Layouts from "@/commons/layouts";

const SemesterTable = ({ semesterDataList

	}) => {
  const { checkPermission } = useAuth();
  
  const [showModalKonfirmasiHapusSemester, setShowModalKonfirmasiHapusSemester] = React.useState(false);
  const hapus = async  (semester) => {
    await deleteSemester({
        id: semester.id,
    });
    window.location.reload(false);
      };
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[semesterDataList]}
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
            id: "status",
            condition: "isHeading",
            label: "Status",
            featureName: "status",
  		}
  ,
  		{
            id: "deskripsi",
            condition: "isHeading",
            label: "Deskripsi",
            featureName: "deskripsi",
  		}
  	  ]}
        itemsEvents={(semesterItem) => [
          checkPermission("DeleteSemester") &&  (
            <Link to=''>
              <Button 
            	variant=
            				"info"
                onClick={() => setShowModalKonfirmasiHapusSemester(true)}
              >
                Hapus
              </Button>
            </Link>
            
          )
          
  ,
          checkPermission("UpdateSemester") &&  (
    <Link to={`/semester/ubah?id=${semesterItem.id}`}>
      <Button 
    	variant=
    				"secondary"
      >
        Ubah
      </Button>
    </Link>
    
  )
  
        ]}
    	  itemsModals={(semesterItem) => [
  	      <Modal
  	         isShow={showModalKonfirmasiHapusSemester}
  	         title={"Konfirmasi Hapus Semester"}
  	      >
  	       <Link to=''><Button variant="tertiary" onClick={() => setShowModalKonfirmasiHapusSemester(false)}>Batal</Button></Link>
  	      <Button
  	        variant="danger"
  	        onClick={() => hapus(semesterItem)}
  	      >
  	        Hapus
  	      </Button>
  	      </Modal>
  	      
        ]}
  	/>
  )
};

export default SemesterTable;
