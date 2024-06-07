import {classNames} from "shared/lib/classNames/classNames";
import cls from './CreateForm.module.scss';
import {useTranslation} from "react-i18next";
import {memo} from "react";
import {Text, TextTheme} from "shared/ui/Text/Text";
import {Input} from "shared/ui/Input/Input";
import {FileLoader} from "shared/ui/FileLoader/FileLoader";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {CheckBox} from "shared/ui/CheckBox/CheckBox";
import {Loader} from "shared/ui/Loader/Loader";

interface CreateFormProps {
    className?: string;
    title?: string;
    value?: string;
    onSetTitle?: (title: string) => void;
    handleFileChange?: (event:  React.ChangeEvent<HTMLInputElement>) => void;
    onSend: () => void;
    onClose: () => void;
    isLoading?: boolean;
    onSetBool?: () => void;
    isBoxChecked?: boolean;
    fileName?: string;
    checkBoxTitle?: string;
}

export const CreateForm = memo((props: CreateFormProps) => {
    const {
        className,
        title,
        onSetBool,
        onClose,
        fileName,
        isBoxChecked,
        onSetTitle,
        value,
        handleFileChange,
        isLoading,
        checkBoxTitle,
        onSend
    } = props;
    const {t} = useTranslation()

    return (
        <div className={classNames(cls.CreateForm, {}, [className])}>
            <div className={cls.header}>
                <Text
                    title={title}
                    theme={TextTheme.BLACK}
                />
            </div>
            {onSetBool &&
                <CheckBox
                    onChange={onSetBool}
                    checked={isBoxChecked}
                    title={checkBoxTitle}
                />
            }
            <div className={cls.inputs}>
                <Input
                    value={value}
                    onChange={onSetTitle}
                    placeholder={t('Enter title name...')}
                    className={cls.input}
                    title={'Title'}
                />
                <FileLoader
                    onChange={handleFileChange}
                    className={cls.file}
                    fileName={fileName}
                />
            </div>
            <div className={cls.btnWrapper}>
                <Button
                    onClick={onClose}
                    className={cls.btn}
                    disabled={isLoading}
                >
                    {t("Cancel")}
                </Button>
                {isLoading &&
                    <Loader/>
                }
                <Button
                    onClick={onSend}
                    className={cls.btn}
                    theme={ButtonTheme.BACKGROUND}
                    disabled={isLoading}
                >
                    {t("Create")}
                </Button>
            </div>
        </div>
    );
});
