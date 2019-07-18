it(`Brain-machine interfaces(BMIs)`, () => {
  const packages = 3072,
    area = [23, 18.5, 2];
  const pack_per_mm = packages / area.reduce((acc, item) => acc * item);
  expect(+pack_per_mm.toFixed(1)).toBe(3.6);
});
