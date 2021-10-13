import React from 'react';
import ReactMarkdown from 'react-markdown';
import EmployeeCard from './EmployeeCard';
const EmployeeList = (props) => {

  let employees = props.employees.employees.map(empl => <EmployeeCard key={`empl-${empl.handle}`} employee={empl}/>)

  return (
    <div className="content-section component-paddings">
      <div className="employee-list">
        <span className="section-title">{props.employees.name}</span>
        <ReactMarkdown escapeHtml={false} children={props.employees.content} className="markdown"/>
        <div className="employees">
          {employees}
        </div>
      </div>
      <style jsx>{`
        .employees {
          display: grid;
          gap: 12px;
        }
        @media (min-width: 768px) {
          .employees {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }          
        }  
      `}</style>
  </div>
  )
}
export default EmployeeList;
