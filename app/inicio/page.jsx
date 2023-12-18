import Link from 'next/link'
import './style.css'

export default function Inicio() {
	const pdfURL = '/cv.pdf'

	return (
		<article className='hero-image'>
			<div className='hero-image-opacity contain'>
				<section>
					<h1 className='inicio-title'>La Cuhcara</h1>
					<h5 className='inicio-subtitle'>Restaurant</h5>
					<br />
					<Link className='btn' href='/contacto'>
						Contáctame
					</Link>
				</section>
			</div>
		</article>
	)
}
