import React from 'react'

const FileCard = (props) => {
  let doc_type = '';
  if ( props.document.document_type === "rasporyazhenie" ) { doc_type = "Распоряжение"}
  if ( props.document.document_type === "prikaz" ) { doc_type = "Приказ"}
  if ( props.document.document_type === "telegramma" ) { doc_type = "Телеграмма"}
  if ( props.document.document_type === "faksogramma" ) { doc_type = "Факсограмма"}
  if ( props.document.document_type === "protokol" ) { doc_type = "Протокол"}
  if ( props.document.document_type === "akt" ) { doc_type = "Акт"}
  if ( props.document.document_type === "dogovor" ) { doc_type = "Договор"}
  if ( props.document.document_type === "instrukciya" ) { doc_type = "Инструкция"}
  if ( props.document.document_type === "pismo" ) { doc_type = "Письмо"}
  if ( props.document.document_type === "postanovlenie" ) { doc_type = "Постановление"}
  if ( props.document.document_type === "reglament" ) { doc_type = "Регламент"}
  if ( props.document.document_type === "prochie" ) { doc_type = "Прочие"}
  return (
    <>
      <div className={`document document-card-${props.document.name}`}>
        <div className="document-top-container">
          <div className="flex-row mb-3">
            <span className="min-text mb-0">Тип документа:</span>
            <span className="text mb-0">{doc_type}</span>
          </div>
          <span className="min-title">{props.document.name}</span>
        </div>
        <div className="document-bottom-container">
          <div className="grid-row">
            <div className="flex-row">
              <div className="number-container">
                <span className="min-text mb-0 number-title">№:</span>
                <span className="text mb-0 number-value">{props.document.nomer}</span>
              </div>
              <div className="date-container">
                <span className="min-text mb-0 date-title">дата:</span>
                <span className="text mb-0 date-value">{props.document.document_date}</span>
              </div>
            </div>
            <a target="_blank" className="min-text mb-0 document-link" href={`http://localhost:1337${props.document.file.url}`}>Скачать документ</a>
          </div>
        </div>
      </div>
      <style jsx>{`
        .document {
          padding: 15px;
          background-color: var(--grey-0);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .document-link {
          color: var(--main);
        }
        .grid-row {
          display: flex;
          justify-content: space-between;
        }
        .flex-row {
          display: flex;
          gap: 12px;
          align-items: flex-end;
        }
        .number-container, .date-container {
          display: flex;
          align-items: flex-end;
          gap: 6px;
        }
        .min-text {
          color: var(--grey-5);
        }
        .document-link {
          color: var(--main);
        }
      `}</style>
    </>
  )
}
export default FileCard;
