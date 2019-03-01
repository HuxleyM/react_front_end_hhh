import React from 'react';


const SignUpForm = ( { handleForm } ) => {
	return (
	<form onSubmit ={ handleForm }>
		<label>Venue Name</label>
		<input
			type='text'
			id='venuename'
			placeholder='Crisis Cafe'
			required
		></input>

		<label>Venue Address</label>
		<input
			type='text'
			id='venueaddress'
			placeholder='10 Commercial Street'
			required
		></input>

		<label>Email</label>
		<input
			type='email'
			id='venueEmail'
			placeholder='venue@gmail.com'
			required
		></input>

		<label>Password</label>
		<input
			type='password'
			id='password'
			placeholder='qwe123'
			minLength='6'
			required
		></input>

		<input 
		    className="submitForm action_button"
			id='submit_form'
			type="submit"
			value="Submit"
		></input>
	</form>
	)
}
export default SignUpForm

//handle if no donations api side