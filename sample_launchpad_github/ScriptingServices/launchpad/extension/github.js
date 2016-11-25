/* eslint-env node, dirigible */

exports.getMenuItem = function() {
	return {
		name: 'GitHub',
		link: 'https://github.com/dirigiblelabs/',
		newTab: true
	};
};

exports.getHomeItem = function(){
	return {
		image: 'github',
		color: 'blue',
		path: 'https://github.com/dirigiblelabs/',
		title: 'GitHub',
		description: 'Dirigible Labs',
		newTab: true
	};
};
