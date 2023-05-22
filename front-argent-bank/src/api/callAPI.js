export async function login(url = "", data = {}) {
  try {
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.k
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  } 
  catch (error){
    throw new Error("Call API FAILED");
  }
}

export async function getProfil(url = "", token) {
  try {
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.k
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.json(); // parses JSON response into native JavaScript objects
  } 
  catch (error){
    throw new Error("Call API FAILED");
  }
}
export async function putUser(url = "", token, data ={}){
  console.log(JSON.stringify(data))
  try {
    const response = await fetch(url, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.k
      headers: {
        'Authorization': `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data),
    });
    return response.json(); // parses JSON response into native JavaScript objects
  } 
  catch (error){
    throw new Error("Call API FAILED");
  }
}
