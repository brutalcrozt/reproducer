
before('root before', function () {
  this.config= {
    theme: 'black'
  };
});
describe('index', function () {
  before(function () {
    console.log('index->before');
  });
  beforeEach('init variable', function () {
    // console.log('index->beforeEach config: ', config);
    this.config.visible= false;
    // console.log('index->beforeEach config: ', this.config);
  });
  describe('level 1', function () {
    it('need config', function () {
      this.config.visible= true;
      expect(this.config.visible).to.be.true;
    });
  });
  after(function () {
    console.log('index->after');
  });
});
