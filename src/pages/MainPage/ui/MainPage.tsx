import React, {useEffect} from 'react';
import cls from './MainPage.module.scss'
import {useTranslation} from 'react-i18next';
import MainPhoto from 'shared/assets/images/main.jpg'
import {Text, TextAlign, TextSize, TextTheme} from "shared/ui/Text/Text";
import {AppLink} from "shared/ui/AppLink/AppLink";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import {PhotosBlockList} from "widgets/PhotosBlock";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {useSelector} from "react-redux";
import {getFavoritesData, getFavoritesIsError, getFavoritesIsLoading} from "../model/selectors/getFavoritesData";
import {fetchFavoritesCollections} from "../model/services/fetchFavoritesCollections";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {favoritesReducer} from "../model/slice/favoritesSlice";

const reducers: ReducersList = {
    favoritesSchema: favoritesReducer
}

const MainPage = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const favoritesList = useSelector(getFavoritesData);
    const isLoading = useSelector(getFavoritesIsLoading);
    const error = useSelector(getFavoritesIsError)

    useEffect(() => {
        dispatch(fetchFavoritesCollections())
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <section>
                <div className={cls.imageBlock} style={{backgroundImage: `url(${MainPhoto})`}}>
                    <div className={cls.imageWrapper}>
                        <div className={cls.textBlock}>
                            <Text
                                title={'SOPHIA'}
                                text={'VITINENKO'}
                                size={TextSize.TITLE}
                                theme={TextTheme.ITALIC}
                            />
                            <Text
                                text={'PHOTOGRAPHER PORTFOLIO'}
                                size={TextSize.M}
                            />
                        </div>
                    </div>
                </div>
                <div className={cls.list}>
                    <PhotosBlockList
                        photoList={favoritesList}
                        isLoading={isLoading}
                        small={true}
                        square={false}
                        deleteData={() => ''}
                        route={`${RoutePath.photo}`}
                        error={error}
                    />
                    <AppLink
                        to={RoutePath.portfolio}>
                        <Text
                            text={t('MY PORTFOLIO →')}
                            theme={TextTheme.BLACK}
                            align={TextAlign.CENTER}
                            className={cls.toPortfolio}
                        />
                    </AppLink>
                </div>
            </section>
        </DynamicModuleLoader>
    )
}

export default MainPage
