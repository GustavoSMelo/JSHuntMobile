import styled from 'styled-components/native';

export const Container = styled.ScrollView`
    margin: 10px;
    padding: 35px;
`;

export const Title = styled.Text`
    font-size: 16;
    font-weight: bold;
    text-align: center;
    margin: 3px;
`;

export const Desc = styled.Text`
    color: #909090;
    margin: 5px;
    text-align: center;
`;

export const Btn = styled.TouchableOpacity`
    background-color: #da552f;
    align-items: center;
    justify-content: center;
    height: 45;
    border-radius: 10px;
    margin: 7px;
`;

export const TextBtn = styled.Text`
    color: #fff;
    align-items: center;
    justify-content: center;
`;
