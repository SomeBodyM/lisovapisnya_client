import {classNames} from "shared/lib/classNames/classNames";
import cls from './Icon.module.scss';
import type React from "react";

export enum IconTheme {
    GRAY = 'gray',
    PRIMARY = 'primary',
    WHITE = 'white',
    BLACK = 'black'
}

export enum IconSize {
    S = 'size_small',
    M = 'size_medium',
    L = 'size_large',
    F = 'size_full'
}

interface IconProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    size?: IconSize;
    theme?: IconTheme
}

export const Icon = (props: IconProps) => {
    const {
        className,
        Svg,
        size = IconSize.S,
        theme = IconTheme.PRIMARY
    } = props;

    return (
        <Svg className={classNames(cls.Icon, {}, [className, cls[size], cls[theme]])}/>
    );
};
