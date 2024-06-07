import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from './BurgerMenu.module.scss';
import React, {memo, useCallback, useState} from "react";
import {HeaderNav} from "../HeaderNav/HeaderNav";
import {HeaderSocial} from "../HeaderSocial/HeaderSocial";
import {Button, ButtonTheme} from "shared/ui/Button/Button";

interface BurgerMenuProps {
    className?: string;
    isMainPage?: boolean;
    isOpen?: boolean;
    toggleMenu?: () => void;
    closeMenu?: () => void;
}

export const BurgerMenu = memo((props: BurgerMenuProps) => {
    const {
        className,
        isMainPage,
        isOpen,
        toggleMenu,
        closeMenu
    } = props;

    const mods: Mods = {
        [cls.open]: isOpen,
        [cls.isWhite]: isMainPage
    }

    return (
        <div className={cls.burger_menu_container}>
            <Button
                theme={ButtonTheme.CLEAR}
                className={classNames(cls.burger_menu, mods, [className])}
                onClick={toggleMenu}
            >
                <div className={cls.topLine}></div>
                <div className={cls.midLine}></div>
                <div className={cls.bottomLine}></div>
            </Button>
            <div className={classNames(cls.menu, mods, [className])}>
                <HeaderNav
                    isMainPage={!isOpen && isMainPage}
                    closeMenu={closeMenu}
                />
                <HeaderSocial
                    isMainPage={!isOpen && isMainPage}
                />
            </div>
        </div>
    );
});
