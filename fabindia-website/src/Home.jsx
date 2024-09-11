import React from "react";
import img1 from '../images/hp-sec1-31may24-1.webp'
import img2 from '../images/hp-sec1-16may-8.webp'
import img3 from '../images/hp-sec1-16may-6.webp'
import img4 from '../images/hp-sec1-16may-2-rep.webp'
import img6 from '../images/hp-sec1-7june24-5.webp'
import img7 from '../images/hp-sec1-01june24-3.webp'
import img5 from '../images/hp-sec1-7june24-7.webp'
import { BiSolidLeftArrowCircle, BiSolidRightArrowCircle } from "react-icons/bi";
import { MDBBtn } from "mdb-react-ui-kit";

import slide1 from '../images/sari.webp'
import slide2 from '../images/dresses.jpg'
import slide3 from '../images/dupattas.webp'
import slide5 from '../images/bags.jpg'
import slide6 from '../images/jewellery.webp'

import pic1 from '../images/home&living.webp'
import pic2 from '../images/kurtas.jpg'

import kurtas from '../images/k2.webp'
import shirts from '../images/shirts.webp'
import trousers from '../images/trousers.webp'
import menoutfit from '../images/menoutfit.webp'

import pants from '../images/pants.webp'

function Content()
{ 
    return(
    <>
{/* content slider*/}
        <div id="carouselExampleIndicators" className="carousel slide  mx-auto" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={img1} className="d-block w-100" alt="img1" />
                    <MDBBtn className="btn bg-blue p-3 font-bold h-16 shadow-none" type="button"  style={{width:"225px",position:"absolute", zIndex:"5", marginTop:"-178px", marginLeft:"73%", fontSize:"22px", color:"white"}}>SHOP NOW</MDBBtn>
                </div>
                <div className="carousel-item">
                    <img src={img2} className="d-block w-100" alt="img2" />
                    <MDBBtn className="btn bg-light text-grey-900 font-bold p-3 h-16 shadow-none" type="button"  style={{width:"225px",position:"absolute", zIndex:"5", marginTop:"-160px", marginLeft:"43%", fontSize:"22px", color:"black"}}>SHOP NOW</MDBBtn>
                </div>
                <div className="carousel-item">
                    <img src={img3} className="d-block w-100" alt="img3" />
                    <MDBBtn className="btn text-black  p-2 h-12 shadow-none" type="button" style={{width:"200px", position:"absolute", zIndex:"5", marginTop:"-122px", marginLeft:"16px", fontSize:"20px", backgroundColor:"lightyellow"}}>SHOP NOW</MDBBtn>
                </div>
                <div className="carousel-item">
                    <img src={img4} className="d-block w-100" alt="img4" />
                    <MDBBtn className="btn text-white bg-orange-500  p-2 h-16 shadow-none" type="button" style={{width:"210px", position:"absolute", zIndex:"5", marginTop:"-180px", marginLeft:"195px", fontSize:"20px", backgroundColor:"orange"}}>SHOP NOW</MDBBtn>
                </div>
                <div className="carousel-item">
                    <img src={img5} className="d-block w-100" alt="img5" />
                    <MDBBtn className="btn bg-white p-2 h-12 shadow-none" type="button" style={{width:"200px", position:"absolute", zIndex:"5", marginTop:"-152px", marginLeft:"62px", fontSize:"20px", color:"black"}}>SHOP NOW</MDBBtn>
                </div>
                <div className="carousel-item">
                    <img src={img6} className="d-block w-100" alt="img6" />
                    <MDBBtn className="btn text-light p-2 h-14 shadow-none" type="button" style={{width:"230px", position:"absolute", zIndex:"5", marginTop:"-169px", marginLeft:"255px", fontSize:"20px", backgroundColor:"pink"}}>SHOP NOW</MDBBtn>
                </div>
                <div className="carousel-item">
                    <img src={img7} className="d-block w-100" alt="img7" />
                    <MDBBtn className="btn text-dark bg-light p-2 h-16  shadow-none" type="button" style={{width:"230px", position:"absolute", zIndex:"5", marginTop:"-177px", marginLeft:"947px", fontSize:"20px"}}>SHOP NOW</MDBBtn>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <BiSolidLeftArrowCircle className="text-5xl mt-5 bg-slate-400 hover:text-red-950  rounded-full "/>
                <span className="carousel-control" aria-hidden="true"></span>
                <span className="visually-hidden"></span>
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <BiSolidRightArrowCircle  className="text-5xl mt-5  bg-slate-400 hover:text-red-950  rounded-full "/>
                <span className="carousel-control" aria-hidden="true"></span>
                <span className="visually-hidden"></span>
            </button>            
        </div>



{/* women*/}
        <div className="main ms-40 mt-5 bg-pink-100">
        <h4 className="text-4xl">Fantastic<br/>Finds</h4>
            <div className="pt-5 ms-28 d-flex" style={{width:'80%', height:'300px'}}>
                    <a href=""><img src={slide1} alt="Slide 1" className="p-2"/></a>
                    <a href=""><img src={slide2} alt="Slide 2" className="p-2"/></a>
                    <a href=""><img src={slide3} alt="Slide 5" className="p-2"/></a>
                    <a href=""><img src={slide5} alt="Slide 3" className="p-2"/></a>
                    <a href=""><img src={slide6} alt="Slide 6" className="p-2"/></a>
            </div>
        </div>

{/* two images */}
        <div className="twopics d-flex m-20 ms-40">
            <a href=""><img src={pic1} alt="pic1" className="p-2" /></a>
            <a href=""><img src={pic2} alt="pic2" className="p-2" /></a>
        </div>
        <div className="twobtns">
            <MDBBtn className="btn1">Explore Now</MDBBtn>
            <MDBBtn className="btn2">Explore Now</MDBBtn>
        </div>


{/*men*/}
        <div className="main ms-40 mt-5 bg-pink-100">
            <h4 className="text-4xl">Fantastic<br/> Finds</h4>
                <div className="pt-5 ms-28 pb-5 d-flex" style={{width:'80%', height:'350px'}}>
                    <a href=""><img src={kurtas} alt="kurtas" className="p-2"/></a>
                    <a href=""><img src={shirts} alt="shirts" className="p-2"/></a>
                    <a href=""><img src={trousers} alt="trousers" className="p-2"/></a>
                    <a href=""><img src={menoutfit} alt="menoutfit" className="p-2"/></a>
                </div>
            </div>


<div className="mt-5">
<img src={pants} alt="pants" style={{width:"100%"}}/>
<MDBBtn className="btn p-3 font-bold h-16 shadow-none" type="button"  style={{width:"225px",position:"absolute", zIndex:"5", marginTop:"-125px", marginLeft:"43%", fontSize:"22px", color:"white", backgroundColor:"#381717"}}>SHOP NOW</MDBBtn>
</div>



<hr className="mt-5 w-75 text-gray-700"/>


{/* make online shopping effortless with fabIndia */}
    <div className="paragraph p-5 w-75 h-48 overflow-auto touch-auto position-relative">
        <h4 className="position-absolute sticky-top">Celebrate the Diversity of India and Make Online Shopping Effortless with Fabindia</h4>
        <p className="mt-2 position-relative">Fabindia was established in 1960 primarily to promote the fascinating crafts of India. Starting mainly as an exporter of home furnishings, we have now started to offer a wide assortment of women's and men's clothing, home decor items, personal care items, organic food products and much more. Keeping contemporary fashion in mind, we blend indigenous craft techniques with modern designs.

        Fabindia connects over 55,000+ rural craft producers to modern metropolitan markets, building a foundation for skilled, long-term rural employment while preserving India's traditional crafts. Our products are natural, handcrafted, and modern. We celebrate India at Fabindia, and we strive to offer all that we admire about our country to customers all around the world, which has made Fabindia one of the finest shopping destinations.</p>
        
        <h5>Explore an Exquisite Range of Products</h5>
        <p>Give a unique touch to your wardrobe and home with Fabindia products. From home linen and furniture to apparel and personal care items, you will find numerous products at Fabindia. We strive to offer a wide variety of products. So whether you need to add intricately designed clothes and accessories to your closet or toxin-free personal care products to nourish your skin and hair, you will find everything in one place.</p>

        <h5>Define your Style Statement with the Women's Collection</h5>
        <p>Make a statement with Fabindia's women's collection. From ethnic wear to western wear and accessories, there's a vast range of offerings. Explore and choose the perfect outfits for women from a thoughtfully curated assortment that will take your wardrobe to the next level.</p>

        <h5>Upgrade your Looks with the Men's Collection</h5>
        <p>Discover the rich Indian culture, craft and craftsmanship with Fabindia's menswear collection. Elevate your style quotient with fascinating western and ethnic menswear choices and add finishing touches to your ensemble with the perfect handcrafted accessories. So whether it's a client meeting, a lazy Sunday, or a festive occasion, be the centre of attention with our exquisite collection.
        </p>

        <h5>Kids Collection: The Perfect Blend of Style and Comfort</h5>
        <p>Introduce your young ones to the diverse crafts of India and let them be their adorable and happy selves with our kidswear collection. Shop online from a wide range of clothes and accessories for your kids and turn them into trendy little fashionistas.
        </p>

        <h5>A Touch of Sophistication with the Home & Living Collection</h5>
        <p>We all want our home to be beautiful as it is a place where lovely memories are created. A charming home and living collection is a must-have to elevate your space and make it look alluring. Fabindia's elegant assortment of home linen will keep the sun out and let the breeze in.
        </p>
        <p>
        In addition, a well-adorned dining space is all you need to bring your family together. Brighten up the area with fascinating lamps, or embellish your tables with elegant vases. Adorn every corner of your space with the lovely home decor assortment.
        </p>

        <h5>Give your Home a Classy Appearance with the Furniture Collection</h5>
        <p>Transform your space with our stunning furniture assortment. From cabinets and chairs to tables and mirrors, every piece of home furnishing will add character and functionality to your space.</p>

        <h5>Pamper Yourself with Personal Care Collection</h5>
        <p>Indulge in the goodness of toxin-free and natural bioactive fuelled personal care with FabEssentials. At Fabindia, our personal care products are made from nature-inspired ingredients that give you healthy hair & skin. From face washes and body lotion to shampoos, each product will rejuvenate your skin and hair to uplift your mood.</p>

        <h5>Organic Food Products: Make Every Meal Nutritious</h5>
        <p>Enjoy guilt-free snacking or give your tasty dishes a flavourful twist with our organic food range. We offer a variety of organic food products that fuse taste and nutrition together. Choose from a wide range of cereals, grains, pulses, honey, spices, pickles and more.</p>

        <h5>FAQs</h5>
        <h5>What is the most popular online store?</h5>
        <p>Online shopping has become an easy task these days and Fabindia is one of the most popular online stores. The brand offers a wide range of womenswear, menswear, kidswear, home linen, home decor, furniture, personal care items and organic food products.</p>
        
        <h5>What is the best clothing brand?</h5>
        <p>Fabindia is one of the finest clothing brands with a huge assortment of clothing choices. From ethnic or western wear, the brand has something for everyone. You will find trendy and comfortable outfits for men, women and kids.</p>


        <h5>Should I buy things online?</h5>
        <p>Buying things online is an easy and convenient method. Fabindia makes online shopping an effortless experience with easy returns, doorstep delivery and a wide range of products available. Discover apparel, home decor, home linen, furniture and skin care products online at Fabindia.</p>

        <h5>Which is the most trusted online shopping site?</h5>
        <p>Fabindia is one of the most trusted online shopping sites. People from all over the country prefer the brand. We have a vast collection of products, from clothes to beauty; shop for trendy and comfortable apparel or personal care products online at Fabindia.</p>
    </div>
    </>
    )
}

export default Content