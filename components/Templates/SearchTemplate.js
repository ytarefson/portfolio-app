// Тут выводим все компоненты которые относятся к этому шаблону
// PropTypes:
// catalog: Obj

import React from 'react';
import Breadcrumbs from '../Common/Breadcrumbs';
import PageWrapper from '../Common/PageWrapper';
import SearchBar from '../Common/SearchBar';

const SearchTemplate = (props) => {
  return (
    <>
      <PageWrapper catalog={null} banners={null} pagemenu={null} search={false}>
        <Breadcrumbs current={'Поиск по документам'}/>
        <SearchBar />    
      </PageWrapper>
    </>
  )
}

export default SearchTemplate;