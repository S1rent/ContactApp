import {NavigationContainer} from '@react-navigation/native';
import {render, type RenderOptions} from '@testing-library/react-native';
import React, {type PropsWithChildren} from 'react';
import {Provider} from 'react-redux';
import {RootState, setupStore} from '../redux/store';
import {PreloadedStateShapeFromReducersMapObject} from '@reduxjs/toolkit';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedStateShapeFromReducersMapObject<RootState>;
}

export function renderWithProviders(
  ui: React.ReactElement,
  extendedRenderOptions: ExtendedRenderOptions = {},
) {
  const {preloadedState = {}, ...renderOptions} = extendedRenderOptions;

  const mockStore = setupStore(preloadedState);

  const Wrapper = ({children}: PropsWithChildren) => (
    <NavigationContainer>
      <Provider store={mockStore}>{children}</Provider>
    </NavigationContainer>
  );

  return {
    mockStore,
    ...render(ui, {wrapper: Wrapper, ...renderOptions}),
  };
}
