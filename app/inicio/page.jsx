import Link from 'next/link'

export default function Inicio() {
	const background = '/background.jpg'
	const attachmentValue = 'fixed'
	const opacityColor = 'var(--black-alpha-color)'
    const fontTitle ='Dancing Script'
	const colorTitle = 'var(--text-title-color)'
    const fontSubtitle ='Roboto Slab'
    const colorSubtitle = 'var(--text-subtitle-color)'

	return (
		<article
			className='hero-image'
			style={{
				backgroundImage: `url(${background})`,
				backgroundAttachment: attachmentValue,
			}}
		>
			<aside
				className='hero-image-opacity'
				style={{backgroundColor: opacityColor}}
			>
				<div className='hero-image-content'>
                <h1 className='hero-image-title' style={{color: colorTitle, fontFamily: fontTitle}}>
						La Cuchara
					</h1><h2 className='hero-image-subtitle' style={{color: colorSubtitle, fontFamily: fontSubtitle}}>
						Restaurant
					</h2>
                    <br />
					<Link href='/contacto' className='first-btn'>
						Menú
					</Link>
				</div>
			</aside>
		</article>
	)
}