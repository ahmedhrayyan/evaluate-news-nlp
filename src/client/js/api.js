export async function analyze(sentence) {
  const res = await fetch("/analyze", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sentence,
    }),
  });
  const data = await res.json();
  if (!res.ok) throw data;
  return data;
}
