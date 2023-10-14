import {
  convertCollisionBitsToBytes,
  convertCollisionBytesToBits,
  convertCollisionBytesToBitsWithRegion,
} from "../CollisionMap";

describe("#convertCollsionMaps", () => {
  it("should convert from byte to bits representation", () => {
    // prettier-ignore
    const mapAsBytes = [
        1, 0, 0, 1, 0, 
        1, 1, 1, 0, 1, 
        0, 0, 1, 1, 1
      ];

    const mapAsBits = convertCollisionBytesToBits(mapAsBytes);

    // 10010111 -> reverse -> 11101001 = 233
    // 0100111_ -> reverse -> _1110010 = 114
    expect(Array.from(mapAsBits)).toEqual([233, 114]);
  });

  describe("should convert from bits to byte representation", () => {
    it("converts properly with w*h = 15", () => {
      const mapAsBytes = convertCollisionBitsToBytes(5, 3, [233, 114]);

      // prettier-ignore
      expect(Array.from(mapAsBytes)).toEqual([
        1, 0, 0, 1, 0, 
        1, 1, 1, 0, 1, 
        0, 0, 1, 1, 1
      ]);
    });

    it("converts properly with w*h = 1", () => {
      const mapAsBytes = convertCollisionBitsToBytes(1, 1, [1]);

      expect(Array.from(mapAsBytes)).toEqual([1]);
    });

    it("converts properly with w*h = 16", () => {
      const mapAsBytes = convertCollisionBitsToBytes(4, 4, [233, 114]);

      // prettier-ignore
      expect(Array.from(mapAsBytes)).toEqual([
        1, 0, 0, 1,
        0, 1, 1, 1,
        0, 1, 0, 0,
        1, 1, 1, 0,
      ]);
    });
  });

  it("should convert from byte to bits representation with region", () => {
    // prettier-ignore
    const mapAsBytes = [
        0, 0, 0, 0, 0, 0,
        0, 0, 1, 0, 0, 0,
        0, 0, 1, 1, 1, 0,
        0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0
      ];

    const mapAsBitsWithRegion = convertCollisionBytesToBitsWithRegion(6, 5, mapAsBytes);

    expect(mapAsBitsWithRegion.x).toBe(2);
    expect(mapAsBitsWithRegion.y).toBe(1);
    expect(mapAsBitsWithRegion.w).toBe(3);
    expect(mapAsBitsWithRegion.h).toBe(2);
    expect(Array.from(mapAsBitsWithRegion.mask)).toEqual([57]); // 100111__ -> __111001 = 57
  });

  it("should return empty result when no impassable tiles detected", () => {
    // prettier-ignore
    const mapAsBytes = [
        0, 0, 0,
        0, 0, 0,
        0, 0, 0,
      ];

    const mapAsBitsWithRegion = convertCollisionBytesToBitsWithRegion(3, 3, mapAsBytes);

    expect(mapAsBitsWithRegion.x).toBe(0);
    expect(mapAsBitsWithRegion.y).toBe(0);
    expect(mapAsBitsWithRegion.w).toBe(0);
    expect(mapAsBitsWithRegion.h).toBe(0);
    expect(Array.from(mapAsBitsWithRegion.mask)).toEqual([0]);
  });
});
