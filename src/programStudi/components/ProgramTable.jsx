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

const ProgramTable = ({ programStudiDataList

	}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (programItem) => {
    isMobile() && navigate(`/programstudi/${programItem.id}`
    );
  };
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[programStudiDataList]}
  	  detail={detail}
  	  isSearchable
  	  itemsAttrs={[
  		{
            id: "kode",
            condition: "isHeading",
            label: "Kode",
            featureName: "kode",
  		}
  ,
  		{
            id: "nomorSK",
            condition: "isHeading",
            label: "Nomor SK",
            featureName: "noSK",
  		}
  ,
  		{
            id: "jenjang",
            condition: "isHeading",
            label: "Jenjang",
            featureName: "jenjang",
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
            id: "kaprodi",
            condition: "isHeading",
            label: "Kaprodi",
            featureName: "kaprodi",
  		}
  	  ]}
        itemsEvents={(programItem) => [
          <Link to={`/programstudi/${programItem.id}`}>
            <Button 
          	variant=
          		"primary"
            >
              Detail
            </Button>
          </Link>
          
          
        ]}
    	  itemsModals={(programItem) => [
        ]}
  	/>
  )
};

export default ProgramTable;
