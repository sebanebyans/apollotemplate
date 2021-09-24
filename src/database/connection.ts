import moongose from 'mongoose';

export const connection = async () => {
    try{
        await moongose.connect(process.env.MONGO_DB!);

    }catch(error){
        throw error;
    }

}