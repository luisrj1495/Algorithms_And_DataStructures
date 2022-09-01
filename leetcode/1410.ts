function entityParser(text: string): string {
  let currentEntity: string[] = [];
  const textArr: string[] = [];
  const entities = {
    "&quot;": '"',
    "&apos;": "'",
    "&amp;": "&",
    "&gt;": ">",
    "&lt;": "<",
    "&frasl;": "/",
  };

  const setEntity = () => {
    const entity = currentEntity.join("");
    textArr.push(entities[entity] || entity);
    currentEntity.length = 0;
  };

  for (let letter of text) {
    if (letter === "&" || currentEntity.length || letter === ";") {
      if (letter === "&" && currentEntity.length ) setEntity();

      currentEntity.push(letter);

      if (letter === ";") setEntity();

      continue;
    }

    textArr.push(letter);
  }

  return textArr.join("");
}


const htmlEntities: Record<string, string> = {
 "&amp;": "&",
 "&apos;": "'",
 "&frasl;": "/",
 "&gt;": ">",
 "&lt;": "<",
 "&quot;": '"',
};

function entityParser2(input: string): string {
 const pattern = new RegExp(Object.keys(htmlEntities).join("|"), "g");
 return input.replace(pattern, (match) => htmlEntities[match]);
}