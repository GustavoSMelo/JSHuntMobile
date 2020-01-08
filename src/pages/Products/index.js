import React from 'react';
import { WebView } from 'react-native-webview';

class Product extends React.Component {
    render() {
        console.log(this.props.navigation);
        return (
            <WebView
                source={{ uri: this.props.navigation.state.params.product.url }}
            />
        );
    }
}

Product.navigationOptions = () => {
    title: this.props.navigation.state.params.product.title;
};

export default Product;
