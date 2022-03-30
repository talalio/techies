import React from 'react'

const Register = () => (
	<div className="mt-6 border-2 border-black flex flex-row w-full h-full justify-center items-center">
		<div className="flex flex-col gap-2">
			<input className="input input-md input-primary" type="text" name="username" placeholder="Username"/>
			<input className="input input-md input-primary" type="email" name="email" placeholder="Email"/>
			<input className="input input-md input-primary" type="password" name="password" placeholder="Password"/>
			<input className="btn btn-primary" type="submit" value="Register"/>
		</div>
	</div>
)

export default Register
