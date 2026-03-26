import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from '../atoms/Icon'
import Colors from '@/constants/Colors'

interface SearchbarFilterProps {
    placeholder?: string;
    onSearch?: (text: string) => void;
    onFilterPress?: () => void;
    onCreatePress?: () => void;
}

const SearchbarFilter = ({
    placeholder = 'Tìm kiếm',
    onSearch = () => { },
    onFilterPress,
    onCreatePress,
}: SearchbarFilterProps) => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        onSearch(searchText);
    }

    return (
        <View style={styles.searchSection}>
            <View style={styles.searchInputContainer}>
                <TouchableOpacity onPress={handleSearch} activeOpacity={0.8}>
                    <Icon.Lucide name="search" color={Colors.text} size={26} />
                </TouchableOpacity>
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor={Colors.placeholder}
                    style={styles.searchInput}
                    value={searchText}
                    onChangeText={setSearchText}
                    onSubmitEditing={handleSearch}
                    returnKeyType="search"
                />
                <TouchableOpacity
                    style={styles.filterButton}
                    activeOpacity={0.8}
                    onPress={onFilterPress}
                >
                    <Icon.Lucide name='funnel' size={26} />
                </TouchableOpacity>
            </View>
            {onCreatePress
                && <TouchableOpacity
                    style={styles.addButton}
                    activeOpacity={0.8}
                    onPress={onCreatePress}
                >
                    <Icon.Lucide name="plus" color={Colors.white} size={28} />
                </TouchableOpacity>
            }
        </View>
    )
}

export default SearchbarFilter;

const styles = StyleSheet.create({
    searchInputContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: Colors.white,
        borderRadius: 24,
        paddingHorizontal: 16,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.05,
        shadowRadius: 2.22,
        elevation: 1,
    },
    searchInput: {
        flex: 1,
        marginLeft: 8,
        color: Colors.text,
        paddingVertical: 16,
        fontSize: 14,
        height: '100%',
        marginRight: 4
    },
    filterButton: {
        padding: 8,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButton: {
        padding: 8,
        paddingHorizontal: 10,
        backgroundColor: Colors.primary,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2.22,
        elevation: 2,

    },
    searchSection: {
        flexDirection: 'row',
        marginBottom: 12,
        alignItems: 'center',
        gap: 8
    },
})