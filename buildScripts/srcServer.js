import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3000;
const app = express(); // creates an instance of express
const compiler = webpack(config);

/* eslint-disable no-console */

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

// routes
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '../src/index.html'));
});

// listen
app.listen(port, function (err) {
	if (err) {
		console.log(err);
	} else {
		open('http://localhost:' + port);
	}
})
