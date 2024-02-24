import {classNames} from 'shared/lib/classNames/classNames'
import cls from './SideBar.module.scss'
import React, {useState} from 'react'
import {ThemeSwitcher} from 'widgets/ThemeSwitcher'
import {LangSwitcher} from 'widgets/LangSwitcher/LangSwitcher'
import {Button} from 'shared/ui/Button/Button'

interface SideBarProps {
    className?: string
}

export const SideBar = ({className}: SideBarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const toggleSideBar = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div data-testid='sidebar' className={classNames(cls.SideBar, {[cls.collapsed]: collapsed}, [className])}
        >
            <Button data-testid='sidebar-toggle' onClick={toggleSideBar}>Toggle</Button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    )
}
