
function create_random_number(){

 // create a random number between 1 and 10
 let random_number = Math.floor(Math.random() * 10) + 1;
 return random_number;

}


function create_image_url(){
    // create a random number between 1 and 10
  let random_number = Math.floor(Math.random() * 50) + 1;
  let gender = null  // randm decide men or woman
  gender = random_number % 2 == 0 ? "women" : "men";
  let image_url = "https://randomuser.me/api/portraits/"+gender+"/"+random_number+".jpg"
  console.log(image_url);
  return image_url;
}


function filterUsers(){
    let users = [
    {
      name: "John",
      age: 30,
      gender: "male"
    },
    {
      name: "Jane",
      age: 25,
      gender: "female"
    },
    {
      name: "Bob",
      age: 20,
      gender: "male"
    },
    {
      name: "Mary",
      age: 27,
      gender: "female"
    }
  ];

  let filtered_users = users.filter(user => user.age > 25)

  console.log(filtered_users);

  return filtered_users;


}

create_image_url()

