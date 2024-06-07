import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from './Text.module.scss'

export enum TextTheme {
    PRIMARY = 'primary',
    NORMAL = 'normal',
    BLACK = 'black',
    ERROR = 'error',
    ITALIC = 'italic'
}

export enum TextAlign {
    LEFT= 'left',
    CENTER = 'center',
    RIGHT = 'right'
}

export enum TextSize {
    M= 'size_m',
    L = 'size_l',
    UPPER_M = 'size_upper_m',
    TITLE= 'size_title',
    UNDER_TITLE = 'under_title'
}

interface TextProps {
    className?: string;
    text?: string;
    title?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
}

export const Text = (props: TextProps) => {
    const {
        className,
        title,
        text,
        align = TextAlign.LEFT,
        theme= TextTheme.NORMAL,
        size = TextSize.M
    } = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls[align]]: true,
        [cls[size]]: true,
    }

    return (
        <div className={classNames(cls.Text, mods, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};