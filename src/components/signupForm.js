import React from 'react';


const SignUpForm = ( { handleForm }) => {
	return (<form onSubmit ={ handleForm }>
		<label>Venue Name</label>
		<input
			type='text'
			id='venuename'
			placeholder='Crisis Cafe'
		></input>

		<label>Venue Address</label>
		<input
			type='text'
			id='venueaddress'
			placeholder='10 Commercial Street'
		></input>

		<label>Email</label>
		<input
			type='email'
			id='venueEmail'
			placeholder='venue@gmail.com'
		></input>

		<label>Password</label>
		<input
			type='password'
			id='password'
			placeholder='qwe123'
		></input>

		<input
			id='submit_form'
			type="submit"
			value="Submit"
		></input>
	</form>
	)
}
export default SignUpForm
