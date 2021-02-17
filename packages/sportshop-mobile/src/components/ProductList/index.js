import React from 'react';
import { useSelector } from 'react-redux';

import ProductListVertical from './ProductListVertical';
import ProductListHorizontal from './ProductListHorizontal';

const ProductList = () => {
  const { layoutMode } = useSelector((state) => state.products);

  return (
    <>
      {layoutMode === 'vertical' ? (
        <ProductListVertical />
      ) : (
        <ProductListHorizontal />
      )}
    </>
  );
};

export default React.memo(ProductList);
