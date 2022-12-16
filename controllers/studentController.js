const mysql=require('../database/db');


const getStudents= async (req,res,next)=>{

    try {
        console.log('controller');
        const students=await mysql.execute('SELECT * FROM students');
        res.status(200).send(students[0]);


    } catch (error) {
        res.status(400).send(error.message);
    }

}
const getStudentById=async (req,res,next)=>{
    try {
        const id=req.params.id;
        const student=await mysql.execute('SELECT * FROM students WHERE studentId=?',[id]);
        res.status(200).send(student[0]);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addStudent= async (req,res,next)=>{
    try {
        const data=req.body;
        const student=await mysql.execute(
            'insert into students(studentName,fatherName,email,phoneNumber,admissionTime,subjects,isActive) VALUES(?,?,?,?,?,?,?)',
            [
                data.studentName,
                data.fatherName,
                data.email,
                data.phoneNumber,
                data.admissionTime,
                data.subjects,
                data.isActive
            ]
        );
        res.status(200).send(student);

    } catch (error) {
        res.status(400).send(error.message);
        
    }
}
const updateStudent=async (req,res,next)=>{
    try {
        const id=req.params.id;
        const data=req.body;
        const updateStudent=await mysql.execute('update students set studentName=?,fatherName=?,email=?,phoneNumber=?,admissionTime=?,subjects=?,isActive=? where studentId=? ',
        [
            data.studentName,
                data.fatherName,
                data.email,
                data.phoneNumber,
                data.admissionTime,
                data.subjects,
                data.isActive,
                id
        ]
        );
        res.status(200).send(updateStudent);
    } catch (error) {
        res.status(400).send(error.message);
    }
}


const deleteStudent= async (req,res,next)=>{
    try {
        const id=req.params.id;
        const student=await mysql.execute('delete from students where studentId =?',[id]);
        res.status(200).send(student);  

    } catch (error) {
        res.status(400).send(error.message);
    }
}


module.exports={

    getStudents,
    getStudentById,
    addStudent,
    updateStudent,
    deleteStudent
}