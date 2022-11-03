const bufFromArray = Buffer.from([0x62, 0x75, 0x66, 0x65, 0x72]);
console.log(bufFromArray);

const arrayBuffer = new Uint16Array(3);
arrayBuffer[0] = -5;
arrayBuffer[1] = 4;
arrayBuffer[2] = 20;
console.log(arrayBuffer[0] + arrayBuffer[1]);
console.log(arrayBuffer[2]);
arrayBuffer[2] = 9;
console.log(arrayBuffer[2]);
console.log(arrayBuffer);

// shares memory with 'arrayBuffer'
const bufFromArrayBuffer = Buffer.from(arrayBuffer.buffer);
console.log(bufFromArrayBuffer);

// print the item at the 4th position in memory
console.log(bufFromArrayBuffer.at(0));

const arrayBuffer2 = new Uint32Array(10);
arrayBuffer2[0] = 100;
arrayBuffer2[1] = 200;
arrayBuffer2[2] = 300;

console.log(arrayBuffer[0] + arrayBuffer[1]);
console.log(arrayBuffer2);

/*
 * To convert buffer to string, we use toString() method
 * By default, it will convert to UTF-8 encoding. Other
 * options are possible too, such as ASCII, HEX, or others
 */

const bufFromString = Buffer.from('¿Cómo esta?');
console.log(bufFromString.toString('utf-8'));
console.log(bufFromString.toString('ascii'));

const bufFromHex = Buffer.from('c2bf43c3b36f2065737c3a13f', 'hex');
console.log(bufFromHex.toString());
