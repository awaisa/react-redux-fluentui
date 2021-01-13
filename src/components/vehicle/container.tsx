import { Stack } from '@fluentui/react';
import React from 'react';
import { VehicleList } from './vehicleList';

export const Container = () => {
    return (
      <Stack horizontal tokens={{childrenGap: 30 }}>
        <Stack.Item>
          <VehicleList title="Vehicle List" />
        </Stack.Item>
        <Stack.Item styles={{ root: {background: "grey" }}}>
          &nbsp;
        </Stack.Item>
        <Stack.Item>
          <VehicleList title="Vehicle List - Duplicate" isDuplicate={true} />
        </Stack.Item>
    </Stack>
  );
};