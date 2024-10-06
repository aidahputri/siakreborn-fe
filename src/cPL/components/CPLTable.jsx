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

const CPLTable = ({ cPLDataList, kurikulumSelectionField

	}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (cPLItem) => {
    isMobile() && navigate(`/cpl/${cPLItem.id}`
    );
  };
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[cPLDataList, kurikulumSelectionField]}
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
            id: "deskripsi",
            condition: "isHeading",
            label: "Deskripsi",
            featureName: "deskripsi",
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
        itemsEvents={(cPLItem) => [
          <Link to={`/cpl/${cPLItem.id}`}>
            <Button 
          	variant=
          		"primary"
            >
              Detail
            </Button>
          </Link>
          
          
        ]}
    	  itemsModals={(cPLItem) => [
        ]}
  	/>
  )
};

export default CPLTable;
