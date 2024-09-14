/*
	Generated on 13/06/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.4.0
*/
import React, { useEffect, useState, useContext } from "react";
import { Button, Spinner } from "commons/components";
import * as Layouts from "commons/layouts";
import { Link, useParams } from "react-router-dom";
import { HeaderContext } from "commons/components";
import isSelectedFeature from "commons/utils/isSelectedFeature";
import { useNavigate } from "react-router-dom";
import { useAuth } from "commons/auth";
import LaporanTable from "../components/LaporanTable";

// import getLaporanCPMKDataList from '../services/getLaporanCPMKDataList'
const LaporanCPMKPage = (props) => {
  const { checkPermission } = useAuth();

  const [isLoading, setIsLoading] = useState({
    tableLaporanCPMK: false,
  });
  const { setTitle } = useContext(HeaderContext);

  const [laporanCPMKDataList, setLaporanCPMKDataList] = useState();
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setIsLoading((prev) => ({ ...prev, tableLaporanCPMK: true }));
//         const { data: laporanCPMKDataList } = await getLaporanCPMKDataList();
//         setLaporanCPMKDataList(laporanCPMKDataList.data);
//       } finally {
//         setIsLoading((prev) => ({ ...prev, tableLaporanCPMK: false }));
//       }
//     };
//     fetchData();
//   }, []);

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
      <Layouts.ListContainerTableLayout
        title={"Table Laporan CPMK"}
        singularName={"Laporan"}
        items={[laporanCPMKDataList]}
        isLoading={isLoading.tableLaporanCPMK}
      >
        <LaporanTable laporanCPMKDataList={laporanCPMKDataList} />
      </Layouts.ListContainerTableLayout>
    </Layouts.ViewContainerLayout>
  );
};
export default LaporanCPMKPage;
