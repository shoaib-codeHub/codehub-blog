import express from "express"
import bodyParser from "body-parser";

const app = express()
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

let posts = [];


app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.ejs', { posts: posts });
});

app.post('/create-post', (req, res) => {
    const newPost = {
        title: req.body.postTitle,
        content: req.body.postContent
    };

    posts.push(newPost);

    res.redirect('/');
});
// DELETE Route
app.post('/delete', (req, res) => {
    const index = req.body.postIndex;
    posts.splice(index, 1);
    res.redirect('/');
});

app.get('/edit/:id', (req, res) => {
    const index = req.params.id;
    const postToEdit = posts[index];
    res.render('edit', { post: postToEdit, index: index });
});

app.post('/update/:id', (req, res) => {
    const index = req.params.id;
    posts[index] = {
        title: req.body.postTitle,
        content: req.body.postContent
    };
    res.redirect('/');
});
app.get('/about', (req, res) => {
    res.render("about.ejs")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
