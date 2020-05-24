describe('Main', () => {
  describe('Method A', () => {
    context('case 1', () => {
      it('Should sum two numbers', () => {
        // Tests
        // Esperar que aconteça algo / method sum(2, 2)
        // Espera retorno
      });
    });
  });
  describe('Method B', () => {
    context('case 2', () => {
      it.skip('Should do something', () => {
        throw new Error('Hi I am an error');
      });
    });
  });
});
