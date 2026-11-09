import express from 'express';
const app = express();
const PORT = 3006;

app.set('view engine', 'ejs');
app.use(express.static('public'));

// Home route
app.get('/', (req, res) => {
    const person = { name: 'Donald Duck', occupation: 'plumber', favoriteColor: 'blue'};
    res.render('home', { person });
});

// Friends route (PART IV)
app.get('/friends', (req,res)=>{
    const friends = ['Mickey','Goofy','Minnie','Daisy'];
    res.render('friends',{ friends });
});

// Movies route (Part IV Practice)
app.get('/movies', (req, res) => {
    const movies = [
        'The Odyssey',
        'Inception',
        'Interstellar',
        'The Matrix',
        'The Dark Knight'
    ];
    res.render('movies', { movies });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});