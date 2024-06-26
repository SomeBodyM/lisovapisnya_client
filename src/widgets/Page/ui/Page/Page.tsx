import {classNames} from "shared/lib/classNames/classNames";
import cls from './Page.module.scss';
import {useTranslation} from "react-i18next";
import {ReactNode} from "react";

interface PageProps {
    className?: string;
    children: ReactNode;
}

export const Page = (props: PageProps) => {
    const {
        className,
        children
    } = props;
    const {t} = useTranslation();

    return (
        <section className={classNames(cls.Page, {}, [className])}>
            {children}
        </section>
    );
};
