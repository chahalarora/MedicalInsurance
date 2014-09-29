var express = require ('express');
var http =require('http');
var url =require('url');
var bodyParser= require('body-parser');
var app = express();
var mysql =require('mysql');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.all('*', function(req, res, next){
	res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, Authorization, Content-Type');
  next();
  });

app.listen(9639);


DATABASE_HOST = 'localhost';
DATABASE_NAME = 'medicInsurance';
DATABASE_USERNAME = 'root';
DATABASE_PASSWORD = ' ';

var connection = mysql.createConnection({
	                host :DATABASE_HOST,
	                user :DATABASE_USERNAME,
	                password :DATABASE_PASSWORD,
	                database :DATABASE_NAME,
});

app.get('/login', function(request, response) {

    var req = request.query;
    var email = req.email;
    
    var checkExistingQuery = "SELECT * FROM user WHERE email_user = \'" + email + "\';";

    connection.query(checkExistingQuery, function(errExistingUser, resExistingUser) {
        if (errExistingUser) {
            // throw err;

            response.json("Error: " + errExistingUser);
        } else {
            console.log(resExistingUser.length);
            
            if (resExistingUser.length == 0) {
                var addUserQuery = "INSERT INTO user(email_user) VALUES (\'" + email + "\');";
                // var checkQuery ="SELECT user_id FROM user WHERE email_user = \'"+email+"\';";

                connection.query(addUserQuery, function(errNewUser, resNewUser) {
                    if (errNewUser) {
                        // throw errAddEmail;
                        response.json("Error: " + errNewUser);
                    } else {
                        //console.log(resNewUser.insertId);
                        var newUserJSON = {};
                        newUserJSON['user_id'] = resNewUser.insertId;
                        response.json(newUserJSON);
                    }
                });

            } else {
                response.json(resExistingUser[0]);
            }
        }
          
           
      });

});

 app.get('/signup', function(request, response) {

       var req = request.query;
       var name = req.name;
       var age = req.age;
       var gender = req.gender;
       var income = req.income;
       var userId = req.userId;

       var addUserInfo = "UPDATE user SET name=\'"+name+"\',age=\'"+age+"\',gender=\'"+gender+"\',income=\'"+income+"\' WHERE user_id=\'"+userId+"\';";
       connection.query(addUserInfo, function(errUserInfo, resUserInfo) {
           if (errUserInfo) {
                // throw err;
                response.json("Error: " + errUserInfo);
           } else {
                 console.log(resUserInfo);
                     //console.log(resNewUser.insertId);
                        var newUserInfoJSON = {};
                        newUserInfoJSON['rowsAffected'] = resUserInfo.affectedRows;
                        response.json(newUserInfoJSON);
        }
        });
          
          
      });


app.get('/addAllInsurance', function(request, response) {

    // var req = request.query;
    // var insuranceNumber = req.insuranceNumber;
    // var insuranceId = req.insuranceId;
    // var premium = req.premium;
    // var cover = req.cover;

    
    var addInsuranceQuery = "SELECT * FROM insurance;";

    connection.query(addInsuranceQuery, function(errInsuranceAdd, resInsuranceAdd) {
        if (errInsuranceAdd) {
            // throw err;

            response.json("Error: " + errInsuranceAdd);
        } else {
        	      var insuranceAddJSON ={};
        	      insuranceAddJSON['Insurances']= resInsuranceAdd;
                   response.json(insuranceAddJSON);
                 }
    });

});


app.get('/getInsuranceNumber', function(request, response) {

      var req = request.query;
      var userId = req.userId;
  

    
    var insuranceNumberQuery = "SELECT insurance_number FROM user_insurance WHERE user_id=\'"+userId+"\';";

    connection.query(insuranceNumberQuery, function(errInsuranceNumber, resInsuranceNumber) {
        if (errInsuranceNumber) {
            // throw err;

            response.json("Error: " + errInsuranceNumber);
        } else {
        	      var insuranceNumberJSON ={};
        	      insuranceNumberJSON['InsuranceNumber']= resInsuranceNumber;
                   response.json(insuranceNumberJSON);
                 }
    });

});

app.get('/updateInsuranceNumber', function(request, response) {

         var req = request.query;
         var userId = req.userId;
         var insurance_number= req.insurance_number;
  

    
    var updateInsuranceNumberQuery = "INSERT INTO user_insurance(user_id,insurance_number) VALUES(\'"+userId+"\',\'"+insurance_number+"\');";

    connection.query(updateInsuranceNumberQuery, function(errUpdateInsuranceNumber, resUpdateInsuranceNumber) {
        if (errUpdateInsuranceNumber) {
            // throw err;

            response.json("Error: " + errUpdateInsuranceNumber);
        } else {
        	      var updateInsuranceNumberJSON ={};
        	      updateInsuranceNumberJSON['rowsAffected']= resUpdateInsuranceNumber.affectedRows;
                   response.json(updateInsuranceNumberJSON);
                
                 }
    });

});

app.get('/bestInsurance', function(request, response) {

         var req = request.query;
         var age = req.age;
         var income=req.income;
        
   var bestInsuranceQuery = "SELECT insurance_number FROM base_premium WHERE income="+income+" AND age="+age+";";

    connection.query(bestInsuranceQuery, function(errbestInsurance, resBestInsurance) {
        if (errbestInsurance) {
            // throw err;
            response.json("Error: " + errbestInsurance);
        } else {
                   var bestInsuranceJSON ={};
                   bestInsuranceJSON['Insurances']= resBestInsurance;
                   response.json(bestInsuranceJSON);
                 }
    });

});

