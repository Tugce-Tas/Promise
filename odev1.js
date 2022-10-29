import axios from "axios";

const getUserandPost = (user_id) => {
    return new Promise(async (resolve, reject) => {
        if (typeof user_id == 'number' && user_id >= 1) {

            const { data: users } = await axios("https://jsonplaceholder.typicode.com/users/"+ user_id );


            const { data: posts } = await axios("https://jsonplaceholder.typicode.com/posts/"+ user_id );

            console.log(users, posts)

        } else { console.log("hatalı!") }

    })
}

getUserandPost(2)

export default getUserandPost

