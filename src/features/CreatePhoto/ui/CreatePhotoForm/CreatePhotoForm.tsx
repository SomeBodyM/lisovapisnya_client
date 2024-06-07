import {classNames} from "shared/lib/classNames/classNames";
import cls from './CreatePhotoForm.module.scss';
import {useTranslation} from "react-i18next";
import {memo, useCallback, useState} from "react";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {createPhotoReducer} from "../../model/slice/createPhotoSlice";
import {createPhoto} from "../../model/services/createPhoto/createPhoto";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {CreateForm} from "entities/CreateForm";

const reducers: ReducersList = {
    createPhotoSchema: createPhotoReducer
}

interface CreatePhotoFormProps {
    className?: string;
    onSuccess: () => void;
    onClose: () => void;
    collectionName?: string
}

const CreatePhotoForm = memo((props: CreatePhotoFormProps) => {
    const {
        className,
        onSuccess,
        onClose,
        collectionName
    } = props;
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const [img, setImg] = useState<string>('');
    const [title, setPhotoTitle] = useState<string>('');
    const [horizontal, setHorizontal] = useState<boolean>(false);
    const [fileName, setFileName] = useState(t('Select Photo'))

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const img = event.target.files[0];
            setFileName(img.name)
            const reader = new FileReader();
            reader.onload = (e) => {
                const result = e.target?.result;
                setImg(result as string);
            };
            reader.readAsDataURL(img);
        }
    };

    const onSetIsHorizontal = useCallback(() => {
        setHorizontal(!horizontal)
    }, [horizontal])

    const onSetTitle = useCallback((title: string) => {
        setPhotoTitle(title)
    }, [setPhotoTitle])

    const onSend = useCallback(async () => {
        if (collectionName) {
            const result = await dispatch(createPhoto({title, img, collectionName, horizontal}))
            if (result.meta.requestStatus === 'fulfilled') {
                onSuccess()
            }
        }
    }, [dispatch, img, onSuccess, collectionName, title, horizontal])

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.CreateCategoryForm, {}, [className])}>
                <CreateForm
                    title={t('Create Photo')}
                    onSetTitle={onSetTitle}
                    handleFileChange={handleFileChange}
                    onSend={onSend}
                    value={title}
                    onClose={onClose}
                    onSetBool={onSetIsHorizontal}
                    isBoxChecked={horizontal}
                    checkBoxTitle={t('Is Horizontal Photo')}
                    fileName={fileName}
                />
            </div>
        </DynamicModuleLoader>
    );
});

export default CreatePhotoForm;