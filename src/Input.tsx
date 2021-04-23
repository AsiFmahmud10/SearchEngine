import { Button } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import MicIcon from "@material-ui/icons/Mic";
import { useState } from "react";
import "./Input.css";

export interface InputProps {
  hideButtons?: boolean;
}

const Input: React.FC<InputProps> = ({ hideButtons }) => {
  const [searchValue, setsearchValue] = useState("");
  const _button = (
    <>
      <Button variant="outlined" type="submit">
        {" "}
        GOOGLE SEARCH
      </Button>
      <Button variant="outlined">I'M FEELING LUCKY</Button>
    </>
  );

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(2);
        }}
      >
        <div className="input__container">
          <Search />
          <input
            type="text"
            value={searchValue}
            onChange={(e) => {
              setsearchValue(e.target.value);
            }}
          />
          <MicIcon />
        </div>

        {!hideButtons ? (
          <div className="input__button">{_button}</div>
        ) : ( <div className="input__button _hidden">{_button}</div>)}
      </form>
    </>
  );
};

export default Input;
