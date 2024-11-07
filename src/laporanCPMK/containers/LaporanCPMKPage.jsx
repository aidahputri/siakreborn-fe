/*
	Generated on 13/06/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.4.0
*/
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link, useParams } from 'react-router-dom'
import { HeaderContext } from "@/commons/components"
import isSelectedFeature from '@/commons/utils/isSelectedFeature'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/commons/auth';
import LaporanTable from "../components/LaporanTable";
import getMataKuliahDataList from '../services/getMataKuliahDataList';
import getKelasSelectionField from "../services/getKelasSelectionField";

import getLaporanCPMKDataList from "../services/getLaporanCPMKDataList";
import getAverageCPMKDataList from "../services/getAverageCPMKDataList";
import { BarChart } from '@/commons/Chart/BarChart';
import SelectionFieldReport from '@/commons/components/Form/SelectionFieldReport';

const LaporanCPMKPage = (props) => {
  const { checkPermission } = useAuth();

  const [isLoading, setIsLoading] = useState({
    tableLaporanCPMK: false,
    mataKuliah: false,
    kelas: false
  });
  const [isLoadingChart, setIsLoadingChart] = useState({
    barChart: false,
  });
  const { setTitle } = useContext(HeaderContext);
  const [selectedValue, setSelectedValue] = useState()

  const [laporanCPMKDataList, setLaporanCPMKDataList] = useState();
  const [kelasSelectionField, setKelasSelectionField] = useState();
  const [listMataKuliah, setListMataKuliah] = useState([]);
  const [chartData, setChartData] = useState();

  useEffect(() => {
    const fetchDataMataKuliah = async () => {
      try {
        setIsLoading((prev) => ({ ...prev, mataKuliah: true }));
        const { data: mataKuliahDataList } = await getMataKuliahDataList();
        setListMataKuliah(mataKuliahDataList.data);
      } finally {
        setIsLoading((prev) => ({ ...prev, mataKuliah: false }));
      }
    };

    checkPermission("ReadLaporanCPMK") && fetchDataMataKuliah();
  }, []);

  useEffect(() => {
    const fetchDataKelas = async () => {
      try {
        setIsLoading((prev) => ({ ...prev, kelas: true }));
        const { data: kelasSelectionField } = await getKelasSelectionField({
          mataKuliahId: selectedValue,
        });
        setKelasSelectionField(kelasSelectionField.data);
      } finally {
        setIsLoading((prev) => ({ ...prev, kelas: false }));
      }
    };
    checkPermission("ReadLaporanCPMK") && selectedValue && fetchDataKelas();
  }, [selectedValue]);

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
    checkPermission("ReadLaporanCPMK") &&
      selectedValue &&
      fetchDataLaporanCPMK();
  }, [selectedValue]);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        setIsLoadingChart((prev) => ({ ...prev, barChart: true }));
        const { data: chartData } = await getAverageCPMKDataList({
          mataKuliahId: selectedValue,
        });
        setChartData(chartData.data);
      } finally {
        setIsLoadingChart((prev) => ({ ...prev, barChart: false }));
      }
    };
    checkPermission("ReadLaporanCPMK") && selectedValue && fetchChartData();
  }, [selectedValue]);

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
        <SelectionFieldReport
          label="Pilihan Mata Kuliah"
          options={listMataKuliah}
          placeholder="Masukkan pilihan mata kuliah"
          isRequired={true}
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
      </div>
      {isLoadingChart.barChart ? (
        <div className="flex justify-center items-center h-full">
          <Spinner />
        </div>
      ) : (
        <>
          {chartData && chartData.data.length > 0 && (
            <BarChart
              title={"Laporan CPMK"}
              xLabel={"CPMK"}
              yLabel={"Rata-rata Nilai CPMK"}
              data={chartData?.data ?? []}
              labels={chartData?.labels ?? []}
            />
          )}
        </>
      )}
      {isLoading.tableLaporanCPMK || isLoading.kelas ? (
        <div className="flex justify-center items-center h-full">
          <Spinner />
        </div>
      ) : (
        <>
          {laporanCPMKDataList && laporanCPMKDataList.mahasiswaList.length > 1 && (
            <Layouts.ListContainerTableLayout
              title={"Table Laporan CPMK"}
              singularName={"Laporan"}
              items={[
                laporanCPMKDataList?.mahasiswaList ?? [],
                kelasSelectionField,
              ]}
              isLoading={isLoading.tableLaporanCPMK}
            >
              <LaporanTable
                laporanCPMKDataList={laporanCPMKDataList?.mahasiswaList ?? []}
                kelasSelectionField={kelasSelectionField}
                cpmkList={laporanCPMKDataList?.cpmkList ?? []}
              />
            </Layouts.ListContainerTableLayout>
          )}
        </>
      )}
    </Layouts.ViewContainerLayout>
  );
};
export default LaporanCPMKPage;
