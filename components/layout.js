import React from 'react'
import Head from 'next/head';
import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => {
    return (
      <>
        <Head>
          <title>Domosedov DEV</title>
        </Head>
        <div className="min-h-screen flex flex-col bg-gray-800 antialiased">
          <Header />
          <div className="flex-1">
            <main className="container mx-auto p-2">
              {children}
            </main>
          </div>
          <Footer />
        </div>
      </>
    )
}

export default Layout;