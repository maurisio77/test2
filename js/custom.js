
///// Log in, Sign up /////


$(document).ready(function(){

    $("#opener-register").click(function(){
        var email = $("#register-email").val();
        var password = $("#register-password").val();
        var ref = new Firebase("https://incandescent-fire-3749.firebaseIO.com/");

        ref.createUser({
          
            email: email,
            password: password
        }, function(error,userData) {
            if (error) {
                alert("incorrect email format");
                console.log("Error creating user:", error);

            } else {
                console.log("Successfully created user account :", userData.uid);
                
                window.location.href = "main.html";
            }

        });
        return false;
    });

    $("#opener-login").click(function(){
        var email = $("#login-email").val();
        var password = $("#login-password").val();
        var ref = new Firebase("https://incandescent-fire-3749.firebaseIO.com/");


        ref.authWithPassword({
            email: email,
            password: password
        }, function(error,authData) {
            if (error) {
                alert("incorrect email or password");
                console.log("Error login user:", error);

            } else {
                console.log("Successfully login:", authData);
              
                window.location.href="main.html";
            }

        });
        return false;
    });

    $("#opener-logout").click(function(){
        var ref = new Firebase("https://incandescent-fire-3749.firebaseIO.com/");
        ref.unauth();
        window.location.href = "index.html";
        alert("already logged out!");
        return false;
    });

});


///// Chart part //////

// vertical chart

/* $(document).ready(function(){
	var chart1;
	chart1 = new Highcharts.Chart({

		chart: {
			renderTo: 'chartcontainer',
			type: 'column'
		},
		title: {
			text: 'Coffee Consumption'
		},
		xAxis: {
			categories: ['Starbucks','Peetes','Philz']
		},
		yAxis: {
			title: {
			text: 'Coffee in (gallons)'
			}
		},
		series: [{
			name: 'Mary',
			data: [1,3,4]
		},
		{
			name: 'Bob',
			data: [4,2,9]					
		}]
	});
}); */

// horizonal chart

$(document).ready(function(){
	var chart1;
	chart1 = new Highcharts.Chart({

		chart: {
			renderTo: 'chartcontainer',
			type: 'bar'
		},
		title: {
			text: 'The top diseases causes of death'
		},
		xAxis: {
			categories: ['Ischaemic heart disease','Stroke','COPD', 'Lower respiratory infections', 'Trachea bronchus / Lung cancers', 'HIV / AIDS', 'Diarrhoeal diseases', 'Diabetes mellitus', 'Road injury', 'Hypertensive heart disease']
		},
		yAxis: {
			title: {
			text: 'Number of deaths'
			}
		},

		series: [{
			name: 'Low income countries',
			data: [6,8,3,14,1,10,8,2,3,1]
		},
		{
			name: 'Lower-middle income countries',
			data: [43,35,23,24,3,10,17,10,8,6]					
		},
		{
			name: 'Upper-middle income countries',
			data: [46,55,22,10,14,6,2,10,9,9]					
		},
		{
			name: 'High income countries',
			data: [37,22,7,7,11,1,1,5,2,5]					
		}]
	});
});
