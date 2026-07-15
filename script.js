//your code here
// 1. Clear body to prevent duplicate element errors
document.body.innerHTML = '';

// 2. Header
const header = document.createElement('header');
header.innerText = 'The Shawshank Redemption';
document.body.appendChild(header);

// 3. Navigation (CRITICAL: Must have EXACTLY 2 children)
const nav = document.createElement('nav');

const linkActor = document.createElement('a');
linkActor.href = '#actor';
linkActor.id = 'nav-actor';
linkActor.innerText = 'Actors';

const linkQuote = document.createElement('a');
linkQuote.href = '#quote';
linkQuote.id = 'nav-quote';
linkQuote.innerText = 'Quotes';

// Append ONLY the links to nav
nav.appendChild(linkActor);
nav.appendChild(linkQuote);
document.body.appendChild(nav);

// 4. Summary (CRITICAL: Must use <summary> tag, NOT <section>)
const summaryTag = document.createElement('summary');
summaryTag.innerHTML = '<h2>Plot Summary</h2><p>Two imprisoned men bond over years, finding redemption through acts of decency. Andy Dufresne, wrongly convicted, earns respect while secretly plotting his escape.</p>';
document.body.appendChild(summaryTag);

// 5. Actor Section
const actorSection = document.createElement('section');
actorSection.id = 'actor';
actorSection.innerHTML = '<h2>Actors</h2><p>Stars Tim Robbins as Andy and Morgan Freeman as Red.</p>';
document.body.appendChild(actorSection);

// 6. Quote Section
const quoteSection = document.createElement('section');
quoteSection.id = 'quote';
quoteSection.innerHTML = '<h2>Favorite Quote</h2><p>"Hope is a good thing, maybe the best of things." - Andy Dufresne</p>';
document.body.appendChild(quoteSection);

// 7. Aside
const aside = document.createElement('aside');
aside.innerHTML = '<h3>Details</h3><p>IMDb: 9.3/10</p><p>Released: 1994</p>';
document.body.appendChild(aside);

// 8. Footer
const footer = document.createElement('footer');
footer.innerText = 'Produced by: Niki Marvin';
document.body.appendChild(footer);   