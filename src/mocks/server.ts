import { setupServer } from 'msw/node';
import { handlers } from './handlers/server/handlers';

export const server = setupServer(...handlers);