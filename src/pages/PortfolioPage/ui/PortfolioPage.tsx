import {classNames} from "shared/lib/classNames/classNames";
import cls from './PortfolioPage.module.scss';
import {useTranslation} from "react-i18next";
import {memo, useCallback, useEffect} from "react";
import {Page} from "widgets/Page";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {useSelector} from "react-redux";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {getCategoryDataData, getCategoryIsError, getCategoryIsLoading} from "../model/selectors/getCategoryData";
import {categoryReducer} from "../model/slice/categorySlice";
import {fetchCategoryData} from "../model/services/fetchCategoryData/fetchCategoryData";
import {PhotosBlockList} from "widgets/PhotosBlock";
import {AdminPanel, AdminPanelActions} from "widgets/AdminPanel/AdminPanel";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import {deleteCategoryById} from "../model/services/deleteCategoryById/deleteCategoryById";

const reducers: ReducersList = {
    categorySchema: categoryReducer
}

interface PortfolioPageProps {
    className?: string
}

const PortfolioPage = memo((props: PortfolioPageProps) => {
    const {
        className,
    } = props;
    const {t} = useTranslation('portfolio');
    const categories = useSelector(getCategoryDataData);
    const isLoading = useSelector(getCategoryIsLoading);
    const error = useSelector(getCategoryIsError);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchCategoryData())
    }, [dispatch])

    const onSuccess = useCallback(() => {
        dispatch(fetchCategoryData())
    }, [dispatch])

    const deleteCategoryData = useCallback(async (value: string) => {
        const result = await dispatch(deleteCategoryById(value))
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess()
        }
    }, [onSuccess, dispatch])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page className={classNames(cls.PortfolioPage, {}, [className])}>
                <AdminPanel
                    action={AdminPanelActions.CREATE_CATEGORY}
                    buttonTitle={t('Create Category')}
                    onSuccess={onSuccess}
                />
                <PhotosBlockList
                    deleteData={deleteCategoryData}
                    photoList={categories}
                    isLoading={isLoading}
                    square={true}
                    error={error}
                    route={`${RoutePath.category_details}`}
                />
            </Page>
        </DynamicModuleLoader>
    );
});

export default PortfolioPage;