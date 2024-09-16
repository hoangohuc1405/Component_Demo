import React from "react";
import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";

export class Home extends React.Component {
    render() {
        return (
            <>
                <h1>Welcome to Home Component</h1>
                <Header></Header>
                <Content></Content>
                <Footer></Footer>
            </>
        )
    }
}
