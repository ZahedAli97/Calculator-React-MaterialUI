import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Delete from "@material-ui/icons/DeleteRounded";
import ArrowBack from "@material-ui/icons/ArrowBack";
import DehazeSharp from "@material-ui/icons/DehazeSharp";
import Button from "@material-ui/core/Button";
import CachedSharp from "@material-ui/icons/CachedSharp";

import { createMuiTheme } from "@material-ui/core/styles";
import { orange, cyan, red } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});
// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       light: "#757ce8",
//       main: "#3f50b5",
//       dark: "#002884",
//       contrastText: "#fff"
//     },
//     secondary: {
//       light: "#ff7961",
//       main: "#f44336",
//       dark: "#ba000d",
//       contrastText: "#000"
//     }
//   }
// });
const styles = {
  rows: {
    alignItems: "center"
  },
  firstbutton: {
    color: "white",
    fontSize: 20,
    marginRight: "25px",
    marginLeft: "50px",
    maxWidth: "230px",
    maxHeight: "50px",
    minWidth: "230px",
    minHeight: "50px"
  },
  button: {
    color: "white",
    fontSize: 20,
    margin: "0px 25px",
    maxWidth: "230px",
    maxHeight: "50px",
    minWidth: "230px",
    minHeight: "50px"
  },
  buttonOption: {
    color: "white",
    textAlign: "center",
    fontSize: 30,
    margin: "0px 25px",
    maxWidth: "230px",
    maxHeight: "50px",
    minWidth: "230px",
    minHeight: "50px"
  },
  card: {
    float: "right"
  },
  div: {
    textAlign: "right",
    // maxWidth: "230px",
    maxHeight: "30px",
    // minWidth: "230px",
    minHeight: "30px",
    fontSize: 30
  }
};

export class Calculator extends Component {
  state = {
    msg: "",
    ans: "",
    option: "",
    prevValue: "",
    toggle: false,
    color: theme
  };
  options = value => {
    const { msg } = this.state;
    this.setState({ option: value });
    this.setState({ prevValue: msg });
    this.setState({ msg: "" });
  };
  equalize = () => {
    const { msg } = this.state;
    const { option } = this.state;
    const { prevValue } = this.state;
    const { toggle } = this.state;

    var store = null;
    switch (option) {
      case "+":
        store = Number(msg) + Number(prevValue);
        this.setState({ msg: store });
        break;
      case "-":
        store = Number(msg) - Number(prevValue);
        this.setState({ msg: store });
        break;
      case "*":
        store = Number(msg) * Number(prevValue);
        this.setState({ msg: store });
        break;
      case "/":
        store = Number(prevValue) / Number(msg);
        this.setState({ msg: store });
        break;
      default:
        break;
    }
    this.setState({ toggle: !toggle });
    this.setState({ ans: store });
  };
  backSpace = () => {
    const { msg } = this.state;
    const strmsg = String(msg);
    const posoflastelement = strmsg.length - 1;
    const scr = strmsg.slice(0, posoflastelement);
    this.setState({ msg: scr });
  };
  reset = () => {
    this.setState({ msg: "" });
    this.setState({ ans: "" });
    this.setState({ option: "" });
    this.setState({ prevValue: "" });
  };
  displayElements = value => {
    const { msg } = this.state;
    const { ans } = this.state;
    const { toggle } = this.state;

    if (value == "ans") {
      this.setState({ msg: ans });
    } else if (toggle) {
      this.setState({ msg: value });
      this.setState({ toggle: !toggle });
    } else {
      this.setState({ msg: msg + String(value) });
    }
  };
  render() {
    const { msg } = this.state;
    const { color } = this.state;
    return (
      <MuiThemeProvider theme={color}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                <CachedSharp
                  color="secondary"
                  fontSize="large"
                  onClick={() => {
                    this.reset();
                  }}
                />
                <Delete
                  fontSize="large"
                  color="secondary"
                  onClick={() => {
                    this.setState({ msg: "" });
                  }}
                />
                <ArrowBack
                  color="secondary"
                  fontSize="large"
                  onClick={() => {
                    this.backSpace();
                  }}
                />

                <span>
                  <DehazeSharp
                    style={styles.card}
                    color="secondary"
                    fontSize="large"
                  />
                </span>
                <Card>
                  <CardContent style={styles.div}>{msg}</CardContent>
                </Card>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Card>
                  <CardContent>
                    <div style={styles.rows}>
                      <Button
                        style={styles.firstbutton}
                        variant="outlined"
                        size="large"
                        onClick={() => {
                          this.displayElements(1);
                        }}
                      >
                        1
                      </Button>
                      <Button
                        style={styles.button}
                        variant="outlined"
                        size="large"
                        onClick={() => {
                          this.displayElements(2);
                        }}
                      >
                        2
                      </Button>
                      <Button
                        style={styles.button}
                        variant="outlined"
                        size="large"
                        onClick={() => {
                          this.displayElements(3);
                        }}
                      >
                        3
                      </Button>
                      <Button
                        style={styles.buttonOption}
                        variant="outlined"
                        size="large"
                        onClick={() => {
                          this.options("+");
                        }}
                      >
                        +
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Card>
                  <CardContent>
                    <div style={styles.rows}>
                      <Button
                        style={styles.firstbutton}
                        variant="outlined"
                        size="large"
                        onClick={() => {
                          this.displayElements(4);
                        }}
                      >
                        4
                      </Button>
                      <Button
                        style={styles.button}
                        variant="outlined"
                        size="large"
                        onClick={() => {
                          this.displayElements(5);
                        }}
                      >
                        5
                      </Button>
                      <Button
                        style={styles.button}
                        variant="outlined"
                        size="large"
                        onClick={() => {
                          this.displayElements(6);
                        }}
                      >
                        6
                      </Button>
                      <Button
                        style={styles.buttonOption}
                        variant="outlined"
                        size="large"
                        onClick={() => {
                          this.options("-");
                        }}
                      >
                        -
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Card>
                  <CardContent>
                    <div style={styles.rows}>
                      <Button
                        style={styles.firstbutton}
                        variant="outlined"
                        size="large"
                        onClick={() => {
                          this.displayElements(7);
                        }}
                      >
                        7
                      </Button>
                      <Button
                        style={styles.button}
                        variant="outlined"
                        size="large"
                        onClick={() => {
                          this.displayElements(8);
                        }}
                      >
                        8
                      </Button>
                      <Button
                        style={styles.button}
                        variant="outlined"
                        size="large"
                        onClick={() => {
                          this.displayElements(9);
                        }}
                      >
                        9
                      </Button>
                      <Button
                        style={styles.buttonOption}
                        variant="outlined"
                        size="large"
                        onClick={() => {
                          this.options("*");
                        }}
                      >
                        *
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Card>
                  <CardContent>
                    <div style={styles.rows}>
                      <Button
                        style={styles.firstbutton}
                        variant="outlined"
                        size="large"
                        onClick={() => {
                          this.displayElements(0);
                        }}
                      >
                        0
                      </Button>
                      <Button
                        style={styles.buttonOption}
                        variant="outlined"
                        size="large"
                        onClick={() => {
                          this.options("/");
                        }}
                      >
                        /
                      </Button>
                      <Button
                        style={styles.button}
                        variant="outlined"
                        size="large"
                        onClick={() => {
                          this.displayElements("ans");
                        }}
                      >
                        ANS
                      </Button>
                      <Button
                        style={styles.buttonOption}
                        variant="outlined"
                        size="large"
                        onClick={() => {
                          this.equalize();
                        }}
                      >
                        =
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </MuiThemeProvider>
    );
  }
}

export default Calculator;
