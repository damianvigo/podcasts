import Link from 'next/link';
import Layout from '../components/Layout';
import PodcastList from '../components/PodcastList';
import Error from './_error';

class Channel extends React.Component {
  static async getInitialProps({ query, res }) {
    let idChannel = query.id;

    try {
      let [reqChannel, reqSeries, reqAudios] = await Promise.all([
        fetch(`https://api.audioboom.com/channels/${idChannel}`),
        fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`),
        fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`),
      ]);

      if (reqChannel.status >= 404) {
        res.statusCode = reqChannel.status;
        return { channel: null, audioClips: null, series: null, statusCode: 404 };
      }

      let dataChannel = await reqChannel.json();
      let channel = dataChannel.body.channel;

      let dataAudios = await reqAudios.json();
      let audioClips = dataAudios.body.audio_clips;

      let dataSeries = await reqSeries.json();
      let series = dataSeries.body.channels;

      let response = { channel, audioClips, series, statusCode: 200 };

      return { ...response };
    } catch (e) {
      return { channel: null, audioClips: null, series: null, statusCode: 503 };
    }
  }

  render() {
    const { channel, audioClips, series, statusCode } = this.props;

    if (statusCode !== 200) {
      return <Error statusCode={statusCode} />;
    }

    return (
      <Layout title={channel.title}>
        <div className='banner' style={{ backgroundImage: `url(${channel.urls.banner_image.original})` }} />

        <h1>{channel.title}</h1>

        {series.length > 0 && (
          <div>
            <h2>Series</h2>
            <div className='channels'>
              {series.map((serie, i) => (
                <Link href={`/channel?id=${serie.id}`} key={i}>
                  <a className='channel'>
                    <img src={serie.urls.logo_image.original} alt='' />
                    <h2>{serie.title}</h2>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        )}

        <h2>Ultimos Podcasts</h2>
        <PodcastList audioClips={audioClips} />

        <style jsx>{`
          .banner {
            width: 100%;
            padding-bottom: 25%;
            background-position: 50% 50%;
            background-size: cover;
            background-color: #aaa;
          }
          h1 {
            padding: 5px;
            font-size: 2em;
            font-weight: 600;
            margin: 1em 0;
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
            text-decoration: none;
            color: #000;
          }
          .channel img {
            width: 100%;
          }
          h2 {
            padding: 5px;
            font-size: 1.5em;
            font-weight: 600;
            margin: 0;
            text-align: center;
          }
        `}</style>
      </Layout>
    );
  }
}

export default Channel;
