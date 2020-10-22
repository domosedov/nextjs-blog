import Container from "../../components/Layout/Container";
import Layout from "../../components/Layout/Layout";

const Demo = () => {
  return (
    <Layout title="Примеры">
      <Container>
        <div className="py-4 text-center text-5xl font-extrabold leading-none tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-teal-500">
            Примеры
          </span>
        </div>
      </Container>
    </Layout>
  );
};

export default Demo;
