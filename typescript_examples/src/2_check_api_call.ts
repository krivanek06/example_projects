import fetch from 'cross-fetch';
import { z } from 'zod';
/*
  Replacement for swagger ?

  "summary": {
    "ceo": string;
    "marketPrice": number;
    .....
  }
}
*/
const url = 'https://serverflask-eqvqg22pdq-lz.a.run.app/fundamentals/all?symbol=AAPL';

interface ApiResponse {
  summary: {
    ceo: string;
    marketPrice: number;
  };
}

const DataCheck = z.object({
  summary: z.object({
    ceo: z.string(),
    marketPrice: z.number(),
  }),
});

(async () => {
  const fetchResult = await fetch(url);
  const data = await fetchResult.json();
  const validate = DataCheck.parse(data);

  console.log(validate);
})();

// // export to parent
console.log('executing');
