// displays the github logo on top center and has UserInput below it with a button
import { TextField } from "@mui/material";
import githublogo from "../assets/github-mark-white.png";
import "./styles.css";

function InputPage() {
  return (
    <div className="input-page">
      <div className="input-form">
        <img src={githublogo} alt="github logo" />
        {
          // add a textfield with color changed to light grey
        }
        <TextField

            label="Enter Github Username"
            variant="outlined"
            InputLabelProps={{
                style: { color: "lightgrey" }
            }}
            style={{ width: "300px" }}
            />
      </div>
    </div>
  );
}

export default InputPage;
