import React, { useState } from 'react';
import "./Blogs.css"
import Card from "react-bootstrap/Card";

const BlogList = [
  { id: 1,
    title: 'Spirituality',
    
     description: 'From histories of the Catholic Church to spiritual guidebooks and memoirs of the Eat, Pray, Love variety, this genre has a place for anything and everything related to the topics of religion and spirituality.Traditionally, spirituality referred to a religious process of re-formation which "aims to recover the original shape of man", oriented at "the imgUrl of God" as exemplified by the founders and sacred texts of the religions of the world. The term was used within early Christianity to refer to a life oriented toward the Holy Spirit and broadened during the Late Middle Ages to include mental aspects of life' },
  { id: 2,
     title: 'Fantasy',
     description: "This book genre is characterized by elements of magic or the supernatural and is often inspired by mythology or folklore. In high fantasy — one thats set in an entirely fictional world — these magical elements are at the forefront of the plot, as in Trudi Canavans Black Magician trilogy. In low fantasy or magical realism, however, magic is subtly woven into an otherwise familiar, real-world setting. You can delve into fantasys many subgenres to get to know your Arcanepunk from your Flintlock, and find your books home!",
       },
  { id: 3,
     title: 'Thriller and Suspense', 
     
     description: 'A horror story can also be called a thriller, if it employs psychological fear to build suspense. But not all thrillers are horror stories. So what are they? While this book genre encompasses many of the same elements as mystery, in a thriller the protagonist is usually acting to save their own life, rather than to solve the crime. Thrillers typically include cliffhangers, deception, high emotional stakes, and plenty of action — keeping the reader on the edge of their seat until the books climax. Gillian Flynns Gone Girl is a masterclass in the dark, mysterious thriller. ' },
  { id: 4, 
    title: 'Humanities & Social Sciences', 
    
    description: 'Got something wise to say? Then your book might just belong among the books of this eclectic genre — as long as it discusses a topic related to (deep breath): philosophy, history, literature, language, art, religion, music, or the human condition. This might seem like a pretty wide net to fall into, but keep in mind that books in this genre are typically quite academic; if youve written more of a free-flowing spiritual guide, it probably belongs in the previous genre. ' },
  { id: 5,
    
     title: ' Childrens',
      description: 'As much as kids love fairytales and talking animals, theyre often just as happy to pick up a nonfiction book at storytime. Whether its an activity book to keep them busy, a powerful true story like Malalas Magic Pencil, or a childrens encyclopedia to feed their brains, childrens nonfiction is all about making learning fun. And the wildly popular Horrible Histories series has proven that this genre can compete with wizards and superheroes at every ageThere you have it 35 of the most popular genres of books. Hopefully, this list will help you get your foot in the right door. But if your book doesnt slot neatly into any of these categories (though there are quite some more types of nonfiction to consider), dont be afraid to declare it a hybrid, or to dig a little deeper into the subcategories that youll find in the shade of these umbrella genres.And no matter what kind of book youre writing, check out our book development template to get started.' },
  { id: 6, 
    title: 'Science & Technology',
     
    description: 'The job of science nonfiction is not to predict the future, but to make sense of the world were currently living in — which, quite honestly, can feel like science fiction to some of us! Readers of this genre range from complete beginners trying to understand the things around them to technophiles whose brains are whirring to keep up with the pace of change, so theres bound to be a niche for your book, however advanced it is. ' },
  { id: 7, 
    title: 'Memoir & Autobiography',
    
     description: 'Both memoirs and autobiographies provide a true account of the authors life. They differ in that an autobiography provides a chronological account of your lifes events and accomplishments, whereas a memoir puts the emphasis on only the most defining, emotional moments. Generally, these moments are drawn together by a single theme — or a significant time, place, or relationship — to communicate a message you wish to share with readers. The Argonauts by Maggie Nelson is a popular example of a memoir.' },
  { id: 8, 
    title: 'Romance',
    
     description: 'Romance is so frequently used as a subplot that it can sometimes be tricky to know whether or not youre writing in this genre. The key thing to remember is that the romantic relationship must be the center point of the plot. (Other giveaways include a “happily ever after” ending and the warm fuzzies.) If your novel has a romantic relationship at its heart and is perfectly at home in another genre, it probably falls into one of romances many subgenres, including but not limited to: young adult romance, paranormal romance, and historical romance.' }
  
];

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBlogs = BlogList.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
 

  return (
    <div className='container blog-container'>
        <div className='search'>
      <input className='searchbar text-primary'
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleInputChange}
      /></div>
      <div className='list d-inline'>
      {filteredBlogs.length > 0 ? (
        <div className='blog' >
          {filteredBlogs.map((blog) => (
            <Card  className='Card' key={blog.id} src={blog.imgUrl}>
              <Card.Body className='card-body' >
              <Card.Title className='bl'>{blog.title}</Card.Title>
              {/* <Card.Img className = 'pic'>{blog.src}</Card.Img> */}
              
              <Card.Text className='card-description'>{blog.description}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      ) : (
        <h4 className='text-danger text-center'>Not Found! </h4>
      )}
      </div> 
    </div>
  );
};

export default Blogs;