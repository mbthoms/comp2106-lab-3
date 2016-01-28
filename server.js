/**
 * Created by matthewthoms on 2016-01-27.
 */

// Linking to the connect package.
var connect = require('connect');

// Linking to the url module.
var url = require('url');

// Creating a new app using the connect package.
var app = connect();

//Creating the function to calculate the numbers.
var calculateNumbers = function(req, res, next) {
    //Getting the information from the url's querystring.
    var qs = url.parse(req.url, true).query;

    //Getting the method from the querystring.
    var method = qs.method;

    //Getting the x number from the querystring.
    var x = qs.x;

    //Getting the y number from the querystring.
    var y = qs.y;

    var total = 0;

    //Figuring out what the method is.
    if(method == 'add') {
        //Calculating Add total.
        total = parseFloat(x) + parseFloat(y);

        //Displaying the results to the user.
        res.write(x + ' ' + '+ ' + y + ' ' + '= ' + total);
    }
    else if(method == 'subtract') {
        //Calculating subtract total.
        total = parseFloat(x) - parseFloat(y);

        //Displaying the results to the user.
        res.write(x + ' ' + '- ' + y + ' ' + '= ' + total);
    }
    else if(method == 'multiply') {
        //Calculating multiply total.
        total = parseFloat(x) * parseFloat(y);

        //Displaying the results to the user.
        res.write(x + ' ' + '* ' + y + ' ' + '= ' + total);
    }
    else {
        //Calculating divide total.
        total = parseFloat(x) / parseFloat(y);

        //Displaying the results to the user.
        res.write(x + ' ' + '/ ' + y + ' ' + '= ' + total);
    };

    //Ending the Response.
    res.end();
};

// Routing url's to the function.
app.use('/lab3', calculateNumbers);

// Listening for the events.
app.listen(3000);
console.log('This app is now running at http://localhost:3000');