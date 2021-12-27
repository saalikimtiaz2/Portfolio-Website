import Header from '../Navigation/Header'

function Layout({ children }) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default Layout
