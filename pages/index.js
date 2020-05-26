// Next.js usa import dinámico. Cuando se llama React lo importa automáticamente sin tener import explícito
import 'isomorphic-fetch'; // importando fetch para todas las pages
import Link from 'next/link';
import Layout from '../components/Layout';
import ChannelGrid from '../components/ChannelGrid';

export default class extends React.Component {
  // getInitialProps() es una función que solo se puede ejecutar en Next.js

  static async getInitialProps() {
    // Llamo al API de audioboom y obtengo la los caneles recomendados
    let req = await fetch('https://api.audioboom.com/channels/recommended');

    //  obtengo todo lo que contiene "body": [] y lo asigno a una variable llamada channels
    let { body: channels } = await req.json();

    // Regreso todos los channels
    return { channels };
  }

  render() {
    const { channels } = this.props;

    return (
      <Layout title='App de Podcasts'>
        <ChannelGrid channels={channels} />
      </Layout>
    );
  }
}
