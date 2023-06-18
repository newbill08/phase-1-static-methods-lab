class Formatter {
  //add static methods here
  static capitalize(string){
    let firstLetter = string.charAt(0)
    let firstLetterCapitalize = firstLetter.toUpperCase()

    let remainingLetters = string.slice(1);

   const capitalizedWord = firstLetterCapitalize + remainingLetters

  return capitalizedWord
  }

  static sanitize(string){
   return string.replace(/[^a-zA-Z0-9- ']/g , "")
  }
  static titleize(string){
    const excludedWords =['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const words = string.split(' ');

    const titleizedWords = words.map((word, index) => {
      if (index === 0 || !excludedWords.includes(word)) {
        return Formatter.capitalize(word);
      } else {
        return word;
      }
    });

    return titleizedWords.join(' ');
  }
}