export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();
  return {
    props: { ninja: data },
  };
};
const Details = ({ ninja }) => {
  return (
    <div>
      <h2>Name: {ninja.name}</h2>
      <h4>Email: {ninja.email}</h4>
      <h4>Adress: {ninja.address.city}</h4>
      <h4>Website: {ninja.website}</h4>
    </div>
  );
};

export default Details;
