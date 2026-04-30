import express from "express"
import morgan from "morgan"

const app = express()

app.use(morgan("dev"))
app.use(express.json())


app.get("/api/health", (req, res) => {
    res.status(200).json({
        status: "ok"
    })
})

app.get("/api/users", (req, res) => {
    res.status(200).json({
        users: [
            {
                id: 1,
                name: "John Doe"
            },
            {
                id: 2,
                name: "Jane Doe"
            },
            {
                id: 3,
                name: "Doe Doe"
            }
        ]
    })
})

app.listen(3000, () => {
    console.log(`Server running on port 3000`)
})