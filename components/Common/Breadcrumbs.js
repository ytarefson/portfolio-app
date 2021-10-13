import React from 'react'
import Link from 'next/link'

const Breadcrumbs = (props) => {

  return (
    <div className="breadcrumbs">
      {/* <Link href="/">
        <a className="bread-link text">Главная</a>
      </Link> */}
      {props.bread && props.bread.map((link, index) => (
        <Link href={link.url} key={`breadcrumb-${index}`}>
          <a className="bread-link text">{index > 0 ? ' - ' : ''}{link.name}</a>
        </Link>
      ))}
        <span className="current-page text"> - {props.current}</span>
        <style jsx>{`
          .breadcrumbs {
            display: flex;
            margin-bottom: 15px;
          }
          .bread-link {
            margin-right: 5px;
            text-decoration: none;
            color: var(--grey-5);
          }
          .bread-link:hover {
            color: var(--main);
            text-decoration: underline;
          }
        `}</style>
    </div>
  )
}
export default Breadcrumbs;
