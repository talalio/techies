
const Modal = () => {

	const handleSubmition = (e) => {
		e.preventDefault()
	}

	return (
		<form action="" onSubmit={(e) => { handleSubmition(e) }}>
			<div className="modal" id="user-modal">
				<div className="modal-box grid grid-flow-row grid-cols-1 gap-3 min-w-200 sm:min-w-fit max-w-400">
					<input type="text" className="input input-primary input-bordered input-md w-full" name="first" placeholder="First name" required/>
					<input type="text" className="input input-primary input-bordered input-md w-full" name="last" placeholder="Last name" required/>
					<textarea className="textarea textarea-primary textarea-bordered" name="bio" placeholder="Bio"></textarea>
						
					<div className="modal-action grid grid-flow-col gap-2">
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