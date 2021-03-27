//array of inspirational quotes
const inspirationalQuotes = ['There is no triumph without struggle.', 'Don\'t count the days. Make the days count.', 'Push yourself, because no one else will do it for you.'];


const generateMessage = quotes => {

    return quotes[Math.floor(Math.random() * quotes.length)];

}

console.log(generateMessage(inspirationalQuotes));
