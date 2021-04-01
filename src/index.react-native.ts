import * as RNRandomBytes from 'expo-random';

export * from './index.browser';

export function randomBytes(size: number) {
    return RNRandomBytes.getRandomBytes(size);
}
