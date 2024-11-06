/*
	Generated on 13/06/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.4.0
*/
import React, { useEffect, useState, useContext } from "react";
import { Button, Spinner } from "@/commons/components";
import * as Layouts from "@/commons/layouts";
import { Link, useParams } from "react-router-dom";
import { HeaderContext } from "@/commons/components";
import isSelectedFeature from "@/commons/utils/isSelectedFeature";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/commons/auth";
import DetailKelas from "../components/DetailKelas";
import getKelasDataDetail from "../services/getKelasDataDetail";
import DosenTable from "../components/DosenTable";

import getDosenDataList from "../services/getDosenDataList";
import KomponenTable from "../components/KomponenTable";

import getKomponenPenilaianDataList from "../services/getKomponenPenilaianDataList";
import PenilaianTable from "../components/PenilaianTable";

import getPenilaianMahasiswaDataList from "../services/getPenilaianMahasiswaDataList";
import DetailTable from "../components/DetailTable";

import getNilaiAkhirMahasiswaDataList from "../services/getNilaiAkhirMahasiswaDataList";

const DetailKelasPage = (props) => {
  const { checkPermission } = useAuth();

  const [isLoading, setIsLoading] = useState({
    detailKelas: false,
    tableDosen: false,
    tableKomponenPenilaian: false,
    tablePenilaianMahasiswa: false,
    reportNilaiAkhirMahasiswa: false,
  });
  const { setTitle } = useContext(HeaderContext);

  const [kelasDataDetail, setKelasDataDetail] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading((prev) => ({ ...prev, detailKelas: true }));
        const { data: kelasDataDetail } = await getKelasDataDetail({
          kelasId: id,
        });
        setKelasDataDetail(kelasDataDetail.data);
      } finally {
        setIsLoading((prev) => ({ ...prev, detailKelas: false }));
      }
    };
    checkPermission("ReadKelas") && fetchData();
  }, []);

  useEffect(() => {
    setTitle("Detail Kelas Page");
  }, []);

  return (
    <Layouts.ViewContainerLayout
      buttons={
        <>
          <Layouts.ViewContainerBackButtonLayout>
            <Link to={`/kelas`}>
              {" "}
              <Button className="p-4 w-full" variant="secondary">
                Kembali
              </Button>
            </Link>
          </Layouts.ViewContainerBackButtonLayout>
        </>
      }
    >
      <Layouts.DetailContainerLayout
        title={"Detail Kelas"}
        singularName={"Kelas"}
        items={{ ...kelasDataDetail }}
        isLoading={isLoading.detailKelas}
        isCorrelatedWithAnotherComponent={false}
      >
        <DetailKelas {...{ data: { ...kelasDataDetail } }} />
      </Layouts.DetailContainerLayout>
    </Layouts.ViewContainerLayout>
  );
};
export default DetailKelasPage;
