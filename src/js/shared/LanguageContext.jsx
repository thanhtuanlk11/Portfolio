import { createContext, useContext, useState, useEffect } from 'react'
import vi from '../../locales/vi.json'
import en from '../../locales/en.json'

const translations = { vi, en }

const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('language')
    return saved || 'vi'
  })

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  const t = (path) => {
    const keys = path.split('.')
    let value = translations[language]
    
    for (const key of keys) {
      value = value?.[key]
      if (value === undefined) {
        console.warn(`Translation missing for: ${path}`)
        return path
      }
    }
    
    return value
  }

  const changeLanguage = (lang) => {
    setLanguage(lang)
  }

  return (
    <LanguageContext.Provider value={{ t, language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}

