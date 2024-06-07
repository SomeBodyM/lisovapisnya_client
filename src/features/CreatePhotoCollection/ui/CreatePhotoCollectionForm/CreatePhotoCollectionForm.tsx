import {classNames} from "shared/lib/classNames/classNames";
import cls from './CreatePhotoCollectionForm.module.scss';
import {useTranslation} from "react-i18next";
import {memo, useCallback, useState} from "react";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {createPhotoCollectionReducer} from "../../model/slice/createPhotoCollection";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {createPhotoCollection} from "../../model/services/createPhotoCollection";
import {CreateForm} from "entities/CreateForm";
import {useSelector} from "react-redux";
import {createPhotoCollectionIsLoading} from "../../model/selectors/createPhotoCollection";

const reducers: ReducersList = {
    createCollectionSchema: createPhotoCollectionReducer
}

interface CreatePhotoCollectionFormProps {
    className?: string;
    categoryName?: string;
    onSuccess: () => void;
    onClose: () => void
}

export const CreatePhotoCollectionForm = memo((props: CreatePhotoCollectionFormProps) => {
    const {
        className,
        categoryName,
        onSuccess,
        onClose
    } = props;
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const isLoading = useSelector(createPhotoCollectionIsLoading);
    const [img, setBase64] = useState('');
    const [title, setTitle] = useState('');
    const [favorite, setFavorite] = useState(false);
    const [fileName, setFileName] = useState(t('Select Photo'))

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const img = event.target.files[0];
            setFileName(img.name)
            const reader = new FileReader();
            reader.onload = (e) => {
                const result = e.target?.result;
                setBase64(result as string);
            };
            reader.readAsDataURL(img);
        }
    };

    const onSetIsFavorite = useCallback(() => {
        setFavorite(!favorite)
    }, [favorite])

    const onSetTitle = useCallback((title: string) => {
        setTitle(title)
    }, [setTitle])

    const onSend = useCallback(async () => {
        if (img && title && categoryName) {
            const result = await dispatch(createPhotoCollection({title, img, categoryName, favorite}))
            if (result.meta.requestStatus === 'fulfilled') {
                onSuccess()
            }
        }
    }, [dispatch, img, title, onSuccess, categoryName])

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.CreatePhotoCollectionForm, {}, [className])}>
                <CreateForm
                    title={t('Create Collection')}
                    onClose={onClose}
                    onSetTitle={onSetTitle}
                    handleFileChange={handleFileChange}
                    onSend={onSend}
                    value={title}
                    isLoading={isLoading}
                    onSetBool={onSetIsFavorite}
                    isBoxChecked={favorite}
                    fileName={fileName}
                    checkBoxTitle={t('Add to Favorites')}
                />
            </div>
        </DynamicModuleLoader>
    );
});
