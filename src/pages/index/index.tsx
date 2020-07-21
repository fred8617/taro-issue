import React, { Component } from "react";
import { View } from "@tarojs/components";
import { getSystemInfoSync } from "@tarojs/taro";
import { observer, inject } from "mobx-react";
import { AtModal } from "taro-ui";
import "./index.scss";

type PageStateProps = {
  store: {
    counterStore: {
      counter: number;
      increment: Function;
      decrement: Function;
      incrementAsync: Function;
    };
  };
};

interface Index {
  props: PageStateProps;
}

@inject("store")
@observer
class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  increment = () => {
    const { counterStore } = this.props.store;
    counterStore.increment();
  };

  decrement = () => {
    const { counterStore } = this.props.store;
    counterStore.decrement();
  };

  incrementAsync = () => {
    const { counterStore } = this.props.store;
    counterStore.incrementAsync();
  };

  render() {
    const {} = this.props.store;
    return (
      <View className="index">
        <View
          className="view"
        >
          333
        </View>
        <View
          style={{ height: getSystemInfoSync().screenHeight }}
          className="fixed-mask"
        >
          <View className="content">modal弹出后后面依旧可以滚动</View>
        </View>
        {new Array(100).fill(1).map((_, i) => (
          <View key={`g${i}`}>还是可以滚动{i}</View>
        ))}
      </View>
    );
  }
}

export default Index;
