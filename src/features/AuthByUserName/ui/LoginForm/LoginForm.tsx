import {classNames} from "shared/lib/classNames/classNames";
import cls from './LoginForm.module.scss'
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {Input, InputTheme} from "shared/ui/Input/Input";
import {useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';
import {memo, useCallback} from "react";
import {loginActions, loginReducer} from "../../model/slice/loginSlice";
import {loginByUsername} from "../../model/services/loginByUsername/loginByUsername";
import {Text, TextAlign, TextSize, TextTheme} from "shared/ui/Text/Text";
import {getLoginUserName} from "../../model/selectors/getLoginUserName/getLoginUserName";
import {getLoginError} from "../../model/selectors/getLoginError/getLoginError";
import {getLoginIsLoading} from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import {getLoginPassword} from "../../model/selectors/getLoginPassword/getLoginPassword";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {RoutePath} from "shared/config/routeConfig/routeConfig";

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer
}

const LoginForm = memo(({className, onSuccess}: LoginFormProps) => {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUserName);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);
    const navigate = useNavigate();

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({username, password}));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
            navigate(RoutePath.about)
        }
    }, [onSuccess, dispatch, password, username, navigate])

    return (
        <DynamicModuleLoader
            reducers={initialReducers}
            removeAfterUnmount={true}
        >
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text
                    title={t('Авторизація')}
                    theme={TextTheme.PRIMARY}
                    align={TextAlign.CENTER}
                    size={TextSize.L}
                />
                {error &&
                    <Text
                        text={t('Не вірний логін чи пароль')}
                        theme={TextTheme.ERROR}
                        align={TextAlign.LEFT}
                    />
                }
                <Input
                    autofocus
                    className={cls.input}
                    type="text"
                    placeholder={t('Username')}
                    onChange={onChangeUsername}
                    value={username}
                    theme={InputTheme.OUTLINED}
                />
                <Input
                    className={cls.input}
                    type="password"
                    placeholder={t('Password')}
                    onChange={onChangePassword}
                    value={password}
                    theme={InputTheme.OUTLINED}
                />
                <div className={cls.btnWrapper}>
                    <Button
                        className={cls.loginBtn}
                        theme={ButtonTheme.OUTLINE}
                        onClick={onSuccess}
                        disabled={isLoading}
                    >
                        {t('Назад')}
                    </Button>
                    <Button
                        className={cls.loginBtn}
                        theme={ButtonTheme.BACKGROUND}
                        onClick={onLoginClick}
                        disabled={isLoading}
                    >
                        {t('Увійти')}
                    </Button>
                </div>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;