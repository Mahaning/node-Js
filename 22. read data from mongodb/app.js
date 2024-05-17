const dbConection=require('./mongodb')

// ++++++ metehod1

// dbConection().then((resp)=>{
//     resp.find().toArray().then((data)=>{
//         console.warn(data)
//     });
// })
// dbConection();
// ========method 2

const main= async  ()=>{
    let data= await dbConection();
    data=await data.find().toArray();
    console.warn(data);
}

main()
