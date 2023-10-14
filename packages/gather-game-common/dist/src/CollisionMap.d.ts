/// <reference types="node" />
export declare function convertCollisionBitsToBytes(w: number, h: number, bits: Readonly<Buffer | Uint8Array | number[]>): Uint8Array;
export declare function convertCollisionBytesToBits(bytes: Readonly<Buffer | Uint8Array | number[]>): Uint8Array;
export declare function convertCollisionBytesToBitsWithRegion(w: number, h: number, bytes: Readonly<Buffer | Uint8Array | number[]>): {
    x: number;
    y: number;
    w: number;
    h: number;
    mask: Uint8Array;
};
export declare function convertCollisionBase64BytesToBitsWithRegion(w: number, h: number, base64Collisions: string): {
    x: number;
    y: number;
    w: number;
    h: number;
    mask: Uint8Array;
};
export declare function convertCollisionBase64BytesToBits(base64Collisions: string): Uint8Array;
