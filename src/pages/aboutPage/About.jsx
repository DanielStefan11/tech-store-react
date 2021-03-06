import React from "react";
// Components
import Layout from "../../components/layout/Layout";
import ScrollButton from "../../components/scrollButton/ScrollButton";
// Images
import LaptopImg from "../../assets/images/experience.jpg";
import PCImg from "../../assets/images/pc-setup.jpg";
// React Icons
import { FaTruck, FaRegCreditCard, FaAward } from "react-icons/fa";
import { ImPriceTags, ImCheckboxChecked } from "react-icons/im";
// CSS
import "./About.css";
import "./AboutMobile.css";

function About(props) {
  const { scrollBtnVizibility, handleScrollToTop } = props;
  return (
    <Layout>
      <div className="about-page d-flex flex-column align-items-center">
        <h1 className="text-center mb-5">Despre noi</h1>
        <div className="info">
          <p className="font-weight-bold h4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe vitae
            ipsam eos in obcaecati maxime optio id officiis ab corporis
            voluptatem fugiat deserunt, veniam ratione odio. Odit, ut deleniti,
            delectus repellat perspiciatis nisi animi praesentium inventore
            sunt, nulla dolorum. Eligendi officiis labore cum, esse tempora,
            expedita officia fuga placeat velit, dolores eius deleniti nihil
            exercitationem facere? Tempore.
          </p>
        </div>
        <div className="description">
          <div className="description-containers d-flex align-items-center">
            <img className="mr-5" src={LaptopImg} alt="experienta" />
            <div className="description-card-1">
              <h5>Experiență de peste 10 ani</h5>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse,
                amet? Consequuntur dignissimos ipsa labore distinctio quos
                blanditiis ex nemo minima, expedita voluptatem repudiandae
                exercitationem quidem libero architecto rerum molestiae dolores
                harum fugit. Pariatur aliquid, tempore ab temporibus adipisci
                corrupti quidem eveniet assumenda illo nam nemo libero aliquam?
                Sequi, inventore quidem.
              </p>
            </div>
          </div>

          <div className="description-containers d-flex align-items-center">
            <div className="description-card-2">
              <h5>La noi găsești exact ceea ce-ți trebuie</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt doloremque aperiam, delectus quam vel eum doloribus
                consequatur hic vero. Dolore id neque sequi iste maiores illo
                veritatis dolorem! Perferendis ipsa natus dolorem at libero
                nobis corrupti magni vero saepe voluptates, modi veritatis eos
                ex tempora sed doloremque possimus consequuntur harum?
              </p>
            </div>
            <img className="ml-5" src={PCImg} alt="pc setup" />
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-center">De ce să alegi magazinul nostru</h3>
          <ul className="h5">
            <li>
              <ImCheckboxChecked />
              Lorem ipsum dolor sit amet.
            </li>
            <li>
              <ImCheckboxChecked />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, repellendus!
            </li>
            <li>
              <ImCheckboxChecked />
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </li>
            <li>
              <ImCheckboxChecked />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </li>
            <li>
              <ImCheckboxChecked />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              aliquid ipsam.
            </li>
            <li>
              <ImCheckboxChecked />
              Lorem ipsum dolor sit.
            </li>
            <li>
              <ImCheckboxChecked />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Eligendi!
            </li>
            <li>
              <ImCheckboxChecked />
              Lorem ipsum dolor sit amet consectetur.
            </li>
            <li>
              <ImCheckboxChecked />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </li>
          </ul>
        </div>

        <div className="benefits-container">
          <h3 className="text-center mb-5">Ce beneficii îți oferim</h3>
          <div className="benefits-cards d-flex justify-content-around">
            <div>
              <FaTruck size="4rem" color="#0066ff" />
              <h4>Transport ieftin și rapid oriunde în țară</h4>
            </div>
            <div>
              <ImPriceTags size="4rem" color="#ff9933" />
              <h4>Prețuri mici</h4>
            </div>
            <div>
              <FaRegCreditCard size="4rem" color="#339933" />
              <h4>Plăți în rate</h4>
            </div>
            <div>
              <FaAward size="4rem" color="#cc0000" />
              <h4>Produse de calitate</h4>
            </div>
          </div>
        </div>
        <ScrollButton
          scrollBtnVizibility={scrollBtnVizibility}
          handleScrollToTop={handleScrollToTop}
        />
      </div>
    </Layout>
  );
}

export default About;
