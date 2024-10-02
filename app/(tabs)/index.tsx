// -Criem um app (criar novo projeto) que consuma a API https://newsapi.org/docs/endpoints/everything 
// (vocês deverão criar uma conta no site da API) e exiba as uma listagem com as noticías retornadas 
// (utilizem o formato de cards para a listagem)

// -Exibir:imagem, data, titulo e descrição
// -Recomendação:olhem sites e apps de notícias para se inspirarem no design
// -Adicionem um input para busca de notícias por temas. 
//      O valor do input deverá ser enviado para a API (ver parametro de query q na documentação da API)


// Your API key is: 19b1d6c868204b0ba8d29b7337f193c2
// https://newsapi.org/v2/everything?q=Apple&from=2024-09-25&sortBy=popularity&apiKey=19b1d6c868204b0ba8d29b7337f193c2



import { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TextInput, ScrollView, Image } from 'react-native';

type Article = {
  urlToImage?: string;
  publishedAt?: string;
  title?: string;
  description?: string;
  url?: string;
}

export default function Index() {
  const [news, setNews] = useState<Article[]>([])
  const [input, setInput] = useState('')
  

  useEffect(() => {
    const fetchNews = async () => {
      const url = `https://newsapi.org/v2/everything?q=${input}&from=2024-08-25&sortBy=popularity&apiKey=19b1d6c868204b0ba8d29b7337f193c2`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNews();
  }, [input]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.inputTextContainer}>
        <TextInput
          placeholder="pesquisar"
          value={input}
          onChangeText={setInput}
          style={styles.textSearch}
        />
      </View>


      <ScrollView>
        {news?.length > 0 ? (
          news.map((article, index) => (

            <View key={index} style={styles.card}>
              {article.urlToImage && (
                <Image source={{ uri: article.urlToImage }} style={styles.image} />
              )}
              <Text style={styles.textDate}>
                {article.publishedAt ? new Date(article.publishedAt).toLocaleDateString() : "Data não disponível"}
              </Text>
              <Text style={styles.textTitle}>
                {article.title}
              </Text>
              <Text style={styles.textDescription}>
                {article.description}
              </Text>
            </View>
          ))
        ) : (
          <Text style={styles.textSearch}>Nenhuma notícia encontrada.</Text> // Mensagem se não houver resultados
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  inputTextContainer: {
    padding: 8,
    width: '90%',
    borderWidth: 1,
    borderColor: '#D3B4D9',
    marginBottom: 8,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 10,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  textSearch: {
    color: 'yellow',
  },
  textDate: {
    color: 'blue',
    marginBottom: 4,
  },
  textTitle: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: 'blue',
  },
  textDescription: {
    color: 'red',
  },
});







// import { useEffect, useState } from 'react';
// import { StyleSheet, SafeAreaView, View, Text, TextInput, ScrollView, Image } from 'react-native';


// type Article = {
//   urlToImage?: string;
//   publishedAt?: Date;
//   title?: string;
//   description?: string;
//   url?: string;
// }

// export default function Index() {

//   const [news, setNews] = useState<Article[]>([])
//   const [searchTerm, setSearchTerm] = useState('')

//   useEffect(() => {
//     const fetchNews = async () => {
//       const url = `https://newsapi.org/v2/everything?q=${searchTerm}&from=2024-09-25&sortBy=popularity&apiKey=19b1d6c868204b0ba8d29b7337f193c2`;

//       try {
//         const response = await fetch(url);
//         const data = await response.json();
//         setNews(data.articles);
//       } catch (error) {
//         console.error(error);
//       } finally {
//       }
//     };
//     fetchNews();
//   }, [searchTerm]);

//   return (
//     <SafeAreaView style={styles.safeArea}>

//       <View style={styles.inputTextContainter}>
//         <TextInput
//           placeholder="pesquisar"
//           value={searchTerm}
//           onChangeText={setSearchTerm}
//           style={styles.textSearch}
//         />
//       </View>

//       <ScrollView>
//         {news?.map((article, index) => (
//           <View key={index}>
//             {article.url && (
//               <Image source={{ uri: article.urlToImage }} style={styles.imageContainer} />
//             )}
//             <Text style={styles.textDate}>
//               {article.publishedAt ? new Date(article.publishedAt).toLocaleDateString() : "Data não disponível"}
//             </Text>
//             <Text style={styles.textTitle}>
//               {article.title}
//             </Text>
//             <Text style={styles.textDescription}>
//               {article.description}
//             </Text>
//           </View>
//         ))}
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//   },

//   inputTextContainter: {
//     padding: 8,
//     width: '90%',
//     borderWidth: 1,
//     borderColor: '#D3B4D9',
//     marginBottom: 8,
//   },
//   imageContainer: {
//     borderColor: 'white',
//     alignItems: 'center',
//     marginBottom: 8,
//     gap: 8,
//   },
//   textSearch: {
//     color: 'white',
//   },
//   textDate: {
//     color: 'white',
//   },
//   textTitle: {
//     color: 'white',
//   },
//   textDescription: {
//     color: 'white',
//   },
// });
