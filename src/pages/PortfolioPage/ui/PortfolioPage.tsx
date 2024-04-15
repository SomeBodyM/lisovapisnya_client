import {classNames} from "shared/lib/classNames/classNames";
import cls from './PortfolioPage.module.scss';
import {useTranslation} from "react-i18next";
import {memo} from "react";

interface PortfolioPageProps {
    className?: string
}

const PortfolioPage = memo((props: PortfolioPageProps) => {
    const {
        className,
    } = props;
    const {t} = useTranslation('portfolio');

    return (
        <div className={classNames(cls.PortfolioPage, {}, [className])}>
            PortfolioPage
        </div>
    );
});

export default PortfolioPage