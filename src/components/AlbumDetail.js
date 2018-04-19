import React from 'react';
import { Text ,Image, View ,Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ( {album} ) => {
    const {thumbnail_image, title , artist , image ,url } = album;
    const { 
        thumbnailStyle , 
        textContainer, 
        thumbnailContainerStyle, 
        headerTextStyle,
        imageStyle
    } = styles;

    return(
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image 
                    source={{uri:thumbnail_image}} 
                    style={thumbnailStyle}
                    />                    
                </View>

                <View style={textContainer}>
                    <Text style={headerTextStyle}>{title}</Text> 
                    <Text>{artist}</Text>
                </View>
                
            </CardSection>

            <CardSection>
                <Image 
                source={{uri:image}}
                style={imageStyle}
                />
            </CardSection>

            <CardSection>
                {/* this onPress is not same as onPress function */}
                <Button onPress = { ()=> Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardSection>
            
        </Card>
    );
};

const styles = {
    textContainer:{
        flexDirection:'column',
        justifyContent:'space-around',
    },

    headerTextStyle:{
        fontSize:18,
        color: '#000'
    },

    thumbnailStyle:{
        height:50,
        width:50
    },
    thumbnailContainerStyle:{
        justifyContent:'center',
        alignItems:'center',
        marginRight: 10,
        marginLeft: 10
    },
    imageStyle:{
        height: 300,
        flex: 1,
        width: null
    }
}

export default AlbumDetail;