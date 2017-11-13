//
//
// describe('index1', function () {
//   before(function () {
//     console.log('index1->before');
//   });
//   beforeEach('init variable', function () {
//     let config= {
//       visible: false,
//       theme: 'black'
//     };
//     console.log('index1->beforeEach config: ', config);
//   });
//   describe('level 1', function () {
//     beforeEach('examine', function () {
//
//       // console.log('index1->level 1->beforeEach config: ', config);
//     });
//     it('need config', function () {
//       // config.visible= true;
//       expect(config.visible).to.be(false);
//     });
//   });
//   after(function () {
//     console.log('index1->after');
//   });
// });
