// import { toast } from "react-toastify";
const mongoose = require("mongoose");
const Document = require("./Document");
// const Diary = require("")
const axios = require('axios');

var Diary = require('../../api/models/diary.js');

var { MongoClient } = require('mongodb');

var mongo = new MongoClient("mongodb+srv://pateldhruvr:s!hzk*6z7k2rRtT@cluster0.olpizhz.mongodb.net/?retryWrites=true&w=majority");
var myDb = mongo.db("test")

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4
}

mongoose.connect('mongodb://localhost:27017/WebDesign', options)
.then(()=> {
    console.log("Connected to database");
})
.catch(err => {
    console.log(err);
})

const io = require('socket.io')(3001, {  /*port where we want to run it: 3001*/
    /*cross origin request support: allows us to make request from different url to a different one */
    cors: {
        origin: "http://localhost:3000",            /*where our actual client is*/
        methods: ['GET', 'POST']    /*request type */
    }
})

//creating default value
const defaultValue = "";

//everytime our client connects it is going to run this io connection
io.on("connection", socket => {
    socket.on("get-document", async documentId => {
        console.log('getDocument is called!');
        const document = await findOrCreateDocument(documentId);
            //putting socket into its own room and that room can talk based on the roomid i.e. documentid
            socket.join(documentId);
            socket.emit("load-document", document.data);
            
            socket.on('send-changes', async delta => {
            //getting each and every character what we type in the text editor
            //prints each character that we enter
            console.log(delta)
            //changes sent from client
            //function name- receive-changes and delta is the changes
            //broadcast the message to everyone else except ourself that the changes have been made
            socket.broadcast.to(documentId).emit("receive-changes", delta)
            console.log('document updatd!!!!')


            // const res = await axios({
            //     method: 'get',
            //     url: "https://twinword-sentiment-analysis.p.rapidapi.com/analyze/", //Endpoint goes here,
            //     params:{
            //         text: 'great value in its price range!'
            //     },
            //     headers: {
            //         'X-RapidAPI-Key': '5b6c06fa0amsh519b2e9eb26f0b1p13f308jsn1e3fdb298544',
            //         'X-RapidAPI-Host': 'twinword-sentiment-analysis.p.rapidapi.com'
            //       }
            // });

            // console.log(res);

        })
        //console.log("connected");
        
        //save document
        socket.on("save-document", async data => {
            console.log('save is called!!!')
            var email = "prayush@hotmail.com";

            console.log(data.ops[0].insert);
            const res = await axios({
                method: 'get',
                url: "https://twinword-sentiment-analysis.p.rapidapi.com/analyze/", //Endpoint goes here,
                params:{
                    text: data.ops[0].insert
                },
                headers: {
                    'X-RapidAPI-Key': '5b6c06fa0amsh519b2e9eb26f0b1p13f308jsn1e3fdb298544',
                    'X-RapidAPI-Host': 'twinword-sentiment-analysis.p.rapidapi.com'
                  }
            });

            console.log('api result');
            console.log(res.data.type);
            
            await findAndUpdateDocument(email, data);
        })
    })
})

function getTodaysDate(params) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;
    return today;
}

//whenever I get a document here, I wanna wither find a document by documentid or create it from scratch
async function findOrCreateDocument(id){
    console.log(id);
    if(id==null) return;

    
    const res = await axios({
        method: 'get',
        url: 'http://localhost:8080/diary/get',
        params: {
            email: "prayush@hotmail.com",
            date: getTodaysDate(),
        }
    });


    if (res.data.length === 0) {
        console.log('data is blank')
        var createdDiary = await myDb.collection("diary").insertOne({
            _id: id,
            data: { document: id,
                    diaryResult: "",
                    date: getTodaysDate(),
                    email: "prayush@hotmail.com"
                }
        });
        console.log(createdDiary);
        return new Document({"_id": id, "data": defaultValue})
    }
    return new Document({"_id":res.data[0]._id, "data": res.data[0].data.diaryResult})
}

async function findAndUpdateDocument(email, data) {
    await myDb.collection("diary").updateOne(
        {"data.email" : email, "data.date": getTodaysDate()},
        {$set: { "data.diaryResult" : data}})
}