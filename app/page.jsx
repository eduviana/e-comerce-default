import Acerca from './acerca/page'
import Inicio from './inicio/page'

export default function Home() {
	return (
		<>
			<section>
				<Inicio />
			</section>
			<section className='about section container full-lg-screen'>
                <Acerca />
            </section>
			<section></section>
			<section></section>
			<section></section>
			<section></section>
		</>
	)
}
