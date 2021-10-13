import React from 'react';
import PromoSection from '../Common/PromoSection';
import PageWrapper from '../Common/PageWrapper';
import ContentBlock from '../Common/ContentBlock';
import Breadcrumbs from '../Common/Breadcrumbs';
import DynamicComponents from '../Dynamic/DynamicComponents';

export default function SubsubcategoryTemplate(props) {
    return (
      <>
        <PromoSection 
          caption={props.subcategory.caption} 
          subcaption={props.subcategory.subcaption} 
          preview={props.subcategory.preview}
          handle={props.subcategory.handle}
          bg_image={props.subcategory.image}
        />
        <PageWrapper pagemenu={props.pagemenu} banners={props.subcategory.banners}>
          <Breadcrumbs 
              bread={[
                {url: `/site/${props.subcategory.catalog.handle}/`,
                 name: props.subcategory.catalog.shortname},
                {url: `/site/${props.subcategory.catalog.handle}/${props.subcategory.category.handle}/`,
                 name: props.subcategory.category.shortname},
              ]}
              current={props.subcategory.shortname}/>
          {props.subcategory.content ? <ContentBlock content={props.subcategory.content}/> : ''}
          {props.subcategory.dynamic ? <DynamicComponents blocks={props.subcategory.dynamic}/> : ''}
        </PageWrapper>
      </>
    )
}
