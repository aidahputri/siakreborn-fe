/*
	Generated on 13/06/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.4.0
*/
import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';

import deleteCPMK from '../services/deleteCPMK';

import * as Layouts from "@/commons/layouts";


const DetailCPMK = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
    const [showModalKonfirmasiHapusCPMK, setShowModalKonfirmasiHapusCPMK] = React.useState(false); 
    
    const ubahCPMK = async () => {
      navigate(
        '/cpmk/ubah?'
        + `id=${data.id}`
        
      );
    };
    
    
  
    const hapus = async () => {
      await deleteCPMK({
        id: data.id,
      });
      navigate('/cpmk');
    };
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
        {
          id: "kode",
          condition: "",
          label: "Kode",
          featureName: "kode",
        }
        ,
        {
          id: "deskripsi",
          condition: "",
          label: "Deskripsi",
          featureName: "deskripsi",
        }
        ,
        {
          id: "bobot",
          condition: "",
          label: "Bobot",
          featureName: "bobot",
        }
        
      ]}
      itemsEvents={[
            checkPermission("DeleteCPMK") &&  (
              <Button
                variant="tertiary"
                onClick={() => setShowModalKonfirmasiHapusCPMK(true)}
              >
                Hapus
              </Button>
            )
        ,
            checkPermission("UpdateCPMK") &&  (
              <Button
                variant="secondary"
                onClick={() => ubahCPMK()}
              >
                Ubah
              </Button>
            )
        
      ]}
      itemsModals={[
        <Modal
           isShow={showModalKonfirmasiHapusCPMK}
           title={"Konfirmasi Hapus CPMK"}
        >
           <Link to=''><Button variant="tertiary" onClick={() => setShowModalKonfirmasiHapusCPMK(false)}>Batal</Button></Link>
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

export default DetailCPMK;
