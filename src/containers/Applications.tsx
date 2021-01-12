import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { useHistory, useLocation } from "react-router-dom";

import Toolbar from '../components/Toolbar';
import TextField from '../components/TextField';
import Dropdown from '../components/Dropdown';
import Spinner from '../components/Spinner';
import Toast from '../components/Toast';
import ApplicantsSection from '../components/ApplicantsSection';
import { requestData } from '../helpers/api';
import { DataType, InputValue } from '../helpers/types';
import { getRandomRGBBetween } from '../helpers/colors';

const STATUS_TYPES = ["Appointment_Set", "Property_Viewed", "Interested", "Offer_Accepted"];

const SearchContainer = styled.div`
  padding: 20px 0 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  
  h1 {
    color: #4a4a4a;
  }

  & .search-wrapper {
    width: 100%;

    @media (min-width: 720px) {
      width: 305px;
      margin-right: 16px;
    }
  }

  & .dropdown-wrapper {
    width: 96px;
    margin-top: 16px;
    margin-right: 8px;

    @media (min-width: 720px) {
      margin-left: 8px;
      margin-right: 0;
      margin-top: 0;
    }
  }
`;

const Applications = () => {
  const history = useHistory();
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const searchParam = urlParams.get('search');

  const [error, setError] = useState<boolean>(false);
  const [fetching, setFetching] = useState<boolean>(true);
  const [data, setData] = useState<DataType[]>([]);
  const [applicants, setApplicants] = useState<DataType[]>([]);
  const [search, setSearch] = useState<InputValue>(searchParam ? searchParam : "");

  const getFilteredData = (value:InputValue, dataFull: Array<DataType>) => {
    if(!value) {
      return dataFull;
    }
    return dataFull.filter(
      (el: DataType) => 
      el.firstName.toLowerCase().includes(value.toString().toLowerCase()) 
      || el.lastName.toLowerCase().includes(value.toString().toLowerCase()) 
      || el.email.toLowerCase().includes(value.toString().toLowerCase())
    );
  }

  useEffect(() => {
    requestData('/applications', (response) => {
      let responseWithColors = response.map((el: DataType) => {
        el['color'] = getRandomRGBBetween(25, 210);
        return el;
      })
      setData(responseWithColors);
      setFetching(false);
    }, () => {
      setFetching(false);
      setError(true);
    })
  }, []);

  useEffect(() => {
    if(!fetching && !error) {
      const filtered = getFilteredData(search, data);
      setApplicants(filtered);
      history.replace(search ? `/?search=${search}` : '/');
    }
  }, [data, search, fetching, error, history])

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }

  const onErrorClose = () => {
    setError(false);
  }

  const appointmentSet = applicants.filter((el: DataType) => el.status === STATUS_TYPES[0]);
  const propertyViewed = applicants.filter((el: DataType) => el.status === STATUS_TYPES[1])
  const interested= applicants.filter((el: DataType) => el.status === STATUS_TYPES[2])
  const offerAccepted = applicants.filter((el: DataType) => el.status === STATUS_TYPES[3])

  return (
    <div>
      <Toolbar data={data}/>
      <SearchContainer>
        <div className="search-wrapper">
          <TextField placeholderId="Search for applicants" value={search} onChange={onSearch}/>
        </div>
        <div className="dropdown-wrapper">
          <Dropdown placeholderId="Bids"/>
        </div>
        <div className="dropdown-wrapper">
          <Dropdown placeholderId="Status"/>
        </div>
      </SearchContainer>
      {
        fetching ? <Spinner/> : (
          applicants.length === 0 ? 
          <h1>Sorry, could not find any applicants</h1> :
          <>
            {appointmentSet.length > 0 && <ApplicantsSection titleId={'appointments_set'} data={appointmentSet}/>}
            {propertyViewed.length > 0 && <ApplicantsSection titleId={'property_viewed'} data={propertyViewed}/>} 
            {interested.length > 0 && <ApplicantsSection titleId={'interested'} data={interested}/>} 
            {offerAccepted.length > 0 && <ApplicantsSection titleId={'offer_accepted'} data={offerAccepted}/>} 
          </>
        )
      }   
      { error && <Toast message="Ops! Something went wrong, Please refresh the page" type="error" onClick={onErrorClose}/>}
    </div>
  );
}

export default Applications;
