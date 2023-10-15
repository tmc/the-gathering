"use strict";
var import_CollisionMap = require("../CollisionMap");
describe("#convertCollsionMaps", () => {
  it("should convert from byte to bits representation", () => {
    const mapAsBytes = [
      1,
      0,
      0,
      1,
      0,
      1,
      1,
      1,
      0,
      1,
      0,
      0,
      1,
      1,
      1
    ];
    const mapAsBits = (0, import_CollisionMap.convertCollisionBytesToBits)(mapAsBytes);
    expect(Array.from(mapAsBits)).toEqual([233, 114]);
  });
  describe("should convert from bits to byte representation", () => {
    it("converts properly with w*h = 15", () => {
      const mapAsBytes = (0, import_CollisionMap.convertCollisionBitsToBytes)(5, 3, [233, 114]);
      expect(Array.from(mapAsBytes)).toEqual([
        1,
        0,
        0,
        1,
        0,
        1,
        1,
        1,
        0,
        1,
        0,
        0,
        1,
        1,
        1
      ]);
    });
    it("converts properly with w*h = 1", () => {
      const mapAsBytes = (0, import_CollisionMap.convertCollisionBitsToBytes)(1, 1, [1]);
      expect(Array.from(mapAsBytes)).toEqual([1]);
    });
    it("converts properly with w*h = 16", () => {
      const mapAsBytes = (0, import_CollisionMap.convertCollisionBitsToBytes)(4, 4, [233, 114]);
      expect(Array.from(mapAsBytes)).toEqual([
        1,
        0,
        0,
        1,
        0,
        1,
        1,
        1,
        0,
        1,
        0,
        0,
        1,
        1,
        1,
        0
      ]);
    });
  });
  it("should convert from byte to bits representation with region", () => {
    const mapAsBytes = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ];
    const mapAsBitsWithRegion = (0, import_CollisionMap.convertCollisionBytesToBitsWithRegion)(6, 5, mapAsBytes);
    expect(mapAsBitsWithRegion.x).toBe(2);
    expect(mapAsBitsWithRegion.y).toBe(1);
    expect(mapAsBitsWithRegion.w).toBe(3);
    expect(mapAsBitsWithRegion.h).toBe(2);
    expect(Array.from(mapAsBitsWithRegion.mask)).toEqual([57]);
  });
  it("should return empty result when no impassable tiles detected", () => {
    const mapAsBytes = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ];
    const mapAsBitsWithRegion = (0, import_CollisionMap.convertCollisionBytesToBitsWithRegion)(3, 3, mapAsBytes);
    expect(mapAsBitsWithRegion.x).toBe(0);
    expect(mapAsBitsWithRegion.y).toBe(0);
    expect(mapAsBitsWithRegion.w).toBe(0);
    expect(mapAsBitsWithRegion.h).toBe(0);
    expect(Array.from(mapAsBitsWithRegion.mask)).toEqual([0]);
  });
});
//# sourceMappingURL=CollisionMap.test.js.map
