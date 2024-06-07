import {classNames} from "shared/lib/classNames/classNames";
import cls from './CollectionsSwitcher.module.scss';
import React, {memo, useCallback, useEffect, useMemo, useState} from "react";
import {AppLink} from "shared/ui/AppLink/AppLink";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import {Text, TextTheme} from "shared/ui/Text/Text";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {collectionsSwitcherReducer} from "../model/slice/collectionsSwitcherSlice";
import {useSelector} from "react-redux";
import {
    getCategoriesTitlesData,
    getCategoriesTitlesIsLoading
} from "../model/selectors/getCategoriesTitles";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchCategoriesTitles} from "../model/services/fetchCategoriesTitles";
import {Skeleton} from "shared/ui/Skeleton/Skeleton";

const reducers: ReducersList = {
    collectionsSwitcher: collectionsSwitcherReducer
}

interface CollectionsSwitcherProps {
    className?: string;
    name?: string
}

export const CollectionsSwitcher = memo((props: CollectionsSwitcherProps) => {
    const {
        className,
        name
    } = props;
    const collection = useSelector(getCategoriesTitlesData);
    const isLoading = useSelector(getCategoriesTitlesIsLoading);
    const [prevColl, setPrevColl] = useState(0);
    const [nextColl, setNextColl] = useState(0);
    const dispatch = useAppDispatch();

    const collectionTitles: string[] = useMemo(() => [], []);
    collection.map((it) => collectionTitles.push(it.title || ''))

    const toggle = useCallback((name: string) => {
        const mainCollection = collectionTitles.indexOf(name);

        const next = mainCollection + 1;
        let prev = mainCollection - 1;

        if (prev === -1) {
            prev = collectionTitles.length - 1
        }

        return {next, prev};
    }, [collectionTitles])

    useEffect(() => {
        dispatch(fetchCategoriesTitles())
        if (collection.length > 0) {
            const toto = toggle(name || '');
            setPrevColl(toto.prev);
            setNextColl(toto.next)
        }
    }, [dispatch, collection.length, toggle, name]);

    let content;
    if (isLoading) {
        content = (
            <>
                <Skeleton width={130} height={30} border={'10px'}/>
                <Skeleton width={130} height={30} border={'10px'}/>
            </>
        )
    } else {
        content = (
            <>
                <AppLink to={`${RoutePath.category_details}${collectionTitles[prevColl]}`}>
                    <Text
                        text={`← ${collectionTitles[prevColl]}`}
                        theme={TextTheme.BLACK}
                        className={cls.text}
                    />
                </AppLink>
                <AppLink to={`${RoutePath.category_details}${collectionTitles[nextColl]}`}>
                    <Text
                        text={`${collectionTitles[nextColl]} →`}
                        theme={TextTheme.BLACK}
                        className={cls.text}
                    />
                </AppLink>
            </>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <div className={classNames(cls.CollectionsSwitcher, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});
