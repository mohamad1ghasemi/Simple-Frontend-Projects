import "./App.css";
import { useTranslation } from "react-i18next";
function App() {
  const { t, i18n } = useTranslation();
  const languages = [
    { code: "en", name: "English" },
    { code: "fa", name: "Persian" },
  ];
  return (
    <div className="App">
      <p>{t("welcome")}, This is test sentence...</p>
      {languages.map((language) => (
        <button
          onClick={() => i18n.changeLanguage(language.code)}
          key={language.code}
        >
          {language.name}
        </button>
      ))}
    </div>
  );
}

export default App;
