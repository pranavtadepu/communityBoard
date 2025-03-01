import React from 'react';
import Events from './Events';
import '../Board.css';
const Board = () =>{

    const foodTrucks = [
        {
          id: 1,
          title: "Musical Night",
          description: "The Listening Hour is a free noon-time concert series.",
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN1UTAzvAArGFzQZLNJJfk2y5hEWbYmUBysw&s",
        },
        {
          id: 2,
          title: "Basket Ball Game",
          description: "The San Jose State Spartans men's basketball game.",
          imageUrl: "https://www.sanjose.org/sites/default/files/styles/listing_detail_image/public/2018-12/adsf.jpg.webp?itok=1mRQnVG7",
        },
        {
          id: 3,
          title: "Open House",
          description: "Project Expos showcase the work of SJSU students.",
          imageUrl: "https://www.sjsu.edu/_images/people/ADV_campus-events-jgensheimer_1.jpg",
          likUrl: "#"
        },
        {
          id: 4,
          title: "Spartan Fest",
          description: "SJSU's Homecoming Week, Spartans!.",
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHO3quVHNK-p9qNSfpcPBHUApFj5nXljmKPA&s",
        },
        {
          id: 5,
          title: "Rugby Game",
          description: "Men's Rugby vs San Francisco State University",
          imageUrl: "https://www.sjsu.edu/_images/people/ADV_athletics-homecoming-dschmitz_1.jpg",
        },
        {
          id: 6,
          title: "Global Trivia Night",
          description: "🎬✨ Think you know all things pop culture & SJSU",
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSegri02Z7fXNp3JQWgIIwdhrD4jSFu_bWOgQ&s",
        },
        {
          id: 7,
          title: "Nirvana Soul Trivia Night",
          description: "Join us on Thursday for a trivia night for the ages.",
          imageUrl: "https://images.squarespace-cdn.com/content/v1/5b974ba05417fc70c0fe6e50/3bf728fe-21a7-447c-a0f2-b84c375d9181/SJSU+Votes+Trivia+NIght+Spring+2024.png",
        },
        {
          id: 8,
          title: "Traditional Dance",
          description: "Traditional dances to explore.",
          imageUrl: "https://www.ndsj.org/news-events/files/Images%2022-23/ND_Latinas_Unidas-SJSU%20Event_2022-30.jpg?mask=2",
        },
        {
          id: 9,
          title: "Spartan Day",
          description: "Catch us at SJSU Admitted Spartan Day on 4/15 💛💙",
          imageUrl: "https://res.cloudinary.com/campusesp/image/upload/c_fill,f_auto,w_853/v1691602571/lwzt2pt6ebh9hooyg7zn.png",
        },
        {
          id: 10,
          title: "Traditional Day",
          description: "We mark Indigenous Peoples Day! Today at SJSU, we celebrate the incredible cultures.",
          imageUrl: "https://campussuite-storage.s3.amazonaws.com/prod/11174/d77b0cf9-1ca3-11e6-b537-22000bd8490f/2512742/52c25ef0-66c3-11ed-8db2-0e61d7b9f249/optimizations/512",
        }
      ];
    
      return (
        <div className="board">
          {foodTrucks.map((truck) => (
            <Events
              key={truck.id}
              title={truck.title}
              cuisine={truck.cuisine}
              description={truck.description}
              imageUrl={truck.imageUrl}
              linkLabel={truck.linkLabel}
              linkUrl={truck.linkUrl}
            />
          ))}
        </div>
      );
    }
    
export default Board;  