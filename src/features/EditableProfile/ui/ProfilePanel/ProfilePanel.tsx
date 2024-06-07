import {classNames} from "shared/lib/classNames/classNames";
import cls from './ProfilePanel.module.scss';
import {useTranslation} from "react-i18next";
import {memo, useCallback} from "react";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {getProfileReadonly} from "../../model/selectors/getProfileReadonly/getProfileReadonly";
import {useSelector} from "react-redux";
import {profileActions} from "../../model/slice/profileSlice";
import {updateProfileData} from "../../model/services/updateProfileData/updateProfileData";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchProfileData} from "../../model/services/fetchProfileData/fetchProfileData";

interface ProfilePanelProps {
    className?: string
}

export const ProfilePanel = memo((props: ProfilePanelProps) => {
    const {
        className,
    } = props;
    const {t} = useTranslation();
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(async () => {
        const result = await dispatch(updateProfileData());
        if (result.meta.requestStatus === 'fulfilled') {
            dispatch(fetchProfileData());
        }
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePanel, {}, [className])}>
            {readonly
                ? <div>
                    <Button
                        theme={ButtonTheme.OUTLINE}
                        onClick={onEdit}
                    >
                        {t('Edit')}
                    </Button>
                </div>
                : <div className={cls.btnWrapper}>
                    <Button
                        theme={ButtonTheme.BACKGROUND}
                        onClick={onSave}
                    >
                        {t('Edit')}
                    </Button>
                    <Button
                        theme={ButtonTheme.OUTLINE}
                        onClick={onCancelEdit}
                    >
                        {t('Cancel')}
                    </Button>
                </div>
            }
        </div>
    );
});
