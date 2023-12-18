import Link from 'next/link'
import '@/app/style/Footer.css'

export default function Footer() {
	return (
		<footer className='footer'>
			<small>
				<Link
					className='link'
					href='/'
					target='_blank'
					rel='noopener noreferrer preload'
					as='/'
				>
					@KWS
				</Link>
                &nbsp;- All Rights Reserved​ 
			</small>
		</footer>
	)
}
