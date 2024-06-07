import {classNames} from "shared/lib/classNames/classNames";
import cls from './PhotoPage.module.scss';
import {useTranslation} from "react-i18next";
import {memo, useCallback, useEffect} from "react";
import {Page} from "widgets/Page";
import {AdminPanel, AdminPanelActions} from "widgets/AdminPanel/AdminPanel";
import {useSelector} from "react-redux";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {getPhotoData, getPhotoError, getPhotoIsLoading} from "../model/selectors/getPhoto";
import {PhotosBlockList} from "widgets/PhotosBlock";
import {fetchPhotosByCollectionName} from "../model/services/fetchPhotosByCollectionName";
import {useParams} from "react-router-dom";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {photoReducer} from "../model/slice/photoSlice";
import {deletePhoto} from "../model/services/deletePhoto";
import {PhotosBlockListStyle} from "widgets/PhotosBlock/ui/PhotosBlockList/PhotosBlockList";

const reducers: ReducersList = {
    photoSchema: photoReducer
}

interface PhotoPageProps {
    className?: string
}

const PhotoPage = memo((props: PhotoPageProps) => {
    const {
        className,
    } = props;
    const {t} = useTranslation();
    const photos = useSelector(getPhotoData);
    const isLoading = useSelector(getPhotoIsLoading);
    const error = useSelector(getPhotoError);
    const dispatch = useAppDispatch();
    const {name} = useParams()

    useEffect(() => {
        if (name) {
            dispatch(fetchPhotosByCollectionName(name))
        }
    }, [dispatch, name])

    const onSuccess = useCallback(() => {
        if (name) {
            dispatch(fetchPhotosByCollectionName(name))
        }
    }, [dispatch, name])

    const deletePhotoData = useCallback(async (value: string) => {
        const result = await dispatch(deletePhoto(value))
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess()
        }
    }, [dispatch, onSuccess])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page className={classNames(cls.PhotoPage, {}, [className])}>
                <AdminPanel
                    action={AdminPanelActions.CREATE_PHOTO}
                    buttonTitle={t('Create Photo')}
                    onSuccess={onSuccess}
                />
                <PhotosBlockList
                    photoList={photos}
                    isLoading={isLoading}
                    small={false}
                    square={false}
                    error={error}
                    deleteData={deletePhotoData}
                    style={PhotosBlockListStyle.BIG}
                />
            </Page>
        </DynamicModuleLoader>
    );
});

export default PhotoPage;