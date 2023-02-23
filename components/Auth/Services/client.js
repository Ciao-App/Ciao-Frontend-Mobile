export async function signUpUser(userData) {
  const url = 'http://192.168.86.33:7890/api/v1/users';
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
  // .then((response) => response.json())
  // .then((userData) => {
  //   console.log('success', userData);
  // })
  // .catch((error) => {
  //   console.error('error', error);
  // });
  // console.log('response', response);
  return response.json();
}
//* Bug: simulator was working and users were able to be created but didn't work on mobile expo app
//* Fix: Instead of local host, plugged in computer's IP address - theory is Backend isn't deployed

export async function signInUser(userData) {
  const url = 'http://192.168.86.33:7890/api/v1/users/sessions';
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

// fetch to validate a user in fact was getting logged in
export async function getUser() {
  const url = 'http://192.168.86.33:7890/api/v1/users/me';
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
