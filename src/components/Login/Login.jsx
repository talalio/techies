import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


const Login = ({onlogin}) => (

	<form action="" onSubmit={onlogin} className="mt-auto flex flex-col gap-2 max-w-fit justify-center self-center items-center">
		<input className="input input-md input-primary w-full" type="email" name="email" placeholder="Email"/>
		<input className="input input-md input-primary w-full" type="password" name="password" placeholder="Password"/>
		<input className="btn btn-primary w-full" type="submit" value="Login"/>
		<button className="btn btn-secondary w-full">
			<FontAwesomeIcon className="mr-2" icon={faGithub} size="2x"/>
			Continue with Github
		</button>
	</form>

)

export default Login
