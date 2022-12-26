import React, { useEffect } from 'react'
import ArticleList from '../components/Articles'
import Navbar from '../components/Navbar'
import {useState, createContext} from 'react'


export const HomeContext = createContext()

const Home = ()  => {
  const ARTICLES = [
    {
      id: 1,
      title: 'Article 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a',
      tags: ['tag1', 'tag2', 'tag3']
    },
    {
      id: 2,
      title: 'EArticle 2',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a',
      tags: ['tag1', 'tag2', 'tag3']
    },
    {
      id: 3,
      title: 'Article 3',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a',
      tags: ['tag1', 'tag2']
    }
  ]
  const [articlesList, setArticlesList] = useState(ARTICLES);

  return (
    <HomeContext.Provider value={{articlesList, setArticlesList, ARTICLES}}>
        <Navbar />
        <div className='flex flex-row justify-center'>
          <ArticleList />  
        </div>  
    </HomeContext.Provider>
  )
}

export default Home;