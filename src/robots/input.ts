import readline from "readline-sync";

interface Content {
  searchTerm: string;
  prefix: string;
}

export function robot() {
  const content = {} as Content;

  content.searchTerm = askAndReturnSearchTerm();
  content.prefix = askAndReturnPrefix();
  console.log(content);

  function askAndReturnSearchTerm(): string {
    return readline.question("Type a search term: ");
  }

  function askAndReturnPrefix(): string {
    const prefixes = ["What is", "Who is", "The history of"];
    const selectedPrefixIndex = readline.keyInSelect(
      prefixes,
      "Choose one Option: "
    );
    const selectedPrefixText = prefixes[selectedPrefixIndex];

    return selectedPrefixText;
  }
}
