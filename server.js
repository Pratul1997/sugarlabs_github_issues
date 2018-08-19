const express=require('express');
const hbs=require('hbs');
const request=require('request');

const bug=require('./bug');
const enhancements=require('./enhancements');
const design=require('./design');
const documentation=require('./documentation');
const need_testing=require('./need_testing');


var port=process.env.PORT || 3000;

function cfl(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

bug.bug_record((errorMessage,result1)=>{
	enhancements.enhancements_record((errorMessage,result2)=>{
		design.design_record((errorMessage,result3)=>{
			documentation.documentation_record((errorMessage,result4)=>{
				need_testing.need_testing_record((errorMessage,result5)=>{

					console.log(JSON.stringify(result5,undefined,2));

					var app=express();

					app.set('view engine','hbs');

					app.get('/',(req,res)=>{
						res.render('index.hbs',{
							bug_t_1:cfl(result1.bug_t_1), 
							bug_t_2:cfl(result1.bug_t_2),
							bug_t_3:cfl(result1.bug_t_3),
							bug_t_4:cfl(result1.bug_t_4),
							bug_h_1:result1.bug_h_1,
							bug_h_2:result1.bug_h_2,
							bug_h_3:result1.bug_h_3,
							bug_h_4:result1.bug_h_4,
							bug_c_1:result1.bug_c_1,
							bug_c_2:result1.bug_c_2,
							bug_c_3:result1.bug_c_3,
							bug_c_4:result1.bug_c_4,
							bug_o_1:result1.bug_o_1,
							bug_o_2:result1.bug_o_2,
							bug_o_3:result1.bug_o_3,
							bug_o_4:result1.bug_o_4,
							enhancements_t_1:cfl(result2.enhancements_t_1),
							enhancements_t_2:cfl(result2.enhancements_t_2),
							enhancements_t_3:cfl(result2.enhancements_t_3),
							enhancements_t_4:cfl(result2.enhancements_t_4),
							enhancements_h_1:result2.enhancements_h_1,
							enhancements_h_2:result2.enhancements_h_2,
							enhancements_h_3:result2.enhancements_h_3,
							enhancements_h_4:result2.enhancements_h_4,
							enhancements_c_1:result2.enhancements_c_1,
							enhancements_c_2:result2.enhancements_c_2,
							enhancements_c_3:result2.enhancements_c_3,
							enhancements_c_4:result2.enhancements_c_4,
							enhancements_o_1:result2.enhancements_o_1,
							enhancements_o_2:result2.enhancements_o_2,
							enhancements_o_3:result2.enhancements_o_3,
							enhancements_o_4:result2.enhancements_o_4,
							design_t_1:cfl(result3.design_t_1), 
							design_t_2:cfl(result3.design_t_2),
							design_t_3:cfl(result3.design_t_3),
							design_t_4:cfl(result3.design_t_4),
							design_h_1:result3.design_h_1,
							design_h_2:result3.design_h_2,
							design_h_3:result3.design_h_3,
							design_h_4:result3.design_h_4,
							design_c_1:result3.design_c_1,
							design_c_2:result3.design_c_2,
							design_c_3:result3.design_c_3,
							design_c_4:result3.design_c_4,
							design_o_1:result3.design_o_1,
							design_o_2:result3.design_o_2,
							design_o_3:result3.design_o_3,
							design_o_4:result3.design_o_4,
							documentation_t_1:cfl(result4.documentation_t_1), 
							documentation_t_2:cfl(result4.documentation_t_2),
							documentation_t_3:cfl(result4.documentation_t_3),
							documentation_t_4:cfl(result4.documentation_t_4),
							documentation_h_1:result4.documentation_h_1,
							documentation_h_2:result4.documentation_h_2,
							documentation_h_3:result4.documentation_h_3,
							documentation_h_4:result4.documentation_h_4,
							documentation_c_1:result4.documentation_c_1,
							documentation_c_2:result4.documentation_c_2,
							documentation_c_3:result4.documentation_c_3,
							documentation_c_4:result4.documentation_c_4,
							documentation_o_1:result4.documentation_o_1,
							documentation_o_2:result4.documentation_o_2,
							documentation_o_3:result4.documentation_o_3,
							documentation_o_4:result4.documentation_o_4,
							need_testing_t_1:cfl(result5.need_testing_t_1), 
							need_testing_t_2:cfl(result5.need_testing_t_2),
							need_testing_t_3:cfl(result5.need_testing_t_3),
							need_testing_t_4:cfl(result5.need_testing_t_4),
							need_testing_h_1:result5.need_testing_h_1,
							need_testing_h_2:result5.need_testing_h_2,
							need_testing_h_3:result5.need_testing_h_3,
							need_testing_h_4:result5.need_testing_h_4,
							need_testing_c_1:result5.need_testing_c_1,
							need_testing_c_2:result5.need_testing_c_2,
							need_testing_c_3:result5.need_testing_c_3,
							need_testing_c_4:result5.need_testing_c_4,
							need_testing_o_1:result5.need_testing_o_1,
							need_testing_o_2:result5.need_testing_o_2,
							need_testing_o_3:result5.need_testing_o_3,
							need_testing_o_4:result5.need_testing_o_4
						});
					});

					app.listen(port,()=>{
						console.log('Server is up');
					});

				});
			});
		});
	});

});







