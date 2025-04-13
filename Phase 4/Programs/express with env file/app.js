let express = require('express');
let dotenv = require('dotenv');


dotenv.config();

let app = express();

let PORT = process.env.PORT || 3000;

console.log(process.env.MONGO_URI);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});




