import examModel from '../database/models/exam';


export  const create = async (exam: any)  => {
    try{
        const newExam = new examModel(exam);
        const result = await newExam.save();
        return result;
        
    }catch(error){
        throw error;
    }
}

export const list = async(pagination:any,limit:number) => {
    try {    
       const query = { ...{enabled:true},...pagination };
       
      const b = await  examModel.aggregate([
        {
            $search: {
              "text": {
                "path": "title",
                "query": "jona"
              }
            }
          },
          {
            $project: {
              "_id": 0,
              "title": 1,
              score: { $meta: "searchScore" }
            }
          }
       ]);

       console.log(b);
       
       let exams=  await examModel.find(query).sort({_id: -1}).limit(limit+1);
       let totalCount = await examModel.find(query).count();
       const hasNextPage = exams.length > limit;
       exams = hasNextPage ? exams.slice(0,-1): exams;
       const a= {
        userFeed: exams,
        totalCount: totalCount,
        pageInfo: {
            nextPageCursor : hasNextPage? exams[exams.length-1].id: null,
            hasNextPage:hasNextPage
        }
    };   

       return a;
    } catch (error) {     
        throw error;
        
    }
}


export const listHighlight = async() => {
    try {       
       const list=  await examModel.find({'enabled':true, highlight: true });     
       return list;
    } catch (error) {     
        throw error;
        
    }
}

export const update = async(id:any,input:any) => {
    try {       
       const list=  await examModel.findByIdAndUpdate(id,{...input},{new:true});     
       return list;
    } catch (error) {     
        throw error;
        
    }
}

export const remove = async(id:any) => {
    try {       
       const list=  await examModel.findByIdAndUpdate(id,{enabled:false},{new:true});     
       return list;
    } catch (error) {     
        throw error;
        
    }
}

export const findById = async(id:any)  => {
    try {       
       const exam=  await examModel.findOne({enabled :true, _id: id});     
       return exam;
    } catch (error) {     
        throw error;        
    }
}


