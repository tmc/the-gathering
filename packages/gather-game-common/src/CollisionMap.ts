/**
 * Expands collision data stored as bit array (0 is walkable, 1 is impassable) into a byte array.
 * Careful: will append zeros if `bits` is too short.
 */
export function convertCollisionBitsToBytes(
  w: number,
  h: number,
  bits: Readonly<Buffer | Uint8Array | number[]>,
) {
  const bytes = new Uint8Array(w * h);
  for (let i = 0; i < bytes.length; i++) {
    // which byte in the bits array to read the value from (each byte contains 8 bits):
    //
    //   Math.floor(i / 8)   ->   i >> 3  (faster integer equivalent since power of two divide)
    //
    // which bit in that byte holds the value to read (out of 8):
    //
    //   i % 8               ->   i & 7   (faster equivalent, keeps last 3 bits so 0..7 result)
    //
    // we read the bit value by creating a mask (1 << (i & 7)) where only the bit we're interested
    // in is 1 and then bitwise AND'ing the original value. This operation results in either a 0 if
    // the bit was not set, or the mask value (1 << (i & 7)) if the bit was set to 1. So in the case
    // that the bit was set we need to convert the resulting value back to a 1 (ternary ? 1 : 0).
    //
    bytes[i] = (bits[i >> 3] ?? 0) & (1 << (i & 7)) ? 1 : 0;
  }
  return bytes;
}

/**
 * Packs collision data stored as an array of bytes (0x00 is walkable, 0x01 is impassable) into a bit array
 * (~87.5% size reduction)
 */
export function convertCollisionBytesToBits(bytes: Readonly<Buffer | Uint8Array | number[]>) {
  const bits = new Uint8Array(Math.ceil(bytes.length / 8));
  for (let i = 0; i < bytes.length; i++) {
    if (bytes[i]) {
      //
      // which byte in the bits array to write the value to (each byte contains 8 bits):
      //
      //   Math.floor(i / 8)   ->   i >> 3  (faster integer equivalent since power of two divide)
      //
      // which bit in that byte holds the value to set (out of 8):
      //
      //   i % 8               ->   i & 7   (faster equivalent, keeps last 3 bits so 0..7 result)
      //
      // sets the specific bit to 1 by creating a mask (1 << (i & 7)) where only the bit we're
      // interested in is 1 and then using bitwise OR to apply it on the byte value
      //
      bits[i >> 3] |= 1 << (i & 7);
    }
  }
  return bits;
}

/**
 * Detects the region in which impassable tiles appear and packs collision data for that region into a bit array.
 * If no impassable tiles are detected then an empty region (w === 0 && h === 0) will be returned
 */
export function convertCollisionBytesToBitsWithRegion(
  w: number,
  h: number,
  bytes: Readonly<Buffer | Uint8Array | number[]>,
) {
  let minX = w;
  let minY = h;
  let maxX = 0;
  let maxY = 0;

  // detect the bounds of the impassable tiles

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (!bytes[y * w + x]) {
        continue;
      }
      minX = Math.min(x, minX);
      minY = Math.min(y, minY);
      maxX = Math.max(x, maxX);
      maxY = Math.max(y, maxY);
    }
  }

  if (maxX === 0 && maxY === 0) {
    // there are no impassable tiles, return an empty region
    return { x: 0, y: 0, w: 0, h: 0, mask: new Uint8Array([0]) };
  }

  maxX += 1;
  maxY += 1;

  const regionW = maxX - minX;
  const regionH = maxY - minY;

  const mask = new Uint8Array(Math.ceil((regionW * regionH) / 8));

  for (let y = minY; y < maxY; y++) {
    for (let x = minX; x < maxX; x++) {
      const i = y * w + x; // the index in the original array
      const j = (y - minY) * regionW + (x - minX); // the index in an array containing only the region
      if (bytes[i]) {
        //
        // which byte in the bits array to write the value to (each byte contains 8 bits):
        //
        //   Math.floor(j / 8)   ->   j >> 3  (faster integer equivalent since power of two divide)
        //
        // which bit in that byte holds the value to set (out of 8):
        //
        //   j % 8               ->   j & 7   (faster equivalent, keeps last 3 bits so 0..7 result)
        //
        // sets the specific bit to 1 by creating a mask (1 << (j & 7)) where only the bit we're
        // interested in is 1 and then using bitwise OR to apply it on the byte value
        //
        mask[j >> 3] |= 1 << (j & 7);
      }
    }
  }

  return {
    x: minX,
    y: minY,
    w: regionW,
    h: regionH,
    mask,
  };
}

/**
 * Detects the region in which impassable tiles appear and packs collision data for that region into a bit array.
 * If no impassable tiles are detected then an empty region (w === 0 && h === 0) will be returned
 */
export function convertCollisionBase64BytesToBitsWithRegion(
  w: number,
  h: number,
  base64Collisions: string,
) {
  return convertCollisionBytesToBitsWithRegion(w, h, Buffer.from(base64Collisions, "base64"));
}

/**
 * Packs collision data encoded as base64 into a bit array
 */
export function convertCollisionBase64BytesToBits(base64Collisions: string) {
  return convertCollisionBytesToBits(Buffer.from(base64Collisions, "base64"));
}
