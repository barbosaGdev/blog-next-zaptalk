import Head from 'next/head'
import Link from 'next/link'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles({
    link: {
        color: 'black',
        textDecoration: 'none',
        marginTop: 10
    },
    paper: {
        width: 200,
        height: 300,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default function Profile() {

    const classes = useStyles()

    return (
        <div>
            <Head>
                <title>Profile</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Box display='flex' alignItems="center" flexDirection="column">
                <h2>My Profile page</h2>

                <Paper className={classes.paper} component="div" elevation={3}>

                    <img src="/avatar.png" alt="teste" width={100} />

                    <Typography>
                        Nome
                </Typography>
                    <Typography>
                        Email
                </Typography>
                </Paper>
                <Box marginTop={3}>
                    <Link href="/blog/posts">Back to home</Link>
                </Box>
            </Box>
        </div>
    )
}