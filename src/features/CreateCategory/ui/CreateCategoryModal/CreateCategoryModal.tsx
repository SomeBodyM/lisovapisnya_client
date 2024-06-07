import {classNames} from "shared/lib/classNames/classNames";
import cls from './CreateCategoryModal.module.scss'
import {Modal} from "shared/ui/Modal/Modal";
import {Suspense} from "react";
import {Loader} from "shared/ui/Loader/Loader";
import CreateCategoryForm from "../CreateCategoryForm/CreateCategoryForm";

interface CreateCategoryModalProps {
    className?: string,
    isOpen: boolean,
    onClose: () => void
    onSuccess: () => void
}

export const CreateCategoryModal = ({className, isOpen, onClose, onSuccess}: CreateCategoryModalProps) => {
    return (
        <Modal
            className={classNames(cls.CreateCategoryModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <Suspense fallback={<Loader/>}>
                <CreateCategoryForm
                    onSuccess={onSuccess}
                    onClose={onClose}
                />
            </Suspense>
        </Modal>
    );
};
