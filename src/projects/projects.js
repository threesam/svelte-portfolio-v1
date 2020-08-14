const GITHUB_ACCOUNT = 'https://github.com/salvatoredangelo/'

const projects = [{
    id: 0,
    title: "This Portfolio",
    description: "An incessantly updated, over-engineered playground for testing out new tech, libraries, and ideas",
    tags: ["Javascript", "CSS", "HTML5", "Svelte", "P5js"],
    image: {
        src: 'images/quotes.png',
        alt: 'quotation marks randomly generated'
    },
    repo: GITHUB_ACCOUNT + 'svelte-portfolio',
    what: "I started coding this sucker out in vanilla JS only to realize that building marginally complex interfaces, without tearing out what little hair I have left, would probably go a lot smoother with the help of a framework.",
    challenge: "At the time, I only had framework experience with React but heard some cool things about Svelte and decided to take the plunge. I cannot overstate how lovely the developer experience is; although, when compared to the sheer vastness of the React community, I knew that not every problem had an already documented solution.",
    how: "I had implemented a custom p5js particle system, that worked well in vanilla JS, but required a rewire to get it playing nice with Svelte. After scouring google, reddit, and the Svelte discord, my own misconceptions about Svelte's component lifecycle were to blame -- in truth, the fix was cleaner than the problem. Ultimately, the code turned out cleaner and I gained a deeper understanding of Javascript in the process.",
    color: '#dddbf1'
},
{
    id: 1,
    title: "Six to Midnight",
    description: "A site with a tribute to and a landing for a tech-progressive arts collective based out of Trenton, NJ",
    tags: ["Javascript", "CSS", "HTML5", "Svelte", "Sapper", "Sanity"],
    image: {
        src: 'images/bubbles.png',
        alt: 'a paved forest road during autumn'
    },
    href: 'https://sixtomidnight.productions',
    repo: GITHUB_ACCOUNT + 'sixtomidnight',
    what: "I wanted to try out Sapper, akin to React's Nextjs, and pair it with a headless CMS. Sanity provided a very nice starter template. I was blown away at how beautifully abstracted the whole process was.",
    challenge: "However, I quickly realized that abstraction, without experience, can make changing functionality and adding features very frustrating very quickly.",
    how: "In order to fully leverage the power of Sapper, I had return to the fundamentals of Svelte, and Javascript, to fully understand the flow of data. After delving into the context module, and picking apart the GROQ (Sanity's lovely query language) documentation, I was able to correct course.",
    color: 'rgb(239, 192, 80)'
},
{
    id: 2,
    title: "TriviArt",
    description: "A category-rich quiz app that displays custom p5js visualizations upon gaining three correct answers",
    tags: ["Javascript", "CSS", "HTML5", "Svelte", "P5js"],
    image: {
        src: 'images/TriviArt.png',
        alt: 'a paved forest road during autumn'
    },
    href: 'https://youthful-meitner-07b399.netlify.app',
    repo: GITHUB_ACCOUNT + 'triviart',
    what: "I did not have a lot of prior experience consuming third-party APIs with Svelte, but I had a lot of data to display and needed to create a marginally complex UI/UX.",
    challenge: "Fetching data from different parts of my app was easy enough, but stitching that flow of data through various components was not immediately intuitive.",
    how: "I spent some time reviewing the methodology behind promises and async/await, and the applicable documentation of Svelte. There really is nothing more useful to a developer than GOOD documentation.",
    color: 'rgb(51, 85, 37)'
},
{
    id: 3,
    title: "Hard Road of Hope",
    description: "Landing page for a documentary about the devastating effects of the fossil fuel industry on West Virginia",
    tags: ["Javascript", "CSS", "HTML5", "P5js"],
    image: {
        src: 'images/HROH.jpg',
        alt: 'a paved forest road during autumn'
    },
    href: 'https://hardroadofhope.com',
    repo: GITHUB_ACCOUNT + 'hard-road-of-hope',
    what: "This was my first experience loosening the reigns on creative control, and listening/translating the needs of a client.",
    challenge: "There was a planned online release date for the film, and the purpose of the site to facilitate the interaction between users and a gumroad account. Through my own eagerness to flex, I feature-crept myself into a very tight deadline.",
    how: "I was not familiar with anything other than plain HTML, CSS, and JS so building was a bit tedious, yet the pressure of the situation was incredibly useful for me. In retrospect, hard-coding all of the client's info instead of hooking up a CMS was a mistake I am not likely to repeat.",
    color: '#eaa221'
},
]

export default projects