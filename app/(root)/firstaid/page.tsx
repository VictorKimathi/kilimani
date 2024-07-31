import React from 'react'




interface DataItem {
  tag: string;
  patterns: string[];
  responses: string[];
  context_set: string;
}


const data = [
  {"tag": "Cuts",
   "patterns": ["What to do if Cuts?", "How to cure Cuts?", "Which medicine to apply for Cuts?", "what to apply on cuts?", "Cuts"],
   "responses": ["Wash the cut properly to prevent infection and stop the bleeding by applying pressure for 1-2minutes until bleeding stops. Apply Petroleum Jelly to make sure that the wound is moist for quick healing. Finally cover the cut with a sterile bandage. Pain relievers such as acetaminophen can be applied."],
   "context_set": ""
  },


  {"tag": "Abrasions",
   "patterns": ["how do you treat abrasions?", "Do Abrasions cause scars?", "Abrasions", "what to do if abrasions?", "Which medicine to apply for abrasions?", "How to cure abrasions?"],
   "responses": ["Begin with washed hands.Gently clean the area with cool to lukewarm water and mild soap. Remove dirt or other particles from the wound using sterilized tweezers.For a mild scrape that’s not bleeding, leave the wound uncovered.If the wound is bleeding, use a clean cloth or bandage, and apply gentle pressure to the area to stop any bleeding.Cover a wound that bled with a thin layer of topical antibiotic ointment, like Bacitracin, or a sterile moisture barrier ointment, like Aquaphor. Cover it with a clean bandage or gauze. Gently clean the wound and change the ointment and bandage once per day.Watch the area for signs of infection, like pain or redness and swelling. See your doctor if you suspect infection."],
   "context_set": ""
  },

  {"tag": "stings",
   "patterns": ["How do you treat Sting?", "Stings", "What to do if you get a sting?", "Which medicine to apply if sting?"],
   "responses": ["Remove any stingers immediately. Some experts recommend scraping out the stinger with a credit card. Applying ice to the site may provide some mild relief. Apply ice for 20 minutes once every hour as needed. Wrap the ice in a towel or keep a cloth between the ice and skin to keep from freezing the skin. Taking an antihistamine such as diphenhydramine (Benadryl) or a nonsedating one such as loratadine (Claritin) will help with itching and swelling. Take acetaminophen (Tylenol) or ibuprofen (Motrin)for pain relief as needed. Wash the sting site with soap and water. Placing hydrocortisone cream on the sting can help relieve redness, itching, and swelling."],
   "context_set": ""
  },

  {"tag": "Splinter",
   "patterns": ["How to remove Splinters", "How to cure Splinters?", "What to do if I have splinters?", "How do you bring a splinter to the surface?"],
   "responses": ["1. SOAK IT IN EPSOM SALTS. Dissolve a cup of the salts into a warm bath and soak whatever part of the body has the splinter. Failing that, you can also put some of the salts onto a bandage pad and leave it covered for a day; this will eventually help bring the splinter to the surface. 2. VINEGAR OR OIL. Another simple way to draw out that stubborn splinter is to soak the affected area in oil (olive or corn) or white vinegar. Just pour some in a bowl and soak the area for around 20 to 30 minutes,"],
   "context_set": ""
  },

  {"tag": "Sprains",
   "patterns": ["How do you treat a sprain?", "what to do if i get a sprain?", "Which cream to apply if i get a sprain?", "Which medicine to apply if I get a sprain?"],
   "responses": ["Use an ice pack or ice slush bath immediately for 15 to 20 minutes and repeat every two to three hours while you're awake. To help stop swelling, compress the ankle with an elastic bandage until the swelling stops. In most cases, pain relievers — such as ibuprofen (Advil, Motrin IB, others) or naproxen sodium (Aleve, others) or acetaminophen (Tylenol, others) are enough to manage the pain of a sprained ankle."],
   "context_set": ""
  },

  {"tag": "Strains",
   "patterns": ["How do you treat a strain?", "what to do if i get a strain?", "Which cream to apply if i get a strain?", "Which medicine to apply if I get a strain?", "How do you diagnose a strain?", "Is heat or ice better for a pulled muscle?"],
   "responses": ["Rest,Ice,Compression and Elevation can be used to cure strains. Avoid using your muscle for a few days, especially if movement causes an increase in pain and also Apply ice immediately after injuring your muscle. This will minimize swelling. Don’t put ice directly on your skin. Use an ice pack or wrap ice in a towel. To reduce swelling, wrap the affected area with an elastic bandage until swelling comes down."],
   "context_set": ""
  },

  {"tag": "Fever",
   "patterns": ["How do you treat a mild Fever?", "what to do if i get a mild fever?", "Which medicine to take if I get a mild fever?", "fever"],
   "responses": ["To treat a fever at home: 1)Drink plenty of fluids to stay hydrated. 2)Dress in lightweight clothing. 3)Use a light blanket if you feel chilled, until the chills end. 4)Take acetaminophen (Tylenol, others) or ibuprofen (Advil, Motrin IB, others). 5) Get medical help if the fever lasts more than five days in a row."],
   "context_set": ""
  },

  {"tag": "Nasal Congestion",
   "patterns": ["How do you treat nasal Congestion?", "what to do if i get a nasal congestion?", "Which medicine to take if I have a nasal congestion?", "what to do if i have a blocked nose?", "How do you treat a blocked nose?", "How long does nasal congestion last?"],
   "responses": ["When you’re stuffed up, focus on keeping your nasal passages and sinuses moist. To keep your nasal passages moist, you can: 1)Use a humidifier or vaporizer. 2)Drink lots of fluids. This will thin out your mucus, which could help prevent blocked sinuses. 3)Place a warm, wet towel on your face. It may relieve discomfort and open your nasal passages."],
   "context_set": ""
  },

  {"tag": "Cough",
   "patterns": ["How to cure cough?","How do you treat cough?", "what to do if i get a cough?", "Which medicine to take if I get cough?", "How do you get rid of cough?"],
   "responses": ["1) Honey:- Use honey to treat a cough, mix 2 teaspoons (tsp) with warm water or an herbal tea. Drink this mixture once or twice a day. Do not give honey to children under 1 year of age. 2) Ginger:- Brew up a soothing ginger tea by adding 20–40 grams (g) of fresh ginger slices to a cup of hot water. Allow to steep for a few minutes before drinking. Add honey or lemon juice to improve the taste and further soothe a cough. 3) Fluids:- Staying hydrated is vital for those with a cough or cold. Research indicates that drinking liquids at room temperature can alleviate a cough, runny nose, and sneezing."],
   "context_set": ""
  }]
  interface CardProps {
    data: DataItem;
  }
  
  const Card: React.FC<CardProps> = ({ data }) => {
    return (
      <div style={styles.card}>
        <img src="/path/to/image.jpg" alt={`${data.tag} graphic`} style={styles.image} />
        <div style={styles.content}>
          <h2 style={styles.title}>{data.tag}</h2>
          <h3 style={styles.subtitle}>Patterns:</h3>
          <ul style={styles.list}>
            {data.patterns.map((pattern, index) => (
              <li key={index} style={styles.listItem}>{pattern}</li>
            ))}
          </ul>
          <h3 style={styles.subtitle}>Responses:</h3>
          <p style={styles.responses}>{data.responses.join(' ')}</p>
        </div>
      </div>
    );
  };
  
  const CardList: React.FC = () => {
    return (
      <div style={styles.container}>
        {data.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    );
  };
  
  const styles = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    } as React.CSSProperties,
    card: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      overflow: 'hidden',
      width: '300px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      margin: '10px',
      fontFamily: 'Arial, sans-serif',
    } as React.CSSProperties,
    image: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
    } as React.CSSProperties,
    content: {
      padding: '15px',
    } as React.CSSProperties,
    title: {
      fontSize: '1.5em',
      margin: '0 0 10px',
    } as React.CSSProperties,
    subtitle: {
      fontSize: '1.2em',
      margin: '10px 0 5px',
    } as React.CSSProperties,
    list: {
      listStyleType: 'disc',
      paddingLeft: '20px',
    } as React.CSSProperties,
    listItem: {
      fontSize: '1em',
      margin: '5px 0',
    } as React.CSSProperties,
    responses: {
      fontSize: '1em',
      margin: '10px 0',
    } as React.CSSProperties,
  };
  
  export default CardList;
