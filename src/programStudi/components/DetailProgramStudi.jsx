/*
	Generated on 13/06/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.4.0
*/
import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { useAuth } from 'commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from 'commons/components';

import deleteProgramStudi from '../services/deleteProgramStudi.js';

import * as Layouts from "commons/layouts";


const DetailProgramStudi = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
    const [showModalKonfirmasiHapusProgramStudi, setShowModalKonfirmasiHapusProgramStudi] = React.useState(false); 
    
    const ubah = async () => {
      navigate(
        '/programstudi/ubah?'
        + `id=${data.id}`
        
      );
    };
    
  
    const hapus = async () => {
      await deleteProgramStudi({
        id: data.id,
      });
      navigate('/programstudi');
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
          id: "nama",
          condition: "",
          label: "Nama",
          featureName: "nama",
        }
        ,
        {
          id: "kaprodi",
          condition: "",
          label: "Kaprodi",
          featureName: "kaprodi",
        }
        ,
        {
          id: "jenjang",
          condition: "",
          label: "Jenjang",
          featureName: "jenjang",
        }
        
      ]}
      itemsEvents={[
            checkPermission("DeleteProgramStudi") &&  (
              <Button
                variant="tertiary"
                onClick={() => setShowModalKonfirmasiHapusProgramStudi(true)}
              >
                Hapus
              </Button>
            )
        ,
            checkPermission("UpdateProgramStudi") &&  (
              <Button
                variant="secondary"
                onClick={() => ubah()}
              >
                Ubah
              </Button>
            )
        
      ]}
      itemsModals={[
        <Modal
           isShow={showModalKonfirmasiHapusProgramStudi}
           title={"Konfirmasi Hapus Program Studi"}
        >
           <Link to=''><Button variant="tertiary" onClick={() => setShowModalKonfirmasiHapusProgramStudi(false)}>Batal</Button></Link>
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

export default DetailProgramStudi;