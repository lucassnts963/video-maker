import readline from "readline-sync";

interface Content {
  searchTerm: string;
}

export function robot() {
  const content = {} as Content;

  content.searchTerm = askAndReturnSearchTerm();
  console.log(content);

  function askAndReturnSearchTerm(): string {
    return readline.question("Type a search term: ");
  }
}
