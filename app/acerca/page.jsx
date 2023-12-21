import './style.css'
import Image from 'next/image'
import Quienes from '@/public/somos.jpg'

export default function Acerca() {
	return (
		<>
			<article className='text-lg-right'>
                <aside className="text-center">
                    <h2 className="section-title">¿Quienes somos?</h2>
                    <p>Somos un lugar donde la calidez y la autenticidad se fusionan para crear una experiencia única. En nuestra cocina, cada plato cuenta una historia de tradición y sabor, desde las arepas más tiernas hasta las empanadas más crujientes.</p>
                    <p>Nuestra historia se remonta al año 2010, donde decidimos compartir nuestras recertas familiares, y a lo largo de los años, hemos mantenido nuestros valores de tradición, autenticidad y compromiso con la calidad. Cada bocado es una celebración de la cocina Colombiana en su forma más auténtica.</p>
                </aside>
            </article>
			<article><Image
							src={Quienes}
							className='Quienes Somos'
							alt='logo'
							width='400'
							priority={true}
							as='Quienes Somos'
						/></article>
			<article></article>
		</>
	)
}
