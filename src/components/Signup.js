import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { auth, db } from '../firebase';

export const Signup = ({ history }) => {
	// useCallback hook. returns memoized callback.
	// every value referenced inside callback should also appear in the dependencies array
	const handleSignup = useCallback(
		async (event) => {
			event.preventDefault(); // prevent page reload on submit
			const { email, password } = event.target.elements; // grab the email and password inputs
			try {
				const response = await auth // grab the input values and send them to firebase to create a new user
					.createUserWithEmailAndPassword(email.value, password.value);
				// console.log(response.user.email);
				// console.log(response);
        // console.log(email);
        // console.log('sup');
        

				db // create a user document in the database
					.collection('users') // select collection to add document to
					.doc(email.value) // name of document
					.set({ email: response.user.email, uid: response.user.uid, sessions: [] });

				history.push('/'); // then redirect to that user's dashboard
			} catch (error) {
				alert(error); // show an error if there is one
			}
		},
		[history]
	);

	return (
		<div className='signup'>
			<h2>Sign Up!</h2>
			<form onSubmit={handleSignup}>
				<label htmlFor='email'>
					<input name='email' type='email' placeholder='Email' autoComplete="email" />
				</label>
				<label htmlFor='email'>
					<input name='password' type='password' placeholder='Password' autoComplete="current-password" />
				</label>
				<button type='submit'>Sign Up</button>
			</form>
			Already have an account? <Link to='/login'>Log in</Link>
		</div>
	);
};
