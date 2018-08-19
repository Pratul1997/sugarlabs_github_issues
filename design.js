var request = require('request');

var design_record = (callback12)=> {

  var options = {
    url: 'https://api.github.com/search/issues?&q=org%3Asugarlabs+label%3A%22design%22+state%3Aopen',
    headers: {
      'User-Agent': 'request'
    }
  };
     
  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body);
      callback12(undefined,{ 
        design_t_1:info.items[0].title,
        design_t_2:info.items[1].title,
        design_t_3:info.items[2].title,
        design_t_4:info.items[3].title,
        design_h_1:info.items[0].html_url,
        design_h_2:info.items[1].html_url,
        design_h_3:info.items[2].html_url,
        design_h_4:info.items[3].html_url,
        design_c_1:info.items[0].user.login,
        design_c_2:info.items[1].user.login,
        design_c_3:info.items[2].user.login,
        design_c_4:info.items[3].user.login,
        design_o_1:(info.items[0].updated_at).slice(0, 10),
        design_o_2:(info.items[1].updated_at).slice(0, 10),
        design_o_3:(info.items[2].updated_at).slice(0, 10),
        design_o_4:(info.items[3].updated_at).slice(0, 10)
      });
    } 
  }
   
  request(options, callback);
};


module.exports.design_record=design_record;