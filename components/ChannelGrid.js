import Link from 'next/link';

const ChannelGrid = (props) => {
  const channels = props.channels;

  return (
    <div className='channels'>
      {channels.map((channel, i) => (
        <Link href={`/channel?id=${channel.id}`} key={i}>
          <a className='channel'>
            <img src={channel.urls.logo_image.original} alt='' />
            <h2>{channel.title}</h2>
          </a>
        </Link>
      ))}

      <style jsx>{`
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
    </div>
  );
};
export default ChannelGrid;
