export default async function handler(req, res) {
  const response = await fetch("https://wscsidoharjo.page.gd/leaderboard.php");

  const text = await response.text(); // bisa juga json(), tapi server kamu kirim content-type html

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "*");

  res.status(200).send(text);
}
