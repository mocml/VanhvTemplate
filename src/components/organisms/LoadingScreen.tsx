import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Modal, ActivityIndicator } from 'react-native-paper'
import Colors from '@/constants/Colors'

const LoadingScreen = ({
    visible = false,
    onDismiss = () => { },
}: {
    visible?: boolean;
    onDismiss?: () => void;
}) => {
    return (
        <Modal
            visible={visible}
            dismissable={false}
            onDismiss={onDismiss}
        >
            <View style={styles.loadingWrap}>
                <ActivityIndicator
                    size={35}
                    color={Colors.primary}
                />
            </View>
        </Modal>
    )
}

export default LoadingScreen;

const styles = StyleSheet.create({
    loadingWrap: {
        backgroundColor: '#FFFFFF',
        margin: 'auto',
        height: 70,
        width: 70,
        borderRadius: 32,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center'
    }
})