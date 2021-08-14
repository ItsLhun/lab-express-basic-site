const express = require('express');

const hbs = require('hbs');

const app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

app.get('/', (request, response) => {
  response.render('home');
});

app.get('/home', (request, response) => {
  response.render('home');
});
app.get('/about', (request, response) => {
  response.render('about');
});
app.get('/works', (request, response) => {
  response.render('works', {
    works: [
      {
        title: 'The Hobbit',
        publication: 1937,
        description: [
          "The Hobbit is set within Tolkien's fictional universe and follows the quest of home-loving Bilbo Baggins, the titular hobbit, to win a share of the treasure guarded by Smaug the dragon. Bilbo's journey takes him from his light-hearted, rural surroundings into more sinister territory.",
          "The story is told in the form of an episodic quest, and most chapters introduce a specific creature or type of creature of Tolkien's geography. Bilbo gains a new level of maturity, competence, and wisdom by accepting the disreputable, romantic, fey, and adventurous sides of his nature and applying his wits and common sense. The story reaches its climax in the Battle of Five Armies, where many of the characters and creatures from earlier chapters re-emerge to engage in conflict.",
          'Personal growth and forms of heroism are central themes of the story, along with motifs of warfare.'
        ]
      },
      {
        title: 'Lord of the Rings: The Fellowship of the Ring',
        publication: 1954,
        description: 'lorem'
      },
      {
        title: 'Lord of the Rings: The Two Towers',
        publication: 1954,
        description: 'lorem'
      },
      {
        title: 'Lord of the Rings: The Return of the King',
        publication: 1955,
        description: 'lorem'
      },
      {
        title: 'The Adventures of Tom Bombadil',
        publication: 1962,
        description: 'lorem'
      }
    ]
  });
});
app.get('/gallery', (request, response) => {
  response.render('gallery', {
    images: [
      {
        source: '/imgs/tolkien1.jpg',
        caption: 'Tolkien in 1940'
      },
      {
        source: '/imgs/tolkien2.jpg',
        caption: 'lorem'
      },
      {
        source: '/imgs/tolkien3.jpeg',
        caption: 'lorem'
      },
      {
        source: '/imgs/tolkien4.jpg',
        caption: 'lorem'
      }
    ]
  });
});
app.listen(3010);
