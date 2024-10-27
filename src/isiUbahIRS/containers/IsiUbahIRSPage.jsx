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
// import FormIsiIRS from "../components/FormIsiIRS";
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
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading((prev) => ({ ...prev, tableKelasRencanaStudi: true }));
        const { data: kelasRencanaStudiDataList } =
          await getKelasRencanaStudiDataList({});
        setKelasRencanaStudiDataList(kelasRencanaStudiDataList.data);
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
      {/* <Layouts.FormContainerLayout singularName={"IRS"}>
        <FormIsiIRS {...props} />
      </Layouts.FormContainerLayout> */}
      {kelasRencanaStudiDataList?.map((mk, idx) => {
        return (
          <div key={idx} className="flex flex-col gap-4">
            <Layouts.ListContainerTableLayout
              title={`[${mk.kode ?? "Undefined"}] ${mk.name ?? ""} (${mk.sks ?? "0"} SKS, Term ${mk.term ?? "0"}); Kurikulum ${mk.kurikulumName ?? "Undefined"}`}
              singularName={"Kelas"}
              items={[mk.kelas]}
              isLoading={isLoading.tableKelasRencanaStudi}
            >
              <KelasTable kelasRencanaStudiDataList={mk.kelas} />
            </Layouts.ListContainerTableLayout>
          </div>
        );
      })}
    </Layouts.ViewContainerLayout>
  );
};
export default IsiUbahIRSPage;
