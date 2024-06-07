import {classNames} from "shared/lib/classNames/classNames";
import cls from './DeleteModal.module.scss';
import {useTranslation} from "react-i18next";
import {memo} from "react";
import {Modal} from "shared/ui/Modal/Modal";
import {Text, TextAlign, TextTheme} from "shared/ui/Text/Text";
import {Button, ButtonTheme} from "shared/ui/Button/Button";

interface DeleteModalProps {
    className?: string;
    title: string;
    isOpen?: boolean;
    onClose?: () => void;
    onDelete?: () => void;
}

export const DeleteModal = memo((props: DeleteModalProps) => {
    const {
        className,
        onClose,
        isOpen,
        onDelete,
        title
    } = props;
    const {t} = useTranslation();

    return (
        <Modal
            className={classNames('', {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <div className={cls.DeleteModal}>
                <Text
                    title={t(`Are you sure you want to delete item "${title}"?`)}
                    text={t('Once deleted, you will not be able to recover it')}
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                />
                <div className={cls.btnWrapper}>
                    <Button
                        onClick={onClose}
                        theme={ButtonTheme.OUTLINE}
                    >
                        {t('Cancel')}
                    </Button>
                    <Button
                        onClick={onDelete}
                        theme={ButtonTheme.BACKGROUND}
                    >
                        {t('Delete')}
                    </Button>
                </div>
            </div>
        </Modal>
    );
});
