import {classNames} from "shared/lib/classNames/classNames";
import cls from './CategoryDetailsPage.module.scss';
import {useTranslation} from "react-i18next";
import React, {memo, useCallback, useEffect} from "react";
import {Page} from "widgets/Page";
import {PhotosBlockList} from "widgets/PhotosBlock";
import {AdminPanel, AdminPanelActions} from "widgets/AdminPanel/AdminPanel";
import {useParams} from "react-router-dom";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchCollectionData} from "../../model/services/fetchCollectionData";
import {useSelector} from "react-redux";
import {
    getCollectionData,
    getCollectionError,
    getCollectionIsLoading
} from "../../model/selectors/getCollection";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {collectionReducer} from "../../model/slice/collectionSlice";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import {deleteCollectionData} from "../../model/services/deleteCollectionData";
import {setFavorites} from "../../model/services/setFavorites";
import {CollectionsSwitcher} from "features/CollectionsSwitcher/ui/CollectionsSwitcher";

const reducers: ReducersList = {
    collectionSchema: collectionReducer
}

interface CategoryDetailsPageProps {
    className?: string
}

const CategoryDetailsPage = memo((props: CategoryDetailsPageProps) => {
    const {
        className,
    } = props;
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const collectionsList = useSelector(getCollectionData);
    const isLoading = useSelector(getCollectionIsLoading);
    const error = useSelector(getCollectionError);
    const {name} = useParams()

    useEffect(() => {
        if (name) {
            dispatch(fetchCollectionData(name))
        }
    }, [dispatch, name])

    const onSuccess = useCallback(() => {
        if (name) {
            dispatch(fetchCollectionData(name))
        }
    }, [dispatch, name])

    const deleteCollection = useCallback(async (value: string) => {
        const result = await dispatch(deleteCollectionData(value))
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess()
        }
    }, [dispatch, onSuccess])

    const setFavoriteCollection = useCallback(async (value: string) => {
        const result = await dispatch(setFavorites(value))
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess()
        }
    }, [dispatch, onSuccess])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page className={classNames(cls.CategoryDetailsPage, {}, [className])}>
                <AdminPanel
                    action={AdminPanelActions.CREATE_COLLECTION}
                    buttonTitle={t('Create Collection')}
                    onSuccess={onSuccess}
                />
                <CollectionsSwitcher name={name}/>
                <PhotosBlockList
                    photoList={collectionsList}
                    isLoading={isLoading}
                    error={error}
                    square={false}
                    route={`${RoutePath.photo}`}
                    deleteData={deleteCollection}
                    setFavorite={setFavoriteCollection}
                    hasFavoriteIcon={true}
                />
                <CollectionsSwitcher name={name}/>
            </Page>
        </DynamicModuleLoader>
    );
});

export default CategoryDetailsPage;