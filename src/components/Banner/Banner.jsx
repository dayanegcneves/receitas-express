import './banner.estilos.css'

export function Banner({children}) {
    return (
        <div className="banner">
            <h1 className='banner-titulo'>{children}</h1>
        </div>
    )
}