import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput, LayoutAnimation, Platform, UIManager } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import PageHeader from '../../Components/PageHeader';
import TeacherItem, { Teacher } from '../../Components/TeacherItem';

import api from '../../services/api';

import styles from './styles';

function TeacherList (){

  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const t: Teacher = {
    avatar: 'https://avatars1.githubusercontent.com/u/42789344?s=460&u=3a1a13a37fcb2d167d1074fad580c8035891f43a&v=4',
    bio: 'eeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    cost: 20,
    id: 2,
    name: 'EEEEEEEEEEEEEEEEEEE',
    subject: "fefefefe",
    whatsapp: '343423242',
  }

  const [teachers, setTeachers] = useState([]);

  const [isFiltersVisible, setIsFilterVisible] = useState(false);

  const [weekDay, setWeekDay] = useState('');
  const [subject, setSubject] = useState('');
  const [time, setTime] = useState('');

  function animation(){
    LayoutAnimation.configureNext(
      LayoutAnimation.create(
        150,
        LayoutAnimation.Types.easeOut,
        LayoutAnimation.Properties.opacity,
      ));
  }

  function handleToggleIsFilterVisible() {
    //LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    animation();
    setIsFilterVisible(!isFiltersVisible);
  }

  async function handleFilterSubmit (){
    const params = {
      subject: subject,
        week_day: weekDay,
        time: time,
    }
    
    const response = await api.get('classes', {
      params: params,
    });
    
    animation();

    setIsFilterVisible(false);
    console.log(response.data);
    
    setTeachers(response.data);        
  }

  return (
    <View style={styles.container} >
      <PageHeader 
        title={'Proffys disponíveis'}
        headerRight={(
          <BorderlessButton onPress={handleToggleIsFilterVisible}>
            <Feather name={'filter'} size={25} color= {'#04D361'}/>
          </BorderlessButton>
        )}
      >          
        {isFiltersVisible && (
          <View style={styles.searchForm}>        
            <Text style={styles.label}>Matéria</Text>
            <TextInput 
              onChangeText={text => setSubject(text)}
              value={subject}
              placeholderTextColor="#c1bccc"
              style={styles.input}
              placeholder="Seleciona a matéria"
            />   
            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  onChangeText={text => setWeekDay(text)}
                  value={weekDay}
                  placeholderTextColor="#c1bccc"
                  style={styles.input}
                  placeholder="Selecione o dia"
                />
              </View>            
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  onChangeText={text => setTime(text)}
                  value={time}
                  placeholderTextColor="#c1bccc" 
                  style={styles.input}
                  placeholder="Selecione horário"
                />
              </View>
            </View>
            <RectButton 
              style={styles.submitButton}
              onPress={handleFilterSubmit}
            >
              <Text style={styles.submitButtonText}>
                Filtrar
              </Text>
            </RectButton>
          </View>                  
        )}  
      </PageHeader>
        <View style={styles.teacherList}>
          <ScrollView>        
            {teachers.map((teacher: Teacher) =>{
              <TeacherItem 
                key={teacher.id} 
                teacher={teacher}
              />
            })}
            <TeacherItem                           
              teacher={t} 
            />
            <TeacherItem                           
              teacher={t} 
            />
            <TeacherItem                           
              teacher={t} 
            />
            <TeacherItem                           
              teacher={t} 
            />
            <TeacherItem                           
              teacher={t} 
            />
            <TeacherItem                           
              teacher={t} 
            />
            <TeacherItem                           
              teacher={t} 
            />
            <TeacherItem                           
              teacher={t} 
            />
            <TeacherItem                           
              teacher={t} 
            />
            <TeacherItem                           
              teacher={t} 
            />
            <TeacherItem                           
              teacher={t} 
            />
            <TeacherItem                           
              teacher={t} 
            />
            <TeacherItem                           
              teacher={t} 
            />
            <TeacherItem                           
              teacher={t} 
            />
            <TeacherItem                           
              teacher={t} 
            />
            <TeacherItem                           
              teacher={t} 
            />
            <TeacherItem                           
              teacher={t} 
            />
            <TeacherItem                           
              teacher={t} 
            />
            <TeacherItem                           
              teacher={t} 
            />
            <TeacherItem                           
              teacher={t} 
            />      

        </ScrollView>      
        </View>      
    </View>
  );
}

export default TeacherList;