import {classNames} from "shared/lib/classNames/classNames";
import cls from './Skeleton.module.scss';
import {CSSProperties} from "react";

export enum SkeletonTheme {
    SQUARE = 'square',
    NORMAL = 'normal'
}

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string;
    theme?: SkeletonTheme
}

export const Skeleton = (props: SkeletonProps) => {
    const {
        className,
        height,
        width,
        border,
        theme= SkeletonTheme.NORMAL
    } = props;

    const style: CSSProperties = {
        height,
        maxWidth: width,
        borderRadius: border
    }

    return (
        <div
            style={style}
            className={classNames(cls.Skeleton, {}, [className, cls[theme]])}
        />
    );
};
