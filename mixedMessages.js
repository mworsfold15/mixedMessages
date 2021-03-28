//object version

const quotesGenerator = {
    _combinedQuotes: {
        quotes: [],
        authors: [],
        dates: [],
    },
    get combinedQuotes() {
        return {
            quote: this.quotes,
            authors: this.authors,
            dates: this.dates
        }
    },
    get quotes() {
        return this._combinedQuotes.quotes;
    },
    get authors() {
        return this._combinedQuotes.authors;
    },
    get dates(){
        return this._combinedQuotes.dates;
    },
    set quotes(quotesIn){
        this._combinedQuotes.quotes = quotesIn;
    },
    set authors(authorsIn){
        this._combinedQuotes.authors = authorsIn;
    },
    set dates(datesIn){
        this._combinedQuotes.dates = datesIn;
    },

    //for adding a new quote/date/author
    addContent(type, content){
        //type = quote/date/author
        //content = one of these 3
        const newContent = {
            content
        };
        return this._combinedQuotes[type].push(newContent);
    },
    //retrieve content from array
    getRandomQuote(type){
        
        //retrieve array of details from the combined quotes object
        //and store in a variable called phrase

        const phrases = this._combinedQuotes[type];

        //random index

        const randomIndex = Math.floor(Math.random() * phrases.length);

        //return the phrase at a random index

        return phrases[randomIndex];
    },
    generateRandomQuotes() {
        const quote = this.getRandomQuote('quotes');

        const author = this.getRandomQuote('authors');

        const date = this.getRandomQuote('dates');

        return `${quote.content} - ${author.content} - ${date.content}.`;
    }
}

quotesGenerator.addContent('quotes', 'There is no triumph without struggle.');
quotesGenerator.addContent('quotes', 'Don\'t count the days. Make the days count.');
quotesGenerator.addContent('quotes', 'Push yourself, because no one else will do it for you.');

quotesGenerator.addContent('authors', 'Jordan Peterson');
quotesGenerator.addContent('authors', 'Michael Caine');
quotesGenerator.addContent('authors', 'Thomas Sowell');

quotesGenerator.addContent('dates', '17-05-2011');
quotesGenerator.addContent('dates', '23-08-2014');
quotesGenerator.addContent('dates', '08-03-2018');

let completeQuote = quotesGenerator.generateRandomQuotes();

console.log(completeQuote);