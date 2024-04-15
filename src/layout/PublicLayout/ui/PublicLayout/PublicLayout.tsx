import {classNames} from "shared/lib/classNames/classNames";
import cls from './PublicLayout.module.scss';
import {useTranslation} from "react-i18next";
import {memo} from "react";

interface PublicLayoutProps {
    className?: string
}

const PublicLayout = memo((props: PublicLayoutProps) => {
    const {
        className,
    } = props;
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.PublicLayout, {}, [className])}>

        </div>
    );
});

export default PublicLayout;