/*
	Generated on 13/06/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.4.0
*/
import React, { useEffect, useState, useContext } from "react";
import { Button, SelectionField, Spinner } from "commons/components";
import * as Layouts from "commons/layouts";
import { HeaderContext } from "commons/components";
import { useAuth } from "commons/auth";
import LaporanTable from "../components/LaporanTable";
import getMataKuliahDataList from "laporanCPMK/services/getMataKuliahDataList";
import getKelasSelectionField from "laporanCPMK/services/getKelasSelectionField";
import { useSelectionContext } from "laporanCPMK/context/SelectionField";

import getLaporanCPMKDataList from "../services/getLaporanCPMKDataList";
const LaporanCPMKPage = (props) => {
  const { checkPermission } = useAuth();

  const [isLoading, setIsLoading] = useState({
    tableLaporanCPMK: false,
  });
  const { setTitle } = useContext(HeaderContext);
  const { selectedValue } = useSelectionContext();

  const [laporanCPMKDataList, setLaporanCPMKDataList] = useState();
  const [kelasSelectionField, setKelasSelectionField] = useState();
  const [listMataKuliah, setListMataKuliah] = useState([]);
  useEffect(() => {
    const fetchDataMataKuliah = async () => {
      try {
        setIsLoading((prev) => ({ ...prev, tableLaporanCPMK: true }));
        const { data: mataKuliahDataList } = await getMataKuliahDataList();
        setListMataKuliah(mataKuliahDataList.data);
      } finally {
        setIsLoading((prev) => ({ ...prev, tableLaporanCPMK: false }));
      }
    };
    const fetchDataKelas = async () => {
      try {
        setIsLoading((prev) => ({ ...prev, tableLaporanCPMK: true }));
        const { data: kelasSelectionField } = await getKelasSelectionField();
        setKelasSelectionField(kelasSelectionField.data);
      } finally {
        setIsLoading((prev) => ({ ...prev, tableLaporanCPMK: false }));
      }
    };

    if (checkPermission("ReadLaporanCPMK")) {
      fetchDataMataKuliah();
      fetchDataKelas();
    }
  }, []);

  useEffect(() => {
    const fetchDataLaporanCPMK = async () => {
      try {
        setIsLoading((prev) => ({ ...prev, tableLaporanCPMK: true }));
        const { data: laporanCPMKDataList } = await getLaporanCPMKDataList({
          mataKuliahId: selectedValue,
        });
        setLaporanCPMKDataList(laporanCPMKDataList.data);
      } finally {
        setIsLoading((prev) => ({ ...prev, tableLaporanCPMK: false }));
      }
    };
    checkPermission("ReadLaporanCPMK") && fetchDataLaporanCPMK();
  }, [selectedValue]);

  useEffect(() => {
    console.log(laporanCPMKDataList);
  }, [laporanCPMKDataList]);

  useEffect(() => {
    setTitle("Laporan CPMK Page");
  }, []);
  return (
    <Layouts.ViewContainerLayout
      buttons={
        <>
          <></>
        </>
      }
    >
      <div className="flex w-fit place-self-end">
        <SelectionField
          label="Pilihan Mata Kuliah"
          options={listMataKuliah}
          placeholder="Masukkan pilihan mata kuliah"
          isRequired={false}
        />
      </div>
      <Layouts.ListContainerTableLayout
        title={"Table Laporan CPMK"}
        singularName={"Laporan"}
        items={[laporanCPMKDataList?.mahasiswaList ?? [], kelasSelectionField]}
        isLoading={isLoading.tableLaporanCPMK}
      >
        <LaporanTable
          laporanCPMKDataList={laporanCPMKDataList?.mahasiswaList ?? []}
          kelasSelectionField={kelasSelectionField}
          cpmkList={laporanCPMKDataList?.cpmkList ?? []}
        />
      </Layouts.ListContainerTableLayout>
    </Layouts.ViewContainerLayout>
  );
};
export default LaporanCPMKPage;
