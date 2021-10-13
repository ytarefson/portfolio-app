import React from 'react';
import PromoSection from '../Common/PromoSection';
import PageWrapper from '../Common/PageWrapper';
import ContentBlock from '../Common/ContentBlock';
import Breadcrumbs from '../Common/Breadcrumbs';
import DynamicComponents from '../Dynamic/DynamicComponents';

export default function CategoryTemplate(props) {
    return (
      <>
        <PromoSection 
          caption={props.category.caption} 
          subcaption={props.category.subcaption} 
          preview={props.category.preview}
          handle={props.category.handle}
          bg_image={props.category.image}
        />
        <PageWrapper 
          pagemenu={props.pagemenu}
          banners={props.category.banners}>
            <Breadcrumbs 
              bread={[
                {url: `/site/${props.category.catalog.handle}/`,
                 name: props.category.catalog.shortname},
              ]}
              current={props.category.shortname}/>
            {props.category.content ? <ContentBlock content={props.category.content}/> : ''}
            {props.category.dynamic ? <DynamicComponents blocks={props.category.dynamic}/> : ''}
        </PageWrapper>
      </>
    )
}
