import { Link } from '../Link'

export default function AboutPage() {
    return (
        <>
            <h1>About</h1>
            <div>
                <img
                    src="https://th.bing.com/th?id=OIP.w-u_Jr-_dzg1jvD9TF6uPQHaHN&w=253&h=246&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                    alt="zoro" />
                <p>¿Hola! Me llamo Adrian Moreo y estoy creando un clon de React Router</p>
            </div>
            <Link to='/'>Ir a la home</Link>
        </>
    )
}