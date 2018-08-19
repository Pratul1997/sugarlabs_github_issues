var request = require('request');

var documentation_record = (callback12)=> {

  var options = {
    url: 'https://api.github.com/search/issues?&q=org%3Asugarlabs+label%3A%22documentation%22+state%3Aopen',
    headers: {
      'User-Agent': 'request'
    }
  };
     
  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body);
      callback12(undefined,{ 
        documentation_t_1:info.items[0].title,
        documentation_t_2:info.items[1].title,
        documentation_t_3:info.items[2].title,
        documentation_t_4:info.items[3].title,
        documentation_h_1:info.items[0].html_url,
        documentation_h_2:info.items[1].html_url,
        documentation_h_3:info.items[2].html_url,
        documentation_h_4:info.items[3].html_url,
        documentation_c_1:info.items[0].user.login,
        documentation_c_2:info.items[1].user.login,
        documentation_c_3:info.items[2].user.login,
        documentation_c_4:info.items[3].user.login,
        documentation_o_1:(info.items[0].updated_at).slice(0, 10),
        documentation_o_2:(info.items[1].updated_at).slice(0, 10),
        documentation_o_3:(info.items[2].updated_at).slice(0, 10),
        documentation_o_4:(info.items[3].updated_at).slice(0, 10)
      });
    } 
  }
   
  request(options, callback);
};


module.exports.documentation_record=documentation_record;