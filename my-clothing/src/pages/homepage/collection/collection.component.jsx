

import React from 'react';
import CollectionItem from '../../../components/menu-item/collection-item/collection-item.component';
import './collection.style.scss';

// Other imports and code

const CollectionPage = ({ title, items }) => {
    return (

      <div className='collection-preview'>
  
          <>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
              {items.map(item => {
                  return <CollectionItem key={item.id} item={item} />;
                })}
            </div>
          </>
      </div>
    );
  };
  
  export default CollectionPage;
  

