import axios from 'axios';


export const moviesApi = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: process.env.REACT_APP_TMDB_KEY,
    },
});

export const fetchToken = async () => {
    try {
        const { data } = await moviesApi.get("/authentication/token/new");
        const token = data.request_token;

        if (data.success) {
            localStorage.setItem("request_token", token);

            window.location.href = `https://www.themoviedb.org/authenticate/${token}?redirect_to=${window.location.origin}/approved`;
        }
    } catch (error) {
        console.log("Your token could not be created");
    }
};

export const createSessionId = async () => {
    const token = localStorage.getItem("request_token");

    if (token) {
        try {
            const {
                data: { session_id },
            } = await moviesApi.post("authentication/session/new", {
                request_token: token,
            });

            localStorage.setItem("session_id", session_id);
            return session_id;
        } catch (error) {
            console.log(error);
        }
    }
};

// export const moviesApi = axios.create({
//   baseURL: "https://api.themoviedb.org/3",
//   params: {
//       api_key:  process.env.REACT_APP_TMDB_KEY,
// // 'a88dc2859e9af3b02928ad7967198dba',
//   },
// });

// export const fetchToken = async () => {
//     try {
//         const { data } = await moviesApi.get("/authentication/token/new");
//         const token = data.request_token;

//         if (data.success) {
//             localStorage.setItem("request_token", token);

//             window.location.href = `https://www.themoviedb.org/authenticate/${token}
//             ?redirect_to=${window.location.origin}/approved`;
//         }
//     } catch (error) {
//         console.log("Your token could not be created");
//     }
// };

// export const createSessionId =  async () => {
//     const token = localStorage.getItem('request_token')
//     if(token){
//         try{
// const {data:{session_id}} = await moviesApi.post ('/authentication/session/new',{
//     request_token:token

// })
// localStorage.setItem('session_id', session_id)
//         return session_id
// }catch (err){
// console.log(err)
// }

//     }


//     }











// import axios from "axios";

// export  const movieApi = axios.create({
//   baseURL: "https://api.themoviedb.org/3",
//   params: {
//     api_key:'a88dc2859e9af3b02928ad7967198dba',
//   }
// });
// // `https://api.themoviedb.org/3/authentication/token/new`;
// export  const fetchToken  = async () => {
//     try{
// const {data} = await movieApi.get(`/authentication/token/new`) 
//         const token = data.request_token
//         if(data.success) {
//             localStorage.setItem('request_token', token)
//             window.location.href = `https://www.themoviedb.org/authenticate${token}
//             ?redirect_to=${window.location.origin}/approved`;
//         }
//     }catch(err){
// console.log('Your token could not be created')
//     }
// }
