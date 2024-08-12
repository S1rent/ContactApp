/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {waitFor} from '@testing-library/react-native';
import {renderWithProviders} from '../src/utils/test-utils';

it('renders correctly', async () => {
  await waitFor(() => {
    renderWithProviders(<App />);
  });
});
