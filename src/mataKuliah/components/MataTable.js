/*
	Generated on 13/06/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.4.0
*/
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from 'commons/auth';
import { Button, Modal } from 'commons/components';
import isSelectedFeature from 'commons/utils/isSelectedFeature';
import { isMobile } from 'commons/utils/responsive';

import * as Layouts from "commons/layouts";

const MataTable = ({ mataKuliahDataList, kurikulumSelectionField

	}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (mataItem) => {
    isMobile() && navigate(`/matakuliah/${mataItem.id}`
    );
  };
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[mataKuliahDataList, kurikulumSelectionField]}
  	  detail={detail}
  	  isSearchable
  	  filterFields={[
  	    {
  	      label: "Kurikulum",
  	      featureName: "kurikulumName",
  	      options: kurikulumSelectionField,
  	    }
  	  ]}
  	  itemsAttrs={[
  		{
            id: "kode",
            condition: "isHeading",
            label: "Kode",
            featureName: "kode",
  		}
  ,
  		{
            id: "nama",
            condition: "isHeading",
            label: "Nama",
            featureName: "nama",
  		}
  ,
  		{
            id: "sKS",
            condition: "isHeading",
            label: "SKS",
            featureName: "sks",
  		}
  ,
  		{
            id: "term",
            condition: "isHeading",
            label: "Term",
            featureName: "term",
  		}
  ,
  		{
            id: "kurikulum",
            condition: "isHeading",
            label: "Kurikulum",
            featureName: "kurikulumName",
  		}
  ,
  	  ]}
        itemsEvents={(mataItem) => [
          <Link to={`/matakuliah/${mataItem.id}`}>
            <Button 
          	variant=
          		"primary"
            >
              Detail
            </Button>
          </Link>
          
          
        ]}
    	  itemsModals={(mataItem) => [
        ]}
  	/>
  )
};

export default MataTable;
