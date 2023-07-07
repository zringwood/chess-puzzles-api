//Server imports 
const express = require('express');
const app = express();
const port = process.env.PORT || process.argv[2] || 8080;
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');

app.use(cors());
const examplePuzzles = [{
    id: "1",
    Event: "Deutsche Schachzeitung",
    Site: "?",
    Date: "1968.03.??",
    Round: "-",
    White: "9 AUTHORS",
    Black: "#2",
    Result: "1-0",
    FEN: "8/8/8/8/1Q6/1K6/8/2Nk4 w - - 0 1",
    SetUp: "1",
    Moves: ["1. Qa5 Kxc1", "2. Qe1# 1-0"]
}, {
    id: "2",
    Event: "Illustrated London News",
    Site: "?",
    Date: "1849.??.??",
    Round: "-",
    White: "A. B. S.",
    Black: "#2",
    Result: "1-0",
    FEN: "8/8/5R2/8/2P1k3/2K5/5P2/2B5 w - - 0 1",
    SetUp: "1",

    Moves: ["1. Bb2 Ke5", "2. Kd3# 1-0"]
}, {
    id: "3",
    Event: "The British Chess Magazine",
    Site: "?",
    Date: "1882.??.??",
    Round: "-",
    White: "A. L. S.",
    Black: "#2",
    Result: "1-0",
    FEN: "2b4Q/4p2K/4pr2/2P1k3/2P2R2/3P3p/2n4B/8 w - - 0 1",
    SetUp: "1",
    Moves: ["1. Kg7 Nd4 1-0"]
}
];

app.get("/", (req, res) => {
    return res.sendStatus(200);
})
app.get("/:id", (req, res) => {
    let id = req.params.id;
   
    let puzzle = examplePuzzles.find(element => {
        return element.id === id
    })
    if(puzzle){
        return res.status(200).send(puzzle);
    } return res.status(404).send("No puzzle with that ID found");
})
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
