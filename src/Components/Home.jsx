import React,{useState,useEffect}from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import HomeCarousel from './HomeCarousel'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HomeCarousel/>
      <div className="container"> 
        <div className="bk">
          <div className="ak">
           <div className="quote">
              <span className='login now'>Now</span>
              <span className='login' >"Fullfillment <br /> of your dreams"</span><br />
              <span className='login now'>has a new address!</span>
            </div>

            <div>
              <Link className="bn" to="/login">Get Started</Link>
            </div>
           </div>
           </div>


        <div className="row-hm">

          <div className="part1-hm">
            <h3 className="head1">Your Book Store</h3>
            <div className="line"></div>
            <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, praesentium totam. Maxime eum explicabo quasi. Sunt voluptatibus voluptates, asperiores ex deserunt perspiciatis consequuntur, doloremque non, expedita neque laborum? Tempore, dignissimos.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur adipisci hic error saepe ad laborum ipsam maiores accusantium vel voluptate unde sed minus commodi, reprehenderit illum amet mollitia aliquam eligendi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, molestias eos ipsa quis fugiat animi dolorum nisi excepturi voluptates consequatur ab accusamus quas autem? Optio eligendi necessitatibus dicta dolores expedita. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel facere laborum laboriosam placeat delectus, minima quibusdam necessitatibus voluptate magni excepturi nostrum accusantium tempore quis sequi possimus fugiat aliquid, ab repellendus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis at corrupti quod maiores vel veritatis, hic atque reprehenderit asperiores obcaecati dignissimos, magni optio? Commodi in aliquid nesciunt inventore labore nemo!
            </p>
           
          </div>
          <div className="part1-hm">
            <img src="/slide1.jpg" width="100%" alt="" />
          </div>

        </div>

        <div className="row-hm">
          <div className="part1-hm">
            <img src="/slide2.jpg" width="100%" alt="" />
          </div>
          <div className="part1-hm">
            <h3 className="head1">We love to help Seriously.</h3>
            <div className="line"></div>
            
            <p>
              
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, rem blanditiis exercitationem dolorum eaque architecto. Sequi illo temporibus vero accusantium ullam. Facere natus, debitis accusantium eos officiis tenetur! Quaerat, explicabo! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi velit magni quibusdam, iure quas omnis sed accusantium laboriosam, voluptatum corporis ipsam voluptas eos quam rerum ipsum. Similique blanditiis provident quod! Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis laborum veritatis et exercitationem placeat sit rem iusto ullam magnam aliquam eligendi alias deserunt numquam autem, libero minus consectetur! Debitis, voluptate.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti accusantium totam alias. Ducimus porro ut aspernatur, totam expedita nulla molestias? Minima ipsum, unde ratione alias illum nesciunt provident enim ab.
            </p>
          </div>

        </div>

        <div className="row-hm">

          <div className="part1-hm">
            <h3 className="head1">Start Now</h3>
            <div className="line"></div>
            <p>
              
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, aut repellendus? Temporibus blanditiis doloremque voluptas quaerat fugiat dicta, ea excepturi culpa ducimus nam reprehenderit accusamus a quam vero dolorum voluptate?
            </p>
            <p>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque quibusdam aliquid blanditiis similique autem quasi itaque neque nemo dicta possimus facere, sunt nesciunt et libero, minus inventore recusandae reiciendis ipsam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nesciunt, quos corporis praesentium hic porro? Amet aut voluptatem optio culpa dolores blanditiis aliquid autem libero? Aspernatur unde reprehenderit beatae sint! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis magnam, dolores, vel repudiandae ex velit voluptatum cum possimus earum ab, et accusantium corporis necessitatibus cupiditate aliquam magni fugiat quaerat atque.
            </p>
            
          </div>
          <div className="part1-hm">
            <img src="slide3.jpg" width="100%" alt="" />
          </div>

        </div>

        <div className="row-hm">
          <div className="part1-hm">
            <img src="/h2.jpg" width="100%" alt="" />
          </div>
          <div className="part1-hm">
            <h3 className="head1">Your.Store Open 24/7</h3>
            <div className="line"></div>
            <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, incidunt? Ipsam aliquam eos illo saepe architecto doloribus mollitia, neque quia tempore modi amet, delectus pariatur veritatis quam exercitationem error porro.
            </p>
            <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi odit commodi dolore recusandae! Explicabo in animi nemo minima nulla repellat harum ipsum optio voluptatem enim, temporibus odio voluptate sequi delectus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, porro? Eligendi suscipit illum perferendis quam earum beatae accusantium! Labore nostrum dolor ex et maxime omnis vel aliquam. Obcaecati, maxime eos.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt expedita asperiores temporibus illum assumenda sequi provident dolorum debitis, consequatur sapiente fugit rerum dolore voluptate ab eaque vel neque! Maiores, tempora. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum quisquam odio praesentium harum sapiente temporibus odit pariatur, enim perferendis soluta culpa, nemo illo, dolorem reiciendis commodi aliquid assumenda nulla? Repellat.
              </p>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home