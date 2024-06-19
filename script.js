//your JS code here. If required.
let myPromise;
function check() {
	let age = document.getElementById("age").value
	let name = document.getElementById("name").value
	if (age.length==0 || name.length==0) {
		return "inputs cannot be empty"
	}
	else{
		 myPromise = new Promise((resolve,reject)=>{
			 setTimeout(()=>{
				 if (parseInt(age)>18) {
				 	resolve(`Welcome, ${name}. You can vote.`)
				 } else {
				 	reject(`Oh sorry ${name}. You aren't old enough.`)
				 }
			 },4000)
		})
	}
}
myPromise.then((res)=>{
	alert(res)
}).catch((err)=>alert(err))