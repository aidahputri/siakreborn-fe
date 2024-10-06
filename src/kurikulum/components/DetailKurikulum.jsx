/*
	Generated on 13/06/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.4.0
*/
import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { useAuth } from 'commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from 'commons/components';

import deleteKurikulum from '../services/deleteKurikulum.js';

import * as Layouts from "commons/layouts";


const DetailKurikulum = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
    const [showModalKonfirmasiHapusKurikulum, setShowModalKonfirmasiHapusKurikulum] = React.useState(false); 
    const ubah = async () => {
      navigate(
        '/kurikulum/ubah?'
        + `id=${data.id}`
        
      );
    };
    
    
  
    const hapus = async () => {
      await deleteKurikulum({
        id: data.id,
      });
      navigate('/kurikulum');
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
          id: "nomorSK",
          condition: "",
          label: "Nomor SK",
          featureName: "noSK",
        }
        ,
        {
          id: "status",
          condition: "",
          label: "Status",
          featureName: "status",
        }
        ,
        {
          id: "profilLulusan",
          condition: "",
          label: "Profil Lulusan",
          featureName: "profilLulusan",
        }
        ,
        {
          id: "programStudi",
          condition: "",
          label: "Program Studi",
          featureName: "programStudiName",
        }
        
      ]}
      itemsEvents={[
            checkPermission("UpdateKurikulum") &&  (
              <Button
                variant="secondary"
                onClick={() => ubah()}
              >
                Ubah
              </Button>
            )
        ,
            checkPermission("DeleteKurikulum") &&  (
              <Button
                variant="tertiary"
                onClick={() => setShowModalKonfirmasiHapusKurikulum(true)}
              >
                Hapus
              </Button>
            )
        
      ]}
      itemsModals={[
        <Modal
           isShow={showModalKonfirmasiHapusKurikulum}
           title={"Konfirmasi Hapus Kurikulum"}
        >
           <Link to=''><Button variant="tertiary" onClick={() => setShowModalKonfirmasiHapusKurikulum(false)}>Batal</Button></Link>
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

export default DetailKurikulum;
