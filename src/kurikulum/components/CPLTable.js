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
import { isMobile } from 'commons/utils/responsive';

import deleteKurikulum from '../services/deleteKurikulum'

import * as Layouts from "commons/layouts";

const CPLTable = ({ cPLDataList

	}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (cPLItem) => {
    isMobile() && navigate(`/cpl/${cPLItem.id}`
    );
  };
  
  const [showModalKonfirmasiHapusKurikulum, setShowModalKonfirmasiHapusKurikulum] = React.useState(false);
  const hapus = async  (cPL) => {
    await deleteKurikulum({
        id: cPL.id,
    });
    window.location.reload(false);
      };
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[cPLDataList]}
  	  detail={detail}
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
  	  ]}
        itemsEvents={(cPLItem) => [
          <Link to={`/cpl/:id`}>
            <Button 
          	variant=
          		"primary"
            >
              Detail
            </Button>
          </Link>
          
          
        ]}
    	  itemsModals={(cPLItem) => [
  	      <Modal
  	         isShow={showModalKonfirmasiHapusKurikulum}
  	         title={"Konfirmasi Hapus Kurikulum"}
  	      >
  	       <Link to=''><Button variant="tertiary" onClick={() => setShowModalKonfirmasiHapusKurikulum(false)}>Batal</Button></Link>
  	      <Button
  	        variant="danger"
  	        onClick={() => hapus(cPLItem)}
  	      >
  	        Hapus
  	      </Button>
  	      </Modal>
  	      
        ]}
  	/>
  )
};

export default CPLTable;
