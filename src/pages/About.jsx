import { Link } from "react-router-dom"; 

const About = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">About Our Project</h1>
      <p className="mb-4">
        Welcome to our website! We are a passionate team dedicated to creating
        a platform for sharing and discovering amazing recipes from around the
        world. Our goal is to provide a user-friendly experience that allows
        food enthusiasts to explore diverse culinary traditions and contribute
        their own unique recipes.
      </p>
      <p className="mb-4">
        Our platform is designed to bring people together through the joy of
        cooking and sharing delicious meals. Whether you're a seasoned chef or
        a kitchen novice, we aim to inspire creativity and foster a sense of
        community around the universal love for good food.
      </p>
      <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
      <p className="mb-4">
        At our core, we believe that food has the power to connect people,
        bridge cultures, and bring joy to everyday life. We are committed to
        promoting culinary diversity, celebrating traditional recipes, and
        encouraging culinary exploration.
      </p>
      <h2 className="text-2xl font-bold mb-2">Meet the Team</h2>
      <p className="mb-4">
        Our team consists of talented individuals with a shared passion for food
        and technology. We come from diverse backgrounds and bring a wide range
        of expertise to the table, from recipe curation to web development. We
        are united in our vision to create a vibrant community for food lovers
        everywhere.
      </p>
      <p>
        Thank you for joining us on this exciting culinary journey. We hope you
        enjoy exploring our platform and sharing your love for cooking with
        others.
      </p>
      <Link className="btn btn-secondary ml-[550px] mt-4" to="/">Back</Link>
    </div>
  );
};

export default About;
