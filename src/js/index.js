'use strict';
import React from "react";
var LastfmAPI = require('lastfmapi');


var lfm = new LastfmAPI({
	'api_key' : 'dae73dda2bd7c660a397e22d6ecf41a2',
	'secret' : 'dae73dda2bd7c660a397e22d6ecf41a2'
});

lfm.artist.getSimilar({ artist: 'Bloc Party'}, function (err, track) {
	if (err) { console.log( err ); }
	console.log(track);
});

React.render(<div className="myDiv">Hello dsElectronsadsad!</div>, document.getElementById('content'));
