import React from "react";
import { useTranslation } from "react-i18next";

export function LanguageSwitcher() {
  return <img className="w-6" style={{filter: "invert(1)"}} src="/static/images/icons/globe.svg"/>;
  /*
  const { i18n } = useTranslation();

  if (i18n.language == "en") return "English";
  if (i18n.language == "br") return "Português BR";

  else return "English";
  */
}

export function LanguageToggle() {

  const { i18n } = useTranslation();

  if (i18n.language == "en") return "br";
  if (i18n.language == "br") return "en";

  else return "br";
}

/*
export function LanguageEmoji()
{
  const { i18n } = useTranslation();

  if (i18n.language == "en") return ( <div>&#x1F1EC;&#x1F1E7;</div> );
  if (i18n.language == "br") return ( <div>&#x1F1E7;&#x1F1F7;</div> );

  else return <div>&#x1F1E7;&#x1F1F7;</div>;
}

export function LanguageToggleWithEmoji()
{
  LanguageToggle();
  return LanguageEmoji();
}

<li>
  <button onClick={ LanguageToggle }>{ LanguageSwitcher() }</button>
</li>
*/

export default LanguageSwitcher;
