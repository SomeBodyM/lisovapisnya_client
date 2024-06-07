import {classNames} from "shared/lib/classNames/classNames";
import cls from './Footer.module.scss';
import {useTranslation} from "react-i18next";
import React, {memo, useCallback, useState} from "react";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import {AppLink} from "shared/ui/AppLink/AppLink";
import {Logo} from "shared/ui/Logo/Logo";
import {Text, TextAlign, TextSize, TextTheme} from "shared/ui/Text/Text";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {LoginModal} from "features/AuthByUserName";
import {useSelector} from "react-redux";
import {getUserAuthData, logoutAuth} from "entities/User";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";

interface FooterProps {
    className?: string
}

export const Footer = memo((props: FooterProps) => {
    const {
        className,
    } = props;
    const {t} = useTranslation();
    const auth = useSelector(getUserAuthData);
    const dispatch = useAppDispatch();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onOpenModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const logOut = useCallback(() => {
        dispatch(logoutAuth());
    }, [dispatch])

    return (
        <footer className={classNames(cls.Footer, {}, [className])}>
            <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />
            <div className={cls.content}>
                <div className={cls.leftBlock}>
                    <Button theme={ButtonTheme.CLEAR} onClick={onOpenModal}>
                        <Logo 
                            isMainPage={true}
                        />
                    </Button>
                    {auth && 
                        <Button 
                            theme={ButtonTheme.CLEAR}
                            onClick={logOut}
                            className={cls.toAdmin}
                        >
                            {t('Log out →')}
                        </Button>
                    }
                </div>
                <div className={cls.rightBlock}>
                    <nav className={cls.nav}>
                        <AppLink className={cls.link} to={RoutePath.portfolio}>{t('PORTFOLIO')}</AppLink>
                        <AppLink className={cls.link} to={RoutePath.about}>{t('ABOUT ME')}</AppLink>
                        <AppLink className={cls.link} to={RoutePath.price}>{t('PRICE')}</AppLink>
                    </nav>
                    <div className={cls.social}>
                        <a href="" className={cls.link}>{t('inst →')}</a>
                        <a href="" className={cls.link}>{t('fb →')}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
});
