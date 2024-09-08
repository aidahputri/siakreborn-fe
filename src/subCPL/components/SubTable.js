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

import deleteSubCPL from '../services/deleteSubCPL'

import * as Layouts from "commons/layouts";

const SubTable = ({ subCPLDataList

	}) => {
  const { checkPermission } = useAuth();
  
  const [showModalKonfirmasiHapusSubCPL, setShowModalKonfirmasiHapusSubCPL] = React.useState(false);
  const hapus = async  (sub) => {
    await deleteSubCPL({
        id: sub.id,
    });
    window.location.reload(false);
      };
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[subCPLDataList]}
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
            id: "cPL",
            condition: "isHeading",
            label: "CPL",
            featureName: "parentCPLKode",
  		}
  ,
  		{
            id: "bobot",
            condition: "isHeading",
            label: "Bobot",
            featureName: "bobot",
  		}
  	  ]}
        itemsEvents={(subItem) => [
          checkPermission("DeleteSubCPL") &&  (
            <Link to=''>
              <Button 
            	variant=
            				"info"
                onClick={() => setShowModalKonfirmasiHapusSubCPL(true)}
              >
                Hapus
              </Button>
            </Link>
            
          )
          
  ,
          checkPermission("UpdateSubCPL") &&  (
    <Link to={`/subcpl/ubah?id=${subItem.id}`}>
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
  	         isShow={showModalKonfirmasiHapusSubCPL}
  	         title={"Konfirmasi Hapus Sub CPL"}
  	      >
  	       <Link to=''><Button variant="tertiary" onClick={() => setShowModalKonfirmasiHapusSubCPL(false)}>Batal</Button></Link>
  	      <Button
  	        variant="tertiary"
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
