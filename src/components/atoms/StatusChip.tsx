import { StyleSheet, TextStyle, View, ViewStyle } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import Text from './Text'
import Icon from './Icon'
export type ApprovalStatus = 'process' | 'pending' | 'approved' | 'rejected'
export interface IApprovalStatusChip {
    status?: ApprovalStatus
    labelStyle?: TextStyle,
    containerStyle?: ViewStyle
    isOutline?: boolean
}
const StatusChip = ({
    status,
    labelStyle,
    containerStyle,
    isOutline = false
}: IApprovalStatusChip) => {
    const config = () => {
        switch (status) {
            case 'process':
                return {
                    label: 'Đang xử lý',
                    color: Colors.processing,
                    backgroundColor: Colors.white
                }
            case 'pending':
                return {
                    label: 'Chờ duyệt',
                    color: Colors.pending,
                    backgroundColor: Colors.white
                }
            case 'approved':
                return {
                    label: 'Đã duyệt',
                    color: Colors.approved,
                    backgroundColor: Colors.white
                }
            case 'rejected':
                return {
                    label: 'Từ chối',
                    color: Colors.rejected,
                    backgroundColor: Colors.white
                }
            default:
                return {
                    label: 'Nháp',
                    color: '#ccc',
                    backgroundColor: Colors.black
                }
        }
    }
    return (
        <View style={[containerStyle, styles.container, {
            backgroundColor: isOutline
                ? config().backgroundColor
                : config().color,
        }, isOutline && {
            // borderWidth: 1,
            borderColor: config().color,
        }]}>
            <Text style={[labelStyle, styles.label, {
                color: isOutline
                    ? config().color
                    : Colors.white
            }]}>{config().label}</Text>

            {
                status === 'pending'
                && <Icon.Lucide
                    name='clock-3'
                    size={13}
                    color={isOutline ? config().color : Colors.white}
                />
            }
        </View>
    )
}

export default StatusChip;

const styles = StyleSheet.create({
    label: {
        fontSize: 12,
        fontWeight: '600',
        textAlign: 'center'
    },
    container: {
        paddingHorizontal: 6,
        paddingVertical: 4,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 4
    },
})