const LOCAL_URL = 'http://192.168.86.36:7890';

export async function signUpUser(userData) {
  const url = `${LOCAL_URL}/api/v1/users`;
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  return response.json();
}
//* Bug: simulator was working and users were able to be created but didn't work on mobile expo app
//* Fix: Instead of local host, plugged in computer's IP address - theory is Backend isn't deployed

export async function signInUser(userData) {
  const url = `${LOCAL_URL}/api/v1/users/sessions`;
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok)
    throw new Error('Sign in failed. Please check your credentials');
  return response.json();
}

// fetch to validate a user in fact was getting logged in
export async function getUser() {
  const url = `${LOCAL_URL}/api/v1/users/me`;
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(),
  });
  return response.json();
}

export async function logoutUser() {
  const url = `${LOCAL_URL}/api/v1/users/sessions`;
  const response = await fetch(url, {
    method: 'DELETE',
    credentials: 'include',
  });
  return response;
}

export async function getCurrentUserPosts(id) {
  const url = `${LOCAL_URL}/api/v1/posts/user/${id}`;
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(),
  });
  return response.json();
}
