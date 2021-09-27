import moongose from 'mongoose';

export const connection = async () => {
    try{
        await moongose.connect(process.env.MONGO_DB! || 'mongodb+srv://admin:FqKLbBXJJ83Ltmvt@cluster0.lumsm.mongodb.net/exam');

    }catch(error){
        throw error;
    }

}