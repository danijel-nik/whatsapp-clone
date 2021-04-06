import Head from 'next/head'

const Header = ({ title }) => {
    const favicon = "/whatsapp.png";
    return (
        <Head>
            <title>{title}</title>
            <link rel="icon" href={favicon} />
        </Head>
    )
}

export default Header