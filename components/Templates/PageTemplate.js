import React from 'react'
import PromoSection from '../Common/PromoSection';
import PageWrapper from '../Common/PageWrapper';
import ContentBlock from '../Common/ContentBlock';
import Breadcrumbs from '../Common/Breadcrumbs';
import DynamicComponents from '../Dynamic/DynamicComponents';

export default function PageTemplate(props) {
    return (
      <>
        <PromoSection 
          caption={props.page.caption} 
          subcaption={props.page.subcaption} 
          preview={props.page.preview}
          handle={props.page.handle}
          bg_image={props.page.image}
        />
        <PageWrapper pagemenu={props.pagemenu} banners={props.page.banners}>
          <Breadcrumbs 
              bread={[
                {url: `/site/${props.page.catalog.handle}/`,
                 name: props.page.catalog.shortname},
                {url: `/site/${props.page.catalog.handle}/${props.page.category.handle}/`,
                 name: props.page.category.shortname},
                {url: `/site/${props.page.catalog.handle}/${props.page.category.handle}/${props.page.subcategory.handle}/`,
                 name: props.page.subcategory.shortname},
              ]}
              current={props.page.shortname}/>
          {props.page.content ? <ContentBlock content={props.page.content}/> : ''}
          {props.page.dynamic ? <DynamicComponents blocks={props.page.dynamic}/> : ''}
        </PageWrapper>
      </>
    )
}
