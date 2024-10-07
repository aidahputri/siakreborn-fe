/*
	Generated on 13/06/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.4.0
*/
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '@/commons/auth';
import { Button, Modal } from '@/commons/components';
import isSelectedFeature from '@/commons/utils/isSelectedFeature';

import deleteSubCPMK from '../services/deleteSubCPMK'

import * as Layouts from "@/commons/layouts";

const SubTable = ({ subCPMKDataList

	}) => {
  const { checkPermission } = useAuth();
  
  const [showModalKonfirmasiHapusSubCPMK, setShowModalKonfirmasiHapusSubCPMK] = React.useState(false);
  const hapus = async  (sub) => {
    await deleteSubCPMK({
        id: sub.id,
    });
    window.location.reload(false);
      };
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[subCPMKDataList]}
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
  ,
  		{
            id: "cPMK",
            condition: "isHeading",
            label: "CPMK",
            featureName: "parentCPMKKode",
  		}
  	  ]}
        itemsEvents={(subItem) => [
          checkPermission("DeleteSubCPMK") &&  (
            <Link to=''>
              <Button 
            	variant=
            				"info"
                onClick={() => setShowModalKonfirmasiHapusSubCPMK(true)}
              >
                Hapus
              </Button>
            </Link>
            
          )
          
  ,
          checkPermission("UpdateSubCPMK") &&  (
    <Link to={`/subcpmk/ubah?id=${subItem.id}`}>
      <Button 
    	variant=
    				"secondary"
      >
        Ubah
      </Button>
    </Link>
    
  )
  
        ]}
    	  itemsModals={(subItem) => [
  	      <Modal
  	         isShow={showModalKonfirmasiHapusSubCPMK}
  	         title={"Konfirmasi Hapus Sub CPMK"}
  	      >
  	       <Link to=''><Button variant="tertiary" onClick={() => setShowModalKonfirmasiHapusSubCPMK(false)}>Batal</Button></Link>
  	      <Button
  	        variant="danger"
  	        onClick={() => hapus(subItem)}
  	      >
  	        Hapus
  	      </Button>
  	      </Modal>
  	      
        ]}
  	/>
  )
};

export default SubTable;
