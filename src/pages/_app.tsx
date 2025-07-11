import "@/styles/globals.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import type { AppProps } from "next/app";
import Container from '@mui/material/Container';
import HeadBar from '@/components/HeadBar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container maxWidth="lg">
      <HeadBar />
      <Component {...pageProps} />
    </Container>
  )
}
