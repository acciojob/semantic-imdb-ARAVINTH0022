//your code here
// Clear body to ensure no duplicates
document.body.innerHTML = '';
const body = document.querySelector('body');

// 1. Header
const header = document.createElement('header');
header.innerHTML = '<h1>The Shawshank Redemption</h1>';
body.appendChild(header);

// 2. Navigation (FIXED: Exactly 2 children, no extra <p> tag)
const nav = document.createElement('nav');

const linkActor = document.createElement('a');
linkActor.href = '#actor';
linkActor.id = 'nav-actor';
linkActor.innerText = 'Actors';

const linkQuote = document.createElement('a');
linkQuote.href = '#quote';
linkQuote.id = 'nav-quote';
linkQuote.innerText = 'Quotes';

nav.appendChild(linkActor);
nav.appendChild(linkQuote);
body.appendChild(nav);

// 3. Summary (FIXED: Use <summary> tag, NOT <section id="summary">)
const summaryTag = document.createElement('summary');
summaryTag.innerHTML = `
    <h2>Plot Summary</h2>
    <p>Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency. Andy Dufresne, a banker wrongly convicted of murder, slowly earns the respect of his fellow inmates while secretly plotting his escape.</p>
`;
body.appendChild(summaryTag);

// 4. Actor Section
const actorSection = document.createElement('section');
actorSection.id =    