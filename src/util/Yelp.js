const apiKey = 'Q99hsqIx7IhBefkU7R44KV-i5gMhx3NJ-VPPg9c4to-514uTvQlhbeOIwQvz7nVoJObmCTgGL-htetFptR79SlKah_yh9q9pta-xb8xS7vPc1w05Nn9HF1PNunoMYHYx';

const Yelp = {

 search(term, location, sortBy) {
  return fetch(`https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
    headers:{
      Authorization: `Bearer ${apiKey}`
    }
  }).then(response => {
    return response.json();
  }).then(jsonResponse => {
    if(jsonResponse.businesses) {
      return jsonResponse.businesses.map(business => {
        return {
          id:business.id,
          imageSrc:business.image_url,
          name:business.name,
          address:business.location.address1,
          city:business.location.city,
          state:business.location.state,
          zipCode:business.location.zipCode,
          categories:business.categories,
          reviewCount:business.review_count
        }
      });
    }
  })
 }
}

export default Yelp;