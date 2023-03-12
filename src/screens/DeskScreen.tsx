import { Input, TextArea, Text, KeyboardAvoidingView } from 'native-base';
import React from 'react';
import { SafeAreaView,  View, StyleSheet } from 'react-native';

const DeskScreen = () => {
    return (
        <SafeAreaView>
                <KeyboardAvoidingView behavior='padding'>
                <View style={styles.container}>
                    <Input
                        width='100%'
                        placeholder='Title'
                        flex={0}
                    />
                    <TextArea flex={1} width='100%' placeholder='content' autoCompleteType={null} scrollEnabled/>
                    <Text>Bottom</Text>
                </View>
                    </KeyboardAvoidingView >
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
    },
});

export default DeskScreen;
