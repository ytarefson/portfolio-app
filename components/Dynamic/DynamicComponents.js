import React from 'react';
import FileList from './FileList';
import ImageSlider from './ImageSlider';
import NewsList from './NewsList';
import ContentBlock from './ContentBlock';
import EmployeeList from './EmployeeList';
import ImageGallery from './ImageGallery';
import VideoBlock from './VideoBlock';
import Attachments from './Attachments';

const DynamicComponents = (props) => {
  const [ cont, setCont ] = React.useState([]);

  React.useEffect(()=>{
    let blocks = []
    props.blocks.map((block, idx) => {
      block.__typename === 'ComponentDynamicFileList' ? blocks.push(<FileList filelist={block} key={`content-order-${idx}`}/>): '';
      block.__typename === 'ComponentDynamicImageSlider' ? blocks.push(<ImageSlider slider={block} key={`content-order-${idx}`}/>): '';
      block.__typename === 'ComponentDynamicNewsList' ? blocks.push(<NewsList newslist={block} key={`content-order-${idx}`}/>): '';
      block.__typename === 'ComponentDynamicContentBlock' ? blocks.push(<ContentBlock content={block.content} key={`content-order-${idx}`}/>): '';
      block.__typename === 'ComponentDynamicEmployeeList' ? blocks.push(<EmployeeList employees={block} key={`content-order-${idx}`}/>): '';
      block.__typename === 'ComponentDynamicImageGallery' ? blocks.push(<ImageGallery gallery={block} key={`content-order-${idx}`}/>): '';
      block.__typename === 'ComponentDynamicVideoBlock' ? blocks.push(<VideoBlock videos={block} key={`content-order-${idx}`}/>) : '';
      block.__typename === 'ComponentDynamicAttachments' ? blocks.push(<Attachments attachments={block} key={`content-order-${idx}`}/>) : '';
    })
    setCont(blocks)
  },[props.blocks])
 
  let blocks = cont.map(block => block);

  return (
    <div>
      {blocks}
    </div>
  )
}

export default DynamicComponents;