var mongoose = require("mongoose");

// Saves reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new ArticleSchema object
var ArticleSchema = new Schema({
    title: {
        type: String,
    },
    link: {
        type: String,
    },
    summary: {
        type: String,
    },
    // 'note' stores a Note id that allows the user to leave notes on articles
    // The ref property links that id to the Note model so they will be displayed together
    note: {
        type: Schema.Types.ObjectId,
        ref: "Note"
    }
});

// Create our model of the schema above using mongoose's method
var Article = mongoose.model("Article", ArticleSchema)

module.exports = Article;