describe('Generics Bug', () => {

  it('should pass the test', () => {
    const fakeInter = <InterfaceA>{
      fieldA: 'blah'
    };

    expect(fakeInter.fieldA).toBe('blah')
  });
});

interface InterfaceA {
  fieldA: string;
  fieldB: string;
}
