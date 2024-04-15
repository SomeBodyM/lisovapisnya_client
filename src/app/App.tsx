import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/router'
import { Header } from 'widgets/Header'
import {Suspense, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getUserInited, userActions} from "entities/User";
import {Footer} from "widgets/Footer";

const App = () => {
    const dispatch = useDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback=''>
                <div className='content-page'>
                    <Header/>
                    {inited && <AppRouter/>}
                    <Footer/>
                </div>
            </Suspense>
        </div>
    )
}

export default App