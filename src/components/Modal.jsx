import axios from 'axios'

const Modal = ({handleSubmition}) => {

	return (
		<form action="" onSubmit={(e) => { handleSubmition(e) }}>
			<div className="modal justify-center" id="user-modal">
				<div className="modal-box grid grid-flow-row grid-cols-1 gap-3 min-w-200 sm:min-w-fit max-w-400">
					<input type="text" className="input input-primary input-bordered input-sm w-full" name="first" placeholder="First name" required/>
					<input type="text" className="input input-primary input-bordered input-sm w-full" name="last" placeholder="Last name" required/>
					<input type="email" className="input input-primary input-bordered input-sm w-full" name="email" placeholder="Email" required/>
					<input type="text" className="input input-primary input-bordered input-sm w-full" name="city" placeholder="City" required/>
					<input type="email" className="input input-primary input-bordered input-sm w-full" name="picture" placeholder="Profile picture"/>
					<textarea className="textarea textarea-primary textarea-bordered" name="bio" placeholder="Bio"></textarea>
					<input type="url" className="input input-primary input-bordered input-sm w-full" name="github" placeholder="Github Link" />
					<input type="url" className="input input-primary input-bordered input-sm w-full" name="twitter" placeholder="Twitter Link" />
					<input type="url" className="input input-primary input-bordered input-sm w-full" name="discord" placeholder="Discord Link" />
					<input type="url" className="input input-primary input-bordered input-sm w-full" name="telegram" placeholder="Telegram Link" />
					<div className="modal-action grid grid-flow-col gap-2 justify-center">
						<button className="btn btn-primary btn-borderd">
							Join
						</button>
						<a href="#" className="btn btn-secondary btn-borderd">
							Cancel
						</a>
					</div>
				</div>
				
			</div>
		</form>
	)
}

export default Modal