import Head from 'next/head';

const Meta = ({keyword, description, title}) => {
    return(
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="keyword" content={keyword} />
            <meta name="description" content={description} />
            <meta charSet="utf-8"/>
            <link rel="stylesheet" href="/favicon.ico" />
            <title>{title}</title>
        </Head>
    );
};

Meta.defaultProps = {
    title: 'Watch Movie',
    keyword: 'movie app, free movies, popular movies,',
    description: 'Cinema XXI is a website to watch popular movies for free'
}

export default Meta;