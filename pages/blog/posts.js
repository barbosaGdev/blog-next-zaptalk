import Head from 'next/head'
import PostsComponent from '../../components/Posts'
import ProfileComponent from '../../components/Profile'


export default function Posts() {
    return (
        <div>
            <Head>
                <title>Posts</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ProfileComponent name={"Gabriel"} email={"gbarbosa@kazap.com.br"}/>
            <PostsComponent />
        </div>
    )
}