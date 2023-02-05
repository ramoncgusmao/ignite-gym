import { ExcerciseCard } from "@components/ExcerciseCard";
import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import {HStack, VStack, FlatList, Heading, Text } from "native-base";
import { useState } from "react";


export function Home(){

    const [groupSelected, setGroupSelected] = useState('costas');
    const [groups, setGroups] = useState(['costas', 'biceps', 'triceps', 'ombro'])
    const [exercises, setExercises] = useState(['Puxada frontal', 'Remada curvada', 'Remada cavalinho', 'Supino Reto'])
    const navigation = useNavigation<AppNavigatorRoutesProps>();
    function handleOpenExcerciseDetails(){
        navigation.navigate('exercise');
    }
    return(
        <VStack flex={1}>
            <HomeHeader />

            <FlatList
                data={groups}
                keyExtractor={item => item}
                renderItem= {({item}) => (
                    <Group 
                    name={item} 
                    isActive={String(item).toLocaleUpperCase() == String(groupSelected).toLocaleUpperCase()}
                    onPress={() => setGroupSelected(item)}
                />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                _contentContainerStyle={{px: 8}}
                my={10}
                maxH={10}
                minH={10}
            />
           
           <VStack flex={1} px={8}>
                <HStack justifyContent="space-between" mb={5}>
                    <Heading color="gray.200" fontSize="md">
                        Exercícios
                    </Heading>
                    <Text color="gray.200">
                        4
                    </Text>
                </HStack>

    
                <FlatList 
                    data={exercises}
                    keyExtractor={item => item}
                    renderItem={({item}) => (
                        <ExcerciseCard name={item} 
                        onPress={handleOpenExcerciseDetails}/>
                    )}
                    showsVerticalScrollIndicator={false}
                    _contentContainerStyle={{paddingBottom:20}}
                />
            </VStack>
        </VStack>

    )
}