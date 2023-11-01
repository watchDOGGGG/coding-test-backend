import app from './app'
import dotenv from 'dotenv'


dotenv.config()
const PORT = process.env.PORT || 3000

// Listen for the 'authenticate' event

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
 