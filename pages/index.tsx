import Layout from "../components/Layout/Layout";

const Home = () => {
  return (
    <Layout title="Главная">
      <div className="flex items-center justify-center">
        <img
          className="mt-20 animate-logo-spin pointer-events-none"
          src="/images/atom.svg"
          alt=""
        />
      </div>
    </Layout>
  );
};

export default Home;
