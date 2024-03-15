import React, { useRef, useState } from "react";
import { Dimensions, ImageBackground, SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";
import { styles } from "./styles";
import { AppIntroSliderProps } from "./AppIntroSliderProps";
import Button from "../Button/Button"

const AppIntroSlider = ({
    sliderData,
    containerStyle,
    bgImageStyle,
    headerStyle,
    descriptionStyle,
    buttonStyle,
    isButton,
    titlePosition = "top", // Default position,
    paginationDots,
    noTitle,
    scrollEnabled,

}: AppIntroSliderProps) => {
    const [currentPage, setCurrentPage] = useState(0);
    const { width, height } = Dimensions.get('window');
    const scrollViewRef = useRef<ScrollView>(null);


    const handleScroll = (event) => {
        const { x } = event.nativeEvent.contentOffset;
        const pageIndex = Math.floor(x / width);
        setCurrentPage(pageIndex);
    };

    const scrollToNextPage = () => {
        if (currentPage < sliderData.length - 1 && scrollViewRef.current) {
            const nextPage = currentPage + 1;
            scrollViewRef.current.scrollTo({ x: nextPage * width, animated: true });
            setCurrentPage(nextPage);
        }
    };

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={[styles.container, containerStyle]}>
                <ScrollView
                    ref={scrollViewRef}
                    style={{ flex: 1 }}
                    horizontal={true}
                    scrollEventThrottle={16}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onScroll={handleScroll}
                    scrollEnabled={scrollEnabled}
                >
                    {sliderData.map((slide, index) => (
                        <View style={{ width, height }} key={index}>
                            <ImageBackground resizeMode='cover' source={slide.image} style={[styles.bgImageStyle, bgImageStyle]} >
                                {!noTitle && <View style={[titlePosition == 'bottom' ? styles.textWrapperBottom : styles.textWrapperTop]}>
                                    <Text style={[styles.headerStyle, headerStyle]}>{slide.title}</Text>
                                    <Text style={[styles.descriptionStyle, descriptionStyle]}>{slide.description}</Text>
                                </View>}
                                {isButton && <Button textStyle={styles.buttonTextStyle} containerStyle={[titlePosition === 'top' ? styles.buttonStyleBottom : styles.buttonStyleTop, buttonStyle]} title="Lets get started" onPress={scrollToNextPage} />}
                            </ImageBackground>
                        </View>
                    ))}
                </ScrollView>
                <View style={[titlePosition === 'top' ? styles.paginationWrapperBottom : styles.paginationWrapperTop]}>
                    {sliderData.map((_, index) => (
                        <View style={[styles.paginationDots, paginationDots, { opacity: currentPage === index ? 1 : 0.2, width: currentPage === index ? 35 : 15 }]} key={index} />
                    ))}
                </View>
            </SafeAreaView>
        </>
    );
};

export default AppIntroSlider;
