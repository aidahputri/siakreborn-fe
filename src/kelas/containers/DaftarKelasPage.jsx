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
import KelasTable from "../components/KelasTable";

import getDataBinding from "../services/getDataBinding";
const DaftarKelasPage = (props) => {
  const { checkPermission } = useAuth();

  const [isLoading, setIsLoading] = useState({
    tableKelas: false,
  });
  const { setTitle } = useContext(HeaderContext);

  const [dataBinding, setDataBinding] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading((prev) => ({ ...prev, tableKelas: true }));
        const { data: dataBinding } = await getDataBinding({});
        setDataBinding(dataBinding.data);
      } finally {
        setIsLoading((prev) => ({ ...prev, tableKelas: false }));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setTitle("Daftar Kelas Page");
  }, []);

  return (
    <Layouts.ViewContainerLayout
      buttons={
        <>
          <Layouts.ViewContainerButtonLayout>
            {checkPermission("CreateKelas") && (
              <Link to={`/kelas/tambah`}>
                {" "}
                <Button className="p-2" variant="primary">
                  Tambah Kelas
                </Button>
              </Link>
            )}
          </Layouts.ViewContainerButtonLayout>
        </>
      }
    >
      {isLoading.tableKelas ? (
        <div className="flex justify-center items-center h-full">
          <Spinner />
        </div>
      ) : (
        <>
          {dataBinding?.map((mataKuliah, idx) => (
            <div key={idx}>
              <Layouts.ListContainerTableLayout
                title={mataKuliah.nama}
                singularName={"Kelas"}
                items={[mataKuliah.kelas]}
                isLoading={isLoading.tableKelas}
              >
                <KelasTable dataBinding={mataKuliah.kelas} />
              </Layouts.ListContainerTableLayout>
            </div>
          ))}
        </>
      )}
    </Layouts.ViewContainerLayout>
  );
};
export default DaftarKelasPage;
