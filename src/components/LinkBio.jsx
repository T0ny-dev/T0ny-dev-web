

const LinkBio = () => {
  return (
    <div style={styles.container}>
      <div style={styles.profileSection}>
        <img
          src="https://avatars.githubusercontent.com/u/103908962?s=400&u=41813f4954a000dcbfc9f617c6489c6f39915236&v=4" // Cambia esta ruta a la de tu imagen
          alt="T0ny-dev"
          style={styles.image}
        />
        <h1 style={styles.title}>@T0ny-dev</h1>
        <p style={styles.description}>Full-Stack Developer</p>
      </div>
      <div style={styles.linksSection}>
        <a
          href="https://wa.me/8991499735"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.button}
        >
          WhatsApp
        </a>
        <a
          href="mailto:antonioraweb@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.button}
        >
          Correo
        </a>
        <a
          href="https://www.linkedin.com/in/antoniora-me/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.button}
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#16161A',
    color: '#FFFFFF',
    padding: '20px',
    maxWidth: '100vw',
    height: '100vh',
    margin: '0 auto',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundImage: "url('/background.png')", /* Cambia por la URL de tu imagen de fondo */
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  profileSection: {
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    marginBottom: '10px',
  },
  title: {
    fontSize: '2.5em',
    margin: '10px 0',
    color: '#7F5AF0',
  },
  description: {
    fontSize: '1.5em',
    margin: '10px 0',
  },
  linksSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  button: {
    backgroundColor: '#7F5AF0',
    color: '#FFFFFF',
    padding: '10px 15px',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '1.3em',
    width: '350px',
    transition: 'background-color 0.3s',
  },
  '@media (hover: hover)': {
    button: {
      ':hover': {
        backgroundColor: '#6842C2',
      },
    },
  },
};

export default LinkBio;
