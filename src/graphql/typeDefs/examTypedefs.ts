import { gql } from 'apollo-server';

const examTypedefs = gql`
  "representa un examen que las presonas puedes realizarse en tested.cl "
  type Exam  {  
    """Identificador único """
    id: ID!
    """Título del examen"""
    title: String
    """Valor que se cobra por tomar el examen """
    price: String
    """Texto detallado con indicaciones sobre el examen"""
    description: String
    """texto con la cantidad de tiempo que se demora la entrega del resultado"""
    resultTime: String
    """código utilizado en chile para identificar el examen"""
    code: String
    """Conjunto de palabras por las que se puede encontra el examen"""
    searchTags: [String]
    """Etiquetas que se muestran junto al título """
    tags: [String]
    """Razón por la que se toma el examen, sólo aplica a examenes covid"""
    reason: String
    """Categoría que sirve para agrupar los examanes"""
    category: String
    """Indica si está activo para que los clientes puedan solicitarlo"""
    enabled:Boolean
    """Indica si es un examen destacado"""
    highlight: Boolean
    """indica si es en ayuno"""
    isFast:Boolean
  }

  "representa los datos necesarios para gregar un nuevo examen"
  input InputExam  {
     """Valor que se cobra por tomar el examen """
    title: String
    """Valor que se cobra por tomar el examen """
    price: String
   """Texto detallado con indicaciones sobre el examen"""
   description: String
    """texto con la cantidad de tiempo que se demora la entrega del resultado"""
    resultTime: String
    """código utilizado en chile para identificar el examen"""
    code: String
    """Conjunto de palabras por las que se puede encontra el examen"""
    searchTags: [String]
    """Etiquetas que se muestran junto al título """
    tags: [String]
    """Razón por la que se toma el examen, sólo aplica a examenes covid"""
    reason: String
    """Categoría que sirve para agrupar los examanes"""
    category: String
    """Indica si está activo para que los clientes puedan solicitarlo"""
    enabled:Boolean
    """Indica si es un examen destacado"""
    highlight: Boolean
    """Indica si es en ayuno, debido que que de ello depende los horarios de atención"""
    isFast:Boolean
  }

  "conjunto de examanes en consultas páginadas"
  type ExamFeed {
    """lista con examanes"""
    examFeed: [Exam!]
    """Información de la siguiente página"""
    pageInfo: PageInfo!
    """cantidad total de examanes activos"""
    totalCount: Int!

  }

 

  extend type Query {
    "Obtiene todos los examanes que se encuentren activos"
    getAllExam: [Exam]
     "Obtiene todos los examanes que se encuentren activos, puede paginarse"
    getAllExamPaged("""Id del comienzo de la siguiente página"""cursor:ID,"""cantidad de elementos por página """limit:String): ExamFeed
    "permite buscar examanes por título, código, categoria y tags" 
    searchExam("texto a buscar" searchText:String): [Exam]
    "Obtiene un examen por ID"
    getExamById(id:ID!): Exam
    "Obtiene todos los examenes destacados"
    getAllHighlight: [Exam]

  }

  extend type Mutation {
    "Crea un nuevo examen"
    createExam("""Entidad examen que se guardará"""input:InputExam):Exam
    "Modifica un exama"
    updateExam("""Indentificador único del examen""" id:ID!,input:InputExam):Exam
    "Elimina un examen"
    removeExam("""Identificador único del examen""" id:ID!):Exam
  }
`;

export = examTypedefs;
