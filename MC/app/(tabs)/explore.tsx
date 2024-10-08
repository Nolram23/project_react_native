import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, Platform, StyleSheet } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import CustomSearchBar from '@/components/CustomSearchBar';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useEffect, useState } from 'react';

export default function TabTwoScreen() {

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  
  useEffect(() => {
    fetchData("https://randomuser.me/api/?results=20");
  }, []);

const handleSearch = (query: any) => {
  searchFilterFunction(query);
};

const searchFilterFunction = (text) => {
  if (text) {
    // Función para normalizar y eliminar tildes y caracteres especiales
    const normalizeText = (str) => 
      str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();

    const textData = normalizeText(text); // Normalizar texto de búsqueda

    const newData = data.filter(item => {
      // Concatenar first name y last name y luego normalizar
      const fullName = `${item?.name?.first || ''} ${item?.name?.last || ''}`.trim();
      const normalizedFullName = normalizeText(fullName);

      // Normalizar el ID también
      const itemId = item?.id ? normalizeText(item.id.toString()) : '';

      // Verificar si el texto de búsqueda aparece en el nombre completo o en el ID
      return (
        normalizedFullName.indexOf(textData) > -1 ||
        itemId.indexOf(textData) > -1
      );
    });

    setFilteredData(newData); // Actualiza los datos filtrados
  } else {
    setFilteredData(data); // Si no hay texto, muestra todos los datos
  }
};

const fetchData = async (url: string | URL | Request) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
      setFilteredData(json.results);
      console.log(json.results);
      
    }catch(error){
      console.log(error);
      
    }
};
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}
    
      >
      <ThemedView style={styles.textMedicine}>
        <ThemedText type="title">Friends</ThemedText>
        <CustomSearchBar placeholder={'Search...'} onSearch={handleSearch} />
      </ThemedView>
      <ThemedView>
        {
          filteredData.map((item, index) => {
            return (
              <ThemedView key={index} style= {styles.itemContainer} >
                <Image
                  source={{uri: item.picture.large}}
                  style = {styles.image}/>
                <ThemedView>
                  <ThemedText style={styles.textName}>{item.name.first} {item.name.last}</ThemedText>
                  <ThemedText style={styles.textUsername}>{item.login.username}</ThemedText>
                </ThemedView>
              </ThemedView>
            )
          })
        }
      </ThemedView>
      <ThemedText>This app includes example code to help you get started.</ThemedText>
      <Collapsible title="Animations">
        <ThemedText>
          This template includes an example of an animated component. The{' '}
          <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> component uses
          the powerful <ThemedText type="defaultSemiBold">react-native-reanimated</ThemedText> library
          to create a waving hand animation.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
        {Platform.select({
          ios: (
            <ThemedText>
              The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
              component provides a parallax effect for the header image.
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  textMedicine: {
    fontSize: 20,
    textAlign: 'left',
    marginLeft: 10,
    fontWeight: 'bold',
    marginTop: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  }
,
textName: {
  fontSize: 17,
  marginLeft: 10,
  fontWeight: '600',
},
textUsername: {
  fontSize: 14,
  marginLeft: 10,
  color: 'grey',
},
});
