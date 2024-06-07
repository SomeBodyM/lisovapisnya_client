import {classNames} from "shared/lib/classNames/classNames";
import React, {memo} from "react";
import {AppLink} from "shared/ui/AppLink/AppLink";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import {Icon, IconSize, IconTheme} from "shared/ui/Icon/Icon";
import LogoPhoto from "shared/assets/images/portfolio.svg";

interface LogoProps {
    className?: string;
    isMainPage?: boolean;
}

export const Logo = memo((props: LogoProps) => {
    const {
        className,
        isMainPage
    } = props;

    return (
        <AppLink to={RoutePath.main}>
            <Icon
                className={classNames('', {}, [className])}
                Svg={LogoPhoto}
                size={IconSize.F}
                theme={isMainPage ? IconTheme.WHITE : IconTheme.BLACK}
            />
        </AppLink>
    );
});
