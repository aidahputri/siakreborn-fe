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

import DetailSubCPMK from "../components/DetailSubCPMK";
import DetailCapaian from "../components/DetailCapaian";
import getSubCPMKDataDetail from "../services/getSubCPMKDataDetail";

const DetailSubCPMKPage = (props) => {
  const [isLoading, setIsLoading] = useState({
    detailSubCPMK: false,
    detailCapaian: false,
  });
  const { setTitle } = useContext(HeaderContext);

  const {} = useParams();
  const [capaianDataDetail, setCapaianDataDetail] = useState();
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading((prev) => ({ ...prev, detailCapaian: true }));
        const { data: capaianDataDetail } = await getSubCPMKDataDetail({ id });
        setCapaianDataDetail(capaianDataDetail.data);
      } finally {
        setIsLoading((prev) => ({ ...prev, detailCapaian: false }));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setTitle("Detail SubCPMK Page");
  }, []);
  return (
    <Layouts.ViewContainerLayout
      buttons={
        <>
          <Layouts.ViewContainerBackButtonLayout>
            <Link to={`/subcpmk`}>
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
        title={"Detail SubCPMK"}
        singularName={"SubCPMK"}
        items={{ ...capaianDataDetail }}
        isLoading={isLoading.detailSubCPMK}
        isCorrelatedWithAnotherComponent={false}
      >
        <DetailCapaian {...{ data: { ...capaianDataDetail } }} />
      </Layouts.DetailContainerLayout>
    </Layouts.ViewContainerLayout>
  );
};
export default DetailSubCPMKPage;
