var express = require('express'),
    app = new express();

app.set('port', (process.env.PORT || 4200));
app.use("/", express.static("dist"));

app.listen(app.get('port'), function () {
    console.log('*******************************************');
    console.log('****** Node host is working now! **********');
    console.log('****** Node app is running on port', app.get('port'));
    console.log('*******************************************');
});
