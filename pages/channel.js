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

        <h1>{channel.title}</h1>

        <h2>Series</h2>
        {series.map((serie) => (
          <div>{serie.title}</div>
        ))}

        <h2>Ultimos Podcasts</h2>
        {audioClips.map((clip) => (
          <div>{clip.title}</div>
        ))}

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
