import {classNames} from "shared/lib/classNames/classNames";
import cls from './CreatePhotoModal.module.scss'
import {Modal} from "shared/ui/Modal/Modal";
import {Suspense} from "react";
import {Loader} from "shared/ui/Loader/Loader";
import CreatePhotoForm from "features/CreatePhoto/ui/CreatePhotoForm/CreatePhotoForm";

interface CreatePhotoModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
    collectionName?: string;
}

export const CreatePhotoModal = ({className, isOpen, onClose, onSuccess, collectionName}: CreatePhotoModalProps) => {
    return (
        <Modal
            className={classNames(cls.CreatePhotoModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <Suspense fallback={<Loader/>}>
                <CreatePhotoForm
                    onSuccess={onSuccess}
                    onClose={onClose}
                    collectionName={collectionName}
                />
            </Suspense>
        </Modal>
    );
};
