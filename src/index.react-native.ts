import * as RNRandomBytes from 'expo-random';

export * from './index.browser';

export async function randomBytes(size: number) {
    const buff = await RNRandomBytes.getRandomBytes(size);
    return buff;
}
