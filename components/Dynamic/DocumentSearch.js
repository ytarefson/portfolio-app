import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import axios from 'axios';

const DocumentSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [status, setStatus] = useState('');

  useEffect(()=>{
    if (searchQuery.length !==0 && searchQuery.length > 1 && !loading) {
      setLoading(true);
      axios.post("http://localhost:1337/graphql", {query:`
      query {  
        documents (where: {nomer_contains: "${searchQuery.trim()}"}) {
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
      // Введите больше 3 символов
      setStatus("Введите больше 3 символов");
      if (documents.length > 0) {
        setDocuments([])
      }
    }
  }, [searchQuery])

  const changeSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  }

  return (
    <div className="document-search">
      <label className="custom-text">Быстрый поиск по № документа:</label>
      <div className="input-group">
        <input className="search-input"
              placeholder="введите № документа"
              name="search-input" 
              value={searchQuery}
              onChange={changeSearchQuery}/>
        <Link href={`/search${searchQuery !== '' ? '/?query='+searchQuery : ''}`}>
          <a className="search-submit"></a>
        </Link>
      </div>
      {searchQuery.length !== 0 ? 
        <div className="search-results">
          {loading ? <span>Идет загрузка</span> : ""}
          {documents.length > 0 ? 
            documents.map((doc, idx) => (
              <a target="_blank" key={`search-result-${idx}`} href={`http://localhost:1337${doc.file.url}`} className="search-results-link">
                <span className="search-results-value min-text">{doc.name}</span>
              </a>
            ))
          : ""}
          {!loading && documents.length === 0 && searchQuery.length > 3 ? <span>Совпадений не найдено</span> : ''}
        </div>
      : ""}
      <style jsx>{`
        .custom-text {
          text-transform: uppercase;
          font-weight: 900;
          color: var(--grey-4);
          display: block;
          margin-bottom: 15px;
        }
        .search-input::placeholder {
          color: var(--grey-4);
        }
        .search-input {
          width: 100%;
          border-radius: var(--br-mid);
          border: none;
          height: 45px;
          padding-left: 15px;
          outline-color: var(--main);
        }
        .search-results {
          padding: 15px;
        }
        .search-results-link {
          text-decoration: none;
        }
        .search-results-link:hover {
          text-decoration: underline;
          color: var(--main);
        }
        .search-results-value {
          color: var(--grey-7);
        }
        .input-group {
          display: flex;
        }
        .search-submit:hover {
          background-color: var(--main);
          box-shadow: 3px 3px 5px rgba(0,0,0,0.3);
        }
        .search-submit:active {
          transform: scale(1.05);
        }
        .search-submit {
          position: relative;
          display: block;
          height: 45px;
          width: 60px;
          background-color: var(--grey-3);
          border-radius: var(--br-mid);
          margin-left: 5px;
          text-align: center;
          line-height: 45px;
          text-decoration: none;
          color: var(--grey-0);
          transition: all 0.15s ease-out;
        }
        .search-submit::before {
          position: absolute;
          display: block;
          content: "";
          border-radius: 50px;
          border: 2px solid white;
          width: 15px;
          height: 15px;
          left: 30%;
          top: 25%;
        }
        .search-submit::after {
          position: absolute;
          display: block;
          content: "";
          width: 2px;
          height: 10px;
          left: 65%;
          top: 55%;
          background-color: var(--grey-0);
          transform: rotate(-45deg);
        }
        @media (min-width: 992px) {
          .search-submit::before {
            left: 25%;
            top: 25%;
          }
          .search-submit::after {
            left: 65%;
            top: 55%;
          }
        }
        @media (min-width: 1600px) {
          .search-submit::before {
            left: 28%;
            top: 25%;
          }
          .search-submit::after {
            left: 67%;
            top: 55%;
          }
        }
        `}</style>
    </div>
  )
}

export default DocumentSearch;