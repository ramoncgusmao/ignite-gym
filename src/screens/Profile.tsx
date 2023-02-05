import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import {  Center, ScrollView, VStack, Skeleton, Text, Heading, useToast } from "native-base";
import { useState } from "react";
import { Alert, TouchableOpacity } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
const  PHOTO_SIZE = 33;

export function Profile(){
    const [photoIsLoading, setPhotoIsLoading] = useState(false);
    const [userPhoto, setUserPhoto] = useState('https://github.com/ramoncgusmao.png');
    const toast = useToast();
    async function handleUserPhotoSelect(){
        setPhotoIsLoading(true);
        try{
           
            const photoSelected = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.7,
                aspect: [4,4],
                allowsEditing: true
            });
    
            if(photoSelected.canceled){
                return;
            }
            if(photoSelected.assets[0].uri){
                const photoInfo = await FileSystem.getInfoAsync(photoSelected.assets[0].uri);

                if(photoInfo.size && (photoInfo.size/ 1024 /1024) > 5){
                    return toast.show({
                        title:"essa imagem é muito grande, escola uma menor",
                        placement: 'top',
                        bgColor: 'red.500'
                    });
                    
                }
                setUserPhoto(photoSelected.assets[0].uri);
            }
        }catch(error){
            console.log(error);
        }finally{
            setPhotoIsLoading(false);
        }
      
    }
    return(
        <VStack flex={1}>
            <ScreenHeader title="Perfil"/>
            <ScrollView>
                <Center mt={6} px={10}>
                    {photoIsLoading ?
                        <Skeleton 
                        w={PHOTO_SIZE} 
                        h={PHOTO_SIZE}
                        startColor="gray.500"
                        endColor="gray.300"
                        rounded="full" />
                        :
                    <UserPhoto 
                        source={{ uri: userPhoto}}
                        size={PHOTO_SIZE}  
                        alt="foto do usuario"
                        
                    />}
                    <TouchableOpacity onPress={handleUserPhotoSelect}>
                        <Text color="green.500" fontWeight="bold" fontSize="md" mt={2} mb={8}>
                            Alterar Foto
                        </Text>
                        
                </TouchableOpacity>
                <Input 
                    bg="gray.600"
                    placeholder="Nome"
                />

                <Input 
                    bg="gray.600"
                    placeholder="E-mail"
                    isDisabled
                />
                </Center>
                <VStack px={10} mt={12} mb={9}>
                    <Heading color="gray.200" fontSize="md" mb={2}>
                        Alterar Senha
                    </Heading>
                    <Input 
                        bg="gray.600"
                        placeholder="Senha antiga"
                        secureTextEntry
                    />
                    <Input 
                        bg="gray.600"
                        placeholder="Nova senha"
                        secureTextEntry
                    />
                    <Input 
                        bg="gray.600"
                        placeholder="Confirmar Nova senha"
                        secureTextEntry
                    />
                    <Button 
                        title="Atualizar"
                        mt={4}
                    />
                </VStack>
            </ScrollView>
        </VStack>
    )
}