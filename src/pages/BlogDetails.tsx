import { useParams, useNavigate } from "react-router-dom";

import toy52 from "../assets/images/toy52.jpg";
import stem from "../assets/images/stem.jpg";
import outdoor from "../assets/images/outdoor.jpg";
import girls from "../assets/images/girls.jpg";

function BlogDetails() {

  const { id } = useParams();
  const navigate = useNavigate();

  const blogContent: any = {

    1: {
      title: "Puzzle Gifts for Kids",
      image: toy52,
      content: [
        "Puzzle toys are one of the best educational gifts for children. They help develop logical thinking, patience, and concentration.",

        "When children work on puzzles, they learn to analyze problems, recognize patterns, and think step-by-step.",

        "Puzzle toys such as jigsaw puzzles and shape sorting boards improve memory and hand-eye coordination.",

        "Completing puzzles gives children a sense of achievement and boosts their confidence."
      ]
    },

    2: {
      title: "STEM Gifts for Kids",
      image: stem,
      content: [
        "STEM toys introduce children to science, technology, engineering, and mathematics.",

        "These toys encourage curiosity and creativity while helping kids understand how things work.",

        "Building kits and science experiment toys develop analytical thinking and problem-solving skills.",

        "Early exposure to STEM learning prepares children for future innovation."
      ]
    },

    3: {
      title: "Toys to Encourage Outdoor Play",
      image: outdoor,
      content: [
        "Outdoor toys help children stay active and healthy while enjoying fresh air and open space.",

        "Toys like balls, bicycles, ride-on cars, and outdoor play sets encourage movement and physical activity.",

        "Outdoor play helps improve balance, coordination, and physical strength while also developing teamwork skills.",

        "Spending time outdoors boosts children's mood, creativity, and overall well-being."
      ]
    },

    4: {
      title: "Toys For Girls",
      image: girls,
      content: [
        "Creative toys for girls encourage imagination, storytelling, and self-expression.",

        "Dolls, art kits, pretend-play sets, and craft toys allow children to explore different roles and ideas.",

        "These toys help improve communication, social interaction, and emotional intelligence.",

        "Through imaginative play, girls build confidence and develop creativity in a fun and engaging way."
      ]
    }

  };

  const blog = blogContent[Number(id)];

  if (!blog) return <h2 className="text-center mt-5">Blog Not Found</h2>;

  return (

    <div className="container mt-5 text-center">

      {/* Back Button */}
      <button
        className="back-btn"
        onClick={() => navigate(-1)}
      >
        ⬅ Back
      </button>

      {/* Blog Title */}
      <h2 className="blog-title">
        {blog.title}
      </h2>

      {/* Blog Image */}
      <img
        src={blog.image}
        alt={blog.title}
        className="blog-image"
      />

      {/* Blog Content */}
      <div className="blog-content">
        {blog.content.map((para: string, index: number) => (
          <p key={index} className="blog-text">
            {para}
          </p>
        ))}
      </div>

    </div>
  );
}

export default BlogDetails;