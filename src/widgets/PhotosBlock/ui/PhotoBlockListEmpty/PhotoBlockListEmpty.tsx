import {classNames} from "shared/lib/classNames/classNames";
import cls from './PhotoBlockListEmpty.module.scss';
import {useTranslation} from "react-i18next";
import {memo} from "react";
import {Text, TextAlign, TextTheme} from "shared/ui/Text/Text";

interface PhotoBlockListEmptyProps {
    className?: string
}

export const PhotoBlockListEmpty = memo((props: PhotoBlockListEmptyProps) => {
    const {
        className,
    } = props;
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.PhotoBlockListEmpty, {}, [className])}>
            <div className={cls.block}>
                <Text
                    title={t('Empty Page (((')}
                    text={t('Sorry, this page is empty')}
                    theme={TextTheme.BLACK}
                    align={TextAlign.CENTER}
                />
            </div>
        </div>
    );
});
