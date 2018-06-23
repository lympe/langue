import { NAV } from './types';

export const navigate = view => {
  return {
    type: NAV,
    payload: view
  };
};
