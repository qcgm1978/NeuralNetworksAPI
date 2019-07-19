import cursor from "../src/cursor";
import roboticLimbs from "../src/robotic-limbs";
it(`Brain-machine interfaces(BMIs)`, () => {
  const packages = 3072,
    area = [23, 18.5, 2];
  const pack_per_mm = packages / area.reduce((acc, item) => acc * item);
  expect(+pack_per_mm.toFixed(1)).toBe(3.6);
});
it(``, () => {
  expect(cursor).toBeInstanceOf(Function);
});
it(``, () => {
  expect(roboticLimbs.size).toEqual([400, 400, 150]);
});
