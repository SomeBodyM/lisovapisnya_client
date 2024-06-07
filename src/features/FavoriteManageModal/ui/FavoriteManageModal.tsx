import {classNames} from "shared/lib/classNames/classNames";
import cls from './FavoriteManageModal.module.scss';
import {useTranslation} from "react-i18next";
import {memo} from "react";
import {Modal} from "shared/ui/Modal/Modal";
import {Text, TextAlign, TextTheme} from "shared/ui/Text/Text";
import {Button, ButtonTheme} from "shared/ui/Button/Button";

interface FavoriteManageModalProps {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
    onFavorite?: () => void;
}

export const FavoriteManageModal = memo((props: FavoriteManageModalProps) => {
    const {
        className,
        onClose,
        isOpen,
        onFavorite,
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
                    title={t(`Do you want to change this collection status?`)}
                    text={t('All Favorites collections are displayed on the homepage')}
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
                        onClick={onFavorite}
                        theme={ButtonTheme.BACKGROUND}
                    >
                        {t('Change Status')}
                    </Button>
                </div>
            </div>
        </Modal>
    );
});
