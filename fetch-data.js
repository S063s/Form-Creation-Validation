async function fetchUserData(apiUrl) {
    const apiUrl = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return apiUrl.json();
}

const dataContainer = document.getElementById("api-data");

try {
    const response = await fetchUserData("https://jsonplaceholder.typicode.com/users");
    dataContainer.innerHTML = JSON.stringify(response);
} catch (error) {
    console.error('Error fetching user data:', error);
    dataContainer.innerHTML = "";

}

    const userList = document.getElementById("user-list");
    response.forEach(user => {
        const userList = document.createElement("li");
        userList.textContent = `${user.name} (${user.email})`;
        userList.appendChild(userList);
        userList.appendChild(dataContainer);
    });

