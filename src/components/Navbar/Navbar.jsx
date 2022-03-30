import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import { Link } from 'react-router-dom'

const Navbar = () => {
	
	useEffect(() => {
	  themeChange(false)
	  // 👆 false parameter is required for react project
	}, [])

	const theme = localStorage.getItem('theme')

	return (

		<div className="navbar bg-primary text-primary-content">
		  <div className="flex-1 px-2 lg:flex-none">
		    <a className="text-xl mx-2 font-bold uppercase">techies</a>
		  </div> 
		  <div className="flex justify-end flex-1 px-2 gap-3">
		  	<Link to="/register" className="btn btn-primary uppercase">join</Link>
			<label className="swap swap-rotate">
				<input type="checkbox" data-toggle-theme="dark,light"/>
				<FontAwesomeIcon className="swap-on" icon={(theme === 'dark') ? faMoon : faSun} size="2x" />
				<FontAwesomeIcon className="swap-off" icon={(theme === 'dark') ? faSun : faMoon} size="2x" />
			</label>
			<div className="flex items-stretch">
		      <a className="btn btn-ghost rounded-btn" href="https://github.com/talald3v/techies" target="_blank">
		      	<FontAwesomeIcon icon={faGithub} size={"2x"}/>
		      </a>
		    </div>
		  </div>
		</div>
	)
}


export default Navbar