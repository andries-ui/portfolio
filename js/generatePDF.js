function GeneratePDF() {
	const element = document.getElementById("portfolio");

	try {
		html2pdf().from(element).save().then((res) => {
			console.log(res);
		})
			.catch((err) => {
				console.log(err, "==>>==>>");
			});

	} catch (err) {
		console.log(err, "==");
	}
}

function sendEmail99() {

	const name = document.getElementById("name");
	const message = document.getElementById("message");
	const email = document.getElementById("email");

	Email.send({
		Host: "smtp.gmail.com",
		Username: "techs2280@gmail.com",
		Password: "andries@M1998!",
		To: 'andriesmpontsheng@gmail.com',
		From: "techs2099@gmail.com",
		Subject: `Request for contact from ${name}`,
		Body:`${message}

		please reply or contact the person on the following email
		${email}`,
	})
	.then((res)=>{
		alert("mail sent successfully ")
	})
	.catch((err) => {
			console.log(err,"====");
		});
	// } else {
	// 	alert(`please input all email, message and email to proceed`)
	// }

}