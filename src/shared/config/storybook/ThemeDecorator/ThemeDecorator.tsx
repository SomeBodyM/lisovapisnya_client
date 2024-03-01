import {Theme} from "app/providers/ThemeProvider";

export const ThemeDecorator = (theme: Theme) => (StoryFn: () => React.ReactNode) => (
    <div className={`app ${theme}`}>
        <StoryFn/>
    </div>

);
