// pages/_app.js
import '../styles/globals.css'; 
import '../styles/style.css';
import '../styles/tailwind.css';
import '../styles/nowplaying.css';
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;