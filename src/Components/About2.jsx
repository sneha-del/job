import React from "react";
import "./AboutUs.css";
import Counter2 from "./Counter2";

const About2 = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="part1-ab">
          {/* <img src="/img2.jpg" width="100%" alt="" /> */}
          <img src="./aboutus.jpg"   width={"100%"} className="about-img"/>
        </div>

        <div className="part1-ab ptb">
          <h1 className="head1">About Us</h1>
          <div className="line"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis explicabo unde in at sint necessitatibus velit! Obcaecati officia ipsa voluptate ab. Labore, cupiditate. Pariatur dignissimos iure quia sunt aliquid expedita.
          </p>
          <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, veniam. Quaerat molestiae, quia, suscipit eius repellendus perspiciatis aspernatur, rerum asperiores assumenda voluptas delectus expedita quae deleniti dolore eligendi quos iusto natus veniam nesciunt! In nam corrupti animi voluptatum labore ad?
          </p>
          <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, quisquam iure. Autem numquam ipsa animi facere, modi accusamus cumque earum!
          </p>
        </div>
      </div>

      <div className="row1">
        <div className="">
          <div className="content-img">
          <h1>Innovative Solutions For Account Problems</h1>
            <div className="line"></div>
            <p>
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis neque esse porro placeat laudantium ducimus eum rem facilis quae maiores saepe alias pariatur delectus possimus, suscipit voluptatem omnis nemo ratione?
            </p>

            <div className="issues">
              <div className="issue1">
                <h4 className="head2">Problems and Dimensions</h4>
                <ul>
                  <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                  <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
                  <li>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                </ul>
              </div>
              <div className="issue1">
                <h4 className="head2">CAs common issues:</h4>
                <ul>
                  <li>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </li>
                  <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid!</li>
                  <li>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, laborum harum accusamus nostrum veniam minus ducimus recusandae error quos iusto quam in beatae voluptates odio officia eveniet vitae sed cum?
                  </li>
                  <li>Lorem ipsum dolor sit.</li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quibusdam reprehenderit accusantium tempore. Nobis ducimus nemo facere amet! At quis necessitatibus quam. Velit natus molestias eius nam officiis repudiandae nostrum.
              </p>
              <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint illum tenetur in fuga vero ipsam assumenda tempora. Minima, deserunt quas laborum ipsam exercitationem, sint praesentium impedit facere repudiandae non eum.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row2">
        <div>
          <h3>Appeal to the reader's emotions</h3>
          <div className="line"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, soluta facilis animi libero asperiores, hic qui cupiditate doloremque, reiciendis quas ipsa fugiat eaque! Dolorum voluptatibus nemo unde velit fuga aspernatur!
          </p>
        </div>
        <div className="row">
          <div className="part1-ab">
            <img src="/slide1.jpg" width="100%" alt="" />
          </div>

          <div className="part1-ab ptb">
            <p>
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi cupiditate fugiat officia, laborum ipsam ad dignissimos earum natus omnis enim alias doloremque minima quos perferendis deleniti et placeat voluptatem nisi.
            </p>
            <p>
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa placeat commodi, veritatis soluta quae aspernatur unde quibusdam esse qui eligendi quaerat dolor maiores expedita adipisci ipsum consectetur voluptates ea illum!
            </p>
            <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, qui rerum cupiditate voluptate facilis deleniti harum hic porro quas. Nemo veritatis dolore fugiat. Aperiam dicta est corrupti facere corporis pariatur!
            </p>
            <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem labore molestias id, unde repudiandae modi.
            </p>
            <p>
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, praesentium reiciendis adipisci earum laudantium, magni ducimus est accusantium sed alias expedita ipsa. Qui facere assumenda molestias officiis sapiente possimus blanditiis.
            </p>
          </div>
        </div>
      </div>
      <Counter2 />

      
    </div>
  );
};

export default About2;