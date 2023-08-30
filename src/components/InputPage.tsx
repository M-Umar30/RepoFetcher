import { TextField } from "@mui/material";
import githublogo from "../assets/github-mark-white.png";
import "./styles.css";
import { useState } from "react";
import Button from '@mui/material/Button';
import { motion } from "framer-motion";


// Define the prop type for InputPage
type InputPageProps = {
  onUsernameSubmit: (username: string) => void;
};

const InputPage: React.FC<InputPageProps> = ({ onUsernameSubmit }) => {
  const [Username, setUsername] = useState("");

  const handleUsernameSubmit = () => {
    onUsernameSubmit(Username);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Initial animation properties
      animate={{ opacity: 1, y: 0 }} // Animation properties during entrance
      exit={{ opacity: 0, y: -50 }} // Animation properties during exit
      transition={{ duration: 1 }} // Transition duration
      className="input-page"
    >
    <div className="input-page">
      <div className="input-form">
        <div className="form-container">
            <img src={githublogo} alt="github logo" />
            <TextField
              label="Enter Github Username"
              variant="outlined"
              InputLabelProps={{
                style: { color: "lightgrey" },
              }}
              style={{ width: "300px" }}
              value={Username}
              onChange={(e) => setUsername(e.target.value)}
            />
        </div>
        <Button
            variant="contained"
            style={{ backgroundColor: "#2ea44f", color: "white", marginTop: "50px" }}
            onClick={handleUsernameSubmit}
            > Get Repositories</Button>
      </div>
    </div>
    </motion.div>
  );
}

export default InputPage;
