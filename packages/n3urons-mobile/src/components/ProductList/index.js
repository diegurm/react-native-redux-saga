import React from 'react';

import ProductListVertical from './ProductListVertical';
import ProductListHorizontal from './ProductListHorizontal';

const ProductList = ({ mode = 'vertical', data, loading, ...props }) => {
  return (
    <>
      {mode === 'vertical' ? (
        <ProductListVertical {...props} data={data} loading={loading} />
      ) : (
        <ProductListHorizontal {...props} data={data} loading={loading} />
      )}
    </>
  );
};

export default React.memo(ProductList);
