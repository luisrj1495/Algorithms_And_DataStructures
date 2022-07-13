function numUniqueEmails(emails: string[]): number {
  const emailsSet = new Set<string>();

  for (let email of emails) {
    const [name, domain] = email.split("@");
    const [newName] = name.replace(/\./g, "").split("+");
    const newEmail = `${newName}@${domain}`;
    console.log(newEmail);
    emailsSet.add(newEmail);
  }

  return emailsSet.size;
}
