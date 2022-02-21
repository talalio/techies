import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faDiscord, faTelegram } from '@fortawesome/free-brands-svg-icons'

const ProfileCardExt = ({ picture, name, email, city, bio, social}) => {

	return (
		<div className="m-3 w-fit h-full min-h-272 flex items-center justify-center bg-primary">
		    <div className="relative w-96 h-auto bg-primary rounded-md pt-24 pb-8 px-4 shadow-md hover:shadow-lg transition flex flex-col items-center">
		        <div className="absolute rounded-full bg-gray-100 w-28 h-28 p-2 z-10 -top-8 shadow-lg hover:shadow-xl transition">
		            <div className="rounded-full bg-black w-full h-full overflow-auto">
		                <img src={picture} />
		            </div>
		        </div>
		        <label className="capitalize font-bold text-primary-content text-lg">
		            {name.first} {name.last}
		        </label>
		        <a className="capitalize font-bold text-primary-content text-xs" href={"mailto:" + email}>
		            {email}
		        </a>
		        <label className="capitalize font-bold text-primary-content text-xs">
		            {city}
		        </label>
		        <p className="text-center text-primary-content mt-2 leading-relaxed">
		            {bio}
		        </p>
		        <ul className="flex flex-row text-primary-content gap-2 mt-4">
		            <a href={social?.twitter} target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
					<a href={social?.github} target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
					<a href={social?.discord} target="_blank"><FontAwesomeIcon icon={faDiscord} /></a>
					<a href={social?.telegram} target="_blank"><FontAwesomeIcon icon={faTelegram} /></a>
		        </ul>
		    </div>
		</div>
	)

}

export default ProfileCardExt