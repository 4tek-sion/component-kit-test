import React, {useRef} from 'react';
import { StyleSheet, View} from "react-native";
import { V99BottomSheet, } from 'react-native-v99-bottom-sheet';
import {V99Box, V99Button, V99Text } from 'react-native-v99-component-kit';
import {Observer, useLocalObservable} from "mobx-react-lite";

export const TestView = ()=>{
    const defaultRef = useRef()
    const rowRef = useRef()
    const columnRef = useRef()
    const searchRef = useRef()

    const state = useLocalObservable(() => ({
        value: '',
        setValue: (payload: string) => (state.value = payload),
    }))

    const ContentView = () => {
        return  <V99Box center backgroundColor={'#FFFFFF10'} fill>
            <V99Text>This is content</V99Text>
        </V99Box>
    }

    return <View style={styles.container}>
        <V99Button marginBottom={16} text={'Default template'} onPress={()=>{
            defaultRef.current?.snapTo?.(0)
        }}/>
        <V99Button marginBottom={16} text={'hButton template'} onPress={()=>{
            rowRef.current?.snapTo?.(0)
        }}/>
        <V99Button marginBottom={16} text={'vButton template'} onPress={()=>{
            columnRef.current?.snapTo?.(0)
        }}/>
        <V99Button marginBottom={16} text={'Search template'} onPress={()=>{
            searchRef.current?.snapTo?.(0)
        }}/>


        <V99BottomSheet
            title={'Bottomsheet'}
            ref={defaultRef}
            snapPoints={[500]}
            filledButtonTitle={'button'}
            outlineButtonTitle={'button'}
            pattern={'default'}>
            <ContentView/>
        </V99BottomSheet>

        <V99BottomSheet
            title={'Bottomsheet'}
            ref={columnRef}
            snapPoints={[500]}
            filledButtonTitle={'Ok'}
            onPressFilledButton={()=>{
                console.log('On Press Ok')
            }}
            outlineButtonTitle={'Cancel'}
            onPressOutlineButton={()=>{
                console.log('On Press Cancel')
            }}
            pattern={'vButton'}>
            <ContentView/>
        </V99BottomSheet>

        <V99BottomSheet
            title={'Bottomsheet'}
            ref={rowRef}
            snapPoints={[500]}
            filledButtonTitle={'Ok'}
            outlineButtonTitle={'cancel'}
            onPressFilledButton={()=>{
                console.log('On press Ok')
            }}
            onPressOutlineButton={()=>{
                console.log('On press cancel')
            }}
            pattern={'hButton'}>
            <ContentView/>
        </V99BottomSheet>

        <Observer>
            {()=>
                <V99BottomSheet
                    title={'Bottomsheet'}
                    ref={searchRef}
                    snapPoints={[500]}
                    filledButtonTitle={'button'}
                    outlineButtonTitle={'button'}
                    pattern={'search'}
                    searchPlaceHolder={'Hinted search text'}
                    searchValue={state.value}
                    onSearch={state.setValue}
                >
                    <ContentView/>
                </V99BottomSheet>
            }
        </Observer>
    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
        padding: 16
    },
});
