const apiUrl = 'https://jsonplaceholder.typicode.com/users';

async function fetchData() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

const dataContainer = document.getElementById("api-data");

fetchData().then(data => {
    dataContainer.innerHTML = JSON.stringify(data);
}).catch(error => {
    console.error('Error fetching user data:', error);
    dataContainer.innerHTML = "";
});

