const axios = require('axios')

async function fetch(){
    const response = await axios.get("http://www.omdbapi.com/?t=fast&apikey=dec4ad0e");
    console.log(response.data);
}
fetch();
