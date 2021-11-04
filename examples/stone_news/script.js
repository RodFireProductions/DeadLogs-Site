/*
    Rodrick hates their life.
--------------------------- # # # # #
    Welcome to the script file!

    Here you can edit certain charateristics
    of your site!
--------------------------- # # # # #
-- Table of Contents --
  1. Basic Configs
  2. Post Arrays / Archive
*/

//=// --- Basic Configs --- //=// [1]

let siteName = "Stone News";
let lang = "en"; // The language of your site. Example, en = english, fr = français (french), etc.
let siteUrl = "https://deadjournals.deadinsideartist.art/examples/stone_news/index.html"; // You can just put the url of your site here, whether that be a subdomain or custom

// Feel free to leave one of these values as 'null' if you don't wish to use them.
let socials = [
    // Set up links to go in your about page. It could be to your website or socials
    // Heck, even a rick roll if you're feeling like it.
    ['My Blog', siteUrl], // Example: ['Twitter', 'https://twitter.com/(your account name)']
    ['DeadJournals', 'https://deadjournals.deadinsideartist.art'],
    ['GitHub', 'https://github.com/RodFireProductions/DeadJournals/tree/main/examples/stone_news']
]


// Feel free to leave one of these values as 'null' if you don't wish to use them.
let author = {
    name: "Marrow Gradient",
    title: 'A rock on the web', // A job title or personal title, what ever defines you <3
    picture: "./assets/images/author.png", // This is the url of the author picture, can be local or a link. Square or almost square is recommended
    pronouns: 'fae/faer', // Examples: he/him, she/her, they/them, ze/zir, etc. Resource: https://en.pronouns.page/
    extra: ['aroace','donut stone', 'mixed'], // Your orientation, ethinicty, etc? If none, then set this to `null`

    line: "Pebbles are cute!" // A quote? A goofy phrase? Your own personal motto? Be creative!
}

let navi = [
    ['home','/index.html'],
    ['about','/about.html'],
    ['archive','/archive.html']
]

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
    ['Example Polar Post', 'October 25, 2021 | 2:36pm', 'post/oct_25_2021_example.html'],
    ['Example Yet Post', 'October 26, 2021 | 11:07am', 'post/oct_26_2021_example2.html'],
    ['Example Dog Post', 'October 26, 2021 | 11:52am', 'post/oct_26_2021_example3.html']
]

// --------------------------- # # # # #
