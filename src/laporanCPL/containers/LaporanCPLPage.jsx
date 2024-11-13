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
import LaporanCPLTable from "../components/LaporanTable";
import { BarChart } from "@/commons/Chart/BarChart";

import getLaporanCPLDataList from "../services/getLaporanCPLDataList";
import getKurikulumDataList from "@/laporanCPL/services/getKurikulumDataList";
import getAverageCPLDataList from "@/laporanCPL/services/getAverageCPLDataList";
import SelectionFieldReport from "@/commons/components/Form/SelectionFieldReport";

const LaporanCPLPage = (props) => {
  const { checkPermission } = useAuth();

  const [isLoading, setIsLoading] = useState({
    tableLaporanCPL: false,
    kurikulum: false,
    barChart: false,
  });
  const { setTitle } = useContext(HeaderContext);
  const [selectedValue, setSelectedValue] = useState();

  const [laporanCPLDataList, setLaporanCPLDataList] = useState();
  const [kurikulumDataList, setKurikulumDataList] = useState([]);
  const [chartData, setChartData] = useState();

  useEffect(() => {
    const fetchKurikulum = async () => {
      try {
        setIsLoading((prev) => ({ ...prev, kurikulum: true }));
        const { data: kurikulumDataList } = await getKurikulumDataList();
        setKurikulumDataList(kurikulumDataList.data);
      } finally {
        setIsLoading((prev) => ({ ...prev, kurikulum: false }));
      }
    };

    checkPermission("ReadLaporanCPL") && fetchKurikulum();
  }, []);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        setIsLoading((prev) => ({ ...prev, barChart: true }));
        const { data: chartData } = await getAverageCPLDataList({
          kurikulumId: selectedValue,
        });
        setChartData(chartData.data);
      } finally {
        setIsLoading((prev) => ({ ...prev, barChart: false }));
      }
    };
    checkPermission("ReadLaporanCPL") && selectedValue && fetchChartData();
  }, [selectedValue]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading((prev) => ({ ...prev, tableLaporanCPL: true }));
        const { data: laporanCPLDataList } = await getLaporanCPLDataList({
          kurikulumId: selectedValue,
        });
        setLaporanCPLDataList(laporanCPLDataList.data);
      } finally {
        setIsLoading((prev) => ({ ...prev, tableLaporanCPL: false }));
      }
    };
    checkPermission("ReadLaporanCPL") && selectedValue && fetchData();
  }, [selectedValue]);

  useEffect(() => {
    setTitle("Laporan CPL Page");
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
          label="Pilihan Kurikulum"
          options={kurikulumDataList}
          placeholder="Masukkan pilihan kurikulum"
          isRequired={true}
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
      </div>
      {isLoading.barChart ? (
        <div className="flex justify-center items-center h-full">
          <Spinner />
        </div>
      ) : (
        <>
          {chartData && chartData.data.length > 0 && (
            <BarChart
              title={"Laporan CPL"}
              xLabel={"CPL"}
              yLabel={"Rata-rata Nilai CPL"}
              data={chartData?.data ?? []}
              labels={chartData?.labels ?? []}
            />
          )}
        </>
      )}
      {isLoading.tableLaporanCPL ? (
        <div className="flex justify-center items-center h-full">
          <Spinner />
        </div>
      ) : (
        <>
          {laporanCPLDataList &&
            laporanCPLDataList.mataKuliahList.length > 0 && (
              <Layouts.ListContainerTableLayout
                title={"Data Laporan CPL"}
                singularName={"Laporan"}
                items={[laporanCPLDataList?.mataKuliahList ?? []]}
                isLoading={isLoading.tableLaporanCPL}
              >
                <LaporanCPLTable
                  laporanCPLDataList={laporanCPLDataList?.mataKuliahList ?? []}
                  cplList={laporanCPLDataList?.cplList ?? []}
                />
              </Layouts.ListContainerTableLayout>
            )}
        </>
      )}
    </Layouts.ViewContainerLayout>
  );
};
export default LaporanCPLPage;
