/*
	Generated on 13/06/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.4.0
*/
import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';

import deleteSubCPMK from '../services/deleteSubCPMK';

import * as Layouts from "@/commons/layouts";


const DetailSubCPMK = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
    const [showModalKonfirmasiHapusSubCPMK, setShowModalKonfirmasiHapusSubCPMK] = React.useState(false); 
  
    const hapus = async () => {
      await deleteSubCPMK({
      });
      navigate('/subcpmk');
    };
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
        
      ]}
      itemsEvents={[
        
      ]}
      itemsModals={[
        <Modal
           isShow={showModalKonfirmasiHapusSubCPMK}
           title={"Konfirmasi Hapus Sub CPMK"}
        >
           <Link to=''><Button variant="tertiary" onClick={() => setShowModalKonfirmasiHapusSubCPMK(false)}>Batal</Button></Link>
          <Button
            variant="danger"
            onClick={() => hapus()}
          >
            Hapus
          </Button>
        </Modal>
        
      ]}
    />
  );
};

export default DetailSubCPMK;
