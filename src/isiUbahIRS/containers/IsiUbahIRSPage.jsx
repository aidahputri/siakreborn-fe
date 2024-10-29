/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.5
*/
import React, { useEffect, useState, useContext } from "react";
import { Button, Spinner } from "@/commons/components";
import * as Layouts from "@/commons/layouts";
import { Link, useParams } from "react-router-dom";
import { HeaderContext } from "@/commons/components";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/commons/auth";
import FormIsiIRS from "../components/FormIsiIRS";
import KelasTable from "../components/KelasTable";

import getKelasRencanaStudiDataList from "../services/getKelasRencanaStudiDataList";
const IsiUbahIRSPage = (props) => {
  const { checkPermission } = useAuth();

  const [isLoading, setIsLoading] = useState({
    isiIRS: false,
    tableKelasRencanaStudi: false,
  });
  const { setTitle } = useContext(HeaderContext);

  const [kelasRencanaStudiDataList, setKelasRencanaStudiDataList] = useState();
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [formTitle, setFormTitle] = useState();

  const handleChange = (item) => {
    const mkIdx = selectedClasses.findIndex(
      (i) => i.mataKuliahId === item.mataKuliahId
    );

    const idx = selectedClasses.findIndex((i) => i.id === item.id);

    if (idx !== -1) {
      setSelectedClasses([
        ...selectedClasses.slice(0, idx),
        ...selectedClasses.slice(idx + 1),
      ]);
    } else if (mkIdx !== -1) {
      setSelectedClasses([
        ...selectedClasses.filter((i) => i.mataKuliahId !== item.mataKuliahId),
        item,
      ]);
    } else setSelectedClasses([...selectedClasses, item]);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading((prev) => ({ ...prev, tableKelasRencanaStudi: true }));
        const { data: kelasRencanaStudiDataList } =
          await getKelasRencanaStudiDataList({});
        setKelasRencanaStudiDataList(kelasRencanaStudiDataList.data.mataKuliah);
        setFormTitle(kelasRencanaStudiDataList.data.title);
      } finally {
        setIsLoading((prev) => ({ ...prev, tableKelasRencanaStudi: false }));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setTitle("Isi/Ubah IRS Page");
  }, []);

  useEffect(() => {
    console.log(kelasRencanaStudiDataList);
  }, [kelasRencanaStudiDataList]);

  return (
    <Layouts.ViewContainerLayout
      buttons={
        <>
          <></>
        </>
      }
    >
      <Layouts.FormContainerLayout singularName={"IRS"}>
        <FormIsiIRS
          formTitle={formTitle}
          kelasRencanaStudiDataList={kelasRencanaStudiDataList}
          selectedClasses={selectedClasses}
          handleChange={handleChange}
          isLoading={isLoading.tableKelasRencanaStudi}
        />
      </Layouts.FormContainerLayout>
    </Layouts.ViewContainerLayout>
  );
};
export default IsiUbahIRSPage;
