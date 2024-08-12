import {
  configureStore,
  PreloadedStateShapeFromReducersMapObject,
} from '@reduxjs/toolkit';

import contactSlice from '../slices/contact/contactSlice';

export const reducer = {
  reducer: {
    contact: contactSlice,
  },
};

export const setupStore = (
  preloadedState?: PreloadedStateShapeFromReducersMapObject<RootState>,
) => {
  return configureStore({
    reducer: reducer.reducer,
    // middleware: getDefaultMiddleware => {
    //   const middlewares = getDefaultMiddleware({
    //     serializableCheck: {
    //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //     },
    //   }).concat(paApi.middleware);

    //   return middlewares;
    // },
    preloadedState,
  });
};

const store = configureStore(reducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
