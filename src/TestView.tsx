import React from 'react';
import {FlatList, StyleSheet, View} from "react-native";
import {V99Box, V99Inform, V99NotificationBar } from 'react-native-v99-component-kit';

export const TestView = ()=>{
    return <View style={styles.container}>
        {/*<V99Inform*/}
        {/*    marginBottom={10}*/}
        {/*    title={'Không nên chụp màn hình!'}*/}
        {/*    message={'Ký để xác minh bạn là chủ sở hữu của ví, hành động này không tốn phí.'}*/}
        {/*    type={'low'}>*/}
        {/*</V99Inform>*/}
        {/*<V99Inform*/}
        {/*    marginBottom={10}*/}
        {/*    message={'Ký để xác minh bạn là chủ sở hữu của ví, hành động này không tốn phí.'}*/}
        {/*    type={'low'}>*/}
        {/*</V99Inform>*/}
        {/*<V99Inform*/}
        {/*    marginBottom={10}*/}
        {/*    title={'Không nên chụp màn hình!'}*/}
        {/*    message={'Ký để xác minh bạn là chủ sở hữu của ví, hành động này không tốn phí.'}*/}
        {/*    type={'medium'}>*/}
        {/*</V99Inform>*/}
        {/*<V99Inform*/}
        {/*    marginBottom={10}*/}
        {/*    message={'Ký để xác minh bạn là chủ sở hữu của ví, hành động này không tốn phí.'}*/}
        {/*    type={'medium'}>*/}
        {/*</V99Inform>*/}

        <V99Inform
            marginBottom={10}
            title={'Không nên chụp màn hình!'}
            message={'Ký để xác minh bạn là chủ sở hữu của ví, hành động này không tốn phí.'}
            type={'high'}>
        </V99Inform>
        <V99Inform
            marginBottom={10}
            message={'Ký để xác minh bạn là chủ sở hữu của ví, hành động này không tốn phí.'}
            type={'high'}>
        </V99Inform>


        <V99NotificationBar
            marginBottom={16}
            content={'2 Some sample text that takes some space'}
            type={'normal'}>
        </V99NotificationBar>
        <V99NotificationBar
            content={'2 Some sample text that takes some space'}
            type={'warning'}>
        </V99NotificationBar>
    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1F2022',
        width: '100%',
        height: '100%',
        padding: 16
    },
});
