import React from 'react';
import CategoryFilter from './Filters/CategoryFilter';
import FilterByPrice from './Filters/FilterByPrice';
import FilterByService from './Filters/FilterByService';

function ProductFilter({ onChange, filter }) {
  const handleCategoryChange = (newCategory) => {
    if (!onChange) return;
    const newFilters = {
      'category.id': newCategory.id,
      'category.name': newCategory.name,
    };
    onChange(newFilters);
  };
  const handeleChange = (values) => {
    onChange(values);
  };
  return (
    <div>
      <CategoryFilter onChange={handleCategoryChange} />
      <FilterByPrice onChange={handeleChange} />
      <FilterByService onChange={handeleChange} filter={filter} />
    </div>
  );
}

export default ProductFilter;
