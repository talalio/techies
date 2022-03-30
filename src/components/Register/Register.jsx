import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

const Register = ({onregister}) => (
	<form action="" onSubmit={onregister} className="mt-auto flex flex-col gap-2 max-w-fit justify-center self-center items-center">
		<input className="input input-md input-primary w-full" type="text" name="username" placeholder="Username"/>
		<input className="input input-md input-primary w-full" type="email" name="email" placeholder="Email"/>
		<input className="input input-md input-primary w-full" type="password" name="password" placeholder="Password"/>
		<input className="btn btn-primary w-full" type="submit" value="Register"/>
		<button className="btn btn-secondary w-full">
			<FontAwesomeIcon className="mr-2" icon={faGithub} size="2x"/>
			Continue with Github
		</button>
		<Link className="underline" to="/login">Already have an account ?</Link>
	</form>
)

export default Register
