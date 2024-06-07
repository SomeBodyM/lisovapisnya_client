import {classNames} from "shared/lib/classNames/classNames";
import cls from './LoginPage.module.scss';
import {useTranslation} from "react-i18next";
import {memo, useCallback, useState} from "react";
import {LoginModal} from "features/AuthByUserName";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {Page} from "widgets/Page";

interface LoginPageProps {
    className?: string
}

const LoginPage = memo((props: LoginPageProps) => {
    const {
        className,
    } = props;
    const {t} = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(true);
    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    return (
        <Page className={classNames(cls.LoginPage, {}, [className])}>
            <Button theme={ButtonTheme.OUTLINE}>{t('Close')}</Button>

        </Page>
    );
});

export default LoginPage;