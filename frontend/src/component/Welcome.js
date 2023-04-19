import { Grid, Typography } from "@material-ui/core";
import Typed from "react-typed";
import "../App.css";
import { Fragment } from "react";

const Welcome = (props) => {
    return ( <
        Fragment className = "body" >
        <
        Grid className = "body"
        container item direction = "column"
        alignItems = "center"
        justify = "center"
        style = {
            { padding: "30px", minHeight: "93vh" } } >
        <
        Grid item >
        <
        Typography variant = "h2" > Welcome to Wazafni < /Typography>{" "} <
        /Grid>{" "} <
        Typed className = "TYPING"
        strings = {
            [
                "Find your job in Wazafni",
                "Best website for employment",
                "Get job in the most companies",
            ]
        }
        typeSpeed = { 150 }
        backSpeed = { 100 }
        loop /
        >
        <
        /Grid>{" "} <
        /Fragment>
    );
};

export const ErrorPage = (props) => {
    return ( <
        Grid container item direction = "column"
        alignItems = "center"
        justify = "center"
        style = {
            { padding: "30px", minHeight: "93vh" } } >
        <
        Grid item >
        <
        Typography variant = "h2" > Error 404 < /Typography>{" "} <
        /Grid>{" "} <
        /Grid>
    );
};

export default Welcome;