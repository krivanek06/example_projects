import { Observable } from 'rxjs';
export interface PluginComponent {
  message: string;
}

export type PluginType = 'plugin-one' | 'plugin-two';

export interface FakedResponseData {
  pluginType: PluginType;
  message: string;
}

export const getSyncResponse = (): FakedResponseData[] => {
  return [
    { pluginType: 'plugin-one', message: 'Sync: This is the first message' },
    { pluginType: 'plugin-two', message: 'Sync: This is the second message' },
  ];
};

export const getAsyncResponse = (): Observable<FakedResponseData[]> => {
  const response: FakedResponseData[] = [
    { pluginType: 'plugin-one', message: 'Async: This is the first message' },
    { pluginType: 'plugin-one', message: 'Async: This is the second message' },
    { pluginType: 'plugin-two', message: 'Async: This is the third message' },
  ];

  return new Observable((subscriber) => {
    setTimeout(() => {
      subscriber.next(response);
    }, 1000);
  });
};
