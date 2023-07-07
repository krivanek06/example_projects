export const LOGGER_PROVIDER_TOKEN = 'LOGGER_PROVIDER_TOKEN';

export interface LOGGER {
  logNormal: () => void;

  logWarning: () => void;
}
