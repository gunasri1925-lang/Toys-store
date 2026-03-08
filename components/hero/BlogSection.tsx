import { useNavigate } from "react-router-dom";
import puzzleimage from"../../assets/images/card1.png";
import stemgift from"../../assets/images/card2.png";
import toys from"../../assets/images/card3.png";
import girltoys from"../../assets/images/card4.png";


function BlogSection() {
  const navigate = useNavigate();
  const blogs = [
    {
      id: 1,
      title: "Puzzle Gifts for Kids",
      image:puzzleimage
    },
    {
      id: 2,
      title: "STEM Gifts for Kids",
      image: stemgift
    },
    {
      id: 3,
      title: "Toys to Encourage Outdoor Play",
      image:toys
    },
    {
      id: 4,
      title: "Toys For Girls",
      image: girltoys
    }
  ];

  return (
    <div className="blog-section py-5">
      <div className="container">
        <h2 className="text-center text-white mb-5">Our Blog</h2>

      <div className="row g-4">
          {blogs.map((blog) => (
      <div className="col-md-6 col-lg-3" key={blog.id}>
      <div className="card blog-card h-100">
          <img src={blog.image} className="card-img-top" alt={blog.title}/>
     <div className="card-body text-center">
          <h5>{blog.title}</h5>
          <button className="btn btn-link text-danger" onClick={() => navigate(`/blog/${blog.id}`)}>→ Read More</button>
      </div>
      </div>
      </div>
      ))}
      </div>
      </div>
      </div>
  );
}

export default BlogSection;