import type { AppProps } from 'next/app';

export default function App({ Component, ...pageProps }: AppProps) {
  return (
    <>
      {/* Formulario oculto para Netlify */}
      <form name="contact" data-netlify="true" netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
      </form>
      <Component {...pageProps} />
    </>
  );
}