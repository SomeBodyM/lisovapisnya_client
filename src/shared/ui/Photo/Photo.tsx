import {classNames} from "shared/lib/classNames/classNames";
import cls from './Photo.module.scss';
import {useTranslation} from "react-i18next";
import {memo} from "react";
import {Skeleton} from "shared/ui/Skeleton/Skeleton";

export enum PhotoSize {
    SMALL = 'small',
    BIG = 'big'
}

export enum PhotoTheme {
    SQUARE = 'square',
    NORMAL = 'normal',
    HORIZONTAL = 'horizontal',
}

interface PhotoProps {
    className?: string;
    src?: string;
    title?: string;
    horizontal: boolean;
    theme?: PhotoTheme;
    size?: PhotoSize;
}

export const Photo = memo((props: PhotoProps) => {
    const {
        className,
        src,
        title = 'photo',
        theme = PhotoTheme.NORMAL,
        size = PhotoSize.BIG
    } = props;
    const {t} = useTranslation();

    if (!src) {
        return (
            <Skeleton
                className={classNames('', {}, [className, cls[theme], cls[size]])}
                height={426}
                width={456}
            />
        )
    }

    return (
        <img
            src={src}
            className={classNames(cls.Photo, {}, [className, cls[theme], cls[size]])}
            alt={title}
        />
    );
});
