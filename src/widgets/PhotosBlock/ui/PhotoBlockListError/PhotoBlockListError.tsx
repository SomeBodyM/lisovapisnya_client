import {classNames} from "shared/lib/classNames/classNames";
import cls from './PhotoBlockListError.module.scss';
import {useTranslation} from "react-i18next";
import {memo} from "react";
import {Text, TextAlign, TextSize, TextTheme} from "shared/ui/Text/Text";

interface PhotoBlockListErrorProps {
    className?: string
}

export const PhotoBlockListError = memo((props: PhotoBlockListErrorProps) => {
    const {
        className,
    } = props;
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.PhotoBlockListError, {}, [className])}>
            <Text
                title={t('Щось пішло не так')}
                text={t('Перезавантажте сторінку')}
                theme={TextTheme.PRIMARY}
                size={TextSize.UPPER_M}
                align={TextAlign.CENTER}
            />

        </div>
    );
});
