const request=require('request');

var bug_t_1,bug_t_2,bug_t_3,bug_t_4;
var bug_h_1,bug_h_2,bug_h_3,bug_h_4;

var bug = {
  url: 'https://api.github.com/search/issues?&q=org%3Asugarlabs+label%3A%22bug%22+state%3Aopen',
  json:true,
  headers: {
    'User-Agent': 'request'
  }
};
 
function callback(error, response, body) {
	bug_t_1=body.items[0].title;
	bug_t_2=body.items[1].title;
	bug_t_3=body.items[2].title;
	bug_t_4=body.items[3].title;
	bug_h_1=body.items[0].html_url;
	bug_h_2=body.items[1].html_url;
	bug_h_3=body.items[2].html_url;
	bug_h_4=body.items[3].html_url;
	console.log(bug_t_1);
	
}

request(bug, callback);



module.exports = {
    bug_t_1,
    bug_t_2,
    bug_t_3,
    bug_t_4,
    bug_h_1,
    bug_h_2,
    bug_h_3,
    bug_h_4
};
