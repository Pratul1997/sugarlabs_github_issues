const express=require('express');
const hbs=require('hbs');
const request=require('request');
// const bug1=require('./bug');

var port=process.env.PORT || 3000;







// var enhancements_t_1,enhancements_t_2,enhancements_t_3,enhancements_t_4;
// var enhancements_h_1,enhancements_h_2,enhancements_h_3,enhancements_h_4;

// var enhancements = {
//   url: 'https://api.github.com/search/issues?&q=org%3Asugarlabs+label%3A%22enhancement%22+state%3Aopen',
//   json:true,
//   headers: {
//     'User-Agent': 'request'
//   }
// };
 
// function callback(error, response, body) {
// 	enhancements_t_1=body.items[0].title;
// 	enhancements_t_2=body.items[1].title;
// 	enhancements_t_3=body.items[2].title;
// 	enhancements_t_4=body.items[3].title;
// 	enhancements_h_1=body.items[0].html_url;
// 	enhancements_h_2=body.items[1].html_url;
// 	enhancements_h_3=body.items[2].html_url;
// 	enhancements_h_4=body.items[3].html_url;
// }
 
// request(enhancements, callback);






// var good_first_issue_t_1,good_first_issue_t_2;

// var good_first_issue = {
//   url: 'https://api.github.com/search/issues?&q=org%3Asugarlabs+label%3A%22good+first+issue%22+state%3Aopen',
//   json:true,
//   headers: {
//     'User-Agent': 'request'
//   }
// };
 
// function callback(error, response, body) {
// 	good_first_issue_t_1=body.items[0].title;
// 	good_first_issue_t_2=body.items[1].title;
// 	console.log(good_first_issue_t_1);
// 	console.log(good_first_issue_t_2);
// }
 
// request(Good_First_issue, callback);





// var help_wanted_t_1,help_wanted_t_2;
 
// var help_wanted = {
//   url: 'https://api.github.com/search/issues?&q=org%3Asugarlabs+label%3A%22help%20wanted%22+state%3Aopen',
//   json:true,
//   headers: {
//     'User-Agent': 'request'
//   }
// };
 
// function callback(error, response, body) {
// 	help_wanted_t_1=body.items[0].title;
// 	help_wanted_t_2=body.items[1].title;
// 	console.log(help_wanted_t_1);
// 	console.log(help_wanted_t_2);
// }
 
// request(help_Wanted, callback);






// var design_t_1,design_t_2,design_t_3,design_t_4;

// var design = {
//   url: 'https://api.github.com/search/issues?&q=org%3Asugarlabs+label%3A%22design%22+state%3Aopen',
//   json:true,
//   headers: {
//     'User-Agent': 'request'
//   }
// };
 
// function callback(error, response, body) {
// 	design_t_1=body.items[0].title;
// 	design_t_2=body.items[1].title;
// 	design_t_3=body.items[2].title;
// 	design_t_4=body.items[3].title;
// 	console.log(design_t_1);
// 	console.log(design_t_2);
// 	console.log(design_t_3);
// 	console.log(design_t_4);
// }
 
// request(design, callback);





// var needs_testing_t_1,needs_testing_t_2,needs_testing_t_3,needs_testing_t_4;

// var needs_testing = {
//   url: 'https://api.github.com/search/issues?&q=org%3Asugarlabs+label%3A%22needs%20testing%22+state%3Aopen',
//   json:true,
//   headers: {
//     'User-Agent': 'request'
//   }
// };
 
// function callback(error, response, body) {
// 	needs_testing_t_1=body.items[0].title;
// 	needs_testing_t_2=body.items[1].title;
// 	needs_testing_t_3=body.items[2].title;
// 	needs_testing_t_4=body.items[3].title;
// 	console.log(needs_testing_t_1);
// 	console.log(needs_testing_t_2);
// 	console.log(needs_testing_t_3);
// 	console.log(needs_testing_t_4);
// }
 
// request(needs_testing, callback);






// var documentation_t_1,documentation_t_2,documentation_t_3,documentation_t_4;

// var documentation = {
//   url: 'https://api.github.com/search/issues?&q=org%3Asugarlabs+label%3A%22documentation%22+state%3Aopen',
//   json:true,
//   headers: {
//     'User-Agent': 'request'
//   }
// };
 
// function callback(error, response, body) {
// 	documentation_t_1=body.items[0].title;
// 	documentation_t_2=body.items[1].title;
// 	documentation_t_3=body.items[2].title;
// 	documentation_t_4=body.items[3].title;
// 	console.log(documentation_t_1);
// 	console.log(documentation_t_2);
// 	console.log(documentation_t_3);
// 	console.log(documentation_t_4);
// }
 
// request(documentation, callback);







var app=express();

app.set('view engine','hbs');

app.get('/',(req,res)=>{
	res.render('index.hbs',{
		currentYear:new Date().getFullYear(),
		bug1.bug_t_1,
		bug1.bug_t_2,
		bug1.bug_t_3,
		bug1.bug_t_4,
		bug1.bug_h_1,
		bug1.bug_h_2,
		bug1.bug_h_3,
		bug1.bug_h_4
		// enhancements_t_1,
		// enhancements_t_2,
		// enhancements_t_3,
		// enhancements_t_4,
		// enhancements_h_1,
		// enhancements_h_2,
		// enhancements_h_3,
		// enhancements_h_4,
		// good_first_issue_t_1,
		// good_first_issue_t_2,
		// help_wanted_t_1,
		// help_wanted_t_2,
		// design_t_1,
		// design_t_2,
		// design_t_3,
		// design_t_4,
		// needs_testing_t_1,
		// needs_testing_t_2,
		// needs_testing_t_3,
		// needs_testing_t_4,
		// documentation_t_1,
		// documentation_t_2,
		// documentation_t_3,
		// documentation_t_4
	});
});

app.listen(port,()=>{
	console.log('Server is up');
});