import {classNames} from "shared/lib/classNames/classNames";
import cls from './AdminPanel.module.scss';
import {useTranslation} from "react-i18next";
import {memo, useCallback, useState} from "react";
import {useSelector} from "react-redux";
import {getUserAuthData} from "entities/User";
import {Button} from "shared/ui/Button/Button";
import {CreateCategoryModal} from "features/CreateCategory";
import {
    CreatePhotoCollectionModal
} from "features/CreatePhotoCollection/ui/CreatePhotoCollectionModal/CreatePhotoCollectionModal";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {Alert, AlertTheme} from "shared/ui/Alert/Alert";
import {useParams} from "react-router-dom";
import {CreatePhotoModal} from "features/CreatePhoto";

export enum AdminPanelActions {
    CREATE_CATEGORY = 'CREATE_CATEGORY',
    CREATE_COLLECTION = 'CREATE_COLLECTION',
    CREATE_PHOTO = 'CREATE_PHOTO',
    EDIT_PROFILE = 'EDIT_PROFILE'
}

interface AdminPanelProps {
    className?: string;
    buttonTitle: string;
    action: AdminPanelActions;
    onSuccess: () => void
}

export const AdminPanel = memo((props: AdminPanelProps) => {
    const {
        className,
        buttonTitle,
        action,
        onSuccess
    } = props;
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const isAuth = useSelector(getUserAuthData);
    const [isCreateModal, setIsCreateModal] = useState(false);
    const [isDeleteModal, setIsDeleteModal] = useState(false);
    const [isAlert, setIsAlert] = useState(false);
    const {name} = useParams()

    const onCloseModal = useCallback(() => {
        setIsCreateModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAlert(false);
        setIsCreateModal(true);
    }, []);

    const onSuccessSend = useCallback(() => {
        setIsCreateModal(false);
        setIsAlert(true);
        onSuccess()
    }, [dispatch, onSuccess]);

    let module;
    switch (action) {
    case AdminPanelActions.CREATE_CATEGORY: 
        module = <CreateCategoryModal onSuccess={onSuccessSend} isOpen={isCreateModal} onClose={onCloseModal}/>;
        break;
    case AdminPanelActions.CREATE_COLLECTION:
        module = <CreatePhotoCollectionModal categoryName={name} onSuccess={onSuccessSend} isOpen={isCreateModal} onClose={onCloseModal}/>;
        break;
    case AdminPanelActions.CREATE_PHOTO:
        module = <CreatePhotoModal collectionName={name} onSuccess={onSuccessSend} isOpen={isCreateModal} onClose={onCloseModal}/>;
        break;
    }

    if (!isAuth) {
        return null;
    }
    
    return (
        <div className={classNames(cls.AdminPanel, {}, [className])}>
            {isAlert &&
                <Alert theme={AlertTheme.SUCCESS} text={'Success'}/>
            }
            <Button
                onClick={onShowModal}
            >
                {buttonTitle}
            </Button>
            {isCreateModal && module}
        </div>
    );
});
