import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter, faDiscord, faTelegram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
	<div className="footer mt-auto items-center p-4 bg-neutral text-neutral-content bg-primary text-primary-content">
  	<div className="items-center grid-flow-col">
	    <a href="https://github.com/talald3v" target="_blank"><FontAwesomeIcon icon={faGithub} size="3x"/></a>
	    <p>Coded with <FontAwesomeIcon className="mx-1" icon={faHeart} /> by Talal</p>
	  </div>
    <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      <a href="https://twitter.com/talaldev_" target="_blank"><FontAwesomeIcon icon={faTwitter} size="2x"/></a> 
      <a href="https://t.me/talald3v" target="_blank"><FontAwesomeIcon icon={faTelegram} size="2x"/></a> 
      <a href="" target="_blank"><FontAwesomeIcon icon={faDiscord} size="2x"/></a>
    </div>
	</div>
)

export default Footer