import Head from 'next/head'
export default function Common(props){
    return (
        <div>
            <Head>
                <title>Badagaon</title>
                {/* <link rel="icon" href="" /> */}
            </Head>
            <style jsx global>{`
                    html,
                    body {
                        color: 
                        padding: 0;
                        margin: 0;
                        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                            sans-serif;
                    }

                    * {
                        box-sizing: border-box;
                    }
                    a{
                        color: inherit;
                        text-decoration: none;
                    }
                    .container {
                        min-height: 100vh;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                `}</style>
        </div>
    )
}