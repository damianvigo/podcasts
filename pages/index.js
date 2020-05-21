export default class extends React.Component {
  render() {
    return (
      <div>
        <h1>¡Hola Damián!</h1>
        <p>Bievenido a Next.Js</p>

        <img src='/static/platzi-logo.png' alt='Platzi' />

        <style jsx>{`
          h1 {
            color: #fff;
            text-align: center;
          }
          div :global(p) {
            color: #ccc;
            text-align: center;
            margin-bottom: 1.5rem;
          }
          img {
            max-width: 50%;
            display: block;
            margin 0 auto;
          }
        `}</style>

        <style jsx global>{`
          body {
            background: #333;
          }
        `}</style>
      </div>
    );
  }
}
