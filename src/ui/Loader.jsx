function Loader() {
  return (
    <div className="absolute bg-slate-200/20 inset-0 flex items-center justify-center backdrop-blur-sm">
      <div className="loader"></div>
    </div>
  )
}

export default Loader




/*
 <div className="absolute inset-0 flex items-center justify-center bg-slate-800 text-slate-200">
      <svg
        className="animate-spin -ml-1 mr-3 h-5 w-5 text-sky-400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle className="opacity-25" cx="12" cy="12" r="10" />
        <path
          className="opacity-75"
          d="M4 12a8 8 0 1 1 16 0 8 8 0 1 1 -16 0"
        />
      </svg>
      
      <h1>Loading...</h1>
    </div>
*/