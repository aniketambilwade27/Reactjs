function Student({name="yourname", age=0, isstudent=false}){
return (

    <div className="student">
     Name: {name}
        <br />
        Age:{age}
        <br />
        Isstudent: {isstudent? "yes" : "false"}
    </div>

);
}
Student.defaultProps={
    name: "yourname",
    age:0,
    isstudent:false
};

export default Student