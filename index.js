const express = require('express')
const app = express()
const cors = require('cors')
// const jwt = require('jsonwebtoken');
require('dotenv').config()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
// task-mangemnt
// MOZYNYTOVwR0kZj3
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://medilab-hospital:tuHppndc1cYfN14A@cluster0.xm8ksdz.mongodb.net/?retryWrites=true&w=majority`;
// medilab-hospital
// tuHppndc1cYfN14A
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const appoinmentCollection = client.db("medilabDB").collection("appoinment");
    const usersCollection = client.db("medilabDB").collection("users");
    


    
   
    
  




    // / **** Get Operation Start ****************

    app.get('/appoinments' , async(req , res)=>{
        try {
            const result = await appoinmentCollection.find().toArray();
            res.send(result)
        } catch (error) {
            console.log(error);}})

    app.get('/users' , async(req , res)=>{
        try {
            const result = await usersCollection.find().toArray();
            res.send(result)
        } catch (error) {
            console.log(error);}})










    // app.get('/enrollment' , async(req , res)=>{
    //     try {
    //       const email = req.query.email;
    //               // console.log(email);
    //               const query = {email : email};
    //         const result = await enrollMentCollection.find(query).toArray();
    //         res.send(result)
    //     } catch (error) {
    //         console.log(error);}})


    //         app.get('/enroll', async(req,res)=>{
    //           try {
    //               const email = req.query.email;
    //               // console.log(email);
    //               const query = {email : email};
    //               // console.log(query);
                
    //               const result =await enrollCoursesCollection.find(query).toArray();
    //               // console.log(result);
    //               res.send(result)
    //           } catch (error) { console.log(error); }})

    //         app.get('/sales', async(req,res)=>{
    //           try {
                 
                
    








                                              //  Appoinment Post Method Start Here


app.post('/appoinment', async(req , res)=>{
   try {
    const appoinment = req.body;
    // console.log(appoinment);
    const result = await appoinmentCollection.insertOne(appoinment)
    res.send(result)
   } catch (error) {
    console.log(error);
   }
})
app.post('/users', async(req , res)=>{
   try {
    const appoinment = req.body;
    // console.log(appoinment);
    const result = await usersCollection.insertOne(appoinment)
    res.send(result)
   } catch (error) {
    console.log(error);
   }
})




// app.post('/complete', async(req , res)=>{
//    try {
//     const task = req.body;
//     const result = await CompleteCollection.insertOne(task)
//     res.send(result)
//    } catch (error) {
//     console.log(error);
//    }})

// app.post('/trash', async(req , res)=>{
//    try {
//     const trash = req.body;
//     const result = await TrashCollection.insertOne(trash)
//     res.send(result)
//    } catch (error) {
//     console.log(error);
//    }})

// app.post('/courses', async(req , res)=>{
//    try {
//     const course = req.body;
//     const result = await allcoursesCollection.insertOne(course)
//     res.send(result)
//    } catch (error) {
//     console.log(error);
//    }})


// // // /****** Post Operation End ****************

// //  // / **** Delete Operation Start ****************
//    app.delete('/enroll/:_id' , async(req,res)=>{
//   try {
//     const id = req.params._id;
//     console.log(id);
//     const query = {_id: new ObjectId (id)}
//     console.log(query);
//     const result = await enrollCoursesCollection.deleteOne(query)
//     res.send(result)
//   } catch (error) {
//     console.log(error);
//   }

//    })

//    app.delete('/courses/:_id' , async(req,res)=>{
//   try {
//     const id = req.params._id;
//     console.log(id);
//     const query = {_id: new ObjectId (id)}
//     console.log(query);
//     const result = await allcoursesCollection.deleteOne(query)
//     res.send(result)
//   } catch (error) {
//     console.log(error);
//   }

//    })





// // / **** Delete Operation end ****************

// // / **** Patch Operation Start ****************
// app.patch('/users/admin/:_id',verifyToken,verifyAdmin, async(req ,res)=>{
//     const id = req.params._id;
//     const filter = {_id : new ObjectId(id)};
//     const updatedDoc = {
//          $set:{
//             role:'teacher'
//          }
//     }
//     const result = await usersCollection.updateOne(filter, updatedDoc)
//     res.send(result)
// })
     



    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    try {
        res.send('Welcome To Medilab Hospital Server......')
    } catch (error) {
        console.log(error);
    }
 
})




app.listen(port, () => {
  console.log(` Medilab Hospital Server is Running: ${port}`)
})