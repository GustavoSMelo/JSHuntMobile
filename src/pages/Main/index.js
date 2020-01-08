import React from 'react';
import {
    View,
    Text,
    StatusBar,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { api } from '../../container/container';
import { Container, Btn, Desc, TextBtn, Title } from './styled';

class Main extends React.Component {
    static navigationOptions = {
        title: 'JSHunt',
        headerStyle: {
            backgroundColor: '#DA552F',
        },
        headerTintColor: '#fff',
    };

    constructor(props) {
        super(props);

        this.state = {
            docs: [],
            page: 1,
            productInfo: {},
        };
    }

    loadProducts = async (page = 1) => {
        const info = await api.get(`/products?page=${page}`);

        const { docs, ...productInfo } = info.data;
        await this.setState({
            docs: this.state.docs.concat(docs),
            productInfo,
            page,
        });
    };

    componentDidMount() {
        this.loadProducts();
    }

    renderItem = ({ item }) => (
        <Container>
            <Title>{item.title}</Title>
            <Desc>{item.description}</Desc>

            <Btn
                onPress={() =>
                    this.props.navigation.navigate('Product', { product: item })
                }
            >
                <TextBtn>Visualizar</TextBtn>
            </Btn>
        </Container>
    );

    loadMore = async () => {
        if (this.state.page === this.state.productInfo.pages) {
            return;
        }

        await this.setState({ page: this.state.page + 1 });

        this.loadProducts(this.state.page);
    };

    render() {
        return (
            <View>
                <StatusBar hidden={true} />
                <FlatList
                    data={this.state.docs}
                    keyExtractor={item => item._id}
                    renderItem={this.renderItem}
                    onEndReached={this.loadMore}
                    onEndReachedThreshold={0.1}
                />
            </View>
        );
    }
}

export default Main;
