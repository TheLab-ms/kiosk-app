// pages/signeduser.tsx

/**
 * This file is a redirector to the Orders Page.
 */

import Head from 'next/head'
import { useRouter } from 'next/router'
//import { Row, Spinner } from 'react-bootstrap'
//import { useSession } from 'next-auth/react'
//import { User } from '@prisma/client'

export async function getServerSideProps() {
  return {
    props: {
      title: 'Orders - Procurement Manager',
      description: 'University of Texas at Dallas',
    },
  }
}

