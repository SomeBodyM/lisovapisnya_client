import {classNames} from "shared/lib/classNames/classNames";
import cls from './PhotoConverter.module.scss';
import {useTranslation} from "react-i18next";
import {memo} from "react";

interface PhotoConverterProps {
    className?: string
}

export const PhotoConverter = memo((props: PhotoConverterProps) => {
    const {
        className,
    } = props;
    const {t} = useTranslation();


    return (
        <div className={classNames(cls.PhotoConverter, {}, [className])}>

        </div>
    );
});
