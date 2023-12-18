import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
	return (
		<Html lang='es'>
			<Head>
				<meta charset='utf-8' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<meta http-equiv='Content-Type' content='text/html' />
				<meta http-equiv='X-UA-Compatible' content='IE=edge' />
				{/* <meta name="theme-color" content="#79bd9a" /> */}
				<meta name='description' content='Hola bienvenid@s' />
				<meta name='date' content='10-03-2023' />
				<meta name='keywords' content='restaurant la cuchara ' />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
