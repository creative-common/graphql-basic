var express = require('express')
var {graphqlHTTP} = require('express-graphql')
var { buildSchema } = require('graphql')


var schema = buildSchema(`
    type Query{
        hello: String,
        hello2: String
    }
`);


var root = {
    hello: () => {
        return 'Hello Graphql World!'
    },
    hello2: () => {
        return 'Hello Sanjeet!'
    },
};

var app = express();

app.use('/graphql', graphqlHTTP({
    schema:schema,
    rootValue:root,
    graphiql: true,
}));

app.listen(80, ()=>{
    console.log('Graphql app is running on port 80')
})

