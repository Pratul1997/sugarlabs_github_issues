var request = require('request');

var need_testing_record = (callback12)=> {

  var options = {
    url: 'https://api.github.com/search/issues?&q=org%3Asugarlabs+label%3A%22needs%20testing%22+state%3Aopen',
    headers: {
      'User-Agent': 'request'
    }
  };
     
  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body);
      callback12(undefined,{ 
        need_testing_t_1:info.items[0].title,
        need_testing_t_2:info.items[1].title,
        need_testing_t_3:info.items[2].title,
        need_testing_t_4:info.items[3].title,
        need_testing_h_1:info.items[0].html_url,
        need_testing_h_2:info.items[1].html_url,
        need_testing_h_3:info.items[2].html_url,
        need_testing_h_4:info.items[3].html_url,
        need_testing_c_1:info.items[0].user.login,
        need_testing_c_2:info.items[1].user.login,
        need_testing_c_3:info.items[2].user.login,
        need_testing_c_4:info.items[3].user.login,
        need_testing_o_1:(info.items[0].updated_at).slice(0, 10),
        need_testing_o_2:(info.items[1].updated_at).slice(0, 10),
        need_testing_o_3:(info.items[2].updated_at).slice(0, 10),
        need_testing_o_4:(info.items[3].updated_at).slice(0, 10)
      });
    } 
  }
   
  request(options, callback);
};


module.exports.need_testing_record=need_testing_record;