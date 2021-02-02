import React from "react";
import "../Body/Body.css";
import img1 from "../../Images/main.jpg";
import PinDropOutlinedIcon from "@material-ui/icons/PinDropOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import JobCards from "../JobsCards/JobCards";
import CategoryCard from "../CategoryCard/CategoryCard";
import img2 from "../../Images/thehub.png";
import Carousel1 from "../Carousel/Carousel1";

const Body = () => {
  return (
    <>
      <div className="container">
        <img src={img1} className="mainImg" />
        <h1 className="heading">Find the most exciting startups jobs</h1>
        <div className="searchbar">
          <SearchOutlinedIcon className="icon1" />
          <input
            type="text"
            placeholder="Job title or keyword"
            className="input1"
          />
          <PinDropOutlinedIcon className="icon2" />
          <input
            type="text"
            placeholder="City, area or select remote"
            className="input2"
          />
          <button className="btn btn-primary btn-lg" id="btnSearch">
            {" "}
            Search
          </button>
        </div>
      </div>
      <div className="logos">
        <img
          src="https://thehub.io/_nuxt/img/60a66f8.png"
          className="companyLogos"
        />
        <img
          src="https://thehub.io/_nuxt/img/95120f8.png"
          className="companyLogos"
        />
        <img
          src="https://thehub.io/_nuxt/img/e27771a.png"
          className="companyLogos"
        />
        <img
          src="https://thehub.io/_nuxt/img/cb70062.png"
          className="companyLogos"
        />
      </div>
      <div class="container2">
        <h1 class="heading2">
          <span style={{ marginTop: "100px" }}>Find a job </span>
          <br />
          <span>you love</span>
        </h1>
      </div>

      <div className="cards">
        <JobCards
          jobType="Sales"
          jobProfile="Commercial Manager"
          listitem1="Copenhagen"
          listitem2=" || Remote"
          listitem3=" || Full-time"
        />
        <JobCards
          jobType="Marketing and Communication"
          jobProfile="Google Ads Specialist"
          listitem1="Copenhagen"
          listitem2=" || Remote"
          listitem3=" || Full-time"
        />
        <JobCards
          jobType="Engineer"
          jobProfile="Robotic lead Engineer"
          listitem1="Copenhagen"
          listitem2=" || Remote"
          listitem3=" || Full-time"
        />
      </div>
      <div className="cards">
        <JobCards
          jobType="E-Commerce"
          jobProfile="E-commerce Manager"
          listitem1="Copenhagen"
          listitem2=" || Remote"
          listitem3=" || Full-time"
        />
        <JobCards
          jobType="Marketing and Communication"
          jobProfile=" Marketing Intern"
          listitem1="Copenhagen"
          listitem2=" || Remote"
          listitem3=" || Full-time"
        />
        <JobCards
          jobType="Coach"
          jobProfile="Agile Coach"
          listitem1="Copenhagen"
          listitem2=" || Remote"
          listitem3=" || Full-time"
        />
      </div>
      <div class="load_more">
        <button class="btn btn-primary btn-lg" id="load_btn">
          Show All Jobs
        </button>
      </div>

      <div className="categoryWise">
        <h1 class="heading2">
          <span style={{ marginTop: "100px" }}>Explore </span>
          <br />
          <span>by Category</span>
        </h1>
        <div className="categoryContainer">
          <img src={img2} className="imgCategory" />
          <div className="Cards2">
            <CategoryCard
              logoUrl="https://thehub.io/_nuxt/45bfb656342e6becfc12dda4af66b074.svg"
              CategoryType="Business Development"
            />
            <CategoryCard
              logoUrl="https://thehub.io/_nuxt/136b12838d2cf16bfb0af0b72acc5122.svg"
              CategoryType="Customer Service"
            />
            <CategoryCard
              logoUrl="https://thehub.io/_nuxt/a90c3fcb95a39d140aa2651f20d8ee96.svg"
              CategoryType="Design"
            />
          </div>
        </div>
        <button
          class="btn btn-primary btn-lg"
          id="categoryAllButton"
          onClick={() => {
            alert("No More Categories to display This is just a button");
          }}
        >
          See All Category
        </button>

        <div className="section3">
          <h1 className="section3Heading">
            You're now seeing <br /> jobs from Denmark
          </h1>
          <div className="section3flex">
            <img
              className="section3img"
              src="https://media-exp1.licdn.com/dms/image/C4D0BAQF08mctT0Rchg/company-logo_200_200/0/1519952245437?e=2159024400&v=beta&t=bCHZDaCfbpzbR1nNiii2IjcfVO6tEy2Hn2DiCr3UNZU"
            />
            <div className="carousel111">
              <Carousel1 />
            </div>
          </div>
        </div>
        <footer className="footerweb">
          <img
            className="footerimg"
            src="https://thehub.io/_nuxt/164db33c3d5c8e1fcf4d94b65b0da148.svg"
          />
          <div className="footermenu">
            <p className="f1">About</p>
            <p className="f1">Privacy</p>
            <p className="f1">Terms</p>
            <p className="f1">Tools</p>
            <p className="f1">Blog</p>
            <p className="f1">Partner</p>
            <p className="f1">Contacts</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Body;
