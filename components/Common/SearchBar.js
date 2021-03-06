import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import FileList from '../Dynamic/FileList';

const SearchBar = (props) => {
  const router = useRouter();  
  const [ searchQuery, setSearchQuery ] = useState('');
  const [loading, setLoading] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [status, setStatus] = useState('');
  const [stringField, setStringField] = useState('name');
  
  const [documentType, setDocumentType] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    if (router.query.query) {
      setSearchQuery(router.query.query)
    }
  }, [])

  const changeSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  }

  function getDataReady() {
    let filtersString = '';
    if (stringField === 'name') {
      filtersString += `name_contains: "${searchQuery.trim()}"`;
    };
    if (stringField === 'hash') {
      filtersString += `hash_contains: "${searchQuery.trim()}"`;
    };
    if (stringField === 'nomer') {
      filtersString += `nomer_contains: "${searchQuery.trim()}"`;
    };
    if (stringField === 'hashtag') {
      filtersString += `hashtags: {name_contains: "${searchQuery.trim()}"}`
    };
    if (documentType !== '' && documentType !== 'unselect') { 
      filtersString !== '' ? filtersString+= `,` : '';
      filtersString += `document_type: "${documentType}"`; 
    }
    if (date !== '') {
      filtersString !== '' ? filtersString+= `,` : '';
      filtersString += `document_date_contains: "${date}"`
    }    
    return filtersString;
  }

  useEffect(()=>{
    if (searchQuery.length !== 0 && searchQuery.length > 1 && !loading) {
      setLoading(true);
      axios.post("http://localhost:1337/graphql", {query:`
      query {  
        documents (where: {${getDataReady()}}) {
          name
          author
          nomer
          document_type
          document_date
          hashtags { 
            name   
          }
          file {
            name
            url
          }
        }
      }
      `})
      .then(res => {
        setStatus('');
        setDocuments(res.data.data.documents)
        setLoading(false);
      })
      .catch(err => {
        setStatus('');
        console.log(err);
        setLoading(false);
      })
    } else { 
      // ?????????????? ???????????? 2 ????????????????
      setStatus("?????????????? ???????????? 2 ????????????????");
      if (documents.length > 0) {
        setDocuments([])
      }
    }
  }, [searchQuery, documentType, stringField, date])

  const selectDocumentType = (e) => {
    setDocumentType(e.target.value);    
  }
  const selectSearchType = (e) => {
    setStringField(e.target.value)
  }
  const selectDate = (e) => {
    setDate(e.target.value);
  }
  const dropDate = () => {
    setDate('');
  }
  return (
    <>
    <div className="search-bar">
    <label className="custom-text mb-5">?????????? ???? ????????????????????:</label>
    <div className="filters mb-5" >
        <span>?????? ??????????????????: </span>
        <div className="filter">
          <select className="filter-height" name="document_type_selector" onChange={selectDocumentType}>
            <option defaultChecked value="unselect">???? ??????????????</option>
            <option value="rasporyazhenie">????????????????????????</option>
            <option value="prikaz">????????????</option>
            <option value="telegramma">????????????????????</option>
            <option value="faksogramma">??????????????????????</option>
            <option value="protokol">????????????????</option>
            <option value="akt">??????</option>
            <option value="dogovor">??????????????</option>
            <option value="instrukciya">????????????????????</option>
            <option value="pismo">????????????</option>
            <option value="postanovlenie">??????????????????????????</option>
            <option value="reglament">??????????????????</option>
            <option value="prochie">????????????</option>
          </select>
        </div>
        <div className="filter">
          <input className="filter-height" type='date' value={date} onChange={selectDate}/>
          <span className="probel"> </span>
          <button className="filter-height cancel-button" onClick={dropDate}>X</button>
        </div>
      </div>
      <div className="input-group">
        <select name="search-type" onChange={selectSearchType}>
          <option defaultChecked value="name">???? ????????????????</option>
          <option value="hash">???? ??????????</option>
          <option value="nomer">???? ????????????</option>
          <option value="hashtag">???? ??????-????????</option>
        </select>
        <input className="search-input" 
              name="search-input" 
              value={searchQuery}
              onChange={changeSearchQuery}/>
      </div>
    </div>
    <div className="results">
        {documents && documents.length > 0 ? 
          <FileList filelist={{
            name: '???????????????????? ????????????',
            content: `?????????????? ${documents.length} ????????????????????(??)`,
            documents: documents
          }}/> : ''}
    </div>
    <style jsx>{`
      .custom-text {
        display: block;
        text-transform: uppercase;
        font-weight: 900;
        color: var(--grey-4);
        margin-bottom: 15px;
      }
      .filters {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .filter-height {
        height: 30px;
      }
      .cancel-button {
        width: 30px;
      }
      .search-type {
        border-radius: var(--br-mid);
      }
      .search-input {
        width: 100%;
        border-radius: var(--br-mid);
        border: none;
        height: 45px;
        padding-left: 15px;
        outline-color: var(--main);
        margin-left: 5px;
      }
      .input-group {
        display: flex;
      }
      .search-type {
        display: block;
      }
      .results {
        padding: 15px;
      }
      .search-results-value {
        color: var(--grey-7);
      }
    `}</style>
    </>
  )
}

export default SearchBar;