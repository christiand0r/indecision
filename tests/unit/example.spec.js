describe("Example Component", () => {
  test("Debe de ser mayor a 10", () => {
    //Arreglar
    let value = 10;

    //Estimulo
    value += 2;

    //Observar
    expect(value).toBeGreaterThan(10);
  });
});
