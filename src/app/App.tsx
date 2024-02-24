import './styles/index.scss'
import {classNames} from 'shared/lib/classNames/classNames'
import {useTheme} from 'app/providers/ThemeProvider'
import {AppRouter} from 'app/providers/router'
import {Navbar} from 'widgets/NavBar'
import {SideBar} from 'widgets/SideBar'
import {Suspense, useEffect} from 'react'

const App = () => {
    const {theme} = useTheme()

    // useEffect(() => {
    //     throw new Error()
    // }, []);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback=''>
                <Navbar/>
                <div className='content-page'>
                    <SideBar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    )
}

export default App
