// Тут выводим все компоненты которые относятся к этому шаблону
// PropTypes:
// catalog: Obj

import React from 'react';
import PromoSection from '../Common/PromoSection';
import PageWrapper from '../Common/PageWrapper';
import ContentBlock from '../Common/ContentBlock';
import Breadcrumbs from '../Common/Breadcrumbs';
import DynamicComponents from '../Dynamic/DynamicComponents';

const CatalogTemplate = (props) => {
  return (
    <>
      <PromoSection
        caption={props.catalog.caption} 
        subcaption={props.catalog.subcaption}
        preview={props.catalog.preview}
        bg_image={props.catalog.image}/>
      <PageWrapper 
        pagemenu={props.pagemenu}
        banners={props.catalog.banners}>
          <Breadcrumbs current={props.catalog.shortname}/>
          {props.catalog.content ? <ContentBlock content={props.catalog.content}/> : ''}
          {props.catalog.dynamic ? <DynamicComponents blocks={props.catalog.dynamic}/> : ''}
      </PageWrapper>
    </>
  )
}

export default CatalogTemplate;