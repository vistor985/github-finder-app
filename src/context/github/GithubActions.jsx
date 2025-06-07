import axios from 'axios';
const GITHUB_URL = import.meta.env.VITE_APP_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_APP_GITHUB_TOKEN;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
});

// Search users
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text, // Example search query
  });

  // Simulate fetching users from an API
  // const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
  //   headers: {
  //     Authorization: `token ${GITHUB_TOKEN}`,
  //   },
  // });

  // const { items } = await response.json();

  // // setUsers(data);
  // // setLoading(false);
  // return items;
  const response = await github.get(`/search/users?${params}`);
  return response.data.items;
};

// Get user and repos
export const getUserAndRepos = async (login) => {
  const [userResponse, reposResponse] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos?sort=created&per_page=10`),
  ]);

  return {
    user: userResponse.data,
    repos: reposResponse.data,
  };
};

// export const getUser = async (login) => {
//   // Simulate fetching users from an API
//   const response = await fetch(`${GITHUB_URL}/users/${login}`, {
//     headers: {
//       Authorization: `token ${GITHUB_TOKEN}`,
//     },
//   });

//   if (response.status === 404) {
//     window.location = '/notfound';
//   } else {
//     const data = await response.json();
//     return data;
//   }
// };

// export const getUserRepos = async (login) => {
//   const params = new URLSearchParams({
//     sort: 'created', // Sort by creation date
//     per_page: 10, // Limit the number of repos fetched
//   });

//   // Simulate fetching users from an API
//   const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
//     headers: {
//       Authorization: `token ${GITHUB_TOKEN}`,
//     },
//   });

//   const data = await response.json();

//   // setUsers(data);
//   // setLoading(false);
//   // dispatch({
//   //   type: 'GET_REPOS',
//   //   payload: data,
//   // });
//   return data;
// };
