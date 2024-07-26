import React, {Component} from "react";
import { Layout } from "antd";

const {Footer} = Layout;

class AppFooter extends Component {
    render() {
        return (
            <Footer style={{ textAlign: 'center'}}>
                Completed by Tsvetoslav Konishev based on the React tutorial of World of Ivo, special thanks to him!
            </Footer>
        )
    }
}

export default AppFooter;