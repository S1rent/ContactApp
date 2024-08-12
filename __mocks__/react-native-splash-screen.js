export default {
  show: jest.fn().mockImplementation(async () => {
    console.log('show splash screen');
  }),
  hide: jest.fn().mockImplementation(async () => {
    console.log('hide splash screen');
  }),
};
