import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import foto1 from "./foto1.jpg";
import foto2 from "./foto2.jpg";
import foto3 from "./foto3.jpg";
import "./index.css"
const images = [
  "https://res.cloudinary.com/ifeomaimoh/image/upload/v1652345767/demo_image2.jpg",
  "https://res.cloudinary.com/ifeomaimoh/image/upload/v1652366604/demo_image5.jpg",
  "https://res.cloudinary.com/ifeomaimoh/image/upload/v1652345874/demo_image1.jpg",
];

const newImages = [
    {
        src: foto1,
        caption: "Marathon on Federal Police"
    },
    {
        src: foto2,
        caption: "Running Doctor's marathon "
    },
    {
        src: foto3,
        caption: "Climbing on Pico do Cabugi"
    }
]
export default function BoxCarousel() {
  return (
    <div className="box">
      <Carousel useKeyboardArrows={true}>
        {newImages.map((URL, index) => (
          <div className="slide">
            <img alt="sample_file" className="img-box" src={URL.src} key={index} />
            <p className="p-2">{URL.caption}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
