export const register = async ({ username, password, school }) => {
  const endpoint =
    'https://70tigy27h2.execute-api.us-east-1.amazonaws.com/prod/register';

  const searchParams = new URLSearchParams();
  searchParams.set('username', username);
  searchParams.set('password', password);
  searchParams.set('school', school);

  fetch(`${endpoint}?${searchParams}`)
    .then(() => console.log('do something when registration succeeds'))
    .catch(() => console.log('registration failed '));
};
