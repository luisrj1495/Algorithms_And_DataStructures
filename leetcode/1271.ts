function toHexspeak(num: string): string {
  const allowed = new Set("ABCDEFIO");
  const hexspeak = Number(num).toString(16).toUpperCase().split("");
  const tranformers = { "0": "O", 1: "I" };

  for (let i = 0; i < hexspeak.length; i++) {
    const value = tranformers[hexspeak[i]] || hexspeak[i];
    if (!allowed.has(value)) return "ERROR";
    if (value !== hexspeak[i]) hexspeak[i] = value;
  }

  return hexspeak.join("");
}
