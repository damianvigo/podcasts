import 'isomorphic-fetch';
import Link from 'next/link';

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
      <div>
        <header>Podcasts</header>

        <div className='channels'>
          {channels.map((channel, i) => (
            <Link href={`/channel?id=${channel.id}`} key={i}>
              <a className='channel'>
                <img src={channel.urls.logo_image.original} alt='' />
                <h2>{channel.title}</h2>
              </a>
            </Link>
          ))}
        </div>

        <style jsx>{`
          header {
            color: #fff;
            background: #8756ca;
            padding: 15px;
            text-align: center;
          }
          .channels {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            grid-gap: 15px;
            padding: 15px;
          }
          .channel {
            display: block;
            border-radius: 3px;
            box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
            margin-bottom: 0.5em;
          }
          .channel img {
            width: 100%;
          }
          h2 {
            padding: 5px;
            font-size: 0.9em;
            font-weight: 600;
            margin: 0;
            text-align: center;
          }
        `}</style>

        <style jsx global>{`
            body {
                margin: 0;
                font-family: system-ui
                background: white;
            }
            `}</style>
      </div>
    );
  }
}
