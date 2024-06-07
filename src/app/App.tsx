import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/router'
import { Header } from 'widgets/Header'
import {Suspense, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {checkIsUserAuth, getUserAuthData, getUserInited} from "entities/User";
import {Footer} from "widgets/Footer";
import {PageLoader} from "widgets/PageLoader";

const App = () => {
    const dispatch = useDispatch();
    const inited = useSelector(getUserInited);
    const isAuth = useSelector(getUserAuthData);

    useEffect(() => {
        dispatch(checkIsUserAuth())
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback=''>
                <Header/>
                {inited
                    ? <AppRouter/>
                    : <PageLoader/>
                }
                <Footer/>
            </Suspense>
        </div>
    )
}

export default App