// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
const jsonplaceholder = () => {
    return fetch("https://jsonplaceholder.typicode.com/users");
}

const onSuccess = (data) => {
    return data.json()
    .then(users => {  const names = users.map(user => user.name);
    return names;
    });
}

const onFailure = (error) => {
    console.error(error);
}

jsonplaceholder().then(onSuccess).then(newUsers => {console.log(newUsers);})
.catch(onFailure);