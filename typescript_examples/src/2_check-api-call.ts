import fetch from 'cross-fetch';
import { z } from 'zod';
/*
  Shape
  {
    "user_repositories_url": "https://api.github.com/users/{user}/repos{?type,page,per_page,sort}",
    "user_search_url": "https://api.github.com/search/users?q={query}{&page,per_page,sort,order}"
    .....
  }
}
*/
const url = 'https://flash.siwalik.in/delay/1000/url/api.github.com';

const DataCheck = z.object({
  user_repositories_url: z.string(),
  user_search_url: z.string(),
});

(async () => {
  const fetchResult = await fetch(url);
  const data = await fetchResult.json();
  const validate = DataCheck.parse(data);

  console.log(validate);
})();

// // export to parent
console.log('executing');
