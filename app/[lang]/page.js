import Header from '../components/header.js';
import MainSection from '../components/mainsection.js';

export const metadata = {
  title: 'ALEX Group',
}

export default function Page({ params }) {
  return (
    <>
      <Header lang={params.lang} />
      <MainSection lang={params.lang} />
    </>
  )
}
