import {classNames} from "shared/lib/classNames/classNames";
import cls from './FileLoader.module.scss';
import {memo} from "react";
import {useTranslation} from "react-i18next";

export enum FileLoaderTheme {
    CLEAR = 'clear',
    BACKGROUND = 'background'
}

interface FileLoaderProps {
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    fileName?: string;
    theme?: FileLoaderTheme
}

export const FileLoader = memo((props: FileLoaderProps) => {
    const {
        className,
        fileName,
        theme = FileLoaderTheme.BACKGROUND,
        onChange
    } = props;
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.FileLoader, {}, [className, cls[theme]])}>
            <input
                type="file"
                id="file"
                className={cls.input}
                onChange={onChange}
                hidden
            />
            <label htmlFor="file" className={cls.file_label}>{fileName}</label>
        </div>
    );
});
