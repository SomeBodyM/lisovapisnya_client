import cls from './PhotoBlockListSkeleton.module.scss';
import {useTranslation} from "react-i18next";
import {memo} from "react";
import {Skeleton, SkeletonTheme} from "shared/ui/Skeleton/Skeleton";

interface PhotoBlockListSkeletonProps {
    className?: string;
    square?: boolean;
}

export const PhotoBlockListSkeleton = memo((props: PhotoBlockListSkeletonProps) => {
    const {
        className,
        square
    } = props;
    const {t} = useTranslation();
    const skeletons = []

    for (let i = 1; i <= 6; i++) {
        skeletons.push(i)
    }

    return (
        <>
            {skeletons.map((item)=> (
                <div
                    key={item}
                    className={cls.block}
                >
                    <Skeleton width={426} theme={square ? SkeletonTheme.SQUARE :SkeletonTheme.NORMAL}/>
                    {square &&
                        <Skeleton width={100} height={30}/>
                    }
                </div>
            ))}
        </>
    );
});
