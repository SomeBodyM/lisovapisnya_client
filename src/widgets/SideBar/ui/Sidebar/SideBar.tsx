import {classNames} from 'shared/lib/classNames/classNames'
import cls from './SideBar.module.scss'
import React, {memo, useState} from 'react'
import {ThemeSwitcher} from 'widgets/ThemeSwitcher'
import {LangSwitcher} from 'widgets/LangSwitcher/LangSwitcher'
import {Button, ButtonSize, ButtonTheme} from 'shared/ui/Button/Button'
import {SidebarItemsList} from "../../model/items";
import {SideBarItem} from "../SideBarItem/SideBarItem";
import {configureStore} from "@reduxjs/toolkit";

interface SideBarProps {
    className?: string
}

export const SideBar = memo(({className}: SideBarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleSideBar = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div
            data-testid='sidebar'
            className={classNames(cls.SideBar, {[cls.collapsed]: collapsed}, [className])}
        >
            <div className={cls.items}>
                {SidebarItemsList.map((item) => (
                    <SideBarItem
                        key={item.path}
                        item={item}
                        collapsed={collapsed}
                    />
                ))}
            </div>
            <Button
                data-testid='sidebar-toggle'
                onClick={toggleSideBar}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher
                    short={collapsed}
                    className={cls.lang}
                />
            </div>
        </div>
    )
});