import {classNames} from "shared/lib/classNames/classNames";
import cls from './ProfileSkeleton.module.scss';
import {useTranslation} from "react-i18next";
import {memo} from "react";
import {Skeleton} from "shared/ui/Skeleton/Skeleton";

interface ProfileSkeletonProps {
    className?: string
}

export const ProfileSkeleton = memo((props: ProfileSkeletonProps) => {
    const {
        className,
    } = props;
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.ProfileSkeleton, {}, [className])}>
            <div>

            </div>
            <Skeleton/>
        </div>
    );
});
