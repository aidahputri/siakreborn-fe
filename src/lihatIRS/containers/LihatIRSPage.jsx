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
import IRS from "../components/IRS";
import getDetailIRSDataList from "../services/getDetailIRSDataList";
import MataTable from "../components/MataTable";

import getMataKuliahDipilihDataList from "../services/getMataKuliahDipilihDataList";
const LihatIRSPage = (props) => {
  const { checkPermission } = useAuth();

  const [isLoading, setIsLoading] = useState({
    iRS: false,
    tableMataKuliahDipilih: false,
  });
  const { setTitle } = useContext(HeaderContext);

  const [detailIRSDataList, setDetailIRSDataList] = useState();
  const {} = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading((prev) => ({ ...prev, iRS: true }));
        const { data: detailIRSDataList } = await getDetailIRSDataList({
          invalid,
        });
        setDetailIRSDataList(detailIRSDataList.data);
      } finally {
        setIsLoading((prev) => ({ ...prev, iRS: false }));
      }
    };
    fetchData();
  }, []);
  const [mataKuliahDipilihDataList, setMataKuliahDipilihDataList] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading((prev) => ({ ...prev, tableMataKuliahDipilih: true }));
        const { data: mataKuliahDipilihDataList } =
          await getMataKuliahDipilihDataList();
        setMataKuliahDipilihDataList(mataKuliahDipilihDataList.data);
      } finally {
        setIsLoading((prev) => ({ ...prev, tableMataKuliahDipilih: false }));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setTitle("Lihat IRS Page");
  }, []);
  return (
    <Layouts.ViewContainerLayout
      buttons={
        <>
          <Layouts.ViewContainerButtonLayout>
            <Link
              to={`
			  	`}
            >
              {" "}
              <Button className="p-2 w-full" variant="primary">
                Isi/Ubah IRS
              </Button>
            </Link>
          </Layouts.ViewContainerButtonLayout>
        </>
      }
    >
      <Layouts.DetailContainerLayout
        title={"IRS"}
        singularName={""}
        items={{ ...detailIRSDataList }}
        isLoading={isLoading.iRS}
        isCorrelatedWithAnotherComponent={false}
      >
        <IRS {...{ data: { ...detailIRSDataList } }} />
      </Layouts.DetailContainerLayout>
      <Layouts.ListContainerTableLayout
        title={"Table Mata Kuliah Dipilih"}
        singularName={"Mata"}
        items={[mataKuliahDipilihDataList]}
        isLoading={isLoading.tableMataKuliahDipilih}
      >
        <MataTable mataKuliahDipilihDataList={mataKuliahDipilihDataList} />
      </Layouts.ListContainerTableLayout>
    </Layouts.ViewContainerLayout>
  );
};
export default LihatIRSPage;
