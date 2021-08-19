import "./testimonials.scss";

export default function Testimonials() {
    const data = [
        {
          id: 1,
          name: "John Sherchan",
          title: "Security Researcher",
          img:
            "assets/john.jpg",
          icon: "assets/linkedin.png",
          desc:
            "Working with Apaar was one of my best decisions. Thank you for supportive and humble character",
        },
        {
          id: 2,
          name: "Nischal Niraula",
          title: "Founder of NiraulaTech",
          img:
            "assets/nischal.jpg",
          icon: "assets/linkedin.png",
          desc:
            "I just wanted to share a quick note and let you know that you do a really good job. I'm glad I decided to work with you.",
          featured: true,
        },
        {
          id: 3,
          name: "Piyush Yadav",
          title: "Founder of Davtech",
          img:
            "assets/piyush.jpg",
          icon: "assets/linkedin.png",
          desc:
            "My new site is so much faster and easier to work with than my old site. All thanks to Apaar",
        },
        // {
        //     id: 3,
        //     name: "Sujan Kc",
        //     title: "CEO, Casey",
        //     img:
        //       "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        //     icon: "assets/linkedin.png",
        //     desc:
        //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        //   },
        //   {
        //     id: 3,
        //     name: "Kushal Pradhan",
        //     title: "Founder of Pradhan Info",
        //     img:
        //       "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        //     icon: "assets/linkedin.png",
        //     desc:
        //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        //   },
      ];
    return (
        <div className ="testimonials" id = "testimonials">
           <h1>Testimonials</h1>
            <div className = "container">
            {data.map(d=>(
                <div className = {d.featured ? "card featured" : "card"}>
                    <div className = "top">
                        <img src = "assets/testimonialArrow.png" className = "left"/>
                        <img src = {d.img} className = "user"/>
                        <img src = {d.icon} className = "right"/>
                    </div>
                    <div className = "center">{d.desc}</div>
                    <div className = "bottom">
                        <h3>{d.name}</h3>
                        <h4>{d.title}</h4>
                    </div>
                </div>
            ))}
            </div>
        </div> 
    )
}
