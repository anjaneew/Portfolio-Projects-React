import { useState } from "react";
import { Alert } from "@mui/material";

type AlertType = {
    severity: string;
    title: string;
    icon: string;
}

const Calculator = () => {

  const [score, setScore] = useState<string>("");
  const [totalScore, setTotalScore] = useState<number>();
  const [calculatedScore, setCalculatedScore] = useState<number| null>(null);
  const [alertDetails, setAlertDetails] = useState<AlertType>({
    severity: "",
    title: "",
    icon: "false"
  });

  const handleScoreChange = (e) => {
    setScore(e.target.value);
    console.log(score);
  }

  const calculateScore = (e):number => {
    e.preventDefault()
    const markList = score.replace(" ", "").split(",");
    console.log(markList);
    let total = 0;
    markList.map((mark) => {total = Number(mark) + total});
    console.log(total);
    setCalculatedScore(total);
    setScore("");
    console.log(calculatedScore !== null ? ("Success!. Generating the grades shortly...") : "");
    handleAlert(total);
     return total;
  }

  const handleTotalScoreChange = (e) => {
    const totalScore = Number(e.target.value);
    setTotalScore(totalScore);
    console.log("The test is out of "+ totalScore)
    return totalScore;
  }

  const handleAlert = (calculatedScore: number) => {
    switch(isNaN(calculatedScore)) {
      case true: 
        setAlertDetails({
          severity: "warning",
          title: "Not a valid number!",
          icon: "false",
        });
        break;
      case false:
        setAlertDetails({
          severity: "success",
          title: "Success!. Generating the grades shortly...",
          icon: ""
        });
        break;
      default:
          setAlertDetails({
            severity: "",
            title: "",
            icon: "",
          });
    }
  }

  return (
    <form>
      <h3>Enter the marks of sections:</h3>
      <p>(multiple marks seperated by ',')</p>
      <input 
        type="text" 
        value={score} 
        onChange={(e) => handleScoreChange(e)}
        name="scoreInput"
        placeholder="enter the test scores"
      /> <br/>
      <input 
        type="number"
        value={totalScore}
        onChange={(e) => handleTotalScoreChange(e)}
        name="totalInput"
        placeholder="enter the total test score"
      /><br/><br/>
      <button type="submit" onClick={(e) => calculateScore(e)}>Submit</button>
      {calculatedScore !== null ? (<Alert security={alertDetails.severity} >{alertDetails.title}</Alert>) : ""}
      
    </form>
  );
};

export default Calculator;