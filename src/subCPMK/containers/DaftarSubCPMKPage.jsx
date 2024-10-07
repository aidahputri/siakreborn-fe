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
import SubTable from "../components/SubTable";

import getSubCPMKDataList from "../services/getSubCPMKDataList";
const DaftarSubCPMKPage = (props) => {
  const { checkPermission } = useAuth();

  const [isLoading, setIsLoading] = useState({
    tableSubCPMK: false,
  });
  const { setTitle } = useContext(HeaderContext);

  const [subCPMKDataList, setSubCPMKDataList] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading((prev) => ({ ...prev, tableSubCPMK: true }));
        const { data: subCPMKDataList } = await getSubCPMKDataList();
        setSubCPMKDataList(subCPMKDataList.data);
      } finally {
        setIsLoading((prev) => ({ ...prev, tableSubCPMK: false }));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setTitle("Daftar Sub CPMK Page");
  }, []);
  return (
    <Layouts.ViewContainerLayout
      buttons={
        <>
          <Layouts.ViewContainerButtonLayout>
            {checkPermission("CreateSubCPMK") && (
              <Link to={`/subcpmk/tambah`}>
                {" "}
                <Button className="p-2" variant="primary">
                  Tambah Sub CPMK
                </Button>
              </Link>
            )}
          </Layouts.ViewContainerButtonLayout>
        </>
      }
    >
      <Layouts.ListContainerTableLayout
        title={"Table Sub CPMK"}
        singularName={"Sub"}
        items={[subCPMKDataList]}
        isLoading={isLoading.tableSubCPMK}
      >
        <SubTable subCPMKDataList={subCPMKDataList} />
      </Layouts.ListContainerTableLayout>
    </Layouts.ViewContainerLayout>
  );
};
export default DaftarSubCPMKPage;