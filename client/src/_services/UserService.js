export const UserService = {
    logIn
}

async function logIn(email, password){

    const requestOptions = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({email, password})
    }
    
    let user = await fetch('http://localhost:4000/user/login', requestOptions)
    .then(res => res.json())
    .then(user=>{
        console.log(user);
        return user;
    })
    .catch(err => console.log(err));

    return user;
}