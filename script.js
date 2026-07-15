//your code here
// Clear body to prevent duplicate elements from previous runs
document.body.innerHTML = '';
const body = document.querySelector('body');

// 1. Header
const header = document.createElement('header');
header.innerHTML = '<h1>The Shawshank Redemption</h1>';
body.appendChild(header);

// 2. Navigation (with text and required IDs)
const nav = document.createElement('nav');
nav.innerHTML = `
    <p>Navigate to:</p>
    <a href="#actor" id="nav-actor">Actors</a> | 
    <a href="#quote" id="nav-quote">Quotes</a>
`;
body.appendChild(nav);

// 3. Summary Section
const summary = document.createElement('section');
summary.innerHTML = `
    <h2>Plot Summary</h2>
    <p>Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency. Andy Dufresne, a banker wrongly convicted of murder, slowly earns the respect of his fellow inmates and the warden while secretly plotting his escape over two decades.</p>
`;
body.appendChild(summary);

// 4. Actor Section (ID: actor)
const actorSection = document.createElement('section');
actorSection.id = 'actor';
actorSection.innerHTML = `
    <h2>Actors</h2>
    <p>The film stars <b>Tim Robbins</b> as Andy Dufresne and <b>Morgan Freeman</b> as Ellis "Red" Redding. Their powerful performances drive the emotional core of the story.</p>
`;
body.appendChild(actorSection);

// 5. Quote Section (ID: quote)
const quoteSection = document.createElement('section');
quoteSection.id = 'quote';
quoteSection.innerHTML = `
    <h2>Favorite Quote</h2>
    <p>"Hope is a good thing, maybe the best of things, and no good thing ever dies." - Andy Dufresne</p>
`;
body.appendChild(quoteSection);

// 6. Aside (IMDb Rating & Release Date)
const aside = document.createElement('aside');
aside.innerHTML = `
    <h3>Movie Details</h3>
    <p><strong>IMDb Rating:</strong> 9.3/10</p>
    <p><strong>Release Date:</strong> September 23, 1994</p>
`;
body.appendChild(aside);

// 7. Footer
const footer = document.createElement('footer');
footer.innerHTML = '<p>Produced by: Niki Marvin</p>';
body.appendChild(footer);   