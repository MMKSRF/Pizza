import { Link } from "react-router-dom"


export default function Button({ children, disabled, to,type,onClick }) {


    const base = ' inline-block text-sm bg-sky-400 uppercase text-slate-800 rounded-full racking-wide hover:bg-sky-500 hover:text-slate-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 active:bg-sky-600 disabled:cursor-not-allowed disabled:bg-gray-700 disabled:hover:bg-gray-700 disabled:hover:text-slate-800'
    const style= {
        primary: base + ' px-4 py-3 md:px-6 md:py-4',
        small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs font-semibold text-gray-900',
        round: base + ' px-2.5 py-4 md:px-3.5 md:py-2 mx-1 text-sm focus:ring-0 font-semibold text-gray-900',

        secondary: ' inline-block text-sm border-2 border-stone-300  uppercase text-slate-400 rounded-full racking-wide hover:bg-sky-500 hover:text-slate-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:ring-offset-2 focus:bg-sky-200 focus:border-sky-200 active:bg-sky-300 disabled:cursor-not-allowed disabled:bg-gray-700 disabled:hover:bg-gray-700 disabled:hover:text-slate-800 px-4 py-2.5 md:px-6 md:py-3.5'

    }
    if (to) return <Link to={to} className={style[type]}>{children}</Link>

    if (onClick) return (
        <button disabled={disabled} className={style[type]} onClick={onClick}>
            {children}
        </button>
    )

    return (
        <button disabled={disabled} className={style[type]} >
            {children}
        </button>
    )
}
