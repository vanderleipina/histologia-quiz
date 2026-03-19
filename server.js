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
            { id: 'endocrino', name: 'Endócrino', questions: 100 },
            { id: 'tiro-para', name: 'Tiroides & Paratiroides', questions: 100 },
            { id: 'respiratorio', name: 'Respiratorio', questions: 50 },
            { id: 'digestivo-1', name: 'Digestivo I', questions: 50 },
            { id: 'digestivo-2', name: 'Digestivo II', questions: 50 },
            { id: 'suprarrenal', name: 'Suprarrenal', questions: 50 },
            { id: 'sistema-tegumentario', name: 'Tegumentario', questions: 50 }
        ]
    });
});

// Serve theme JSON files explicitly
app.get('/themes/:themeId.json', (req, res) => {
    const themeId = req.params.themeId;
    const themePath = path.join(__dirname, 'public', 'themes', themeId + '.json');
    
    try {
        if (fs.existsSync(themePath)) {
            const data = fs.readFileSync(themePath, 'utf8');
            res.setHeader('Content-Type', 'application/json');
            res.send(data);
        } else {
            res.status(404).json({ error: 'Theme not found' });
        }
    } catch (error) {
        console.error('Error loading theme:', error);
        res.status(500).json({ error: 'Error loading theme' });
    }
});

// Static files (after routes)
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando en http://localhost:${PORT}`);
});
