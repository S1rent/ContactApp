import {http, HttpResponse} from 'msw';
import {ApiEndpoints, baseUrl} from '../src/constants';
import {getHomeResponse} from '../__mocks__/__data__/home-mock-data';

export const homeHandlers = [
  http.get(`${baseUrl}/${ApiEndpoints.Contact}`, () => {
    return HttpResponse.json(getHomeResponse, {
      statusText: 'OK',
      status: 200,
    });
  }),
];

const defaultHandler = http.all('*', () => {
  return new HttpResponse(null, {
    statusText: 'OK',
    status: 200,
  });
});

export const handlers = [...homeHandlers, defaultHandler];
