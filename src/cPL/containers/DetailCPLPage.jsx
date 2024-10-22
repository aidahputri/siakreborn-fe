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
import DetailCPL from "../components/DetailCPL";
import getCPLDataDetail from "../services/getCPLDataDetail";
import DataTable from "../components/DataTable";

import getBobot from "../services/getBobot";
const DetailCPLPage = (props) => {
  const { checkPermission } = useAuth();

  const [isLoading, setIsLoading] = useState({
    detailCPL: false,
    tableDataCPMK: false,
  });
  const { setTitle } = useContext(HeaderContext);

  const [cPLDataDetail, setCPLDataDetail] = useState();
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading((prev) => ({ ...prev, detailCPL: true }));
        const { data: cPLDataDetail } = await getCPLDataDetail({ id });
        setCPLDataDetail(cPLDataDetail.data);
      } finally {
        setIsLoading((prev) => ({ ...prev, detailCPL: false }));
      }
    };
    fetchData();
  }, []);
  const [bobot, setBobot] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading((prev) => ({ ...prev, tableDataCPMK: true }));
        const { data: bobot } = await getBobot({ parentCPLId: id });
        setBobot(bobot.data);
      } finally {
        setIsLoading((prev) => ({ ...prev, tableDataCPMK: false }));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setTitle("Detail CPL Page");
  }, []);

  return (
    <Layouts.ViewContainerLayout
      buttons={
        <>
          <Layouts.ViewContainerBackButtonLayout>
            <Link to={`/cpl`}>
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
        title={"Detail CPL"}
        singularName={"CPL"}
        items={{ ...cPLDataDetail }}
        isLoading={isLoading.detailCPL}
        isCorrelatedWithAnotherComponent={false}
      >
        <DetailCPL {...{ data: { ...cPLDataDetail } }} />
      </Layouts.DetailContainerLayout>
      <Layouts.ListContainerTableLayout
        title={"Table Data CPMK"}
        singularName={"Data"}
        items={[bobot]}
        isLoading={isLoading.tableDataCPMK}
      >
        <DataTable bobot={bobot} />
      </Layouts.ListContainerTableLayout>
    </Layouts.ViewContainerLayout>
  );
};
export default DetailCPLPage;
