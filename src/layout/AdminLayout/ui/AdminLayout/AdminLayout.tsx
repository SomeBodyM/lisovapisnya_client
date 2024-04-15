import {classNames} from "shared/lib/classNames/classNames";
import cls from './AdminLayout.module.scss';
import {useTranslation} from "react-i18next";
import {memo} from "react";

interface AdminLayoutProps {
    className?: string
}

const AdminLayout = memo((props: AdminLayoutProps) => {
    const {
        className,
    } = props;
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.AdminLayout, {}, [className])}>

        </div>
    );
});

export default AdminLayout;