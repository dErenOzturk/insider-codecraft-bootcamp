const style = document.createElement('style');
style.textContent = `
    .ins-api-users {
        max-width: 1200px;
        margin: 20px auto;
        padding: 20px;
        font-family: Arial, sans-serif;
    }
    .user-card {
        background: #f8f9fa;
        border-radius: 8px;
        padding: 20px;
        margin-bottom: 15px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        transition: transform 0.2s;
    }
    .user-card:hover {
        transform: translateY(-3px);
    }
    .user-name {
        color: #2c3e50;
        font-size: 1.2em;
        margin-bottom: 10px;
    }
    .user-email {
        color: #3498db;
        margin-bottom: 10px;
    }
    .user-address {
        color: #7f8c8d;
        font-size: 0.9em;
    }
    .error-message {
        color: #e74c3c;
        padding: 20px;
        text-align: center;
        background: #fde2e2;
        border-radius: 8px;
    }
`;
document.head.appendChild(style);

// localStorage kontrol
function checkLocalStorage(key) {
    const item = localStorage.getItem(key);
    if (!item) return null;

    const data = JSON.parse(item);
    const now = new Date().getTime();

    if (now > data.expiry) {
        localStorage.removeItem(key);
        return null;
    }

    console.log("Önbellekten veri yüklendi!");
    return data.value;
}

// localStorage'a veri kaydetme
function saveLocalStorage(key, value, ttl) {
    const now = new Date().getTime();
    const item = {
        value: value,
        expiry: now + ttl,
    };
    localStorage.setItem(key, JSON.stringify(item));
}

// Kullanıcı verilerini görüntüleme
function displayUsers(users) {
    const container = document.querySelector('.ins-api-users');
    container.innerHTML = '';

    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card';
        
        userCard.innerHTML = `
            <div class="user-name">${user.name}</div>
            <div class="user-email">${user.email}</div>
            <div class="user-address">
                ${user.address.street}, ${user.address.suite}<br>
                ${user.address.city}, ${user.address.zipcode}
            </div>
        `;
        
        container.appendChild(userCard);
    });
}

function displayError(message) {
    const container = document.querySelector('.ins-api-users');
    container.innerHTML = `
        <div class="error-message">
            ${message}
        </div>
    `;
}

async function fetchAndDisplayUsers() {
    const oneDay = 86_400_000;
    const savedUsers = checkLocalStorage('users');

    if (savedUsers) {
        displayUsers(savedUsers);
        return;
    }

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Veri alınırken bir hata oluştu');
        }
        const users = await response.json();
        
        saveLocalStorage('users', users, oneDay);
        displayUsers(users);
    } catch (error) {
        displayError('Kullanıcı verileri yüklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
        console.error('Hata:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchAndDisplayUsers); 