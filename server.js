const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Users database file
const usersFile = path.join(__dirname, 'users.json');

// Load users from file
let users = [];
function loadUsers() {
    try {
        if (fs.existsSync(usersFile)) {
            const data = fs.readFileSync(usersFile, 'utf8');
            users = JSON.parse(data);
        }
    } catch (error) {
        console.error('Error loading users:', error);
        users = [];
    }
}

// Save users to file
function saveUsers() {
    try {
        fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
    } catch (error) {
        console.error('Error saving users:', error);
    }
}

// Load users on startup
loadUsers();

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    
    if (!username || !password) {
        return res.json({ success: false, error: 'Usuario y contraseña requeridos' });
    }
    
    const user = users.find(u => u.username === username && u.password === password);
    
    if (!user) {
        return res.json({ success: false, error: 'Usuario o contraseña incorrectos' });
    }
    
    res.json({
        success: true,
        userId: user.id,
        username: user.username
    });
});

app.post('/api/signup', (req, res) => {
    const { fullName, username, password } = req.body;
    
    if (!fullName || !username || !password) {
        return res.json({ success: false, error: 'Nombre, usuario y contraseña requeridos' });
    }
    
    if (password.length < 3) {
        return res.json({ success: false, error: 'La contraseña debe tener al menos 3 caracteres' });
    }
    
    if (users.find(u => u.username === username)) {
        return res.json({ success: false, error: 'El usuario ya existe' });
    }
    
    const newUser = {
        id: users.length + 1,
        fullName,
        username,
        password,
        createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    saveUsers();
    
    res.json({
        success: true,
        userId: newUser.id,
        fullName: newUser.fullName,
        username: newUser.username
    });
});

app.get('/api/themes', (req, res) => {
    res.json({
        themes: [
            { id: 'endocrino-completo', name: 'Sistema Endócrino Completo', questions: 100 },
            { id: 'tiroides-paratiroides', name: 'Tiroides y Paratiroides', questions: 100 },
            { id: 'sistema-endocrino', name: 'Sistema Endócrino', questions: 50 },
            { id: 'endocrino-1', name: 'Endocrino 1', questions: 50 },
            { id: 'tiroides', name: 'Tiroides', questions: 50 },
            { id: 'paratiroides', name: 'Paratiroides', questions: 50 },
            { id: 'suprarrenal', name: 'Suprarrenal', questions: 50 },
            { id: 'sistema-tegumentario', name: 'Sistema Tegumentario', questions: 50 }
        ]
    });
});

// Static files (after routes)
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando en http://localhost:${PORT}`);
});
