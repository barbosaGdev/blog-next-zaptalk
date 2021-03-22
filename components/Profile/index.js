import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Box from '@material-ui/core/Box'


export default ({ name, email }) => {

    return (
        <Box display="flex" justifyContent="space-around" width="20%" position="fixed">
            <Box marginTop={2}>
                <Image src="/avatar.png" alt="teste" width={100} height={100} />
            </Box>

            <Box marginTop={4}>
                <Link href="/blog/profile" >{name}</Link>
                <h6>{email}</h6>
            </Box>
        </Box>
    )
}