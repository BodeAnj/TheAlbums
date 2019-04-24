import React, {Component} from 'react';
import {Text , View , Image, StyleSheet, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button'


const AlbumDetail = ({album}) => {
    const { title, artist, thumbnail_image, image, url} = album;

    return (
        <Card>
            <CardSection>
                <View style = {Style.ImageView}>
                    <Image 
                    style = {Style.Image}
                    source = {{uri : thumbnail_image}} />
                </View>

                <View >
                    <Text style = {Style.detailView}>
                        {title}
                    </Text>
                    <Text>
                        {artist}
                    </Text>

                </View>
            </CardSection>

            <CardSection >

                <Image 
                style = {Style.dynamicView}
                source ={{ uri : image}}/>
            </CardSection>

            <CardSection>
                <Button 
                onPress= {() => Linking.openURL(url)}
                />
            </CardSection>
        </Card>
    );

};

const Style = StyleSheet.create({
    Image:{
        height:50,
        width: 50,
    },

    ImageView:{
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:10,

    },

    detailView:{
        fontSize:18,

    },

    dynamicView:{
        height:300,
        flex:1,
        width: null,
    }

})

export default AlbumDetail;