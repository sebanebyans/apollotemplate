export interface IExam {
    title:string,
    price:number,
    description:string,
    resultTime:string,
    code:string,
    searchTags?:[string],
    tags?:[string],
    reason?:string,
    category?:string,
    enabled:boolean,
    highlight: boolean
    isFast:boolean
}
