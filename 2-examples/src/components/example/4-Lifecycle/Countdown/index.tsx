import React, { Component } from 'react'

type Props = {

}

type State = {
    currentSecond: number;
}

class index extends Component<Props, State> {
    MAX_SECOND: number;
    timer: ReturnType<typeof setInterval> | undefined;
    constructor(props: Props) {
        super(props);

        this.MAX_SECOND = 100;

        this.state = {
            currentSecond: this.MAX_SECOND,
        };
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState((prevState: State) => ({
                currentSecond: prevState.currentSecond - 1,
            }));
        }, 1000);
    }
    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }
    componentDidUpdate(prevProps: Props) {
        console.log("Componet DID UPDATE");
    }
    render() {
        const { currentSecond } = this.state;
        // const currentSecond = this.state.currentSecond
        return (
            <div className={`w-50 m-auto mt-3 text-center`}>{currentSecond}</div>
        );
    }

}

export default index