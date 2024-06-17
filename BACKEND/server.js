// mongodb+srv://198038:T5suHQzzn4YHEfj7@startpageturn.ucsf2ei.mongodb.net/?
import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import cartRouter from "./routes/cartRoute.js"
import 'dotenv/config'
import orderRouter from "./routes/orderRoute.js"


//app config
const app = express()
const port = process.env.PORT || 3000

// middleware
app.use(express.json())
app.use(cors())



//db connect  

connectDB();

app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)






app.get('/', (req, res) => {
    res.send("api working")
})


app.listen(port, () => {
    console.log(`server is running at port ${port}`);
})

