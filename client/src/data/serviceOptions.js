import { services } from './services.js';

// Must match SERVICE_OPTIONS in server/utils/constants.js (the backend rejects anything else).
export const serviceOptions = [...services.map((s) => s.title), 'Other / Not Sure'];
