/* ======================================================================
  Author Custom JavaScript
====================================================================== */
// Loop through Array of Objects
function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

		// check is user input matches username and password of a current index of the objPeople array
		if(username == "masudur8055" && password == "01234") {
            window.location.href = '1.login-page-Masudur Rahman.html';    
		}else if(username == "mdalaminh052" && password == "1234") {
            window.location.href = '2.login-page-MD. FTX AL-AMIN.html';    
		}else if(username == "ashrafulalamdiman" && password == "1234") {
            window.location.href = '3..login-page-ASHRAFUL ALAM DHIMAN.html';    
		}else if(username == "akhtar" && password == "1234") {
            window.location.href = '4..login-page-AKHTAR HOSSAIN.html';    
		}else if(username == "hasibul" && password == "1234") {
            window.location.href = '5.login-page-HASIBUL HASAN.html';    
		}else if(username == "naimrahmanontheway" && password == "1234") {
            window.location.href = '6.login-page-NAIMUR RAHMAN.html';    
		}else if(username == "samiajoya43" && password == "1234") {
            window.location.href = '7.login-page- SAMIA HOSSAIN JOYA.html';    
		}else if(username == "ojifa" && password == "1234") {
            window.location.href = '8.login-page-OJIFA ISLAM MIM.html';    
		}else if(username == "sharmin" && password == "1234") {
            window.location.href = '9.login-page-SHARMIN AKTER.html';    
		}else{
			alert("Please Enter your username and password")
		}
	
	console.log("incorrect username or password")
}

