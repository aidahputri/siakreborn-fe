/*
	Generated on 13/06/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.4.0
*/
import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";

import { useAuth } from "@/commons/auth";
import {
  Button,
  Detail,
  VisualizationAttr,
  Modal,
  Spinner,
} from "@/commons/components";

import deleteSubCPMK from "../services/deleteSubCPMK";

import * as Layouts from "@/commons/layouts";

const DetailCapaian = ({ data }) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const [showModalKonfirmasiHapusSubCPMK, setShowModalKonfirmasiHapusSubCPMK] =
    React.useState(false);
  const ubah = async () => {
    navigate("/subcpmk/ubah?" + `id=${data.id}`);
  };

  const hapus = async () => {
    await deleteSubCPMK({
      id: data.id,
    });
    navigate("/subcpmk");
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
        },
        {
          id: "deskripsi",
          condition: "",
          label: "Deskripsi",
          featureName: "deskripsi",
        },
        {
          id: "parentCPMKKode",
          condition: "",
          label: "CPMK",
          featureName: "parentCPMKKode",
        },
        {
          id: "bobot",
          condition: "",
          label: "Bobot",
          featureName: "bobot",
        },
      ]}
      itemsEvents={[
        <Button variant="secondary" onClick={() => ubah()}>
          Ubah
        </Button>,
        <Button
          variant="tertiary"
          onClick={() => setShowModalKonfirmasiHapusSubCPMK(true)}
        >
          Hapus
        </Button>,
      ]}
      itemsModals={[
        <Modal
          isShow={showModalKonfirmasiHapusSubCPMK}
          title={"Konfirmasi Hapus Sub CPMK"}
        >
          <Link to="">
            <Button
              variant="tertiary"
              onClick={() => setShowModalKonfirmasiHapusSubCPMK(false)}
            >
              Batal
            </Button>
          </Link>
          <Button variant="danger" onClick={() => hapus()}>
            Hapus
          </Button>
        </Modal>,
      ]}
    />
  );
};

export default DetailCapaian;
