export const exampleScript2 = `
  javascript:
      var tokenString = localStorage.getItem('token') ?? '';
      var token = JSON.parse(tokenString);
      console.log(token);
`;

export const exampleVideo = 'https://www.youtube.com/embed/1ozGKlOzEVc';

export const exampleImg = 'https://m.media-amazon.com/images/I/71AdMvnLYBL._SS500_.jpg';

export const URL_REGEX =
  '((http|https)://)(www.)?[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)';

export const isValidUrl = (url: string): boolean => !!url.match(URL_REGEX);
