import React from 'react';
import {
    KeyboardAvoidingView,
    ScrollView,
    KeyboardAvoidingViewProps,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    View
} from 'react-native';

type Props = KeyboardAvoidingViewProps & { children: React.ReactNode };

const KeyboardAwareScrollView = (props: Props) => {
    const { children } = props;

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }} {...props}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{ flex: 1, width: '100%' }}>
                        {children}
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default KeyboardAwareScrollView;