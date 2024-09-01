const Alert = ({ type, text }) => {
  return (
    <div className="absolute top-11 left-1 right-1 
     flex justify-center items-center">
        <div className={ `${type === 'danger'? 'bg-red-800': 'bg-green-800'} p-3 text-lime-300 leading-none lg:rounded-full 
         flex lg:inline-flex items-center`} role="alert">
          <p className={`${type === 'danger'? 'bg-red-400': 'bg-green-400'} flex rounded-full px-3 py-3 font-bold mr-4 text-xs`}>{type === 'danger' ? 'FAILED' : 'SUCCESS'}</p>
          <p className="mr-3 text-left">{text}</p>
        </div>

    </div>
  )
}

export default Alert