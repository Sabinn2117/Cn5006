const dateofBirth= "21/02/2007"
const getStudentName = () =>
{
    return "Sabin"
}
const getCampusName = () => {return ("UEL Campus")}
exports.getName=getStudentName
exports.dob=dateofBirth
exports.Location=getCampusName
exports.Studentgrade=(marks)=>{
    if(marks>50 && marks< 50) return ("B grade")
        else return ("A grade")
}
