function GeneratePDF() {
	const element = document.getElementById("resume-pdf");

	try {
		// Show the hidden resume section temporarily
		element.style.display = "block";
		element.style.position = "relative";
		element.style.left = "auto";

		const opt = {
			margin: 1,
			filename: 'Andries-Sebola-Resume.pdf',
			image: { type: 'jpeg', quality: 0.98 },
			html2canvas: { scale: 2, useCORS: true },
			jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
		};

		html2pdf().set(opt).from(element).save().then((res) => {
			console.log('PDF generated successfully');
			// Hide the resume section again
			element.style.display = "none";
			element.style.position = "absolute";
			element.style.left = "-9999px";
		})
		.catch((err) => {
			console.log(err, "==>>==>>");
			// Hide the resume section again even on error
			element.style.display = "none";
			element.style.position = "absolute";
			element.style.left = "-9999px";
		});

	} catch (err) {
		console.log(err, "==");
		// Hide the resume section again even on error
		element.style.display = "none";
		element.style.position = "absolute";
		element.style.left = "-9999px";
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