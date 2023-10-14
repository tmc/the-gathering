"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var CollisionMap_exports = {};
__export(CollisionMap_exports, {
  convertCollisionBase64BytesToBits: () => convertCollisionBase64BytesToBits,
  convertCollisionBase64BytesToBitsWithRegion: () => convertCollisionBase64BytesToBitsWithRegion,
  convertCollisionBitsToBytes: () => convertCollisionBitsToBytes,
  convertCollisionBytesToBits: () => convertCollisionBytesToBits,
  convertCollisionBytesToBitsWithRegion: () => convertCollisionBytesToBitsWithRegion
});
module.exports = __toCommonJS(CollisionMap_exports);
function convertCollisionBitsToBytes(w, h, bits) {
  const bytes = new Uint8Array(w * h);
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] = (bits[i >> 3] ?? 0) & 1 << (i & 7) ? 1 : 0;
  }
  return bytes;
}
function convertCollisionBytesToBits(bytes) {
  const bits = new Uint8Array(Math.ceil(bytes.length / 8));
  for (let i = 0; i < bytes.length; i++) {
    if (bytes[i]) {
      bits[i >> 3] |= 1 << (i & 7);
    }
  }
  return bits;
}
function convertCollisionBytesToBitsWithRegion(w, h, bytes) {
  let minX = w;
  let minY = h;
  let maxX = 0;
  let maxY = 0;
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
    return { x: 0, y: 0, w: 0, h: 0, mask: new Uint8Array([0]) };
  }
  maxX += 1;
  maxY += 1;
  const regionW = maxX - minX;
  const regionH = maxY - minY;
  const mask = new Uint8Array(Math.ceil(regionW * regionH / 8));
  for (let y = minY; y < maxY; y++) {
    for (let x = minX; x < maxX; x++) {
      const i = y * w + x;
      const j = (y - minY) * regionW + (x - minX);
      if (bytes[i]) {
        mask[j >> 3] |= 1 << (j & 7);
      }
    }
  }
  return {
    x: minX,
    y: minY,
    w: regionW,
    h: regionH,
    mask
  };
}
function convertCollisionBase64BytesToBitsWithRegion(w, h, base64Collisions) {
  return convertCollisionBytesToBitsWithRegion(w, h, Buffer.from(base64Collisions, "base64"));
}
function convertCollisionBase64BytesToBits(base64Collisions) {
  return convertCollisionBytesToBits(Buffer.from(base64Collisions, "base64"));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  convertCollisionBase64BytesToBits,
  convertCollisionBase64BytesToBitsWithRegion,
  convertCollisionBitsToBytes,
  convertCollisionBytesToBits,
  convertCollisionBytesToBitsWithRegion
});
//# sourceMappingURL=CollisionMap.js.map
