/*
    Rodrick hates their life.
--------------------------- # # # # #
    Welcome to the configuration file!

    Here you can edit certain charateristics
    of your site!
--------------------------- # # # # #
-- Table of Contents --
  1. Basic Configs
  2. Post Arrays / Archive
*/

//=// --- Basic Configs --- //=// [1]

let siteName = '◉ DeadLogs ◉';
let lang = 'en'; // The language of your site. Example, en = english, fr = français (french), etc.
let siteUrl = 'https://deadlogs.shroom.ink'; // You can just put the url of your site here, whether that be a subdomain or custom.

// Put down your name and website/social media
let author = {
    name: 'RodFireProductions',
    url: 'https://deadinsideartist.art'
};

// This is where you define the pages that'll be in your navigation bar throughout the site.
let navi = [
    ['home','/'],
    ['about','/about.html'],
    ['get started','/tutorial.html'],
    ['examples', '/examples.html']
];

// The link that holds the archive list.
let middleLink = ['tutorials', '/tutorial.html#more'];
let folder = 'post';

// This is the text that appears in the footer of your site. Feel free to customize it.
let footer = `
    Owned & Written by <a href="${author.url}" target="_blank">${author.name}</a>
    <br>
    <a href="https://rodfireproductions.itch.io/deadlogs" target="_blank">Itch</a>
    ◉
    <a href="https://github.com/RodFireProductions/DeadLogs" target="_blank">GitHub</a>
`;

// --------------------------- # # # # #
// // / / / // / / / / // / / / / / / / /

//=// --- Posts --- //=// [2]
/*
    This array is very important when it comes to the navigation between
    each post.

    **ANYTIME** you add a new post to your site/blog, please add the file
    location to the *bottom* of `postArchive`. This will keep the posts linked
    together and in chronological order.
*/

let postArchive = [
    //['Title', 'Date', 'Location']
    ['My Recommendations', 'Last Updated: May 13, 2022', 'recommendations.html'],
    ['FAQ', 'Last Updated: May 13, 2022', 'faq.html'],
    ['Editing Your Theme', 'Last Updated: May 13, 2022', 'theme_editing.html'],
    ['Hosting & Domains', 'Last Updated: May 12, 2022', 'hosting.html']
];

// --------------------------- # # # # #
// // / / / // / / / / // / / / / / / / /
