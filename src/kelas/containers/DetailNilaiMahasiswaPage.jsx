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
import NilaiTable from '../components/NilaiTable'

import getNilaiMahasiswaDataList from '../services/getNilaiMahasiswaDataList'
import DetailTable from '../components/DetailTable'

import getDetailNilaiAkhirMahasiswaDataList from '../services/getDetailNilaiAkhirMahasiswaDataList'
const DetailNilaiMahasiswaPage = props => {
const { checkPermission } = useAuth()

	const [isLoading, setIsLoading] = useState({
	tableNilaiMahasiswa: false,
	reportDetailNilaiAkhirMahasiswa: false,

	});
	const { setTitle } = useContext(HeaderContext);

  const [nilaiMahasiswaDataList, setNilaiMahasiswaDataList] = useState();
  const { id, mahasiswaId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading((prev) => ({ ...prev, tableNilaiMahasiswa: true }));
        const {
          data: nilaiMahasiswaDataList,
        } = await getNilaiMahasiswaDataList({ kelasId: id, mahasiswaId });
        setNilaiMahasiswaDataList(nilaiMahasiswaDataList.data);
      } finally {
        setIsLoading((prev) => ({ ...prev, tableNilaiMahasiswa: false }));
      }
    };
    fetchData();
  }, []);

  const [
    detailNilaiAkhirMahasiswaDataList,
    setDetailNilaiAkhirMahasiswaDataList,
  ] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading((prev) => ({
          ...prev,
          reportDetailNilaiAkhirMahasiswa: true,
        }));
        const {
          data: detailNilaiAkhirMahasiswaDataList,
        } = await getDetailNilaiAkhirMahasiswaDataList({ kelasId: id, mahasiswaId });
        setDetailNilaiAkhirMahasiswaDataList(
          detailNilaiAkhirMahasiswaDataList.data
        );
      } finally {
        setIsLoading((prev) => ({
          ...prev,
          reportDetailNilaiAkhirMahasiswa: false,
        }));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setTitle("Detail Nilai Mahasiswa Page");
  }, []);
  return (
    <Layouts.ViewContainerLayout
      buttons={
        <>
          <Layouts.ViewContainerBackButtonLayout>
            <Link to={`/kelas/${id}/mahasiswa`}>
              {" "}
              <Button className="p-4" variant="secondary">
                Kembali
              </Button>
            </Link>
          </Layouts.ViewContainerBackButtonLayout>

          <Layouts.ViewContainerButtonLayout>
            <Link
              to={`/penilaian/tambah?kelasId=${id}&mahasiswaId=${mahasiswaId}`}
            >
              {" "}
              <Button className="p-2" variant="primary">
                Tambah Nilai Mahasiswa
              </Button>
            </Link>
          </Layouts.ViewContainerButtonLayout>
        </>
      }
    >
      <Layouts.ListContainerTableLayout
        title={"Table Nilai Mahasiswa"}
        singularName={"Nilai"}
        items={[nilaiMahasiswaDataList]}
        isLoading={isLoading.tableNilaiMahasiswa}
      >
        <NilaiTable nilaiMahasiswaDataList={nilaiMahasiswaDataList} />
      </Layouts.ListContainerTableLayout>
      <Layouts.ListContainerTableLayout
        title={"Report Detail Nilai Akhir Mahasiswa"}
        singularName={"Detail"}
        items={[detailNilaiAkhirMahasiswaDataList]}
        isLoading={isLoading.reportDetailNilaiAkhirMahasiswa}
      >
        <DetailTable
          detailNilaiAkhirMahasiswaDataList={detailNilaiAkhirMahasiswaDataList}
        />
      </Layouts.ListContainerTableLayout>
    </Layouts.ViewContainerLayout>
  );
};
export default DetailNilaiMahasiswaPage;
