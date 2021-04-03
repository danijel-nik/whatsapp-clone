import Head from 'next/head'

const Header = ({ title }) => {
    const favicon = "http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png";
    return (
        <Head>
            <title>{title}</title>
            <link rel="icon" href={favicon} />
        </Head>
    )
}

export default Header