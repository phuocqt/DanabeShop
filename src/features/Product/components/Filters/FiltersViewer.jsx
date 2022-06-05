import { Box, Chip, Stack } from '@mui/material';
import React from 'react';

function FiltersViewer({ filters, onChange }) {
  var filterName = filters.name;
  const FILTER_LIST = [
    {
      id: 1,
      label: (filters) => 'Giao hàng miễn phí',
      name: 'isFreeShip',
      isActive: (filters) => filters.isFreeShip,
      isVisible: () => true,
      isRemovable: false,
      onRemove: () => {},

      onToggle: (filters) => {
        const newFilters = { ...filters };
        if (newFilters.isFreeShip) {
          delete newFilters.isFreeShip;
        } else {
          newFilters.isFreeShip = true;
        }

        return newFilters;
      },
    },
    {
      id: 2,
      label: (filters) => 'Giảm giá',
      isActive: (filters) => filters.isPromotion,
      isVisible: false,
      isRemovable: true,
      isRemovable: true,
      onRemove: (filters) => {
        const newFilters = { ...filters };
        delete newFilters.isPromotion;
        return newFilters;
      },
      onToggle: () => {},
    },
    {
      id: 3,
      label: (filters) => `${filters['category.name']}`,
      isActive: (filters) => filters['category.name'],
      isVisible: false,
      isRemovable: true,
      isRemovable: true,
      onRemove: (filters) => {
        const newFilters = { ...filters };
        delete newFilters['category.name'];
        delete newFilters['category.id'];

        return newFilters;
      },
      onToggle: () => {},
    },
  ];
  const activeFilters = FILTER_LIST.filter((x) => x.isActive(filters) || x.isVisible);

  return (
    <Stack mt={2} direction="row" spacing={1}>
      {activeFilters.map((x) => (
        <Chip
          key={x.id}
          label={x.label(filters)}
          clickable={!x.isRemovable}
          onClick={
            x.isRemovable
              ? null
              : () => {
                  if (!onChange) return;
                  const newFilters = x.onToggle(filters);
                  onChange(newFilters);
                }
          }
          onDelete={
            x.isRemovable
              ? () => {
                  if (!onChange) return;
                  const newFilters = x.onRemove(filters);
                  onChange(newFilters);
                }
              : null
          }
          color={x.isActive(filters) ? 'primary' : 'default'}
        />
      ))}
    </Stack>
  );
}

export default FiltersViewer;
{
}
