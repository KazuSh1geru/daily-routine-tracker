// アプリケーションにグローバルCSSを読み込むには、pages/_app.jsというファイルを次の内容で作成します：
import '../styles/global.css';

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}