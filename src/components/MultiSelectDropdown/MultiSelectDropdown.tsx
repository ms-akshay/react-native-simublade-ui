import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, ScrollView,  Image } from 'react-native';
import { styles } from './styles';
type ListItem = {
    id: number;
    Name: string;
    Choose: boolean;
};

const MultiSelector = ({
    dropDownList,
    onClosePopup,
    containerStyle,
    headerStyle,
    modalStyle,
    selectListTitleStyle,
    cardViewStyle,
    cardMainStyle,
    nameStyle,
    footerStyle,
}) => {
    const [savedList, setSavedList] = useState<{ id: number; Name: string; Choose: boolean }[]>([]);
    const [multiSelectPopup, setMultiSelectPopup] = useState(false);
    const onSelectItem = (item) => {
        let tempArray = [];
        tempArray = dropDownList?.map((Obj) => {
            if (item?.id === Obj?.id) {
                if (Obj.Choose) {
                    Obj.Choose = false;
                }
                else {
                    Obj.Choose = true;
                }
            }
            return Obj;
        });
        setSavedList(tempArray.filter((item: ListItem) => item.Choose));
    };
    const onChoose = () => {
        setSavedList(savedList);
        setMultiSelectPopup(false);
    };
    return (
        <View style={[styles.container, containerStyle]}>
            <ScrollView>
                <View style={[styles.header, headerStyle]}>
                    <TouchableOpacity onPress={() => setMultiSelectPopup(!multiSelectPopup)}>
                        <Image
                            style={styles.dropDownIcon}
                            source={{ uri: 'https://cdn-icons-png.flaticon.com/128/54/54470.png' }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.selectView} />
                {savedList?.length > 0 ?
                    <View style={{ marginTop: 5 }}>
                        <Text style={[styles.selectListTitle, selectListTitleStyle]}>Your List</Text>
                        <ScrollView>
                            <View style={[styles.cardView, cardViewStyle]}>
                                {savedList.map(item => (
                                    <View key={item.id} style={[styles.cardMain, cardMainStyle]}>
                                        <Text style={[styles.nameStyle, nameStyle]}>{item.Name}</Text>
                                    </View>
                                ))}
                            </View>
                        </ScrollView>
                    </View>
                    :
                    <Text style={styles.noItemSelected}>OOPS! You Dont Have Any Item Selected!</Text>
                }
                <Modal transparent={true} visible={multiSelectPopup}>
                    <View style={[styles.modalMain, modalStyle]}>
                        <View style={styles.modalView}>
                            <View style={styles.modalTitleView}>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.modalTitle}>Item I Choose</Text>
                                </View>
                                <TouchableOpacity onPress={onClosePopup} >
                                </TouchableOpacity>
                            </View>
                            {dropDownList.length > 0 ?
                                <ScrollView showsVerticalScrollIndicator={true} style={{ paddingHorizontal: 20 }}>
                                    {dropDownList.map(item => {
                                        return (
                                            <View key={item.id} style={styles.listItemContainer}>
                                                {item.Choose ?
                                                    <TouchableOpacity onPress={() => onSelectItem(item)} style={styles.checkBoxStyle}>
                                                        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/9675/9675140.png' }}
                                                            style={{
                                                                width: 15,
                                                                height: 15,
                                                                tintColor: '#000',
                                                            }}
                                                            resizeMode="contain" />

                                                    </TouchableOpacity> :
                                                    <TouchableOpacity onPress={() => onSelectItem(item)} style={styles.checkBoxStyle}>

                                                    </TouchableOpacity>}
                                                <Text onPress={() => onSelectItem(item)} style={styles.listTextStyle}>{item.Name}</Text>
                                            </View>
                                        )
                                    })}
                                </ScrollView>
                                :
                                <Text>No Item Found</Text>
                            }
                            <TouchableOpacity onPress={onChoose} style={styles.chooseButton}>
                                <Text style={styles.chooseText}>Choose</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </ScrollView>
            <View style={[styles.cardFooter, footerStyle]}>
            </View>
        </View>
    );
}

export default MultiSelector;
