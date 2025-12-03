import '@testing-library/jest-dom';

// Polyfill for React Router TextEncoder in Jest
import { TextEncoder, TextDecoder } from 'util';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
