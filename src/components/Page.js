import Header from './Header';

import { useTheme } from '../store/ThemeContext';

const Page = (props) => {
    const context = useTheme();
    console.log(context);
    return (
        <div id="app" className={context.theme}>
            <Header onThemeSwitch={context.switchTheme}/>

            <article>
                <h2>React course</h2>
                <p>
                    A course that teaches you react
                </p>
            </article>
        </div>
    )
}

export default Page;