function domains_generator() {
  const www = "https://www.";
  const pronoun = ["the", "our", "your", "my"];
  const adj = ["great", "big", "small", "bad"];
  const noun = ["jogger", "racoon", "city", "center"];
  const dom = [".com", ".es", ".net", ".org"];
  pronoun.forEach(pron => {
    adj.forEach(adjetives => {
      noun.forEach(names => {
        dom.forEach(domains => {
          console.log(www + pron + adjetives + names + domains);
        });
      });
    });
  });
}
domains_generator();
