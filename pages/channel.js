import Link from 'next/link';

class Channel extends React.Component {
  static async getInitialProps({ query }) {
    let idChannel = query.id;

    let [reqChannel, reqSeries, reqAudios] = await Promise.all([
      fetch(`https://api.audioboom.com/channels/${idChannel}`),
      fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`),
      fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`),
    ]);

    let dataChannel = await reqChannel.json();
    let channel = dataChannel.body.channel;

    let dataAudios = await reqAudios.json();
    let audioClips = dataAudios.body.audio_clips;

    let dataSeries = await reqSeries.json();
    let series = dataSeries.body.channels;

    let response = { channel, audioClips, series };

    return { ...response };
  }

  render() {
    const { channel, audioClips, series } = this.props;

    return (
      <div>
        <header>Podcasts</header>

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
        {audioClips.map((clip, i ) => (
          <Link href={`/podcast?id=${clip.id}`} key={i}>
            <a className='podcast'>
              <h3>{clip.title}</h3>
              <div className='meta'>{Math.ceil(clip.duration / 60)} minutes</div>
            </a>
          </Link>
        ))}

        <style jsx>{`
          header {
            color: #fff;
            background: #8756ca;
            padding: 15px;
            text-align: center;
          }
          .banner {
            width: 100%;
            padding-bottom: 25%;
            background-position: 50% 50%;
            background-size: cover;
            background-color: #aaa;
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
          h1 {
            font-weight: 600;
            padding: 15px;
          }
          h2 {
            padding: 5px;
            font-size: 0.9em;
            font-weight: 600;
            margin: 0;
            text-align: center;
          }
          .podcast {
            display: block;
            text-decoration: none;
            color: #333;
            padding: 15px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.2);
            cursor: pointer;
          }
          .podcast:hover {
            color: #000;
          }
          .podcast h3 {
            margin: 0;
          }
          .podcast .meta {
            color: #666;
            margin-top: 0.5em;
            font-size: 0.8em;
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

export default Channel;
