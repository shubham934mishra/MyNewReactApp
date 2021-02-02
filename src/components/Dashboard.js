//@flow
import React, { Component } from 'react';
import { View, Image } from 'react-native';
import SwipeButton from 'rn-swipe-button';
import { connect } from 'react-redux';
import { styles } from '../utilities/style';
import { NAVIGATION_PROFILE } from '../navigations/routes';
import  CustomText from '../globalComponents/CustomText';
import { AppButton } from '../globalComponents/CustomButton';
import COLORS from '../utilities/Colors';

const DiamondImage = () => <Image resizeMode={'cover'} source={require('../assets/images/swipe_icon.png')} style={styles.swipeIcon} />;

const {secondary,primary,darkGrey,white} = COLORS;


type Props = {
    onGuestPress: Function,
    navigation: { navigate: Function },
    userName: Object, 

};
type States = {
};

class Dashboard extends Component<Props, States> {
    onGuestPress = () => {
        this.props.navigation.navigate(NAVIGATION_PROFILE);
    }

    render() {
        return (
            <View style={styles.container}>
               <CustomText>Welcome,
                 {this.props.userName}
                </CustomText>
                <View style = {styles.buttonContainerView}>
                <AppButton
                    onPress={this.onGuestPress}
                    stylee={styles.appSecondButtonContainer}
                    title='Press Me'
                    testID='DashBoard_button1'
                 />

                <AppButton
                    onPress={this.onGuestPress}
                    stylee={styles.appButtonContainer}
                    title='Press Me'
                    testID='DashBoard_button2'
                />
                
                <AppButton
                    onPress={this.onGuestPress}
                    stylee={styles.submitButtonStyle}
                    title='Press Me'
                    testID='DashBoard_button3'
                />
            
                <SwipeButton
                   containerStyles={
                    {...styles.swipeBox}
                }
                 disabled={false}
                    height={45}
                    onSwipeSuccess={() => {
                        this.onGuestPress();
                    }}
                    railBackgroundColor={secondary}
                    railBorderColor={darkGrey}
                    swipeSuccessThreshold={70}
                    shouldResetAfterSuccess={true}
                    resetAfterSuccessAnimDelay={1000}
                    railFillBackgroundColor={secondary}
                    railFillBorderColor={secondary}
                    thumbIconComponent={DiamondImage}
                    thumbIconStyles={{...styles.thumbIconContainer,...styles.thumbIconContainer}}
                    thumbIconBackgroundColor={primary}
                    thumbIconBorderColor={primary}
                    title="Slide me to Continue"
                    titleColor={white}
                />
                </View>
                </View>
            
        );
    }


}


const mapStateToProps = (state: any) => {
    const userName = state.LoginReducer.userName;
    return {
        userName
    };
};

export default connect(mapStateToProps, null)(Dashboard);
