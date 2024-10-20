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
import TermTable from "../components/TermTable";

import getTermRiwayatAkademisDataList from "../services/getTermRiwayatAkademisDataList";
import MKTable from "../components/MKTable";

import getMKRiwayatAkademisDataList from "../services/getMKRiwayatAkademisDataList";
import { useSelectionContext } from "@/laporanCPMK/context/SelectionField";
import SelectionFieldReport from "@/commons/components/Form/SelectionFieldReport";

const DaftarRiwayatAkademisPage = (props) => {
  const { checkPermission } = useAuth();

  const [isLoading, setIsLoading] = useState({
    tableTermRiwayatAkademis: false,
    tableMKRiwayatAkademis: false,
  });

  const { setTitle } = useContext(HeaderContext);
  const { selectedValue, setSelectedValue } = useSelectionContext();

  const riwayatOptions = [
    { id: "Berdasarkan Term", name: "Berdasarkan Term" },
    { id: "Berdasarkan Mata Kuliah", name: "Berdasarkan Mata Kuliah" },
  ];

  function formatAcademicYear(code) {
    const [academicYear, term] = code.split(" - ");
    return `Tahun Ajaran ${academicYear} Term ${term}`;
  }

  const [termRiwayatAkademisDataList, setTermRiwayatAkademisDataList] =
    useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading((prev) => ({ ...prev, tableTermRiwayatAkademis: true }));
        const { data: termRiwayatAkademisDataList } =
          await getTermRiwayatAkademisDataList({});
        setTermRiwayatAkademisDataList(termRiwayatAkademisDataList.data);
      } finally {
        setIsLoading((prev) => ({ ...prev, tableTermRiwayatAkademis: false }));
      }
    };
    checkPermission("ReadKelasMahasiswaMe") && fetchData();
  }, []);

  const [mKRiwayatAkademisDataList, setMKRiwayatAkademisDataList] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading((prev) => ({ ...prev, tableMKRiwayatAkademis: true }));
        const { data: mKRiwayatAkademisDataList } =
          await getMKRiwayatAkademisDataList({});
        setMKRiwayatAkademisDataList(mKRiwayatAkademisDataList.data);
      } finally {
        setIsLoading((prev) => ({ ...prev, tableMKRiwayatAkademis: false }));
      }
    };
    checkPermission("ReadKelasMahasiswaMe") && fetchData();
  }, []);

  useEffect(() => {
    if (!selectedValue) {
      setSelectedValue("Berdasarkan Term");
    }
  }, [selectedValue]);

  useEffect(() => {
    setTitle("Daftar Riwayat Akademis");
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
        <SelectionFieldReport
          label="Pilihan Riwayat Akademis"
          options={riwayatOptions}
          placeholder="Masukkan pilihan tampilan riwayat akademis"
          isRequired={true}
        />
      </div>

      {selectedValue && selectedValue === "Berdasarkan Term" && (
        <>
          {isLoading.tableTermRiwayatAkademis ? (
            <div className="flex justify-center items-center h-full">
              <Spinner />
            </div>
          ) : (
            <>
              {termRiwayatAkademisDataList?.map((term, idx) => {
                return (
                  <div key={idx} className="flex flex-col gap-4">
                    <Layouts.ListContainerTableLayout
                      title={
                        term.kode
                          ? formatAcademicYear(term.kode)
                          : "Undefined term"
                      }
                      singularName={"Berdasarkan Term"}
                      items={[term.kelas]}
                      isLoading={isLoading.tableTermRiwayatAkademis}
                    >
                      <TermTable termRiwayatAkademisDataList={term.kelas} />
                    </Layouts.ListContainerTableLayout>
                  </div>
                );
              })}
            </>
          )}
        </>
      )}

      {selectedValue && selectedValue === "Berdasarkan Mata Kuliah" && (
        <>
          {isLoading.tableMKRiwayatAkademis ? (
            <div className="flex justify-center items-center h-full">
              <Spinner />
            </div>
          ) : (
            <>
              {mKRiwayatAkademisDataList?.map((mk, idx) => {
                return (
                  <div key={idx} className="flex flex-col gap-4">
                    <Layouts.ListContainerTableLayout
                      title={mk.mataKuliahNama}
                      singularName={"MK"}
                      items={[[mk]]}
                      isLoading={isLoading.tableMKRiwayatAkademis}
                    >
                      <MKTable mKRiwayatAkademisDataList={[mk]} />
                    </Layouts.ListContainerTableLayout>
                  </div>
                );
              })}
            </>
          )}
        </>
      )}
    </Layouts.ViewContainerLayout>
  );
};
export default DaftarRiwayatAkademisPage;
