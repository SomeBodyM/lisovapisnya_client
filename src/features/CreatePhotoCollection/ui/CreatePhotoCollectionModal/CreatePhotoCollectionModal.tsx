import {classNames} from "shared/lib/classNames/classNames";
import cls from './CreatePhotoCollectionModal.module.scss'
import {Modal} from "shared/ui/Modal/Modal";
import {Suspense} from "react";
import {Loader} from "shared/ui/Loader/Loader";
import {
    CreatePhotoCollectionForm
} from "../CreatePhotoCollectionForm/CreatePhotoCollectionForm";

interface CreatePhotoCollectionModalProps {
    className?: string,
    isOpen: boolean,
    onClose: () => void;
    onSuccess: () => void;
    categoryName?: string
}

export const CreatePhotoCollectionModal = ({className, categoryName, isOpen, onClose, onSuccess}: CreatePhotoCollectionModalProps) => {
    return (
        <Modal
            className={classNames(cls.CreateCategoryModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <Suspense fallback={<Loader/>}>
                <CreatePhotoCollectionForm
                    onClose={onClose}
                    onSuccess={onSuccess}
                    categoryName={categoryName}
                />
            </Suspense>
        </Modal>
    );
};
