import {classNames} from "shared/lib/classNames/classNames";
import cls from './CreateCategoryForm.module.scss';
import {useTranslation} from "react-i18next";
import {memo, useCallback, useState} from "react";
import {useSelector} from "react-redux";
import {getCreateCategoryData, getCreateCategoryIsLoading} from "../../model/selectors/getCreateCategory";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {createCategoryActions, createCategoryReducer} from "../../model/slice/createCategorySlice";
import {createCategory} from "../../model/services/createCategory/createCategory";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {CreateForm} from "entities/CreateForm";

const reducers: ReducersList = {
    createCategorySchema: createCategoryReducer
}

interface CreateCategoryFormProps {
    className?: string;
    onSuccess: () => void;
    onClose: () => void;
}

const CreateCategoryForm = memo((props: CreateCategoryFormProps) => {
    const {
        className,
        onSuccess,
        onClose
    } = props;
    const {t} = useTranslation();
    const isLoading = useSelector(getCreateCategoryIsLoading);
    const dispatch = useAppDispatch();
    const [img, setBase64] = useState<string>('');
    const [title, setTitle] = useState<string>('');
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

    const onSetTitle = useCallback((title: string) => {
        setTitle(title)
    }, [dispatch])

    const onSend = useCallback(async () => {
        const result = await dispatch(createCategory({img, title}))
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess()
        }
    }, [dispatch, img, onSuccess])


    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.CreateCategoryForm, {}, [className])}>
                <CreateForm
                    title={t('Create Category')}
                    onSetTitle={onSetTitle}
                    handleFileChange={handleFileChange}
                    onSend={onSend}
                    value={title}
                    onClose={onClose}
                    fileName={fileName}
                    isLoading={isLoading}
                />
            </div>
        </DynamicModuleLoader>
    );
});

export default CreateCategoryForm;