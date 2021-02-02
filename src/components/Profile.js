//@flow
import React, { Component } from 'react';
import { View, NativeModules } from 'react-native';
import { connect } from 'react-redux';
import { styles } from '../utilities/style';
import CustomText from '../globalComponents/CustomText';


type Props = {
    onGuestPress: Function,
    navigation: { navigate: Function },
    userName: '',
    NativeModules:{ Device : {getDeviceName: Function}}

};
type States = {
    device: string,
};


class Profile extends Component<Props, States> {
    state = {
        device: ''
    }

    componentDidMount() {
         NativeModules.Device.getDeviceName((err, name) => {
            this.setState({ device: name });
        });
    }


    render() {
        return (
            <View style={[styles.container]}>
                <CustomText> Welcome,
                 {this.props.userName}
                </CustomText>

                <View style={styles.container}>
                    <CustomText style={styles.nativeText}>
                        User Name: {this.props.userName}
                    </CustomText>
                    <CustomText style={styles.nativeText}>
                        Device: {this.state.device}
                    </CustomText>
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const userName = state.LoginReducer.userName;
    return {
        userName
    };
};

export default connect(mapStateToProps, null)(Profile);

