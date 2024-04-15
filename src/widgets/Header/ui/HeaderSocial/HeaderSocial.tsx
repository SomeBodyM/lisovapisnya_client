import {classNames} from "shared/lib/classNames/classNames";
import cls from './HeaderSocial.module.scss';
import {useTranslation} from "react-i18next";
import {memo} from "react";

interface HeaderSocialProps {
    className?: string
}

export const HeaderSocial = memo((props: HeaderSocialProps) => {
    const {
        className,
    } = props;
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.HeaderSocial, {}, [className])}>
            <a href="" className={cls.link}>{t('inst →')}</a>
            <a href="" className={cls.link}>{t('fb →')}</a>
        </div>
    );
});
