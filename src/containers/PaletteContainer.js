import React, { Component } from 'react';
import { connect } from 'react-redux';
import Palette from "../components/Palette";
import {changeColor} from "../store/modules/counter";

class PaletteContainer extends Component {
    handleSelect = color => {
        const { changeColor } = this.props;
        console.log('what', color);
        changeColor(color);
    };
    render() {
        const {color} = this.props;
        return (
            <Palette onSelect={this.handleSelect} slected={color}/>
        );
    }
}

// store state to props
const mapStateToProps = state => ({
    color: state.counter.get('color'),
});

// action function to props
const mapDispatchToProps = dispatch => ({
    changeColor: color => dispatch(changeColor(color)),
});

// 컴포넌트에 리덕스 스토어를 연동해줄 때에는 connect 함수 사용
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PaletteContainer);