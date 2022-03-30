
const ErrorPage = ({error = {code: 404, info: "page not found"}}) => (

	<div className="m-auto flex flex-col justify-center items-center w-fit">
		<p className="font-mono font-bold text-9xl">{error.code}</p>
		<p className="uppercase font-bold text-lg">{error.info}</p>
	</div>

)

export default ErrorPage