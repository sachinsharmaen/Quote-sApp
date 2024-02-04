const Quote = require('./models/quote');
require('./db/connections');

const dummyData = [
    {
        "author": "Kurt Vonnegut (March 2015)",
        "text": "True terror is to wake up one morning and discover that your high school class is running the country.",
        "photo":"https://karsh.org/wordpress/wp-content/uploads/2021/11/Yousuf-Karsh-Kurt-Vonnegut-1990-01-1223x1536.jpg"
    },
    {
        "author": "Robert Benchley (July 1934)",
        "text": "In America, there are two classes of travel—first class and with children.",
        "photo": "https://www.laphamsquarterly.org/sites/default/files/styles/tall_rectangle_custom_user_large_1x/public/images/contributor/66346-050-ccbf0884.jpg?itok=CLYrytAL&timestamp=1409845245"
    },
    {
        "author": "Franklin D. Roosevelt",
        "text": "The only limit to our realization of tomorrow will be our doubts of today.",
        "photo":"https://upload.wikimedia.org/wikipedia/commons/4/42/FDR_1944_Color_Portrait.jpg"
    },
    {
        "author": "Winston Churchill",
        "text": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "photo":"https://upload.wikimedia.org/wikipedia/commons/c/c0/Portrait_of_Winston_Churchill.jpg"
    },
    {
        "author": "Dalai Lama",
        "text": "The purpose of our lives is to be happy.",
        "photo": "https://ichef.bbci.co.uk/news/976/cpsprodpb/12297/production/_129319347_dalailama.jpg.webp"
    },
    {
        "author": "Wayne Gretzky",
        "text": "You miss 100% of the shots you don't take.",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/c/cc/Andrew_Scheer_with_Wayne_Gretzky_%2848055697168%29_%28cropped%29.jpg"
    },
    {
        "author": "Nelson Mandela",
        "text": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "photo":"https://upload.wikimedia.org/wikipedia/commons/0/02/Nelson_Mandela_1994.jpg"
    },
    {
        "author": "Franklin D. Roosevelt",
        "text": "The only thing we have to fear is fear itself.",
        "photo":"https://upload.wikimedia.org/wikipedia/commons/4/42/FDR_1944_Color_Portrait.jpg"
    },
    {
        "author": "Peter Drucker",
        "text": "The best way to predict the future is to create it.",
        "photo":"https://upload.wikimedia.org/wikipedia/commons/e/ea/Drucker5789.jpg"
    },
    {
        "author": "Albert Einstein",
        "text": "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg"
    }
]

async function seed(){
    await Quote.deleteMany({});
    await Quote.insertMany(dummyData);
    console.log('DB seeded');
}

seed();