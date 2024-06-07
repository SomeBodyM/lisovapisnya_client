import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from './Input.module.scss'
import React, {InputHTMLAttributes, memo, ReactNode, SVGProps, useEffect, useRef, useState, VFC} from "react";
import {Icon} from "shared/ui/Icon/Icon";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

export enum InputTheme {
    OUTLINED = 'outlined',
    CLEAR = 'clear',
    BACKGROUND = 'background',
    WITH_ICON = 'with_icon'
}

interface InputProps extends HTMLInputProps{
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    readonly?: boolean;
    theme?: InputTheme;
    title?: string
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value = '',
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        title,
        readonly,
        theme = InputTheme.OUTLINED,
        ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    const mods: Mods = {
        [cls.readonly]: readonly,
        [cls.withTitle]: title
    };

    return (
        <div className={cls.wrapper}>
            {title &&
                <span className={cls.title}>
                    {title}
                </span>
            }
            <input
                className={classNames(cls.input, mods, [className, cls[theme]])}
                readOnly={readonly}
                type={type}
                value={value}
                onChange={onChangeHandler}
                placeholder={placeholder}
                {...otherProps}
            />
        </div>
    );
});
